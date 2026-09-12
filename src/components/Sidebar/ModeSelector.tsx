import React from 'react';
import type { MapModeFilter } from '../../types';
import { BookOpen, Sparkles, Layers } from 'lucide-react';

interface ModeSelectorProps {
  activeMode: MapModeFilter;
  onChangeMode: (mode: MapModeFilter) => void;
  loreCount: number;
  agotCount: number;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  activeMode,
  onChangeMode,
  loreCount,
  agotCount
}) => {
  return (
    <div className="mode-selector-wrapper">
      <div className="mode-selector-header">
        <span className="mode-selector-title">Univers Cartographique</span>
      </div>

      <div className="mode-tabs-container">
        {/* Onglet Lore Officiel */}
        <button
          type="button"
          className={`mode-tab-btn tab-lore ${activeMode === 'lore' ? 'active' : ''}`}
          onClick={() => onChangeMode('lore')}
          title="Points du Lore officiel (George R.R. Martin)"
        >
          <div className="tab-icon-title">
            <BookOpen size={15} />
            <span className="tab-label">Lore Canon</span>
          </div>
          <span className="tab-count-badge lore-badge">{loreCount}</span>
        </button>

        {/* Onglet AGOT+ */}
        <button
          type="button"
          className={`mode-tab-btn tab-agot ${activeMode === 'agot_plus' ? 'active' : ''}`}
          onClick={() => onChangeMode('agot_plus')}
          title="Univers étendu AGOT+, jeux de rôle, mods et créations personnalisées"
        >
          <div className="tab-icon-title">
            <Sparkles size={15} />
            <span className="tab-label">AGOT+</span>
          </div>
          <span className="tab-count-badge agot-badge">{agotCount}</span>
        </button>

        {/* Onglet Tous */}
        <button
          type="button"
          className={`mode-tab-btn tab-all ${activeMode === 'all' ? 'active' : ''}`}
          onClick={() => onChangeMode('all')}
          title="Afficher tous les points (Lore et AGOT+ réunis)"
        >
          <div className="tab-icon-title">
            <Layers size={14} />
            <span className="tab-label">Tous</span>
          </div>
          <span className="tab-count-badge all-badge">{loreCount + agotCount}</span>
        </button>
      </div>

      {/* Description du mode actif */}
      <div className="mode-active-description">
        {activeMode === 'lore' && (
          <p>
            <span className="mode-desc-tag lore-tag">Lore Canon</span> : Forteresses et hauts-lieux historiques certifiés de Westeros.
          </p>
        )}
        {activeMode === 'agot_plus' && (
          <p>
            <span className="mode-desc-tag agot-tag">AGOT+</span> : Campagnes de JDR, univers étendu, mods alternatifs et lieux libres.
          </p>
        )}
        {activeMode === 'all' && (
          <p>
            <span className="mode-desc-tag all-tag">Complet</span> : Visualisation combinée du Lore officiel et de vos ajouts AGOT+.
          </p>
        )}
      </div>
    </div>
  );
};
