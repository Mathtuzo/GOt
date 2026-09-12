import { useState, useMemo, useEffect, useCallback } from 'react';
import { POINTS_OF_INTEREST } from './data/points';
import { AGOT_PLUS_INITIAL_POINTS } from './data/agotPlusPoints';
import type { CategoryType, MapModeFilter, PointOfInterest } from './types';
import { MapComponent } from './components/Map/MapComponent';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AddPointModal } from './components/Modal/AddPointModal';
import './index.css';

const STORAGE_KEY = 'got_custom_points';

export function App() {
  const [activeMode, setActiveMode] = useState<MapModeFilter>('lore');
  const [selectedPoint, setSelectedPoint] = useState<PointOfInterest | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  // État du modal d'ajout de point
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [modalCoords, setModalCoords] = useState<[number, number] | null>(null);

  // Points personnalisés stockés dans le navigateur
  const [customPoints, setCustomPoints] = useState<PointOfInterest[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sauvegarde automatique des points personnalisés
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customPoints));
    } catch (err) {
      console.error('Erreur de sauvegarde locale :', err);
    }
  }, [customPoints]);

  // Tous les points combinés avec leurs sources
  const allAvailablePoints = useMemo(() => {
    const loreList: PointOfInterest[] = POINTS_OF_INTEREST.map((p) => ({
      ...p,
      source: 'lore' as const
    }));

    const agotList: PointOfInterest[] = AGOT_PLUS_INITIAL_POINTS.map((p) => ({
      ...p,
      source: 'agot_plus' as const
    }));

    return [...loreList, ...agotList, ...customPoints];
  }, [customPoints]);

  // Nombre total de points par univers
  const loreCount = useMemo(() => {
    return allAvailablePoints.filter((p) => (p.source || 'lore') === 'lore').length;
  }, [allAvailablePoints]);

  const agotCount = useMemo(() => {
    return allAvailablePoints.filter((p) => p.source === 'agot_plus').length;
  }, [allAvailablePoints]);

  // Filtrage dynamique selon l'univers actif, la catégorie, la région et la recherche
  const filteredPoints = useMemo(() => {
    return allAvailablePoints.filter((point) => {
      const pointSource = point.source || 'lore';

      // Filtre univers de carte (Lore vs AGOT+)
      if (activeMode !== 'all' && pointSource !== activeMode) {
        return false;
      }

      // Filtre catégorie
      if (selectedCategory !== 'all' && point.category !== selectedCategory) {
        return false;
      }

      // Filtre région
      if (selectedRegion !== 'all' && point.region !== selectedRegion) {
        return false;
      }

      // Filtre textuel (insensible à la casse et aux accents)
      if (searchQuery.trim() !== '') {
        const normalize = (str: string) =>
          str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

        const queryNorm = normalize(searchQuery);
        const nameNorm = normalize(point.name);
        const houseNorm = normalize(point.house || '');
        const regionNorm = normalize(point.region);
        const descNorm = normalize(point.description);

        const matches =
          nameNorm.includes(queryNorm) ||
          houseNorm.includes(queryNorm) ||
          regionNorm.includes(queryNorm) ||
          descNorm.includes(queryNorm);

        if (!matches) return false;
      }

      return true;
    });
  }, [allAvailablePoints, activeMode, searchQuery, selectedCategory, selectedRegion]);

  // Support du hash dans l'URL (#@winterfell)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#@')) {
        const idOrName = hash.substring(2).toLowerCase();
        const found = allAvailablePoints.find(
          (p) =>
            p.id.toLowerCase() === idOrName ||
            p.name.toLowerCase().replace(/[^a-z0-9]/g, '') === idOrName.replace(/[^a-z0-9]/g, '')
        );
        if (found) {
          setSelectedPoint(found);
          // Si le point trouvé est d'un autre mode, basculer pour qu'il soit visible
          if (activeMode !== 'all' && (found.source || 'lore') !== activeMode) {
            setActiveMode('all');
          }
          setIsSidebarCollapsed(false);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [allAvailablePoints, activeMode]);

  const handleSelectPoint = useCallback((point: PointOfInterest | null) => {
    setSelectedPoint(point);
    if (point) {
      window.location.hash = `@${point.id}`;
      setIsSidebarCollapsed(false);
    } else {
      if (window.location.hash.startsWith('#@')) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
  }, []);

  const handleCenterMap = useCallback((coords: [number, number]) => {
    if (selectedPoint) {
      setSelectedPoint({ ...selectedPoint, coords: [coords[0], coords[1]] });
    }
  }, [selectedPoint]);

  // Déclencher l'ajout de point
  const handleRequestAddPoint = useCallback((coords?: [number, number]) => {
    setModalCoords(coords || null);
    setIsAddModalOpen(true);
  }, []);

  // Enregistrer un nouveau point
  const handleSaveNewPoint = useCallback((newPoint: PointOfInterest) => {
    setCustomPoints((prev) => [newPoint, ...prev]);
    // S'assurer que le mode actif permet de voir le nouveau point
    if (activeMode !== 'all' && newPoint.source !== activeMode) {
      setActiveMode(newPoint.source || 'lore');
    }
    // Sélectionner automatiquement le nouveau point
    setSelectedPoint(newPoint);
    setIsSidebarCollapsed(false);
  }, [activeMode]);

  return (
    <div className="app-layout">
      {/* Panneau latéral rétractable */}
      <Sidebar
        points={filteredPoints}
        allPoints={allAvailablePoints.filter((p) => activeMode === 'all' || (p.source || 'lore') === activeMode)}
        selectedPoint={selectedPoint}
        onSelectPoint={handleSelectPoint}
        onCenterMap={handleCenterMap}
        activeMode={activeMode}
        onChangeMode={setActiveMode}
        loreCount={loreCount}
        agotCount={agotCount}
        onOpenAddPoint={() => handleRequestAddPoint()}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
      />

      {/* Carte Leaflet interactive */}
      <main className="map-main-section">
        <MapComponent
          points={filteredPoints}
          selectedPoint={selectedPoint}
          onSelectPoint={handleSelectPoint}
          onRequestAddPoint={handleRequestAddPoint}
          activeMode={activeMode}
          onChangeMode={setActiveMode}
        />
      </main>

      {/* Modal d'ajout de point personnalisé */}
      <AddPointModal
        isOpen={isAddModalOpen}
        initialCoords={modalCoords}
        defaultSource={activeMode === 'agot_plus' ? 'agot_plus' : 'lore'}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveNewPoint}
      />
    </div>
  );
}

export default App;
