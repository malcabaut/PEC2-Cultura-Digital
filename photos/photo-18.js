/**
 * Fotograma 18 / 36
 * Escena: Parque en Otoño con Hojas Doradas (Luz cálida de media tarde)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-18',
  frameNumber: 18,
  title: 'Parque de El Retiro en Otoño',
  year: '2023',
  date: '04 de noviembre de 2023, 16:45',
  sceneEV: 12, // Día otoñal dorado
  tags: ['Parque', 'Otoño', 'Naturaleza', 'Árboles', '2023'],
  analogCaption: 'Paseo de carruajes cubierto por una alfombra de hojas ocres. La luz dorada de noviembre.',
  pageNumber: 'Fotograma 18 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 100 • 1/500s',
    gps: '40.4153° N, 3.6845° W (Parque de El Retiro, Madrid)',
    fileSize: '3.92 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Otoño en el parque', conf: '99.9%' },
    { label: 'Hojas secas doradas', conf: '98.8%' },
    { label: 'Árboles caducifolios', conf: '97.4%' },
    { label: 'Camino peatonal', conf: '95.1%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="autumn-sky-p18" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#90caf9"/>
          <stop offset="100%" stop-color="#fff8e1"/>
        </linearGradient>
        <linearGradient id="ground-p18" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ef6c00"/>
          <stop offset="100%" stop-color="#bf360c"/>
        </linearGradient>
      </defs>

      <!-- Cielo de otoño suave -->
      <rect width="300" height="132" fill="url(#autumn-sky-p18)"/>

      <!-- Silueta de la cúpula del Palacio de Cristal al fondo -->
      <path d="M126 128 Q150 96 174 128 Z" fill="#b3e5fc" stroke="#78909c" stroke-width="1"/>
      <line x1="150" y1="104" x2="150" y2="128" stroke="#78909c" stroke-width="0.8"/>

      <!-- Suelo tapizado de hojas ocres y paseo central en perspectiva -->
      <rect y="126" width="300" height="74" fill="url(#ground-p18)"/>
      <polygon points="132,126 168,126 235,200 65,200" fill="#ffe0b2"/>

      <!-- Árboles otoñales en hilera (izquierda y derecha) -->
      <!-- Árboles del fondo -->
      <rect x="92" y="75" width="7" height="58" fill="#4e342e"/>
      <ellipse cx="95" cy="70" rx="26" ry="30" fill="#ffb300"/>
      <rect x="200" y="75" width="7" height="58" fill="#4e342e"/>
      <ellipse cx="203" cy="70" rx="26" ry="30" fill="#fb8c00"/>

      <!-- Árboles principales en primer término -->
      <path d="M42 152 L42 68 M42 92 L24 74 M42 84 L62 66" stroke="#3e2723" stroke-width="10" stroke-linecap="round"/>
      <ellipse cx="45" cy="54" rx="44" ry="38" fill="#f57f17"/>
      <ellipse cx="32" cy="46" rx="28" ry="26" fill="#ffca28"/>

      <path d="M254 152 L254 64 M254 88 L236 70 M254 80 L272 64" stroke="#3e2723" stroke-width="11" stroke-linecap="round"/>
      <ellipse cx="252" cy="50" rx="46" ry="40" fill="#d84315"/>
      <ellipse cx="264" cy="42" rx="30" ry="28" fill="#fb8c00"/>

      <!-- Farolas clásicas madrileñas -->
      <g stroke="#263238" stroke-width="2">
        <line x1="84" y1="158" x2="84" y2="108"/><circle cx="84" cy="105" r="4" fill="#fff9c4"/>
        <line x1="216" y1="158" x2="216" y2="108"/><circle cx="216" cy="105" r="4" fill="#fff9c4"/>
      </g>

      <!-- Banco de madera y hierro forjado junto al camino -->
      <g transform="translate(64, 148)">
        <rect x="0" y="0" width="32" height="5" rx="1" fill="#5d4037"/>
        <rect x="-2" y="5" width="36" height="4" rx="1" fill="#4e342e"/>
        <line x1="4" y1="9" x2="4" y2="16" stroke="#212121" stroke-width="2"/>
        <line x1="28" y1="9" x2="28" y2="16" stroke="#212121" stroke-width="2"/>
      </g>

      <!-- Hojas doradas y rojizas cayendo y sobre el sendero -->
      <g fill="#e65100">
        <ellipse cx="112" cy="95" rx="3.5" ry="2" transform="rotate(25 112 95)"/>
        <ellipse cx="145" cy="82" rx="3" ry="1.8" fill="#ffb300" transform="rotate(-15 145 82)"/>
        <ellipse cx="182" cy="102" rx="3.5" ry="2" fill="#d84315" transform="rotate(40 182 102)"/>
        <ellipse cx="122" cy="175" rx="4" ry="2"/>
        <ellipse cx="164" cy="184" rx="4.5" ry="2" fill="#f57f17"/>
        <ellipse cx="142" cy="162" rx="3.5" ry="1.8" fill="#ffb300"/>
      </g>
    </svg>
  `
});
