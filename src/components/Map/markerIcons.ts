import L from 'leaflet';
import type { CategoryType, PointSource } from '../../types';

export const CATEGORY_COLORS: Record<CategoryType, { bg: string; border: string; glow: string; text: string }> = {
  'château-majeur': {
    bg: '#742a2a', // deep red/burgundy
    border: '#f6ad55',
    glow: 'rgba(246, 173, 85, 0.4)',
    text: '#fffaf0'
  },
  'château-mineur': {
    bg: '#742a2a', // deep red/burgundy
    border: '#f6ad55',
    glow: 'rgba(246, 173, 85, 0.4)',
    text: '#fffaf0'
  },
  ville: {
    bg: '#234e52', // deep teal/gold
    border: '#ecc94b',
    glow: 'rgba(236, 201, 75, 0.4)',
    text: '#feebc8'
  },
  ruine: {
    bg: '#2d3748', // slate stone
    border: '#a0aec0',
    glow: 'rgba(160, 174, 192, 0.4)',
    text: '#edf2f7'
  },
  'lieu-dit': {
    bg: '#276749', // forest green / pine
    border: '#9ae6b4',
    glow: 'rgba(154, 230, 180, 0.4)',
    text: '#f0fff4'
  },
  'centre-savoir': {
    bg: '#553c9a', // deep purple
    border: '#d6bcfa',
    glow: 'rgba(214, 188, 250, 0.4)',
    text: '#faf5ff'
  }
};

export const REGION_COLORS: Record<string, { bg: string; border: string; glow: string; text: string }> = {
  'Le Nord': { bg: '#ffffff', border: '#cbd5e1', glow: 'rgba(255, 255, 255, 0.6)', text: '#1e293b' },
  "Terres de l'Ouest": { bg: '#dc2626', border: '#f87171', glow: 'rgba(220, 38, 38, 0.6)', text: '#fef2f2' },
  'Le Conflans': { bg: '#1e3a8a', border: '#60a5fa', glow: 'rgba(30, 58, 138, 0.6)', text: '#eff6ff' },
  "Le Val d'Arryn": { bg: '#38bdf8', border: '#bae6fd', glow: 'rgba(56, 189, 248, 0.6)', text: '#0f172a' },
  "Terres de l'Orage": { bg: '#eab308', border: '#fef08a', glow: 'rgba(234, 179, 8, 0.6)', text: '#422006' },
  'Le Bief': { bg: '#16a34a', border: '#86efac', glow: 'rgba(22, 163, 74, 0.6)', text: '#f0fdf4' },
  'Terres de la Couronne': { bg: '#171717', border: '#737373', glow: 'rgba(23, 23, 23, 0.6)', text: '#f8fafc' },
  'Dorne': { bg: '#ea580c', border: '#fdba74', glow: 'rgba(234, 88, 12, 0.6)', text: '#fff7ed' },
  'Braavos': { bg: '#7e22ce', border: '#d8b4fe', glow: 'rgba(126, 34, 206, 0.6)', text: '#faf5ff' },
  'Essos': { bg: '#7e22ce', border: '#d8b4fe', glow: 'rgba(126, 34, 206, 0.6)', text: '#faf5ff' },
};

export function createCustomMarkerIcon(
  category: CategoryType,
  region: string,
  isSelected: boolean = false,
  label?: string,
  source: PointSource = 'lore'
): L.DivIcon {
  const colors = REGION_COLORS[region] || CATEGORY_COLORS[category] || CATEGORY_COLORS['château-majeur'];

  let shapeClass = 'shape-square';
  let iconSvg = '';

  switch (category) {
    case 'château-majeur':
      shapeClass = 'shape-square-major';
      iconSvg = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 21V9l4-3 4 3 4-3 4 3v12H4z"/>
          <path d="M9 21v-5a3 3 0 0 1 6 0v5"/>
          <path d="M4 9h16"/>
          <path d="M12 3v3"/>
        </svg>
      `;
      break;
    case 'château-mineur':
      shapeClass = 'shape-square-minor';
      iconSvg = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 21V9l4-3 4 3 4-3 4 3v12H4z"/>
          <path d="M9 21v-5a3 3 0 0 1 6 0v5"/>
          <path d="M4 9h16"/>
          <path d="M12 3v3"/>
        </svg>
      `;
      break;
    case 'ville':
      shapeClass = 'shape-circle'; // Rond pour les villes
      iconSvg = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3.5" fill="currentColor"/>
          <path d="M3 21h18"/>
          <path d="M5 21V7l7-4 7 4v14"/>
        </svg>
      `;
      break;
    case 'ruine':
      shapeClass = 'shape-cross'; // Croix pour les ruines
      iconSvg = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="5" x2="19" y2="19"/>
          <line x1="19" y1="5" x2="5" y2="19"/>
        </svg>
      `;
      break;
    case 'lieu-dit':
      shapeClass = 'shape-diamond'; // Losange pour les lieux-dits
      iconSvg = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5" fill="currentColor"/>
          <line x1="12" y1="2" x2="12" y2="6"/>
          <line x1="12" y1="18" x2="12" y2="22"/>
          <line x1="2" y1="12" x2="6" y2="12"/>
          <line x1="18" y1="12" x2="22" y2="12"/>
        </svg>
      `;
      break;
    case 'centre-savoir':
      shapeClass = 'shape-book';
      iconSvg = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      `;
      break;
  }

  const selectedClass = isSelected ? 'marker-selected' : '';
  const sourceClass = source === 'agot_plus' ? 'marker-agot-plus' : 'marker-lore';

  const html = `
    <div class="custom-got-marker ${shapeClass} ${selectedClass} ${sourceClass}" style="--marker-bg: ${colors.bg}; --marker-border: ${colors.border}; --marker-glow: ${colors.glow}; color: ${colors.text};">
      <div class="marker-symbol" style="color: ${colors.bg === '#ffffff' ? '#1e293b' : '#ffffff'};">
        <div class="marker-icon-wrapper" style="color: ${colors.bg === '#ffffff' ? '#1e293b' : 'inherit'};">
          ${iconSvg}
        </div>
        ${source === 'agot_plus' ? '<span class="marker-source-badge">AGOT+</span>' : ''}
      </div>
      ${isSelected ? `<div class="marker-pulse"></div>` : ''}
      <div class="marker-title-tag">${label || ''}</div>
    </div>
  `;

  return L.divIcon({
    html,
    className: 'leaflet-got-marker-container',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16]
  });
}
