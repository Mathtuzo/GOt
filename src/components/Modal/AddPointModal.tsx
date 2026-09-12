import React, { useState, useEffect } from 'react';
import type { CategoryType, PointOfInterest, PointSource } from '../../types';
import { REGIONS } from '../../data/regions';
import { HOUSE_SIGILS } from '../../data/sigils';
import { X, MapPin, Sparkles, BookOpen, PlusCircle } from 'lucide-react';

interface AddPointModalProps {
  isOpen: boolean;
  initialCoords?: [number, number] | null;
  defaultSource?: PointSource;
  onClose: () => void;
  onSave: (point: PointOfInterest) => void;
}

export const AddPointModal: React.FC<AddPointModalProps> = ({
  isOpen,
  initialCoords,
  defaultSource = 'agot_plus',
  onClose,
  onSave
}) => {
  const [name, setName] = useState('');
  const [lat, setLat] = useState<string>('');
  const [lng, setLng] = useState<string>('');
  const [source, setSource] = useState<PointSource>(defaultSource);
  const [category, setCategory] = useState<CategoryType>('château');
  const [region, setRegion] = useState<string>(REGIONS[0]?.name || 'Le Conflans');
  const [house, setHouse] = useState('');
  const [words, setWords] = useState('');
  const [description, setDescription] = useState('');
  const [featuresText, setFeaturesText] = useState('');

  // Synchroniser avec les coordonnées fournies à l'ouverture
  useEffect(() => {
    if (initialCoords) {
      setLat(initialCoords[0].toFixed(3));
      setLng(initialCoords[1].toFixed(3));
    } else {
      setLat('25.000');
      setLng('-120.000');
    }
    setSource(defaultSource);
  }, [initialCoords, defaultSource, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const parsedLat = parseFloat(lat);
    const parsedLng = parseFloat(lng);
    if (isNaN(parsedLat) || isNaN(parsedLng)) return;

    const newPoint: PointOfInterest = {
      id: `custom-${Date.now()}-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      coords: [parsedLat, parsedLng],
      name: name.trim(),
      region,
      category,
      source,
      house: house.trim() ? house.trim() : undefined,
      sigilUrl: HOUSE_SIGILS.generic,
      words: words.trim() ? words.trim() : undefined,
      description: description.trim()
        ? description.trim()
        : `Lieu créé par l'utilisateur dans l'univers ${source === 'lore' ? 'du Lore' : 'AGOT+'}.`,
      features: featuresText.trim()
        ? featuresText.split('\n').map((f) => f.trim()).filter(Boolean)
        : ['Lieu personnalisé']
    };

    onSave(newPoint);
    onClose();

    // Reset du formulaire
    setName('');
    setHouse('');
    setWords('');
    setDescription('');
    setFeaturesText('');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog add-point-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-box">
            <div className="modal-icon-badge">
              <PlusCircle size={20} />
            </div>
            <div>
              <h2 className="modal-title">Ajouter un nouveau lieu</h2>
              <p className="modal-subtitle">Définissez un point d'intérêt pour le Lore ou AGOT+</p>
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
                <option value="château">Château / Forteresse</option>
                <option value="ville">Ville / Port</option>
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
              Créer et placer sur la carte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
