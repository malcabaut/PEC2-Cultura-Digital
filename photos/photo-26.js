/**
 * Fotograma 26 / 36
 * Escena: Aurora Boreal sobre Cabaña Invernal (Cielo nocturno polar)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-26',
  frameNumber: 26,
  title: 'Aurora Boreal en Laponia',
  year: '2024',
  date: '19 de febrero de 2024, 22:30',
  sceneEV: 4, // Noche ártica con luminiscencia solar
  tags: ['Viaje', 'Noche', 'Nieve', 'Naturaleza', 'Cielo', '2024'],
  analogCaption: 'Cortinas de luz esmeralda bailando sobre la cabaña roja en el círculo polar ártico.',
  pageNumber: 'Fotograma 26 de 36',
  exif: {
    camera: 'Google Pixel 8 Pro (Modo Astrofotografía)',
    lens: '24mm ƒ/1.68',
    iso: 'ISO 1600 • 4.0s',
    gps: '68.3568° N, 18.8312° E (Abisko, Laponia)',
    fileSize: '4.12 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Aurora boreal', conf: '99.9%' },
    { label: 'Cielo estrellado polar', conf: '99.4%' },
    { label: 'Cabaña en la nieve', conf: '97.8%' },
    { label: 'Astrofotografía', conf: '96.5%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arctic-sky-p26" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020612"/>
          <stop offset="100%" stop-color="#0a1f2e"/>
        </linearGradient>
        <linearGradient id="aurora-green-p26" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#00e676" stop-opacity="0.75"/>
          <stop offset="55%" stop-color="#1de9b6" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#ab47bc" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- Cielo ártico estrellado -->
      <rect width="300" height="145" fill="url(#arctic-sky-p26)"/>
      <g fill="#ffffff" opacity="0.85">
        <circle cx="24" cy="18" r="1"/><circle cx="72" cy="12" r="1.2"/><circle cx="135" cy="22" r="1"/>
        <circle cx="198" cy="14" r="1.3"/><circle cx="256" cy="24" r="1"/><circle cx="282" cy="48" r="1.1"/>
        <circle cx="42" cy="64" r="0.9"/><circle cx="164" cy="58" r="1"/>
      </g>

      <!-- CORTINAS ONDULANTES DE AURORA BOREAL -->
      <path d="M-10 85 Q45 42 105 74 T220 58 T310 76 L310 12 Q220 0 105 24 T-10 30 Z" fill="url(#aurora-green-p26)"/>
      <path d="M10 105 Q80 62 150 92 T290 68 L290 24 Q150 40 80 18 T10 50 Z" fill="url(#aurora-green-p26)" opacity="0.8"/>
      <path d="M-5 88 Q50 48 110 76 T225 60 T305 78" stroke="#69f0ae" stroke-width="2.5" fill="none" opacity="0.7"/>

      <!-- Montañas nevadas iluminadas por el fulgor verde -->
      <polygon points="0,145 55,92 115,145" fill="#102a3b"/>
      <polygon points="55,92 85,120 52,124" fill="#26a69a" opacity="0.35"/>
      <polygon points="180,145 245,86 300,145" fill="#102a3b"/>

      <!-- Ladera nevada nocturna -->
      <path d="M0 140 Q150 128 300 142 L300 200 L0 200 Z" fill="#cfd8dc"/>
      <path d="M0 155 Q150 142 300 158 L300 200 L0 200 Z" fill="#b0bec5"/>

      <!-- Abetos boreales cubiertos de nieve -->
      <g fill="#0d2622">
        <polygon points="28,108 14,148 42,148"/>
        <polygon points="52,114 40,150 64,150"/>
        <polygon points="256,110 242,150 270,150"/>
      </g>

      <!-- Cabaña nórdica roja con ventanas cálidamente iluminadas -->
      <g transform="translate(118, 114)">
        <!-- Chimenea con humo -->
        <rect x="44" y="-6" width="6" height="14" fill="#37474f"/>
        <path d="M47 -8 Q52 -16 46 -22" stroke="#cfd8dc" stroke-width="2" fill="none" opacity="0.5" stroke-linecap="round"/>
        <!-- Fachada de madera roja -->
        <polygon points="6,16 32,0 58,16 58,42 6,42" fill="#b71c1c"/>
        <!-- Tejado grueso de nieve blanca -->
        <path d="M2 18 L32 -2 L62 18" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <!-- Ventanas encendidas y reflejo cálido en la nieve -->
        <rect x="16" y="22" width="12" height="11" rx="1" fill="#ffeb3b" stroke="#ffffff" stroke-width="1"/>
        <rect x="36" y="22" width="12" height="11" rx="1" fill="#ffeb3b" stroke="#ffffff" stroke-width="1"/>
        <polygon points="14,42 50,42 64,62 0,62" fill="#ffd54f" opacity="0.35"/>
      </g>
    </svg>
  `
});

