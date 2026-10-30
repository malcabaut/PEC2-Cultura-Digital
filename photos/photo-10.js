/**
 * Fotograma 10 / 36
 * Escena: Concierto de Verano al Aire Libre (Noche cerrada con focos de escenario)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-10',
  frameNumber: 10,
  title: 'Concierto de Verano Nocturno',
  year: '2024',
  date: '02 de julio de 2024, 23:10',
  sceneEV: 5, // Escena nocturna con focos intensos
  tags: ['Fiesta', 'Amigos', 'Música', 'Noche', '2024'],
  analogCaption: 'Festival de música indie en el parque. Manos alzadas entre focos de colores.',
  pageNumber: 'Fotograma 10 de 36',
  exif: {
    camera: 'Google Pixel 8 (Visión Nocturna / Astrofotografía)',
    lens: '25mm ƒ/1.68',
    iso: 'ISO 1250 • 1/30s',
    gps: '40.4168° N, 3.7038° W (Festival Río Babel, Madrid)',
    fileSize: '3.88 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Concierto en vivo', conf: '99.6%' },
    { label: 'Multitud de personas', conf: '98.7%' },
    { label: 'Focos de escenario', conf: '97.2%' },
    { label: 'Vida nocturna', conf: '94.8%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="night-p10" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#070410"/>
          <stop offset="100%" stop-color="#1b0c2e"/>
        </linearGradient>
        <linearGradient id="beam-pink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff007f" stop-opacity="0.65"/>
          <stop offset="100%" stop-color="#ff007f" stop-opacity="0.05"/>
        </linearGradient>
        <linearGradient id="beam-cyan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00e5ff" stop-opacity="0.65"/>
          <stop offset="100%" stop-color="#00e5ff" stop-opacity="0.05"/>
        </linearGradient>
        <linearGradient id="beam-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffea00" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#ffea00" stop-opacity="0.05"/>
        </linearGradient>
      </defs>

      <!-- Cielo nocturno del festival -->
      <rect width="300" height="200" fill="url(#night-p10)"/>

      <!-- Estructura Truss superior y torres de sonido (Line Array) -->
      <rect x="35" y="18" width="230" height="6" fill="#263238" stroke="#455a64" stroke-width="1"/>
      <rect x="38" y="24" width="6" height="110" fill="#1c262b"/>
      <rect x="256" y="24" width="6" height="110" fill="#1c262b"/>
      <!-- Altavoces colgantes -->
      <rect x="48" y="28" width="12" height="32" rx="2" fill="#111"/>
      <rect x="240" y="28" width="12" height="32" rx="2" fill="#111"/>

      <!-- Haces de luz láser y focos cruzados -->
      <polygon points="65,22 0,200 105,200" fill="url(#beam-pink)"/>
      <polygon points="150,22 65,200 235,200" fill="url(#beam-cyan)"/>
      <polygon points="235,22 195,200 300,200" fill="url(#beam-gold)"/>

      <!-- Focos brillantes en el puente de luces -->
      <g fill="#ffffff">
        <circle cx="65" cy="22" r="4"/><circle cx="105" cy="22" r="3.5"/>
        <circle cx="150" cy="22" r="4.5"/><circle cx="195" cy="22" r="3.5"/>
        <circle cx="235" cy="22" r="4"/>
      </g>

      <!-- Pantalla LED gigante al fondo del escenario -->
      <rect x="75" y="54" width="150" height="62" rx="2" fill="#120824" stroke="#00e5ff" stroke-width="1.2"/>
      <!-- Ondas ecualizadoras en la pantalla LED -->
      <g fill="#ff007f" opacity="0.7">
        <rect x="88" y="88" width="6" height="20"/><rect x="98" y="76" width="6" height="32"/>
        <rect x="108" y="68" width="6" height="40"/><rect x="118" y="82" width="6" height="26"/>
        <rect x="176" y="80" width="6" height="28"/><rect x="186" y="70" width="6" height="38"/>
        <rect x="196" y="78" width="6" height="30"/><rect x="206" y="90" width="6" height="18"/>
      </g>

      <!-- Batería y banda en silueta sobre la tarima -->
      <rect x="55" y="116" width="190" height="18" fill="#1a1026"/>
      <circle cx="150" cy="108" r="7" fill="#00e5ff" opacity="0.5"/>
      <!-- Cantante con guitarra en el centro -->
      <circle cx="150" cy="90" r="5.5" fill="#ffffff"/>
      <path d="M144 96 L156 96 L158 116 L142 116 Z" fill="#0d0614"/>
      <line x1="140" y1="106" x2="164" y2="98" stroke="#ff007f" stroke-width="2.5"/>

      <!-- Confeti luminoso flotando -->
      <g fill="#fffde7" opacity="0.8">
        <circle cx="92" cy="48" r="1.5"/><circle cx="132" cy="42" r="1.2"/><circle cx="178" cy="46" r="1.5"/>
        <circle cx="212" cy="58" r="1.2"/><circle cx="72" cy="70" r="1.5"/>
      </g>

      <!-- Multitud en primer plano con brazos en alto y móvil grabando -->
      <g fill="#07030c">
        <rect y="156" width="300" height="44"/>
        <circle cx="24" cy="152" r="12"/>
        <circle cx="56" cy="148" r="13"/>
        <circle cx="92" cy="150" r="12"/>
        <circle cx="128" cy="146" r="14"/>
        <circle cx="168" cy="148" r="13"/>
        <circle cx="206" cy="145" r="14"/>
        <circle cx="244" cy="150" r="12"/>
        <circle cx="278" cy="152" r="12"/>
        <!-- Brazos levantados -->
        <path d="M48 148 L38 122 M64 148 L72 124 M120 146 L112 118 M136 146 L144 118 M198 146 L190 120 M214 146 L224 118 M268 150 L258 126" stroke="#07030c" stroke-width="5.5" stroke-linecap="round"/>
      </g>

      <!-- Pequeña pantalla de smartphone iluminada entre el público -->
      <rect x="108" y="110" width="7" height="11" rx="1" fill="#80d8ff" stroke="#ffffff" stroke-width="0.8"/>
    </svg>
  `
});
