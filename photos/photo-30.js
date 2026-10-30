/**
 * Fotograma 30 / 36
 * Escena: Furgoneta Camper y Tablas de Surf en la Costa (Verano surfero)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-30',
  frameNumber: 30,
  title: 'Caravana y Surf en la Costa',
  year: '2024',
  date: '19 de agosto de 2024, 18:15',
  sceneEV: 14, // Sol de verano costero
  tags: ['Playa', 'Viaje', 'Verano', 'Amigos', 'Aventura', '2024'],
  analogCaption: 'La furgoneta clásica aparcada frente a las olas de Tarifa con las tablas en la baca.',
  pageNumber: 'Fotograma 30 de 36',
  exif: {
    camera: 'Google Pixel 8',
    lens: '25mm ƒ/1.68',
    iso: 'ISO 64 • 1/2000s',
    gps: '36.0143° N, 5.6044° W (Playa de Valdevaqueros, Tarifa)',
    fileSize: '3.85 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Furgoneta camper vintage', conf: '99.9%' },
    { label: 'Tablas de surf', conf: '99.3%' },
    { label: 'Playa y palmeras', conf: '97.8%' },
    { label: 'Viaje por carretera', conf: '96.1%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="surf-sky-p30" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#29b6f6"/>
          <stop offset="65%" stop-color="#81d4fa"/>
          <stop offset="100%" stop-color="#fff59d"/>
        </linearGradient>
      </defs>

      <!-- Cielo soleado y mar turquesa -->
      <rect width="300" height="115" fill="url(#surf-sky-p30)"/>
      <circle cx="246" cy="40" r="18" fill="#fffde7"/>
      <rect y="112" width="300" height="32" fill="#00acc1"/>
      <path d="M0 136 Q60 130 120 136 T240 136 T300 136" stroke="#ffffff" stroke-width="3" fill="none"/>

      <!-- Arena dorada de la duna -->
      <rect y="140" width="300" height="60" fill="#ffe082"/>

      <!-- Palmera tropical a la izquierda -->
      <path d="M38 165 Q46 105 32 52" stroke="#6d4c41" stroke-width="7" fill="none" stroke-linecap="round"/>
      <g fill="#2e7d32">
        <path d="M32 52 Q2 42 -4 64 Q16 58 32 52 Z"/>
        <path d="M32 52 Q8 24 22 14 Q32 32 32 52 Z"/>
        <path d="M32 52 Q58 24 72 42 Q50 46 32 52 Z"/>
        <path d="M32 52 Q64 52 68 72 Q48 62 32 52 Z"/>
      </g>

      <!-- FURGONETA CAMPER CLÁSICA BICOLOR (Turquesa y Blanco) CON TABLA DE SURF -->
      <g transform="translate(82, 74)">
        <!-- Sombra en la arena -->
        <ellipse cx="72" cy="94" rx="70" ry="7" fill="#c6922c" opacity="0.45"/>

        <!-- Tabla de surf amarilla y roja sobre la baca -->
        <path d="M22 8 Q72 -2 124 6 Q114 14 22 12 Z" fill="#ffca28" stroke="#e65100" stroke-width="1.5"/>
        <path d="M32 10 L36 2 L42 10 Z" fill="#e53935"/> <!-- Quilla -->
        <line x1="48" y1="10" x2="48" y2="18" stroke="#37474f" stroke-width="2"/>
        <line x1="96" y1="10" x2="96" y2="18" stroke="#37474f" stroke-width="2"/>

        <!-- Carrocería superior blanca crema -->
        <path d="M18 18 L122 18 Q134 18 136 36 L138 54 L8 54 L12 30 Q14 18 18 18 Z" fill="#fff8e1" stroke="#b0bec5" stroke-width="1.5"/>
        <!-- Carrocería inferior turquesa -->
        <rect x="6" y="52" width="132" height="34" rx="6" fill="#00897b" stroke="#00695c" stroke-width="1.5"/>
        <line x1="6" y1="52" x2="138" y2="52" stroke="#ffffff" stroke-width="2.5"/>

        <!-- Ventanillas panorámicas -->
        <rect x="18" y="24" width="26" height="22" rx="3" fill="#455a64"/>
        <rect x="50" y="24" width="28" height="22" rx="2" fill="#455a64"/>
        <rect x="84" y="24" width="28" height="22" rx="2" fill="#455a64"/>
        <path d="M118 24 L130 24 L133 46 L118 46 Z" fill="#455a64"/>

        <!-- Parachoques blancos y ruedas con tapacubos cromados -->
        <rect x="2" y="78" width="12" height="5" rx="2" fill="#ffffff"/>
        <rect x="132" y="78" width="12" height="5" rx="2" fill="#ffffff"/>
        <circle cx="34" cy="86" r="14" fill="#212121"/>
        <circle cx="34" cy="86" r="8" fill="#eceff1"/>
        <circle cx="110" cy="86" r="14" fill="#212121"/>
        <circle cx="110" cy="86" r="8" fill="#eceff1"/>
      </g>
    </svg>
  `
});

