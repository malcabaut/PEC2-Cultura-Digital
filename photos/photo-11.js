/**
 * Fotograma 11 / 36
 * Escena: Ruta por la Montaña Nevada (Luz extrema cegadora)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-11',
  frameNumber: 11,
  title: 'Cumbre Nevada en Pirineos',
  year: '2023',
  date: '28 de diciembre de 2023, 12:40',
  sceneEV: 16, // Nieve bajo sol cenital: luminosidad extrema
  tags: ['Viaje', 'Montaña', 'Nieve', 'Paisaje', 'Naturaleza', '2023'],
  analogCaption: 'Ascensión invernal al pico. El reflejo de la nieve quemaba la vista sin gafas oscuras.',
  pageNumber: 'Fotograma 11 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro (HDR+ Nieve)',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 40 • 1/4000s',
    gps: '42.6322° N, 0.6548° E (Pico Aneto, Pirineos)',
    fileSize: '3.95 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Picos nevados', conf: '99.9%' },
    { label: 'Alpinismo e invierno', conf: '98.8%' },
    { label: 'Cielo azul glacial', conf: '97.4%' },
    { label: 'Paisaje de montaña', conf: '96.2%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-p11" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d47a1"/>
          <stop offset="55%" stop-color="#1e88e5"/>
          <stop offset="100%" stop-color="#bbdefb"/>
        </linearGradient>
        <linearGradient id="snow-shade-p11" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#90caf9"/>
          <stop offset="100%" stop-color="#5c6bc0"/>
        </linearGradient>
      </defs>

      <!-- Cielo alpino azul intenso de alta montaña -->
      <rect width="300" height="135" fill="url(#sky-p11)"/>

      <!-- Sol cenital deslumbrante -->
      <circle cx="248" cy="32" r="28" fill="#ffffff" opacity="0.35"/>
      <circle cx="248" cy="32" r="14" fill="#ffffff"/>

      <!-- Cordillera secundaria a la izquierda -->
      <polygon points="-10,145 65,48 145,145" fill="#ffffff"/>
      <polygon points="65,48 145,145 92,145 72,96 58,108" fill="url(#snow-shade-p11)"/>

      <!-- GRAN PICO PRINCIPAL (ANETO) CON ARISTA Y CARA EN SOMBRA -->
      <polygon points="75,155 178,22 285,155" fill="#ffffff"/>
      <!-- Cara oriental en sombra azulada glaciar -->
      <polygon points="178,22 285,155 198,155 186,102 168,84 176,55" fill="url(#snow-shade-p11)"/>
      <!-- Afloramientos rocosos de granito -->
      <polygon points="154,68 168,54 164,76" fill="#455a64"/>
      <polygon points="192,74 208,92 188,96" fill="#37474f"/>

      <!-- Pinos alpinos nevados en la falda media -->
      <g transform="translate(24, 128)">
        <polygon points="8,0 0,18 16,18" fill="#1b5e20"/>
        <polygon points="8,0 3,10 13,10" fill="#ffffff"/>
        <polygon points="24,4 16,22 32,22" fill="#1b5e20"/>
        <polygon points="24,4 19,13 29,13" fill="#ffffff"/>
      </g>

      <!-- Ladera de nieve virgen en primer plano -->
      <path d="M0 148 Q85 128 175 152 Q240 165 300 142 L300 200 L0 200 Z" fill="#ffffff"/>
      <path d="M0 164 Q110 146 210 172 L300 158 L300 200 L0 200 Z" fill="#e3f2fd"/>

      <!-- Huellas en la nieve hacia la cumbre -->
      <g fill="#90caf9">
        <ellipse cx="145" cy="192" rx="3" ry="1.5"/>
        <ellipse cx="158" cy="185" rx="2.8" ry="1.4"/>
        <ellipse cx="172" cy="178" rx="2.5" ry="1.2"/>
        <ellipse cx="186" cy="171" rx="2.2" ry="1.1"/>
      </g>

      <!-- Alpinista con chaqueta roja, mochila y bastones -->
      <g transform="translate(198, 142)">
        <ellipse cx="8" cy="26" rx="9" ry="2.5" fill="#90caf9"/>
        <!-- Piernas -->
        <line x1="6" y1="16" x2="4" y2="26" stroke="#1a237e" stroke-width="2.8" stroke-linecap="round"/>
        <line x1="10" y1="16" x2="12" y2="25" stroke="#1a237e" stroke-width="2.8" stroke-linecap="round"/>
        <!-- Mochila -->
        <rect x="0" y="5" width="6" height="11" rx="2" fill="#263238"/>
        <!-- Chaqueta térmica roja -->
        <rect x="4" y="5" width="8" height="12" rx="2.5" fill="#d32f2f"/>
        <!-- Cabeza con gorro -->
        <circle cx="8" cy="1.5" r="3.5" fill="#ffccbc"/>
        <path d="M4.5 1 Q8 -4 11.5 1 Z" fill="#0d47a1"/>
        <!-- Bastones de trekking -->
        <line x1="12" y1="10" x2="18" y2="26" stroke="#546e7a" stroke-width="1.2"/>
        <line x1="3" y1="11" x2="-2" y2="26" stroke="#546e7a" stroke-width="1.2"/>
      </g>
    </svg>
  `
});
