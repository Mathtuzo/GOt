import React from 'react';
import { Search, X } from 'lucide-react';

interface SidebarSearchProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  resultCount: number;
}

export const SidebarSearch: React.FC<SidebarSearchProps> = ({
  value,
  onChange,
  onClear,
  resultCount
}) => {
  return (
    <div className="search-box-container">
      <div className="search-input-wrapper">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Rechercher un château, une ville, des ruines..."
          className="search-input"
          aria-label="Recherche de lieu"
        />
        {value && (
          <button
            onClick={onClear}
            className="search-clear-btn"
            title="Effacer la recherche"
            aria-label="Effacer"
          >
            <X size={16} />
          </button>
        )}
      </div>
      <div className="search-status-bar">
        <span className="search-count">
          {resultCount} {resultCount > 1 ? 'lieux trouvés' : 'lieu trouvé'}
        </span>
      </div>
    </div>
  );
};
