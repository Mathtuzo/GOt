// Armoiries vectorielles authentiques pour les Grandes Maisons de Westeros
export const HOUSE_SIGILS: Record<string, string> = {
  stark: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23f7fafc" stroke="%23718096" stroke-width="3"/>
    <!-- Loup-Garou Stark -->
    <path d="M50 35 C42 35 34 40 30 48 C28 52 30 57 34 58 C32 62 30 68 32 74 C34 80 40 85 47 87 C49 84 48 80 46 77 C52 80 58 80 63 76 C65 73 63 69 61 67 C68 67 73 62 74 56 C75 50 71 44 65 40 C60 36 55 35 50 35 Z" fill="%234a5568"/>
    <polygon points="38,44 42,46 41,50 36,48" fill="%23cbd5e0"/>
    <circle cx="42" cy="48" r="2.5" fill="%23e53e3e"/>
    <path d="M30 55 L22 62 L32 65" fill="%234a5568"/>
  </svg>`,

  lannister: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%239b1c1c" stroke="%23d4af37" stroke-width="3"/>
    <!-- Lion Lannister rugissant -->
    <path d="M52 32 C48 30 43 32 40 36 C36 41 38 48 42 52 C38 55 36 60 37 66 C34 68 31 72 32 78 C33 83 38 88 44 87 C48 86 51 82 50 78 C54 82 60 83 66 80 C68 76 65 72 61 70 C67 69 71 64 71 58 C71 52 67 47 62 44 C65 38 60 33 52 32 Z" fill="%23d4af37"/>
    <circle cx="45" cy="40" r="2" fill="%23742a2a"/>
    <path d="M63 46 Q70 42 74 48" stroke="%23d4af37" stroke-width="3" fill="none"/>
  </svg>`,

  targaryen: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%231a202c" stroke="%23e53e3e" stroke-width="3"/>
    <!-- Dragon à trois têtes Targaryen -->
    <path d="M50 35 C42 32 35 38 35 46 C35 55 42 62 48 64 C42 66 38 72 40 78 C42 84 50 86 56 83 C62 80 64 74 61 68 C68 68 73 62 72 54 C71 46 64 40 57 41 C58 35 55 32 50 35 Z" fill="%23e53e3e"/>
    <polygon points="34,42 30,38 35,46" fill="%23feb2b2"/>
    <polygon points="50,30 48,25 53,30" fill="%23feb2b2"/>
    <polygon points="66,42 70,38 65,46" fill="%23feb2b2"/>
  </svg>`,

  baratheon: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23d69e2e" stroke="%231a202c" stroke-width="3"/>
    <!-- Cerf Baratheon couronné -->
    <path d="M50 40 C45 40 40 45 42 52 C43 56 46 59 49 60 L48 76 C44 78 40 82 42 86 C45 88 54 88 57 84 C58 80 55 76 52 74 L52 60 C56 59 60 55 59 50 C58 44 54 40 50 40 Z" fill="%231a202c"/>
    <!-- Bois de cerf -->
    <path d="M44 42 Q32 30 35 24 M42 36 Q30 36 26 40 M56 42 Q68 30 65 24 M58 36 Q70 36 74 40" stroke="%231a202c" stroke-width="2.5" fill="none"/>
    <!-- Couronne -->
    <polygon points="45,46 47,43 50,46 53,43 55,46 55,48 45,48" fill="%23ecc94b" stroke="%23744210" stroke-width="1"/>
  </svg>`,

  arryn: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%232b6cb0" stroke="%23e2e8f0" stroke-width="3"/>
    <!-- Faucon et croissant d'argent -->
    <path d="M35 45 A16 16 0 1 0 65 75 A20 20 0 1 1 35 45 Z" fill="%23ffffff"/>
    <path d="M50 45 L58 55 L52 57 L54 68 L48 60 L44 65 L46 56 L40 54 Z" fill="%23e2e8f0"/>
  </svg>`,

  tully: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%232c5282" stroke="%239b2c2c" stroke-width="3"/>
    <!-- Bandes ondulées rouges -->
    <path d="M12 40 Q30 35 50 45 T90 40 L90 52 Q70 47 50 57 T10 52 Z" fill="%239b2c2c"/>
    <path d="M12 65 Q30 60 50 70 T90 65 L88 77 Q70 72 50 82 T12 77 Z" fill="%239b2c2c"/>
    <!-- Truite d'argent bondissante -->
    <path d="M30 62 C38 48 60 48 70 56 C68 59 62 61 58 61 C50 61 42 66 38 72 C35 70 33 65 30 62 Z" fill="%23edf2f7" stroke="%23a0aec0" stroke-width="1.5"/>
    <polygon points="70,56 78,50 76,62" fill="%23edf2f7"/>
  </svg>`,

  greyjoy: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23171923" stroke="%23d69e2e" stroke-width="3"/>
    <!-- Kraken doré des Greyjoy -->
    <ellipse cx="50" cy="46" rx="10" ry="14" fill="%23d69e2e"/>
    <circle cx="46" cy="44" r="2" fill="%23171923"/>
    <circle cx="54" cy="44" r="2" fill="%23171923"/>
    <path d="M43 56 Q30 65 25 80 M47 59 Q38 75 40 90 M50 60 L50 92 M53 59 Q62 75 60 90 M57 56 Q70 65 75 80" stroke="%23d69e2e" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  tyrell: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23276749" stroke="%23ecc94b" stroke-width="3"/>
    <!-- Rose d'or sur champ sinople -->
    <circle cx="50" cy="60" r="8" fill="%23d69e2e"/>
    <circle cx="50" cy="46" r="9" fill="%23ecc94b"/>
    <circle cx="63" cy="55" r="9" fill="%23ecc94b"/>
    <circle cx="58" cy="71" r="9" fill="%23ecc94b"/>
    <circle cx="42" cy="71" r="9" fill="%23ecc94b"/>
    <circle cx="37" cy="55" r="9" fill="%23ecc94b"/>
    <circle cx="50" cy="60" r="5" fill="%23b7791f"/>
  </svg>`,

  martell: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23dd6b20" stroke="%23c53030" stroke-width="3"/>
    <!-- Soleil rouge percé d'une lance dorée -->
    <circle cx="50" cy="60" r="18" fill="%239b2c2c"/>
    <line x1="22" y1="88" x2="78" y2="32" stroke="%23d69e2e" stroke-width="4" stroke-linecap="round"/>
    <polygon points="78,32 82,24 74,28" fill="%23ecc94b"/>
  </svg>`,

  nightswatch: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%231a202c" stroke="%23cbd5e0" stroke-width="3"/>
    <!-- Épée de la Garde et Corneau -->
    <line x1="50" y1="26" x2="50" y2="92" stroke="%23e2e8f0" stroke-width="3.5"/>
    <line x1="38" y1="40" x2="62" y2="40" stroke="%23e2e8f0" stroke-width="3"/>
    <circle cx="50" cy="24" r="3" fill="%23e2e8f0"/>
    <path d="M35 55 Q50 68 65 55" stroke="%23a0aec0" stroke-width="2" fill="none"/>
  </svg>`,

  bolton: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23171923" stroke="%23e53e3e" stroke-width="3"/>
    <!-- Homme écorché en sautoir -->
    <line x1="28" y1="35" x2="72" y2="85" stroke="%23e53e3e" stroke-width="4"/>
    <line x1="72" y1="35" x2="28" y2="85" stroke="%23e53e3e" stroke-width="4"/>
    <circle cx="50" cy="40" r="5" fill="%23e53e3e"/>
  </svg>`,

  frey: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23718096" stroke="%232b6cb0" stroke-width="3"/>
    <!-- Deux tours reliées par un pont -->
    <rect x="25" y="45" width="16" height="35" fill="%232b6cb0"/>
    <rect x="59" y="45" width="16" height="35" fill="%232b6cb0"/>
    <rect x="37" y="60" width="26" height="8" fill="%232b6cb0"/>
    <polygon points="23,45 33,35 43,45" fill="%231a365d"/>
    <polygon points="57,45 67,35 77,45" fill="%231a365d"/>
  </svg>`,

  blackwood: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%239b2c2c" stroke="%231a202c" stroke-width="3"/>
    <!-- Écu intérieur noir -->
    <path d="M50 20 L75 35 L75 70 C75 88 50 100 50 100 C50 100 25 88 25 70 L25 35 Z" fill="%23171923"/>
    <!-- Barral mort blanc -->
    <path d="M50 38 L50 85 M50 52 L38 42 M50 60 L62 50 M50 68 L36 62 M50 74 L64 68" stroke="%23cbd5e0" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="50" cy="38" r="3" fill="%23e53e3e"/>
    <!-- Corbeaux sur champ écarlate -->
    <path d="M18 30 Q22 25 26 30 Q30 25 34 30" stroke="%23171923" stroke-width="2" fill="none"/>
    <path d="M66 30 Q70 25 74 30 Q78 25 82 30" stroke="%23171923" stroke-width="2" fill="none"/>
    <path d="M14 55 Q18 50 22 55 Q26 50 30 55" stroke="%23171923" stroke-width="1.8" fill="none"/>
    <path d="M70 55 Q74 50 78 55 Q82 50 86 55" stroke="%23171923" stroke-width="1.8" fill="none"/>
  </svg>`,

  royce: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23276749" stroke="%23b7791f" stroke-width="3"/>
    <!-- Bordure de runes de bronze -->
    <path d="M50 20 L75 35 L75 70 C75 88 50 100 50 100 C50 100 25 88 25 70 L25 35 Z" fill="%231a202c" stroke="%23d69e2e" stroke-width="2"/>
    <!-- Runes antiques des Premiers Hommes -->
    <path d="M50 40 L50 78 M42 48 L58 48 M40 60 L60 60 M44 72 L56 72" stroke="%23d69e2e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="35" r="3" fill="%23ecc94b"/>
  </svg>`,

  rosby: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23edf2f7" stroke="%239b2c2c" stroke-width="3"/>
    <!-- Trois chevrons de gueules -->
    <path d="M20 45 L50 25 L80 45" stroke="%239b2c2c" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M20 65 L50 45 L80 65" stroke="%239b2c2c" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M20 85 L50 65 L80 85" stroke="%239b2c2c" stroke-width="6" fill="none" stroke-linecap="round"/>
  </svg>`,

  dustin: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23171923" stroke="%23c53030" stroke-width="3"/>
    <!-- Couronne de rouille -->
    <path d="M35 38 L42 30 L50 36 L58 30 L65 38 L62 44 L38 44 Z" fill="%239b2c2c"/>
    <!-- Deux haches croisées -->
    <line x1="30" y1="50" x2="70" y2="90" stroke="%23a0aec0" stroke-width="4"/>
    <line x1="70" y1="50" x2="30" y2="90" stroke="%23a0aec0" stroke-width="4"/>
    <path d="M26 46 Q32 40 38 48 Q32 52 26 46 Z" fill="%23cbd5e0"/>
    <path d="M74 46 Q68 40 62 48 Q68 52 74 46 Z" fill="%23cbd5e0"/>
  </svg>`,

  redfort: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23edf2f7" stroke="%239b2c2c" stroke-width="4"/>
    <!-- Château rouge crénelé -->
    <path d="M30 85 L30 55 L38 55 L38 60 L44 60 L44 55 L56 55 L56 60 L62 60 L62 55 L70 55 L70 85 Z" fill="%239b2c2c"/>
    <rect x="44" y="68" width="12" height="17" rx="6" fill="%23edf2f7"/>
  </svg>`,

  crakehall: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23b7791f" stroke="%231a202c" stroke-width="3"/>
    <!-- Sanglier de Craquhall -->
    <path d="M30 65 Q35 45 55 45 Q70 45 74 58 Q72 75 58 78 Q42 80 30 65 Z" fill="%23171923"/>
    <!-- Défenses du sanglier -->
    <path d="M32 66 Q24 60 28 54 Q32 58 35 64 Z" fill="%23fffaf0"/>
    <circle cx="62" cy="52" r="2.5" fill="%23e53e3e"/>
  </svg>`,

  umber: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%237b1113" stroke="%23cbd5e0" stroke-width="3"/>
    <!-- Géant aux chaînes brisées -->
    <circle cx="50" cy="38" r="9" fill="%234a5568"/>
    <path d="M38 52 L62 52 L58 85 L42 85 Z" fill="%234a5568"/>
    <path d="M30 45 L38 52 M70 45 L62 52" stroke="%23cbd5e0" stroke-width="4" stroke-linecap="round"/>
    <circle cx="30" cy="45" r="4" fill="none" stroke="%23cbd5e0" stroke-width="2"/>
    <circle cx="70" cy="45" r="4" fill="none" stroke="%23cbd5e0" stroke-width="2"/>
  </svg>`,

  karstark: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23171923" stroke="%23cbd5e0" stroke-width="3"/>
    <!-- Soleil blanc d'hiver -->
    <circle cx="50" cy="60" r="14" fill="%23edf2f7"/>
    <path d="M50 30 L50 42 M50 78 L50 90 M20 60 L32 60 M68 60 L80 60 M28 38 L37 47 M63 73 L72 82 M28 82 L37 73 M63 47 L72 38" stroke="%23edf2f7" stroke-width="3.5" stroke-linecap="round"/>
  </svg>`,

  reed: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23744210" stroke="%2322543d" stroke-width="3"/>
    <!-- Lézard-lion des marais -->
    <path d="M30 65 Q50 35 70 65 Q60 85 50 70 Q40 85 30 65 Z" fill="%2322543d" stroke="%23171923" stroke-width="2"/>
    <circle cx="43" cy="50" r="2.5" fill="%23ecc94b"/>
    <circle cx="57" cy="50" r="2.5" fill="%23ecc94b"/>
    <path d="M50 35 L48 28 M50 35 L52 28" stroke="%2322543d" stroke-width="2"/>
  </svg>`,

  mallister: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%2344337a" stroke="%23e2e8f0" stroke-width="3"/>
    <!-- Aigle d'argent éployé -->
    <path d="M50 42 C40 32 25 40 22 55 C35 55 45 48 50 54 C55 48 65 55 78 55 C75 40 60 32 50 42 Z" fill="%23e2e8f0"/>
    <polygon points="50,42 46,65 54,65" fill="%23cbd5e0"/>
    <polygon points="46,65 42,85 50,78 58,85 54,65" fill="%23e2e8f0"/>
  </svg>`,

  bracken: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23ecc94b" stroke="%239b2c2c" stroke-width="3"/>
    <!-- Étalon rouge cabré -->
    <path d="M45 40 C42 35 48 28 54 32 C58 35 56 42 54 48 C60 52 66 58 64 68 C62 76 56 82 50 85 C46 80 48 72 45 68 C40 66 36 60 38 52 C40 46 45 44 45 40 Z" fill="%239b2c2c"/>
    <circle cx="51" cy="34" r="1.5" fill="%23ecc94b"/>
  </svg>`,

  dayne: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23553c9a" stroke="%23e2e8f0" stroke-width="3"/>
    <!-- Épée blanche et étoile filante -->
    <line x1="28" y1="88" x2="72" y2="34" stroke="%23ffffff" stroke-width="4"/>
    <line x1="60" y1="42" x2="68" y2="50" stroke="%23ffffff" stroke-width="3"/>
    <circle cx="36" cy="42" r="5" fill="%23ffffff"/>
    <path d="M36 32 L36 52 M26 42 L46 42" stroke="%23ffffff" stroke-width="2"/>
  </svg>`,

  tarly: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%2322543d" stroke="%23ecc94b" stroke-width="3"/>
    <!-- Archer d'émeraude -->
    <circle cx="46" cy="38" r="5" fill="%23ecc94b"/>
    <path d="M42 45 L50 45 L48 70 L40 70 Z" fill="%23ecc94b"/>
    <path d="M36 48 Q55 35 68 55 Q55 75 36 62" stroke="%23ecc94b" stroke-width="2.5" fill="none"/>
    <line x1="32" y1="55" x2="70" y2="55" stroke="%23ecc94b" stroke-width="2"/>
  </svg>`,

  florent: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%2322543d" stroke="%23dd6b20" stroke-width="3"/>
    <!-- Tête de renard -->
    <polygon points="50,75 35,45 65,45" fill="%23dd6b20"/>
    <polygon points="35,45 32,32 42,42" fill="%23dd6b20"/>
    <polygon points="65,45 68,32 58,42" fill="%23dd6b20"/>
    <circle cx="43" cy="50" r="2.5" fill="%23171923"/>
    <circle cx="57" cy="50" r="2.5" fill="%23171923"/>
    <circle cx="50" cy="72" r="2" fill="%23171923"/>
  </svg>`,

  dondarrion: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23171923" stroke="%23805ad5" stroke-width="3"/>
    <!-- Éclair pourpre fourchu -->
    <polygon points="56,26 38,58 50,58 42,92 68,52 54,52" fill="%239f7aea"/>
    <circle cx="28" cy="40" r="1.5" fill="%23ffffff"/>
    <circle cx="72" cy="36" r="1.5" fill="%23ffffff"/>
    <circle cx="32" cy="75" r="1.5" fill="%23ffffff"/>
    <circle cx="70" cy="78" r="1.5" fill="%23ffffff"/>
  </svg>`,

  connington: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%239b2c2c" stroke="%23cbd5e0" stroke-width="3"/>
    <!-- Griffons dansants affrontés -->
    <path d="M38 45 Q48 35 44 65 Q38 80 32 75 Z" fill="%23cbd5e0"/>
    <path d="M62 45 Q52 35 56 65 Q62 80 68 75 Z" fill="%23cbd5e0"/>
  </svg>`,

  yronwood: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23d69e2e" stroke="%23171923" stroke-width="3"/>
    <!-- Herse de fer noir -->
    <rect x="35" y="40" width="30" height="40" fill="none" stroke="%23171923" stroke-width="4"/>
    <line x1="45" y1="36" x2="45" y2="85" stroke="%23171923" stroke-width="3"/>
    <line x1="55" y1="36" x2="55" y2="85" stroke="%23171923" stroke-width="3"/>
    <line x1="33" y1="52" x2="67" y2="52" stroke="%23171923" stroke-width="3"/>
    <line x1="33" y1="68" x2="67" y2="68" stroke="%23171923" stroke-width="3"/>
  </svg>`,

  hightower: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23718096" stroke="%23ecc94b" stroke-width="3"/>
    <!-- Haute Tour de pierre avec flamme au sommet -->
    <polygon points="40,88 60,88 56,42 44,42" fill="%23edf2f7"/>
    <polygon points="42,42 58,42 55,36 45,36" fill="%23cbd5e0"/>
    <path d="M50 22 Q44 32 50 36 Q56 32 50 22 Z" fill="%23dd6b20"/>
  </svg>`,

  swann: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%232b6cb0" stroke="%23cbd5e0" stroke-width="3"/>
    <!-- Cygne blanc et cygne noir -->
    <path d="M40 50 C36 42 45 42 43 55 C40 68 30 70 42 75 Z" fill="%23edf2f7"/>
    <path d="M60 50 C64 42 55 42 57 55 C60 68 70 70 58 75 Z" fill="%23171923"/>
  </svg>`,

  selmy: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23744210" stroke="%23ecc94b" stroke-width="3"/>
    <!-- Trois épis de blé d'or -->
    <line x1="50" y1="40" x2="50" y2="85" stroke="%23ecc94b" stroke-width="3"/>
    <line x1="38" y1="46" x2="48" y2="85" stroke="%23ecc94b" stroke-width="2.5"/>
    <line x1="62" y1="46" x2="52" y2="85" stroke="%23ecc94b" stroke-width="2.5"/>
  </svg>`,

  caswell: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%23e2e8f0" stroke="%23d69e2e" stroke-width="3"/>
    <!-- Centaure d'or avec arc -->
    <circle cx="48" cy="40" r="4" fill="%23d69e2e"/>
    <path d="M44 46 L54 46 L58 65 L40 65 Z" fill="%23d69e2e"/>
    <line x1="38" y1="42" x2="62" y2="42" stroke="%23744210" stroke-width="2"/>
  </svg>`,

  generic: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120">
    <path d="M50 5 L90 25 L90 75 C90 100 50 115 50 115 C50 115 10 100 10 75 L10 25 Z" fill="%232d3748" stroke="%23d4af37" stroke-width="3"/>
    <circle cx="50" cy="60" r="16" fill="%23d4af37" opacity="0.3"/>
    <path d="M50 35 L50 85 M35 50 L65 50" stroke="%23d4af37" stroke-width="3"/>
  </svg>`
};
