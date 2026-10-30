/**
 * Fotograma 04 / 36
 * Escena: Puesta de Sol en el Mar (Luz crepuscular dorada)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-04',
  frameNumber: 4,
  title: 'Puesta de Sol en el Faro',
  year: '2023',
  date: '05 de septiembre de 2023, 20:45',
  sceneEV: 9, // Luz crepuscular baja
  tags: ['Playa', 'Atardecer', 'Paisaje', 'Naturaleza', '2023'],
  analogCaption: 'Atardecer inolvidable frente al faro de Finisterre. Luz tenue al límite del carrete.',
  pageNumber: 'Fotograma 04 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro (HDR+)',
    lens: '24mm ƒ/1.85 Rango dinámico extendido',
    iso: 'ISO 125 • 1/60s',
    gps: '42.8824° N, 9.2713° W (Cabo Finisterre, Galicia)',
    fileSize: '3.76 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Puesta de sol / Atardecer', conf: '99.8%' },
    { label: 'Horizonte marino', conf: '98.3%' },
    { label: 'Hora dorada', conf: '97.5%' },
    { label: 'Silueta de faro', conf: '95.0%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sunset-p4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a0933"/>
          <stop offset="28%" stop-color="#6a1b4d"/>
          <stop offset="58%" stop-color="#d84315"/>
          <stop offset="82%" stop-color="#ff8f00"/>
          <stop offset="100%" stop-color="#ffe082"/>
        </linearGradient>
        <radialGradient id="sun-glow-p4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fffde7"/>
          <stop offset="45%" stop-color="#ffca28" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#ff6f00" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="sea-p4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e65100"/>
          <stop offset="35%" stop-color="#6d1b3b"/>
          <stop offset="75%" stop-color="#1f1135"/>
          <stop offset="100%" stop-color="#0b0719"/>
        </linearGradient>
        <linearGradient id="beam-p4" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stop-color="#fff9c4" stop-opacity="0.65"/>
          <stop offset="100%" stop-color="#fff9c4" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- Cielo crepuscular dramático -->
      <rect width="300" height="132" fill="url(#sunset-p4)"/>

      <!-- Primeras estrellas en el cenit -->
      <circle cx="35" cy="18" r="1" fill="#ffffff" opacity="0.8"/>
      <circle cx="95" cy="12" r="1.2" fill="#ffffff" opacity="0.6"/>
      <circle cx="210" cy="20" r="1" fill="#ffffff" opacity="0.7"/>

      <!-- Sol poniente hundiéndose en el horizonte -->
      <circle cx="132" cy="128" r="54" fill="url(#sun-glow-p4)"/>
      <circle cx="132" cy="128" r="25" fill="#fffde7"/>

      <!-- Nubes arreboladas -->
      <path d="M12 56 Q45 48 78 55 Q55 62 12 56 Z" fill="#4a154b" opacity="0.55"/>
      <path d="M165 72 Q205 64 245 71 Q210 78 165 72 Z" fill="#ffab40" opacity="0.45"/>
      <path d="M25 95 Q68 88 105 94 Q68 100 25 95 Z" fill="#ff6d00" opacity="0.4"/>

      <!-- Océano al atardecer -->
      <rect y="130" width="300" height="70" fill="url(#sea-p4)"/>

      <!-- Estela de reflejos dorados sobre las olas -->
      <g fill="#ffd54f">
        <ellipse cx="132" cy="135" rx="24" ry="2" fill="#fffde7"/>
        <ellipse cx="132" cy="141" rx="20" ry="1.8" opacity="0.9"/>
        <ellipse cx="130" cy="148" rx="26" ry="2" opacity="0.8"/>
        <ellipse cx="134" cy="156" rx="18" ry="2.2" opacity="0.75"/>
        <ellipse cx="131" cy="165" rx="28" ry="2.4" opacity="0.65"/>
        <ellipse cx="133" cy="176" rx="22" ry="2.5" opacity="0.5"/>
        <ellipse cx="132" cy="188" rx="32" ry="3" opacity="0.35"/>
      </g>

      <!-- Haz de luz del faro proyectado sobre el cielo -->
      <polygon points="256,82 40,35 40,72" fill="url(#beam-p4)"/>
      <polygon points="256,82 300,66 300,90" fill="url(#beam-p4)"/>

      <!-- Acantilado rocoso de Finisterre y silueta del faro -->
      <path d="M192 200 L204 162 L218 152 L232 135 L268 132 L285 138 L300 136 L300 200 Z" fill="#120817"/>
      <path d="M204 162 L232 135 L245 142 L222 172 Z" fill="#26132c" opacity="0.6"/>

      <!-- Torre del Faro -->
      <polygon points="249,134 252,88 260,88 263,134" fill="#1a0d22"/>
      <polygon points="250.5,116 251.5,102 260.5,102 261.5,116" fill="#e0e0e0" opacity="0.25"/>
      <!-- Balcón y linterna -->
      <rect x="249" y="86" width="14" height="3" fill="#0d0612"/>
      <rect x="251.5" y="78" width="9" height="8" fill="#fffde7"/>
      <circle cx="256" cy="82" r="5" fill="#ffffff"/>
      <!-- Cúpula y pararrayos -->
      <path d="M250 78 Q256 70 262 78 Z" fill="#120817"/>
      <line x1="256" y1="73" x2="256" y2="66" stroke="#120817" stroke-width="1.5"/>

      <!-- Bandada de aves marinas volando a contraluz -->
      <path d="M68 82 Q72 77 76 82 Q80 77 84 82" stroke="#1a0933" stroke-width="1.4" fill="none"/>
      <path d="M88 74 Q91 70 94 74 Q97 70 100 74" stroke="#1a0933" stroke-width="1.2" fill="none"/>
    </svg>
  `
});
