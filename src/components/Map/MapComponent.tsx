import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MapModeFilter, PointOfInterest } from '../../types';
import { QuartermaesterTileLayer, type TileStyle } from './QuartermaesterTileLayer';
import { createCustomMarkerIcon } from './markerIcons';
import { BookOpen, Compass, Layers, Maximize2, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';

interface MapComponentProps {
  points: PointOfInterest[];
  selectedPoint: PointOfInterest | null;
  onSelectPoint: (point: PointOfInterest | null) => void;
  onRequestAddPoint?: (coords: [number, number]) => void;
  activeMode: MapModeFilter;
  onChangeMode: (mode: MapModeFilter) => void;
}

export const MapComponent: React.FC<MapComponentProps> = ({
  points,
  selectedPoint,
  onSelectPoint,
  onRequestAddPoint,
  activeMode,
  onChangeMode
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<QuartermaesterTileLayer | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const onRequestAddPointRef = useRef(onRequestAddPoint);
  onRequestAddPointRef.current = onRequestAddPoint;
  // Par défaut sur 'nat' (Carte Naturelle vierge) pour les cartes Lore et AGOT+
  const [tileStyle, setTileStyle] = useState<TileStyle>('nat');
  const [currentCoords, setCurrentCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [currentZoom, setCurrentZoom] = useState<number>(3);

  // Initialisation de la carte Leaflet
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Bounds de la carte de Westeros selon Quartermaester (Spherical Mercator)
    const southWest = L.latLng(-85, -180);
    const northEast = L.latLng(85, 180);
    const bounds = L.latLngBounds(southWest, northEast);

    // Initialisation
    const map = L.map(mapContainerRef.current, {
      center: [15, -115], // Centré sur Westeros
      zoom: 3,
      minZoom: 1,
      maxZoom: 6,
      maxBounds: bounds,
      maxBoundsViscosity: 0.9,
      zoomControl: false, // On utilise nos boutons personnalisés
      attributionControl: true
    });

    mapInstanceRef.current = map;

    // TileLayer Quartermaester
    const quartermaesterLayer = new QuartermaesterTileLayer(tileStyle);
    quartermaesterLayer.addTo(map);
    tileLayerRef.current = quartermaesterLayer;

    // Event listeners
    map.on('mousemove', (e: L.LeafletMouseEvent) => {
      setCurrentCoords({
        lat: parseFloat(e.latlng.lat.toFixed(3)),
        lng: parseFloat(e.latlng.lng.toFixed(3))
      });
    });

    map.on('zoomend', () => {
      setCurrentZoom(map.getZoom());
    });

    // Clic en dehors des marqueurs désélectionne le point
    map.on('click', () => {
      // Si on clique sur le fond de carte
      // Note: les marqueurs interceptent leur propre clic
    });

    // Clic droit sur la carte pour proposer d'ajouter un lieu à ces coordonnées
    map.on('contextmenu', (e: L.LeafletMouseEvent) => {
      const lat = parseFloat(e.latlng.lat.toFixed(3));
      const lng = parseFloat(e.latlng.lng.toFixed(3));
      if (onRequestAddPointRef.current) {
        onRequestAddPointRef.current([lat, lng]);
      }
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Changement de style de tuiles (avec légendes vs naturel)
  useEffect(() => {
    if (tileLayerRef.current) {
      tileLayerRef.current.setStyle(tileStyle);
    }
  }, [tileStyle]);

  // Synchronisation des marqueurs sur la carte
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Supprimer les anciens marqueurs qui ne sont plus dans la liste
    const currentPointIds = new Set(points.map((p) => p.id));
    markersRef.current.forEach((marker, id) => {
      if (!currentPointIds.has(id)) {
        marker.remove();
        markersRef.current.delete(id);
      }
    });

    // Ajouter ou mettre à jour les marqueurs
    points.forEach((point) => {
      const isSelected = selectedPoint?.id === point.id;
      const existingMarker = markersRef.current.get(point.id);

      const pointSource = point.source || 'lore';
      if (existingMarker) {
        // Mettre à jour l'icône (pour état sélectionné / non-sélectionné)
        existingMarker.setIcon(createCustomMarkerIcon(point.category, isSelected, point.name, pointSource));
        existingMarker.setZIndexOffset(isSelected ? 1000 : 0);
      } else {
        // Créer un nouveau marqueur
        const icon = createCustomMarkerIcon(point.category, isSelected, point.name, pointSource);
        const marker = L.marker(point.coords, {
          icon,
          riseOnHover: true
        });

        // Clic sur marqueur
        marker.on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          onSelectPoint(point);

          const targetZoom = Math.max(map.getZoom(), 4);
          map.flyTo(point.coords, targetZoom, {
            duration: 1.2,
            easeLinearity: 0.25
          });
        });

        // Info-bulle au survol
        const sourceBadgeHtml = pointSource === 'agot_plus'
          ? '<span class="got-tooltip-source-agot">AGOT+</span> • '
          : '';
        marker.bindTooltip(`
          <div class="got-tooltip-content">
            <strong>${point.name}</strong>
            <span class="got-tooltip-category">${sourceBadgeHtml}${point.category.toUpperCase()} • ${point.region}</span>
          </div>
        `, {
          direction: 'top',
          offset: [0, -32],
          className: 'got-leaflet-tooltip'
        });

        marker.addTo(map);
        markersRef.current.set(point.id, marker);
      }
    });
  }, [points, selectedPoint, onSelectPoint]);

  // Réagir quand selectedPoint change depuis la Sidebar (ex: clic dans la liste)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !selectedPoint) return;

    const targetZoom = Math.max(map.getZoom(), 4);
    map.flyTo(selectedPoint.coords, targetZoom, {
      duration: 1.2,
      easeLinearity: 0.25
    });
  }, [selectedPoint]);

  // Actions de contrôle
  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleResetView = () => {
    mapInstanceRef.current?.flyTo([15, -115], 3, { duration: 1 });
    onSelectPoint(null);
  };

  const handleQuickJump = (coords: [number, number], zoom: number) => {
    mapInstanceRef.current?.flyTo(coords, zoom, { duration: 1.2 });
  };

  return (
    <div className="map-wrapper">
      {/* Conteneur Leaflet */}
      <div ref={mapContainerRef} className="map-canvas" id="map_canvas" />

      {/* Barre d'outils flottante supérieure droite */}
      <div className="map-controls-panel">
        <div className="control-group zoom-group">
          <button
            className="map-btn"
            onClick={handleZoomIn}
            title="Zoom avant"
            aria-label="Zoom avant"
          >
            <ZoomIn size={18} />
          </button>
          <button
            className="map-btn"
            onClick={handleZoomOut}
            title="Zoom arrière"
            aria-label="Zoom arrière"
          >
            <ZoomOut size={18} />
          </button>
          <button
            className="map-btn"
            onClick={handleResetView}
            title="Vue d'ensemble de Westeros"
            aria-label="Vue d'ensemble"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Sélecteur de carte : Carte Lore (Naturelle) vs Carte AGOT+ (Naturelle) vs Légendes d'origine */}
        <div className="control-group map-universe-group">
          <button
            type="button"
            className={`map-btn universe-btn ${activeMode === 'lore' && tileStyle === 'nat' ? 'active lore-active' : ''}`}
            onClick={() => {
              setTileStyle('nat');
              onChangeMode('lore');
            }}
            title="Carte Lore : Fond naturel avec les bookmarks certifiés de Westeros"
          >
            <BookOpen size={14} />
            <span>Carte Lore</span>
          </button>
          <button
            type="button"
            className={`map-btn universe-btn ${activeMode === 'agot_plus' && tileStyle === 'nat' ? 'active agot-active' : ''}`}
            onClick={() => {
              setTileStyle('nat');
              onChangeMode('agot_plus');
            }}
            title="Carte AGOT+ : Fond naturel avec les bookmarks étendus et personnalisés"
          >
            <Sparkles size={14} />
            <span>Carte AGOT+</span>
          </button>
          <button
            type="button"
            className={`map-btn universe-btn ${tileStyle === 'fsm' ? 'active fsm-active' : ''}`}
            onClick={() => setTileStyle('fsm')}
            title="Carte d'origine manuscrite avec légendes Quartermaester"
          >
            <Layers size={14} />
            <span>Légendes</span>
          </button>
        </div>

        {/* Accès rapide aux régions clés */}
        <div className="quick-regions-dropdown">
          <div className="dropdown-label">
            <Compass size={14} />
            <span>Sauter vers :</span>
          </div>
          <div className="region-pills">
            <button
              onClick={() => handleQuickJump([76.26, -106.7], 4)}
              className="quick-region-pill"
            >
              Le Mur
            </button>
            <button
              onClick={() => handleQuickJump([66.24, -123.3], 4)}
              className="quick-region-pill"
            >
              Winterfell
            </button>
            <button
              onClick={() => handleQuickJump([1.31, -105.99], 4)}
              className="quick-region-pill"
            >
              Port-Réal
            </button>
            <button
              onClick={() => handleQuickJump([-43.58, -84.56], 4)}
              className="quick-region-pill"
            >
              Dorne
            </button>
            <button
              onClick={() => handleQuickJump([6.31, -151.36], 4)}
              className="quick-region-pill"
            >
              Castral Roc
            </button>
          </div>
        </div>
      </div>

      {/* Indicateur de coordonnées & zoom en bas */}
      <div className="map-coordinates-badge">
        <span className="coord-item">
          Zoom: <strong>{currentZoom}</strong>
        </span>
        {currentCoords && (
          <>
            <span className="coord-divider">•</span>
            <span className="coord-item">
              Lat: <strong>{currentCoords.lat}°</strong>
            </span>
            <span className="coord-item">
              Lng: <strong>{currentCoords.lng}°</strong>
            </span>
            {onRequestAddPoint && (
              <>
                <span className="coord-divider">•</span>
                <button
                  type="button"
                  className="quick-add-coord-btn"
                  onClick={() => onRequestAddPoint([currentCoords.lat, currentCoords.lng])}
                  title="Ajouter un lieu à ces coordonnées (ou clic droit sur la carte)"
                >
                  + Nouveau lieu ici
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
