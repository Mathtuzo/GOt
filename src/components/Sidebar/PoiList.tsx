import React from 'react';
import type { PointOfInterest } from '../../types';
import { HOUSE_SIGILS } from '../../data/sigils';
import { Castle, Building2, Flame, MapPin, ChevronRight, Shield, BookOpen } from 'lucide-react';

interface PoiListProps {
  points: PointOfInterest[];
  selectedPoint: PointOfInterest | null;
  onSelectPoint: (point: PointOfInterest) => void;
}

export const PoiList: React.FC<PoiListProps> = ({
  points,
  selectedPoint,
  onSelectPoint
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'château-majeur':
      case 'château-mineur':
        return <Castle size={16} />;
      case 'ville':
        return <Building2 size={16} />;
      case 'centre-savoir':
        return <BookOpen size={16} />;
      case 'ruine':
        return <Flame size={16} />;
      default:
        return <MapPin size={16} />;
    }
  };

  if (points.length === 0) {
    return (
      <div className="empty-list-state">
        <Shield size={42} className="empty-icon" />
        <p className="empty-title">Aucun lieu répertorié</p>
        <p className="empty-subtitle">
          Aucun point d'intérêt ne correspond à vos critères dans les chroniques des Sept Couronnes.
        </p>
      </div>
    );
  }

  return (
    <div className="poi-list-container">
      {points.map((point) => {
        const isSelected = selectedPoint?.id === point.id;
        return (
          <div
            key={point.id}
            onClick={() => onSelectPoint(point)}
            className={`poi-card ${isSelected ? 'selected' : ''}`}
            data-category={point.category}
          >
            <div className="poi-card-crest">
              {point.imageUrl || (point.sigilKey && HOUSE_SIGILS[point.sigilKey]) ? (
                <img 
                  src={point.imageUrl ? point.imageUrl : HOUSE_SIGILS[point.sigilKey!]} 
                  alt={point.house || point.name} 
                  className="sigil-thumbnail"
                  referrerPolicy="no-referrer"
                  style={{ objectFit: point.imageUrl ? 'cover' : undefined }}
                />
              ) : (
                <div className="sigil-fallback">
                  {getCategoryIcon(point.category)}
                </div>
              )}
            </div>

            <div className="poi-card-info">
              <div className="poi-card-header">
                <h3 className="poi-name">{point.name}</h3>
                <div className="poi-header-badges">
                  {point.source === 'agot_plus' ? (
                    <span className="source-tag source-agot">AGOT+</span>
                  ) : (
                    <span className="source-tag source-lore">Lore</span>
                  )}
                  <span className={`category-tag tag-${point.category}`}>
                    {point.category}
                  </span>
                </div>
              </div>

              <div className="poi-meta">
                <span className="poi-region">{point.region}</span>
                {point.house && (
                  <>
                    <span className="poi-meta-dot">•</span>
                    <span className="poi-house">{point.house}</span>
                  </>
                )}
              </div>

              {point.words && (
                <p className="poi-motto-preview">
                  « {point.words.split('(')[0].trim()} »
                </p>
              )}
            </div>

            <div className="poi-card-action">
              <ChevronRight size={18} className="chevron-icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
