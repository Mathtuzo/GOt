import type { PointOfInterest } from '../types';
import { HOUSE_SIGILS } from './sigils';

/**
 * Points d'intérêt du mode AGOT+ (Univers étendu, jeux de rôle, mods CK3 AGOT, théories et non-canon)
 * Ces points partagent la même structure que les points du Lore officiel mais permettent des ajouts personnalisés.
 */
export const AGOT_PLUS_INITIAL_POINTS: PointOfInterest[] = [
  // ================= LE NORD & SKAGOS =================
  {
    id: 'agot-skane-refuge',
    coords: [74.82, -92.45],
    name: 'Refuge de Skane (Skane Outpost)',
    region: 'Le Nord',
    category: 'ruine', // Affiché sous forme de CROIX
    source: 'agot_plus',
    house: 'Clans de Skagos (AGOT+)',
    sigilUrl: HOUSE_SIGILS.generic,
    words: 'Fils de la Pierre et de l\'Écume',
    description:
      'Avant-poste fortifié mystérieux bâti sur les falaises escarpées de l\'île abandonnée de Skane. Utilisé dans les chroniques étendues d\'AGOT+ comme repaire secret pour les contrebandiers de la Mer Grelotte et les éclaireurs dissidents de Skagos.',
    features: [
      'Falaises de basalte noir plongeant dans les brumes de la Mer Grelotte',
      'Galeries souterraines creusées par d\'anciens adorateurs des Licornes',
      'Feu de signalisation ancestral taillé dans un roc sacré',
      'Mouille abritée invisible depuis le large'
    ]
  },
  {
    id: 'agot-tombeau-roi-hiver',
    coords: [79.25, -125.4],
    name: 'Tombeau du Roi d\'Hiver Oublié',
    region: 'Au-delà du Mur',
    category: 'ruine', // Affiché sous forme de CROIX
    source: 'agot_plus',
    house: 'Premiers Hommes',
    sigilUrl: HOUSE_SIGILS.stark,
    words: 'Sous la glace éternelle',
    description:
      'Mégalithe funéraire cyclopéen dressé au-delà des Crocgivre. Selon les sagas orales des Sauvageons, un roi antique du Nord y reposerait ceint d\'une couronne de givre noir.',
    features: [
      'Menhirs géants gravés de runes primitives',
      'Entrée de crypte scellée par une plaque de bronze antique',
      'Vents glaciaux perpétuels sifflant à travers les failles',
      'Cercle de protection contre les Marcheurs Blancs'
    ]
  },

  // ================= LE NECK & LE CONFLANS =================
  {
    id: 'agot-fort-brumeneige',
    coords: [50.15, -135.2],
    name: 'Castel Brumeneige (Mistveil Keep)',
    region: 'Le Neck',
    category: 'château', // Affiché sous forme de CARRÉ
    source: 'agot_plus',
    house: 'Maison Fenn (Paludiers AGOT+)',
    sigilUrl: HOUSE_SIGILS.generic,
    words: 'Silencieux comme la Brume',
    description:
      'Château lacustre monté sur pilotis gigantesques d\'arbres pétrifiés au cœur des marais inexplorés du Neck occidental. Réputé impossible à cartographier en raison des brumes perpétuelles et des îles mouvantes qui l\'entourent.',
    features: [
      'Fondations sur pilotis de chêne noir et de tourbe stabilisée',
      'Ponts de lianes rétractables et passerelles piégées',
      'Tour d\'alchimie et herboristerie aux venins de marais',
      'Sanctuaire secret des Enfants de la Forêt encore intact'
    ]
  },
  {
    id: 'agot-ruines-du-fleuve-noir',
    coords: [34.12, -118.8],
    name: 'Sanctuaire des Rivières Perdues',
    region: 'Le Conflans',
    category: 'ruine', // Affiché sous forme de CROIX
    source: 'agot_plus',
    house: 'Anciens Seigneurs des Rivières',
    sigilUrl: HOUSE_SIGILS.tully,
    words: 'La rivière ne dort jamais',
    description:
      'Ruines d\'un immense pont-château des Premiers Hommes surplombant un ancien affluent asséché de la Ruffurque. Fréquenté par les rôdeurs et les fidèles des cultes fluviaux oubliés.',
    features: [
      'Piliers cyclopéens couverts de runes des Premiers Hommes',
      'Crypte semi-immergée abritant d\'anciennes reliques fluviales',
      'Terrasses panoramiques surveillant le défilé menant aux Jumeaux',
      'Refuge fortifié utilisé par les bandes de partisans'
    ]
  },

  // ================= TERRES DE LA COURONNE & DÉTROIT =================
  {
    id: 'agot-whispering-cove',
    coords: [16.42, -96.75],
    name: 'Crique des Chuchotements (Whispering Cove)',
    region: 'Terres de la Couronne',
    category: 'ville', // Affiché sous forme de ROND
    source: 'agot_plus',
    house: 'Fraternité du Détroit (AGOT+)',
    sigilUrl: HOUSE_SIGILS.generic,
    words: 'Le vent sait tout',
    description:
      'Port franc clandestin dissimulé dans une crique abritée de la Baie des Crabes. Fréquenté par les corsaires des Degrés de Pierre, les marchands braviens sans scrupules et les informateurs vendant leurs secrets à la cour de Port-Réal.',
    features: [
      'Quais flottants en bois de navires naufragés',
      'Taverne troglodyte "Le Poulpe Borgne" creusée dans la roche calcaire',
      'Réseau d\'informateurs et de marchands de contrebande',
      'Batterie de scorpions cachée sous des filets de camouflage'
    ]
  },

  // ================= TERRES DE L'OUEST =================
  {
    id: 'agot-val-forge-rouge',
    coords: [8.92, -141.65],
    name: 'Val de la Forge Rouge (Redforge Bastion)',
    region: 'Terres de l\'Ouest',
    category: 'château', // Affiché sous forme de CARRÉ
    source: 'agot_plus',
    house: 'Compagnie du Fer Doré (AGOT+)',
    sigilUrl: HOUSE_SIGILS.lannister,
    words: 'Par l\'enclume et le denier',
    description:
      'Forteresse manufacturière perchée dans les collines occidentales, réputée pour ses hauts-fourneaux alimentés par les filons de charbon et de fer des Terres de l\'Ouest. Conçue par une guilde d\'armuriers pour forger le fer des armées loyalistes.',
    features: [
      'Fours métallurgiques monumentaux illuminant les collines de nuit',
      'Arsenal blindé contenant des centaines de cottes de mailles',
      'Aqueduc canalisant un torrent de montagne pour mouvoir les martinets hydrauliques',
      'Donjon aux murailles renforcées de plaques de bronze'
    ]
  },

  // ================= LE VAL D'ARRYN =================
  {
    id: 'agot-bastion-des-faucons',
    coords: [33.45, -95.6],
    name: 'Tour des Nuées (Skyreach Outpost)',
    region: 'Le Val d\'Arryn',
    category: 'château', // Affiché sous forme de CARRÉ
    source: 'agot_plus',
    house: 'Chevaliers de la Pierre Blanche',
    sigilUrl: HOUSE_SIGILS.arryn,
    words: 'Plus haut que l\'effroi',
    description:
      'Nid d\'aigle secondaire contrôlant l\'entrée orientale de la Baie des Crabes. Érigé sur une aiguille calcaire accessible uniquement par un palan suspendu ou une faille rocheuse périlleuse.',
    features: [
      'Plateforme d\'atterrissage de faucons messagers royaux',
      'Palan à contrepoids permettant d\'hisser provisions et chevaliers',
      'Vue plongeante panoramique sur toute la côte orientale',
      'Citernes d\'eau de pluie creusées à même le pic'
    ]
  },

  // ================= LES ÎLES DE FER =================
  {
    id: 'agot-havre-du-ressac',
    coords: [30.8, -157.6],
    name: 'Havre du Ressac Noir',
    region: 'Îles de Fer',
    category: 'ville', // Affiché sous forme de ROND
    source: 'agot_plus',
    house: 'Écumeurs du Sel (AGOT+)',
    sigilUrl: HOUSE_SIGILS.greyjoy,
    words: 'Le fer avant l\'or',
    description:
      'Chantier naval clandestin et crique de radoub blottie dans les récifs déchiquetés à l\'ouest d\'Orkmont. C\'est ici que les drakkares les plus véloces sont calfatés à l\'insu des lords fers-nés.',
    features: [
      'Chantiers navals de drakkares en bois de pin et fer martelé',
      'Bassins de carénage taillés dans le granit marin',
      'Tavernes enfumées de pillards et marchands d\'esclaves',
      'Sanctuaire du Dieu Noyé illuminé d\'huile de baleine'
    ]
  },

  // ================= LE BIEF =================
  {
    id: 'agot-château-rosée-d-or',
    coords: [-15.2, -128.4],
    name: 'Castel du Verger d\'Or',
    region: 'Le Bief',
    category: 'château', // Affiché sous forme de CARRÉ
    source: 'agot_plus',
    house: 'Maison Fontenay (AGOT+)',
    sigilUrl: HOUSE_SIGILS.tyrell,
    words: 'Fleurir et Protéger',
    description:
      'Élégant château fortifié ceinturé de douves fleuries et de vastes vignobles le long de la Mander. Ses remparts de marbre blanc scintillent sous le soleil du Bief.',
    features: [
      'Remparts de marbre blanc entourés de douves navigables',
      'Jardins suspendus et orangeries monumentales',
      'Caves vinicoles approvisionnant les banquets de Hautjardin',
      'Écuries renommées de destriers de tournoi'
    ]
  },

  // ================= DORNE =================
  {
    id: 'agot-dune-des-scorpions',
    coords: [-35.75, -98.3],
    name: 'L\'Oasis des Étoiles Mortes (Starfall Oasis)',
    region: 'Dorne',
    category: 'lieu-dit', // Affiché sous forme de LOSANGE
    source: 'agot_plus',
    house: 'Nomades des Sables Rouges (AGOT+)',
    sigilUrl: HOUSE_SIGILS.martell,
    words: 'Le soleil nous guide',
    description:
      'Oasis secrète nichée au fond d\'un canyon d\'argile rouge dans les étendues désertiques de Dorne. Lieu de pèlerinage pour les tribus nomades et camp d\'entraînement des lanciers dorniens d\'élite.',
    features: [
      'Sources d\'eau cristalline alimentant un verger de grenadiers et d\'orangers',
      'Campement de tentes en soie safran et pourpre brodée',
      'Arène taillée dans la roche pour le combat à la lance dornienne',
      'Observatoire antique pour suivre les constellations de Nymeria'
    ]
  },

  // ================= LES TERRES DE L'ORAGE =================
  {
    id: 'agot-fort-tonnerre',
    coords: [-12.6, -92.8],
    name: 'Fort-Tonnerre (Stormguard Bastion)',
    region: 'Terres de l\'Orage',
    category: 'château', // Affiché sous forme de CARRÉ
    source: 'agot_plus',
    house: 'Garde des Marches de l\'Orage',
    sigilUrl: HOUSE_SIGILS.baratheon,
    words: 'Inébranlable sous l\'éclair',
    description:
      'Forteresse trapue construite sur une falaise battue par les vagues de la Baie des Naufrages. Conçue pour résister aux ouragans les plus violents venant de la Mer d\'Été.',
    features: [
      'Murailles inclinées dissipant la force des vents marins',
      'Phare monumental guidant les navires braviens égarés',
      'Casemates blindées creusées directement dans la falaise',
      'Galerie des boucliers orageux commémorant les batailles côtières'
    ]
  }
];
