import React from 'react';
import type { PointOfInterest } from '../../types';
import { ArrowLeft, Castle, Building2, Flame, MapPin, Navigation, Shield, CheckCircle2, Edit3, BookOpen } from 'lucide-react';
import { HOUSE_SIGILS } from '../../data/sigils';

interface PoiDetailProps {
  point: PointOfInterest;
  onBack: () => void;
  onCenterMap: (coords: [number, number]) => void;
  onEdit: (point: PointOfInterest) => void;
}

export const PoiDetail: React.FC<PoiDetailProps> = ({
  point,
  onBack,
  onCenterMap,
  onEdit
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'château-majeur':
      case 'château-mineur':
        return <Castle size={18} />;
      case 'ville':
        return <Building2 size={18} />;
      case 'centre-savoir':
        return <BookOpen size={18} />;
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

        <div className="detail-actions-right" style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => onEdit(point)}
            className="edit-map-btn"
            title="Éditer ce lieu"
            style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 10px', borderRadius: '4px', color: '#e2e8f0', cursor: 'pointer', fontSize: '12px' }}
          >
            <Edit3 size={15} />
            <span>Éditer</span>
          </button>
          
          <button
            onClick={() => onCenterMap(point.coords)}
            className="center-map-btn"
            title="Centrer la carte sur ce point"
          >
            <Navigation size={15} />
            <span>Centrer</span>
          </button>
        </div>
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
      {(point.imageUrl || point.sigilKey || point.words) && (
        <div className="detail-heraldry-card">
          <div className="heraldry-inner">
            {/* Affichage de l'image personnalisée OU du blason */}
            {(point.imageUrl || (point.sigilKey && HOUSE_SIGILS[point.sigilKey])) && (
              <div className="sigil-large-container" style={{ width: point.imageUrl ? '100px' : undefined, height: point.imageUrl ? '100px' : undefined, overflow: 'hidden', borderRadius: point.imageUrl ? '8px' : undefined }}>
                <img
                  src={point.imageUrl ? point.imageUrl : HOUSE_SIGILS[point.sigilKey!]}
                  alt={`Illustration ou Armoiries de ${point.house || point.name}`}
                  className="sigil-large"
                  referrerPolicy="no-referrer"
                  style={{ objectFit: point.imageUrl ? 'cover' : undefined, width: '100%', height: '100%' }}
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
