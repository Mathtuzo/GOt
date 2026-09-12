import React from 'react';
import type { CategoryType } from '../../types';
import { REGIONS } from '../../data/regions';
import { Castle, Building2, Flame, MapPin, Sparkles } from 'lucide-react';

interface SidebarFiltersProps {
  selectedCategory: CategoryType | 'all';
  selectedRegion: string;
  onSelectCategory: (category: CategoryType | 'all') => void;
  onSelectRegion: (region: string) => void;
  categoryCounts: Record<string, number>;
}

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  selectedCategory,
  selectedRegion,
  onSelectCategory,
  onSelectRegion,
  categoryCounts
}) => {
  const categories: { id: CategoryType | 'all'; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Tous', icon: <Sparkles size={14} /> },
    { id: 'château', label: 'Châteaux', icon: <Castle size={14} /> },
    { id: 'ville', label: 'Villes', icon: <Building2 size={14} /> },
    { id: 'ruine', label: 'Ruines', icon: <Flame size={14} /> },
    { id: 'lieu-dit', label: 'Lieux-dits', icon: <MapPin size={14} /> }
  ];

  return (
    <div className="filters-container">
      {/* Filtres par Catégorie */}
      <div className="filter-section">
        <label className="filter-title">Catégories</label>
        <div className="category-chips">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = categoryCounts[cat.id] || 0;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`filter-chip ${isActive ? 'active' : ''}`}
                data-category={cat.id}
              >
                <span className="chip-icon">{cat.icon}</span>
                <span className="chip-label">{cat.label}</span>
                <span className="chip-badge">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtres rapides par Région */}
      <div className="filter-section">
        <label className="filter-title">Régions de Westeros & d'Essos</label>
        <div className="region-select-wrapper">
          <select
            value={selectedRegion}
            onChange={(e) => onSelectRegion(e.target.value)}
            className="region-select"
            aria-label="Filtrer par région"
          >
            {REGIONS.map((region) => (
              <option key={region.id} value={region.name === 'Toutes les régions' ? 'all' : region.name}>
                {region.name} {region.rulingHouse ? `(${region.rulingHouse})` : ''}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
