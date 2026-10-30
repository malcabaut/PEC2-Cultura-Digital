/**
 * Fotograma 33 / 36
 * Escena: Galería de Arte Contemporáneo (Luz cenital de museo)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-33',
  frameNumber: 33,
  title: 'Tarde en el Museo de Arte',
  year: '2023',
  date: '09 de diciembre de 2023, 17:20',
  sceneEV: 9, // Sala de museo con iluminación dirigida
  tags: ['Arte', 'Pintura', 'Arquitectura', 'Cultura', '2023'],
  analogCaption: 'Observando el gran lienzo abstracto en silencio desde el banco de la sala principal.',
  pageNumber: 'Fotograma 33 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 160 • 1/100s',
    gps: '40.4079° N, 3.6946° W (Museo Reina Sofía, Madrid)',
    fileSize: '3.48 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Galería de museo', conf: '99.8%' },
    { label: 'Cuadro de gran formato', conf: '99.2%' },
    { label: 'Visitante contemplando arte', conf: '97.5%' },
    { label: 'Arquitectura interior', conf: '95.4%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Pared blanca de galería y focos cenitales -->
      <rect width="300" height="148" fill="#f5f5f5"/>
      <rect y="0" width="300" height="10" fill="#e0e0e0"/>
      <polygon points="85,10 150,10 175,148 60,148" fill="#fffde7" opacity="0.35"/>

      <!-- Suelo de parqué pulido con reflejo -->
      <rect y="148" width="300" height="52" fill="#8d6e63"/>
      <line x1="0" y1="148" x2="300" y2="148" stroke="#5d4037" stroke-width="2"/>

      <!-- GRAN OBRA GEOMÉTRICA ABSTRACTA (Inspiración Kandinsky / Mondrian) -->
      <g transform="translate(56, 26)">
        <rect x="0" y="0" width="136" height="88" fill="#fff8e1" stroke="#212121" stroke-width="4"/>
        <rect x="8" y="8" width="44" height="36" fill="#e53935"/>
        <circle cx="92" cy="44" r="24" fill="#1e88e5"/>
        <polygon points="48,76 76,28 104,76" fill="#fdd835" opacity="0.9"/>
        <line x1="0" y1="44" x2="136" y2="44" stroke="#212121" stroke-width="3"/>
        <line x1="52" y1="0" x2="52" y2="88" stroke="#212121" stroke-width="3"/>
      </g>

      <!-- Segunda obra minimalista a la derecha -->
      <g transform="translate(218, 38)">
        <rect x="0" y="0" width="54" height="66" fill="#fafafa" stroke="#424242" stroke-width="3"/>
        <circle cx="27" cy="33" r="16" fill="#ff6d00"/>
      </g>

      <!-- Visitante sentado en el banco del museo contemplando el cuadro -->
      <rect x="96" y="164" width="76" height="8" rx="1" fill="#212121"/>
      <line x1="106" y1="172" x2="106" y2="184" stroke="#212121" stroke-width="3"/>
      <line x1="162" y1="172" x2="162" y2="184" stroke="#212121" stroke-width="3"/>

      <g transform="translate(122, 116)">
        <circle cx="12" cy="10" r="8" fill="#263238"/>
        <path d="M2 20 Q12 18 22 20 L24 48 L0 48 Z" fill="#1c313a"/>
      </g>
    </svg>
  `
});

