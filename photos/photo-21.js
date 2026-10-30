/**
 * Fotograma 21 / 36
 * Escena: Campamento en el Bosque (Luz filtrada entre pinos)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-21',
  frameNumber: 21,
  title: 'Campamento en la Sierra',
  year: '2024',
  date: '20 de julio de 2024, 09:25',
  sceneEV: 9, // Bosque frondoso con sombras densas
  tags: ['Naturaleza', 'Bosque', 'Aventura', 'Amigos', '2024'],
  analogCaption: 'Tienda de campaña bajo los pinares de Guadarrama. El olor a resina matutina.',
  pageNumber: 'Fotograma 21 de 36',
  exif: {
    camera: 'Google Pixel 8',
    lens: '25mm ƒ/1.68',
    iso: 'ISO 125 • 1/250s',
    gps: '40.7512° N, 4.0125° W (Sierra de Guadarrama, Madrid)',
    fileSize: '4.10 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Tienda de campaña', conf: '99.9%' },
    { label: 'Bosque de pinos', conf: '98.7%' },
    { label: 'Senderismo y acampada', conf: '97.2%' },
    { label: 'Luz entre árboles', conf: '94.8%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="forest-sky-p21" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a5d6a7"/>
          <stop offset="100%" stop-color="#e8f5e9"/>
        </linearGradient>
        <linearGradient id="tent-glow-p21" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffab00"/>
          <stop offset="100%" stop-color="#e65100"/>
        </linearGradient>
      </defs>

      <!-- Claridad matinal entre los árboles -->
      <rect width="300" height="120" fill="url(#forest-sky-p21)"/>

      <!-- Haces de sol matutinos filtrándose por el bosque -->
      <polygon points="110,0 165,0 240,160 140,160" fill="#fff9c4" opacity="0.35"/>

      <!-- Pinos lejanos en bruma -->
      <g fill="#66bb6a" opacity="0.6">
        <polygon points="120,25 100,95 140,95"/>
        <polygon points="155,18 132,95 178,95"/>
        <polygon points="190,28 170,95 210,95"/>
      </g>

      <!-- Suelo forestal de musgo y pinocha -->
      <rect y="105" width="300" height="95" fill="#2e5718"/>
      <path d="M0 132 Q150 116 300 132 L300 200 L0 200 Z" fill="#1b3b10"/>

      <!-- Troncos de pinos silvestres y copas frondosas -->
      <rect x="24" y="0" width="16" height="154" fill="#4e342e"/>
      <rect x="76" y="0" width="13" height="138" fill="#3e2723"/>
      <rect x="226" y="0" width="15" height="148" fill="#4e342e"/>
      <rect x="268" y="0" width="14" height="158" fill="#3e2723"/>

      <g fill="#1b5e20">
        <polygon points="-5,52 32,-5 69,52"/>
        <polygon points="48,58 82,4 116,58" fill="#2e7d32"/>
        <polygon points="198,54 234,0 270,54" fill="#2e7d32"/>
        <polygon points="242,48 275,-5 308,48"/>
      </g>

      <!-- TIENDA DE CAMPAÑA ILUMINADA DESDE EL INTERIOR -->
      <g transform="translate(88, 86)">
        <!-- Vientos y piquetas -->
        <line x1="12" y1="68" x2="-8" y2="76" stroke="#cfd8dc" stroke-width="1"/>
        <line x1="112" y1="68" x2="132" y2="76" stroke="#cfd8dc" stroke-width="1"/>
        <!-- Lateral de la tienda -->
        <polygon points="62,4 10,72 62,72" fill="url(#tent-glow-p21)"/>
        <polygon points="62,4 114,72 62,72" fill="#d84315"/>
        <!-- Puerta triangular abierta con luz cálida de linterna -->
        <polygon points="62,24 38,72 86,72" fill="#263238"/>
        <polygon points="62,32 45,72 79,72" fill="#ffe082" opacity="0.85"/>
      </g>

      <!-- Fogata de campamento con piedras y cafetera metálica -->
      <g transform="translate(198, 156)">
        <ellipse cx="22" cy="18" rx="18" ry="6" fill="#11240a"/>
        <!-- Troncos y piedras -->
        <line x1="10" y1="16" x2="34" y2="12" stroke="#4e342e" stroke-width="4" stroke-linecap="round"/>
        <line x1="12" y1="12" x2="32" y2="17" stroke="#3e2723" stroke-width="4" stroke-linecap="round"/>
        <circle cx="8" cy="17" r="3.5" fill="#78909c"/><circle cx="16" cy="20" r="3.5" fill="#90a4ae"/>
        <circle cx="26" cy="20" r="3.5" fill="#78909c"/><circle cx="35" cy="17" r="3.5" fill="#90a4ae"/>
        <!-- Llamas vivas -->
        <path d="M15 14 Q22 -6 29 14 Z" fill="#ff6d00"/>
        <path d="M18 14 Q22 2 26 14 Z" fill="#ffeb3b"/>
      </g>
    </svg>
  `
});
