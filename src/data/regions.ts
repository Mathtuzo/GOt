import type { RegionInfo } from '../types';

export const REGIONS: RegionInfo[] = [
  { id: 'all', name: 'Toutes les régions', color: '#d4af37' },
  { id: 'nord', name: 'Le Nord', color: '#90cdf4', rulingHouse: 'Maison Stark', seat: 'Winterfell' },
  { id: 'mur', name: 'Au-delà du Mur', color: '#e2e8f0', rulingHouse: 'Garde de Nuit & Sauvageons', seat: 'Châteaunoir' },
  { id: 'conflans', name: 'Le Conflans', color: '#68d391', rulingHouse: 'Maison Tully', seat: 'Vivesaigues' },
  { id: 'val', name: 'Le Val d\'Arryn', color: '#63b3ed', rulingHouse: 'Maison Arryn', seat: 'Les Eyrié' },
  { id: 'fer', name: 'Les Îles de Fer', color: '#a0aec0', rulingHouse: 'Maison Greyjoy', seat: 'Pyk' },
  { id: 'ouest', name: 'Terres de l\'Ouest', color: '#ecc94b', rulingHouse: 'Maison Lannister', seat: 'Castral Roc' },
  { id: 'couronne', name: 'Terres de la Couronne', color: '#f56565', rulingHouse: 'Maison Baratheon / Targaryen', seat: 'Port-Réal' },
  { id: 'bief', name: 'Le Bief', color: '#48bb78', rulingHouse: 'Maison Tyrell', seat: 'Hautjardin' },
  { id: 'orage', name: 'Terres de l\'Orage', color: '#ed8936', rulingHouse: 'Maison Baratheon', seat: 'Accalmie' },
  { id: 'dorne', name: 'Dorne', color: '#ed64a6', rulingHouse: 'Maison Martell', seat: 'Lancehélion' },
  { id: 'essos', name: 'Essos', color: '#b794f4', rulingHouse: 'Cités Libres & Ghis', seat: 'Braavos / Meereen' },
];
