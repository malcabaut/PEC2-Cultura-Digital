/**
 * Fotograma 22 / 36
 * Escena: Estación de Tren Antigua (Tragaluces de hierro forjado y vapor)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-22',
  frameNumber: 22,
  title: 'Estación de Tren del Norte',
  year: '2023',
  date: '02 de diciembre de 2023, 10:15',
  sceneEV: 9, // Interior industrial con haces de luz de tragaluz
  tags: ['Viaje', 'Tren', 'Arquitectura', 'Vintage', '2023'],
  analogCaption: 'La marquesina de hierro y cristal de la estación. Haces de luz entre las columnas.',
  pageNumber: 'Fotograma 22 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 200 • 1/160s',
    gps: '40.4206° N, 3.7197° W (Estación de Príncipe Pío, Madrid)',
    fileSize: '3.82 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Estación de ferrocarril', conf: '99.7%' },
    { label: 'Estructura de hierro forjado', conf: '98.5%' },
    { label: 'Vías de tren', conf: '96.8%' },
    { label: 'Arquitectura industrial', conf: '94.2%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roof-p22" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eceff1"/>
          <stop offset="100%" stop-color="#90a4ae"/>
        </linearGradient>
      </defs>

      <!-- Interior de la estación histórica -->
      <rect width="300" height="200" fill="#263238"/>

      <!-- Bóveda acristalada de hierro forjado -->
      <path d="M0 72 Q150 -10 300 72 L300 0 L0 0 Z" fill="url(#roof-p22)"/>
      <g stroke="#1c262b" stroke-width="3.5" fill="none">
        <path d="M0 72 Q150 -10 300 72"/>
        <path d="M0 86 Q150 6 300 86" stroke-width="2.5"/>
        <line x1="50" y1="48" x2="50" y2="0" stroke-width="1.5"/>
        <line x1="100" y1="32" x2="100" y2="0" stroke-width="1.5"/>
        <line x1="150" y1="26" x2="150" y2="0" stroke-width="2"/>
        <line x1="200" y1="32" x2="200" y2="0" stroke-width="1.5"/>
        <line x1="250" y1="48" x2="250" y2="0" stroke-width="1.5"/>
      </g>

      <!-- Haces de sol oblicuos atravesando el vapor -->
      <polygon points="95,28 145,26 220,200 60,200" fill="#fffde7" opacity="0.16"/>

      <!-- Columnas de fundición en los andenes -->
      <rect x="28" y="64" width="6" height="96" fill="#11171a"/>
      <rect x="266" y="64" width="6" height="96" fill="#11171a"/>

      <!-- Andenes laterales en perspectiva -->
      <polygon points="0,120 96,108 52,200 0,200" fill="#546e7a"/>
      <polygon points="300,120 204,108 248,200 300,200" fill="#546e7a"/>
      <line x1="96" y1="108" x2="52" y2="200" stroke="#ffd54f" stroke-width="2"/>
      <line x1="204" y1="108" x2="248" y2="200" stroke="#ffd54f" stroke-width="2"/>

      <!-- Vías centrales y traviesas -->
      <polygon points="96,108 204,108 248,200 52,200" fill="#1c262b"/>
      <g stroke="#455a64" stroke-width="2.5">
        <line x1="112" y1="142" x2="188" y2="142"/>
        <line x1="102" y1="160" x2="198" y2="160"/>
        <line x1="90" y1="180" x2="210" y2="180"/>
        <line x1="78" y1="196" x2="222" y2="196"/>
      </g>
      <line x1="130" y1="128" x2="88" y2="200" stroke="#b0bec5" stroke-width="2.5"/>
      <line x1="170" y1="128" x2="212" y2="200" stroke="#b0bec5" stroke-width="2.5"/>

      <!-- TREN CLÁSICO EN EL ANDÉN CENTRAL CON FARO ENCENDIDO -->
      <g transform="translate(116, 68)">
        <rect x="4" y="8" width="60" height="56" rx="8" fill="#b71c1c" stroke="#1a1a1a" stroke-width="2"/>
        <rect x="4" y="34" width="60" height="6" fill="#ffd54f"/>
        <!-- Parabrisas frontal -->
        <rect x="12" y="16" width="20" height="14" rx="2" fill="#b3e5fc"/>
        <rect x="36" y="16" width="20" height="14" rx="2" fill="#b3e5fc"/>
        <!-- Faro central y laterales -->
        <circle cx="34" cy="48" r="6" fill="#fffde7" stroke="#ffb300" stroke-width="1.5"/>
        <circle cx="14" cy="52" r="3" fill="#fff9c4"/>
        <circle cx="54" cy="52" r="3" fill="#fff9c4"/>
        <!-- Parachoques -->
        <rect x="0" y="60" width="68" height="5" fill="#111"/>
      </g>

      <!-- Nube de vapor blanco junto a las ruedas -->
      <g fill="#ffffff" opacity="0.55">
        <circle cx="104" cy="128" r="10"/><circle cx="114" cy="134" r="8"/><circle cx="194" cy="130" r="9"/>
      </g>

      <!-- Reloj clásico de doble cara colgado de la marquesina -->
      <line x1="150" y1="26" x2="150" y2="38" stroke="#111" stroke-width="2"/>
      <circle cx="150" cy="46" r="11" fill="#fffde7" stroke="#263238" stroke-width="2.5"/>
      <line x1="150" y1="46" x2="150" y2="39" stroke="#212121" stroke-width="1.8"/>
      <line x1="150" y1="46" x2="155" y2="46" stroke="#212121" stroke-width="1.4"/>
    </svg>
  `
});
