import React, { useState, useEffect } from 'react';
import type { CategoryType, PointOfInterest, PointSource } from '../../types';
import { REGIONS } from '../../data/regions';
import { HOUSE_SIGILS } from '../../data/sigils';
import { X, MapPin, Sparkles, BookOpen, Edit3 } from 'lucide-react';

interface EditPointModalProps {
  isOpen: boolean;
  point: PointOfInterest | null;
  onClose: () => void;
  onSave: (point: PointOfInterest) => void;
}

export const EditPointModal: React.FC<EditPointModalProps> = ({
  isOpen,
  point,
  onClose,
  onSave
}) => {
  const [name, setName] = useState('');
  const [lat, setLat] = useState<string>('');
  const [lng, setLng] = useState<string>('');
  const [source, setSource] = useState<PointSource>('lore');
  const [category, setCategory] = useState<CategoryType>('château-majeur');
  const [region, setRegion] = useState<string>(REGIONS[0]?.name || 'Le Conflans');
  const [house, setHouse] = useState('');
  const [words, setWords] = useState('');
  const [description, setDescription] = useState('');
  const [featuresText, setFeaturesText] = useState('');
  const [sigilKey, setSigilKey] = useState<string>('generic');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (point && isOpen) {
      setName(point.name);
      setLat(point.coords[0].toString());
      setLng(point.coords[1].toString());
      setSource(point.source || 'lore');
      setCategory(point.category);
      setRegion(point.region);
      setHouse(point.house || '');
      setWords(point.words || '');
      setDescription(point.description || '');
      setFeaturesText(point.features ? point.features.join('\n') : '');
      setSigilKey(point.sigilKey || 'generic');
      setImageUrl(point.imageUrl || '');
    }
  }, [point, isOpen]);

  if (!isOpen || !point) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const parsedLat = parseFloat(lat);
    const parsedLng = parseFloat(lng);
    if (isNaN(parsedLat) || isNaN(parsedLng)) return;

    const updatedPoint: PointOfInterest = {
      ...point,
      coords: [parsedLat, parsedLng],
      name: name.trim(),
      region,
      category,
      source,
      house: house.trim() ? house.trim() : undefined,
      sigilKey: sigilKey,
      imageUrl: imageUrl.trim() ? imageUrl.trim() : undefined,
      words: words.trim() ? words.trim() : undefined,
      description: description.trim(),
      features: featuresText.trim()
        ? featuresText.split('\n').map((f) => f.trim()).filter(Boolean)
        : []
    };

    onSave(updatedPoint);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog add-point-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-box">
            <div className="modal-icon-badge">
              <Edit3 size={20} />
            </div>
            <div>
              <h2 className="modal-title">Éditer le lieu</h2>
              <p className="modal-subtitle">Modifier les informations de {point.name}</p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {/* Choix de l'univers : Lore vs AGOT+ */}
          <div className="form-group universe-toggle-group">
            <label className="form-label">Univers / Catégorie de carte :</label>
            <div className="universe-toggle-buttons">
              <button
                type="button"
                className={`univ-btn ${source === 'lore' ? 'active lore-active' : ''}`}
                onClick={() => setSource('lore')}
              >
                <BookOpen size={16} />
                <span>📜 Lore Officiel</span>
              </button>
              <button
                type="button"
                className={`univ-btn ${source === 'agot_plus' ? 'active agot-active' : ''}`}
                onClick={() => setSource('agot_plus')}
              >
                <Sparkles size={16} />
                <span>⚔️ AGOT+ (Univers Étendu)</span>
              </button>
            </div>
          </div>

          {/* Nom du lieu */}
          <div className="form-group">
            <label className="form-label" htmlFor="point-name">
              Nom du lieu <span className="required-star">*</span> :
            </label>
            <input
              id="point-name"
              type="text"
              required
              className="form-input"
              placeholder="ex: Bastion du Corbeau, Fort-des-Glaces..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>

          {/* Coordonnées géographiques */}
          <div className="form-row coords-row">
            <div className="form-group half">
              <label className="form-label" htmlFor="point-lat">
                <MapPin size={14} /> Latitude :
              </label>
              <input
                id="point-lat"
                type="number"
                step="any"
                required
                className="form-input"
                placeholder="ex: 28.515"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
              />
            </div>
            <div className="form-group half">
              <label className="form-label" htmlFor="point-lng">
                <MapPin size={14} /> Longitude :
              </label>
              <input
                id="point-lng"
                type="number"
                step="any"
                required
                className="form-input"
                placeholder="ex: -145.946"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
              />
            </div>
          </div>

          {/* Région & Type */}
          <div className="form-row">
            <div className="form-group half">
              <label className="form-label" htmlFor="point-region">Région :</label>
              <select
                id="point-region"
                className="form-select"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                {REGIONS.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group half">
              <label className="form-label" htmlFor="point-category">Catégorie :</label>
              <select
                id="point-category"
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryType)}
              >
                <option value="château-majeur">Château Majeur</option>
                <option value="château-mineur">Château Mineur</option>
                <option value="ville">Ville / Port</option>
                <option value="centre-savoir">Centre de Savoir</option>
                <option value="ruine">Ruine antique</option>
                <option value="lieu-dit">Lieu-dit / Sanctuaire</option>
              </select>
            </div>
          </div>

          {/* Maison & Devise */}
          <div className="form-row">
            <div className="form-group half">
              <label className="form-label" htmlFor="point-house">Maison occupante :</label>
              <input
                id="point-house"
                type="text"
                className="form-input"
                placeholder="ex: Maison Blackwood, Clan..."
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </div>
            <div className="form-group half">
              <label className="form-label" htmlFor="point-words">Devise / Slogan :</label>
              <input
                id="point-words"
                type="text"
                className="form-input"
                placeholder="ex: L'acier ne ment jamais"
                value={words}
                onChange={(e) => setWords(e.target.value)}
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label" htmlFor="point-desc">Description / Histoire :</label>
            <textarea
              id="point-desc"
              rows={3}
              className="form-textarea"
              placeholder="Récit, importance stratégique, légendes ou rôle dans votre campagne..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Lien d'image */}
          <div className="form-group">
            <label className="form-label" htmlFor="point-image-url">Image personnalisée (URL) :</label>
            <input
              id="point-image-url"
              type="url"
              className="form-input"
              placeholder="ex: https://exemple.com/mon-image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          {/* Points caractéristiques */}
          <div className="form-group">
            <label className="form-label" htmlFor="point-features">
              Caractéristiques notables (une par ligne) :
            </label>
            <textarea
              id="point-features"
              rows={2}
              className="form-textarea"
              placeholder="ex: Donjon polygonal de granit noir&#10;Bois sacré millénaire&#10;Arsenal souterrain"
              value={featuresText}
              onChange={(e) => setFeaturesText(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
