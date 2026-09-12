import React from 'react';
import type { PointOfInterest } from '../../types';
import { ArrowLeft, Castle, Building2, Flame, MapPin, Navigation, Shield, CheckCircle2 } from 'lucide-react';

interface PoiDetailProps {
  point: PointOfInterest;
  onBack: () => void;
  onCenterMap: (coords: [number, number]) => void;
}

export const PoiDetail: React.FC<PoiDetailProps> = ({
  point,
  onBack,
  onCenterMap
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'château':
        return <Castle size={16} />;
      case 'ville':
        return <Building2 size={16} />;
      case 'ruine':
        return <Flame size={16} />;
      default:
        return <MapPin size={16} />;
    }
  };

  return (
    <div className="poi-detail-container">
      {/* Barre de retour supérieure */}
      <div className="detail-top-nav">
        <button onClick={onBack} className="back-btn" title="Retour à la liste" aria-label="Retour">
          <ArrowLeft size={18} />
          <span>Retour à l'exploration</span>
        </button>

        <button
          onClick={() => onCenterMap(point.coords)}
          className="center-map-btn"
          title="Centrer la carte sur ce point"
        >
          <Navigation size={15} />
          <span>Centrer la carte</span>
        </button>
      </div>

      {/* En-tête du lieu */}
      <div className="detail-header-card">
        <div className="detail-header-badges">
          {point.source === 'agot_plus' ? (
            <span className="source-tag-detail source-agot">⚔️ AGOT+</span>
          ) : (
            <span className="source-tag-detail source-lore">📜 Lore Canon</span>
          )}
          <span className={`category-tag tag-${point.category}`}>
            {getCategoryIcon(point.category)}
            <span>{point.category.toUpperCase()}</span>
          </span>
          <span className="region-pill-tag">{point.region}</span>
        </div>

        <h1 className="detail-title">{point.name}</h1>

        {point.house && (
          <div className="detail-sovereign-house">
            <Shield size={16} className="house-icon" />
            <span>Siège de la <strong>{point.house}</strong></span>
          </div>
        )}
      </div>

      {/* Blason & Devise de la Maison */}
      {(point.sigilUrl || point.words) && (
        <div className="detail-heraldry-card">
          <div className="heraldry-inner">
            {point.sigilUrl && (
              <div className="sigil-large-container">
                <img
                  src={point.sigilUrl}
                  alt={`Armoiries de ${point.house || point.name}`}
                  className="sigil-large"
                />
              </div>
            )}

            <div className="heraldry-details">
              <span className="heraldry-label">Armoiries & Allégeance</span>
              <h3 className="heraldry-house-name">{point.house || point.name}</h3>

              {point.words ? (
                <div className="motto-banner">
                  <span className="motto-quote-symbol">“</span>
                  <p className="motto-text">{point.words}</p>
                  <span className="motto-quote-symbol">”</span>
                </div>
              ) : (
                <p className="no-motto-text">Aucune devise formelle recensée</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Récit Historique & Lore */}
      <div className="detail-section lore-section">
        <h2 className="section-title">
          <span>Chronique & Lore Historique</span>
        </h2>
        <div className="lore-body">
          <p>{point.description}</p>
        </div>
      </div>

      {/* Ce qu'on y trouve (Features) */}
      {point.features && point.features.length > 0 && (
        <div className="detail-section features-section">
          <h2 className="section-title">
            <span>Ce qu'on y trouve</span>
          </h2>
          <ul className="features-list">
            {point.features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <CheckCircle2 size={16} className="feature-bullet-icon" />
                <span className="feature-text">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Données géographiques */}
      <div className="detail-geo-footer">
        <span className="geo-title">Coordonnées cartographiques :</span>
        <code className="geo-code">
          {point.coords[0].toFixed(4)}° N, {point.coords[1].toFixed(4)}° O
        </code>
      </div>
    </div>
  );
};
