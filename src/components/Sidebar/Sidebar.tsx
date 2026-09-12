import React from 'react';
import type { CategoryType, MapModeFilter, PointOfInterest } from '../../types';
import { ModeSelector } from './ModeSelector';
import { SidebarSearch } from './SidebarSearch';
import { SidebarFilters } from './SidebarFilters';
import { PoiList } from './PoiList';
import { PoiDetail } from './PoiDetail';
import { Compass, ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';

interface SidebarProps {
  points: PointOfInterest[];
  allPoints: PointOfInterest[];
  selectedPoint: PointOfInterest | null;
  onSelectPoint: (point: PointOfInterest | null) => void;
  onCenterMap: (coords: [number, number]) => void;
  activeMode: MapModeFilter;
  onChangeMode: (mode: MapModeFilter) => void;
  loreCount: number;
  agotCount: number;
  onOpenAddPoint: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: CategoryType | 'all';
  onCategoryChange: (category: CategoryType | 'all') => void;
  selectedRegion: string;
  onRegionChange: (region: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  points,
  allPoints,
  selectedPoint,
  onSelectPoint,
  onCenterMap,
  activeMode,
  onChangeMode,
  loreCount,
  agotCount,
  onOpenAddPoint,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedRegion,
  onRegionChange,
  isCollapsed,
  onToggleCollapse
}) => {
  // Calcul du nombre de points par catégorie
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = {
      all: allPoints.length,
      château: 0,
      ville: 0,
      ruine: 0,
      'lieu-dit': 0
    };
    allPoints.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, [allPoints]);

  return (
    <aside className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Bouton de repliement */}
      <button
        onClick={onToggleCollapse}
        className="sidebar-collapse-toggle"
        title={isCollapsed ? "Déplier le panneau" : "Replier le panneau"}
        aria-label="Replier ou déplier le panneau"
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      {/* Contenu interne */}
      <div className="sidebar-inner">
        {/* En-tête de marque */}
        <header className="sidebar-brand">
          <div className="brand-icon-wrapper">
            <Compass className="brand-compass-icon" size={24} />
          </div>
          <div className="brand-titles">
            <h1 className="brand-name">Westeros Maester</h1>
            <p className="brand-tagline">Cartographie des Sept Couronnes</p>
          </div>
        </header>

        {/* Sélecteur de mode Lore / AGOT+ */}
        <ModeSelector
          activeMode={activeMode}
          onChangeMode={onChangeMode}
          loreCount={loreCount}
          agotCount={agotCount}
        />

        {/* Mode Fiche Détail VS Mode Exploration */}
        {selectedPoint ? (
          <PoiDetail
            point={selectedPoint}
            onBack={() => onSelectPoint(null)}
            onCenterMap={onCenterMap}
          />
        ) : (
          <div className="sidebar-exploration-mode">
            {/* Barre de recherche et action de création */}
            <div className="sidebar-search-and-action">
              <div className="search-input-flex">
                <SidebarSearch
                  value={searchQuery}
                  onChange={onSearchChange}
                  onClear={() => onSearchChange('')}
                  resultCount={points.length}
                />
              </div>
              <button
                type="button"
                className="add-point-btn"
                onClick={onOpenAddPoint}
                title="Ajouter un nouveau point d'intérêt"
              >
                <PlusCircle size={16} />
                <span>Créer</span>
              </button>
            </div>

            {/* Filtres de catégorie et région */}
            <SidebarFilters
              selectedCategory={selectedCategory}
              selectedRegion={selectedRegion}
              onSelectCategory={onCategoryChange}
              onSelectRegion={onRegionChange}
              categoryCounts={categoryCounts}
            />

            {/* Liste dynamique des lieux */}
            <div className="sidebar-scrollable-list">
              <PoiList
                points={points}
                selectedPoint={selectedPoint}
                onSelectPoint={onSelectPoint}
              />
            </div>
          </div>
        )}

        {/* Pied de page du panneau */}
        <footer className="sidebar-footer">
          <p className="credits-text">
            Fonds cartographiques : <a href="https://quartermaester.info" target="_blank" rel="noreferrer">Quartermaester.info</a> / theMountainGoat
          </p>
        </footer>
      </div>
    </aside>
  );
};
