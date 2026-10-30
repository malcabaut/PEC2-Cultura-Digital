/**
 * Fotograma 13 / 36
 * Escena: Paseo en Barco por el Río (Luz abierta con reflejos acuáticos)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-13',
  frameNumber: 13,
  title: 'Paseo en Barco por el Sena',
  year: '2023',
  date: '16 de julio de 2023, 15:45',
  sceneEV: 14, // Agua bajo sol con destellos
  tags: ['París', 'Viaje', 'Agua', 'Verano', '2023'],
  analogCaption: 'Paseo en Bateaux Mouches cruzando bajo los puentes de piedra. El agua reflejaba el cielo.',
  pageNumber: 'Fotograma 13 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 64 • 1/2500s',
    gps: '48.8606° N, 2.3268° E (Puente de las Artes, París)',
    fileSize: '3.62 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Río y navegación', conf: '99.8%' },
    { label: 'Puente histórico', conf: '98.1%' },
    { label: 'Reflejos en el agua', conf: '96.9%' },
    { label: 'Paseo turístico', conf: '94.2%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-p13" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#42a5f5"/>
          <stop offset="100%" stop-color="#e1f5fe"/>
        </linearGradient>
        <linearGradient id="river-p13" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0288d1"/>
          <stop offset="60%" stop-color="#01579b"/>
          <stop offset="100%" stop-color="#003c6c"/>
        </linearGradient>
      </defs>

      <!-- Cielo despejado y edificios ribereños de París -->
      <rect width="300" height="92" fill="url(#sky-p13)"/>
      <g fill="#dfd3c3" stroke="#bcaaa4" stroke-width="0.6">
        <rect x="8" y="34" width="46" height="40"/><polygon points="8,34 14,22 48,22 54,34" fill="#546e7a"/>
        <rect x="54" y="38" width="52" height="36"/><polygon points="54,38 60,26 100,26 106,38" fill="#455a64"/>
        <rect x="195" y="36" width="50" height="38"/><polygon points="195,36 202,24 238,24 245,36" fill="#546e7a"/>
        <rect x="245" y="32" width="48" height="42"/><polygon points="245,32 252,20 286,20 293,32" fill="#37474f"/>
      </g>

      <!-- PUENTE HISTÓRICO DE PIEDRA CON ARCOS Y FAROLAS -->
      <g stroke="#263238" stroke-width="1.2">
        <line x1="45" y1="64" x2="45" y2="52"/><circle cx="45" cy="50" r="2.5" fill="#fff9c4"/>
        <line x1="150" y1="64" x2="150" y2="52"/><circle cx="150" cy="50" r="2.5" fill="#fff9c4"/>
        <line x1="255" y1="64" x2="255" y2="52"/><circle cx="255" cy="50" r="2.5" fill="#fff9c4"/>
      </g>
      <rect y="64" width="300" height="32" fill="#d7ccc8"/>
      <rect y="62" width="300" height="4" fill="#a1887f"/>
      <!-- Arcos del puente -->
      <path d="M18 96 Q58 58 98 96 Z" fill="#1c313a"/>
      <path d="M112 96 Q150 56 188 96 Z" fill="#1c313a"/>
      <path d="M202 96 Q242 58 282 96 Z" fill="#1c313a"/>
      <!-- Pilares con tajamares -->
      <polygon points="98,96 105,82 112,96" fill="#bcaaa4"/>
      <polygon points="188,96 195,82 202,96" fill="#bcaaa4"/>

      <!-- Aguas del río Sena -->
      <rect y="95" width="300" height="105" fill="url(#river-p13)"/>
      <g stroke="#81d4fa" stroke-width="1.5" opacity="0.55" fill="none">
        <path d="M15 108 Q45 104 75 108 T135 108 T195 108 T255 108"/>
        <path d="M35 122 Q70 118 105 122 T175 122 T245 122"/>
      </g>

      <!-- PROA DEL BARCO EN PRIMER PLANO CON BARANDILLA Y BANDERA TRICOLOR -->
      <!-- Estela blanca de espuma -->
      <path d="M150 132 L12 200 L35 200 L150 138 L265 200 L288 200 Z" fill="#e1f5fe" opacity="0.7"/>
      <!-- Casco de madera y cubierta blanca -->
      <polygon points="150,134 26,200 274,200" fill="#ffffff" stroke="#b0bec5" stroke-width="2"/>
      <polygon points="150,142 46,200 254,200" fill="#8d6e63"/>
      <line x1="150" y1="142" x2="150" y2="200" stroke="#5d4037" stroke-width="1.5"/>
      <line x1="125" y1="156" x2="85" y2="200" stroke="#5d4037" stroke-width="1"/>
      <line x1="175" y1="156" x2="215" y2="200" stroke="#5d4037" stroke-width="1"/>

      <!-- Bancos de cubierta -->
      <rect x="98" y="176" width="104" height="7" rx="2" fill="#eceff1"/>
      <rect x="78" y="190" width="144" height="7" rx="2" fill="#eceff1"/>

      <!-- Mástil de proa y bandera francesa ondeando -->
      <line x1="150" y1="140" x2="150" y2="96" stroke="#eceff1" stroke-width="2.5"/>
      <g transform="translate(151, 98)">
        <rect x="0" y="0" width="9" height="16" fill="#1565c0"/>
        <rect x="9" y="0" width="9" height="16" fill="#ffffff"/>
        <rect x="18" y="0" width="9" height="16" fill="#d32f2f"/>
      </g>
    </svg>
  `
});
