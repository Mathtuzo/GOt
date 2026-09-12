export type CategoryType = 'château' | 'ville' | 'ruine' | 'lieu-dit';

export type PointSource = 'lore' | 'agot_plus';
export type MapModeFilter = 'lore' | 'agot_plus' | 'all';

export interface PointOfInterest {
  id: string;
  coords: [number, number]; // [lat, lng] sur la carte
  name: string;
  region: string;
  category: CategoryType;
  source?: PointSource; // 'lore' par défaut ou 'agot_plus'
  house?: string;
  sigilUrl?: string;
  words?: string;
  description: string;
  features: string[];
}

export interface RegionInfo {
  id: string;
  name: string;
  color: string;
  seat?: string;
  rulingHouse?: string;
}
