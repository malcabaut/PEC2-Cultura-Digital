/**
 * Fotograma 24 / 36
 * Escena: Retrato Familiar en el Jardín (Luz tamizada de sol)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-24',
  frameNumber: 24,
  title: 'Retrato Familiar en el Jardín',
  year: '2024',
  date: '15 de mayo de 2024, 13:00',
  sceneEV: 12, // Exterior ajardinado con sombra suave de pérgola
  tags: ['Familia', 'Retrato', 'Jardín', 'Sonrisa', '2024'],
  analogCaption: 'Domingo familiar en el jardín. Tres generaciones sonriendo juntas bajo el emparrado.',
  pageNumber: 'Fotograma 24 de 36',
  exif: {
    camera: 'Google Pixel 8 Pro (Retrato 50mm)',
    lens: '50mm ƒ/1.9',
    iso: 'ISO 80 • 1/500s',
    gps: '40.4168° N, 3.7038° W (Madrid, España)',
    fileSize: '4.25 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Familia reunida', conf: '99.9%' },
    { label: 'Sonrisas espontáneas', conf: '99.2%' },
    { label: 'Jardín verde', conf: '97.6%' },
    { label: 'Retrato grupal', conf: '96.0%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="garden-sky-p24" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#81d4fa"/>
          <stop offset="100%" stop-color="#e8f5e9"/>
        </linearGradient>
      </defs>

      <!-- Cielo y pérgola de madera del jardín -->
      <rect width="300" height="140" fill="url(#garden-sky-p24)"/>
      <rect x="0" y="10" width="300" height="7" fill="#6d4c41"/>
      <rect x="24" y="10" width="8" height="130" fill="#5d4037"/>
      <rect x="268" y="10" width="8" height="130" fill="#5d4037"/>

      <!-- Seto frondoso y rosales en flor -->
      <ellipse cx="55" cy="72" rx="48" ry="38" fill="#43a047"/>
      <ellipse cx="150" cy="64" rx="64" ry="42" fill="#2e7d32"/>
      <ellipse cx="245" cy="72" rx="48" ry="38" fill="#43a047"/>

      <!-- Bokeh de luz solar y rosas -->
      <g fill="#fff9c4" opacity="0.55">
        <circle cx="72" cy="42" r="8"/><circle cx="128" cy="36" r="10"/><circle cx="185" cy="40" r="7"/><circle cx="228" cy="46" r="9"/>
      </g>
      <g fill="#ec407a">
        <circle cx="42" cy="76" r="4.5"/><circle cx="88" cy="64" r="4"/><circle cx="212" cy="66" r="4.5"/><circle cx="256" cy="78" r="4"/>
      </g>

      <!-- Césped soleado -->
      <rect y="128" width="300" height="72" fill="#388e3c"/>
      <path d="M0 145 Q150 132 300 145 L300 200 L0 200 Z" fill="#2e7d32"/>

      <!-- Abuela (Izquierda) -->
      <g transform="translate(64, 68)">
        <rect x="8" y="46" width="36" height="58" rx="10" fill="#5c6bc0"/>
        <!-- Collar de perlas -->
        <path d="M16 48 Q26 55 36 48" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="2,2" fill="none"/>
        <!-- Pelo canoso con moño -->
        <circle cx="26" cy="12" r="9" fill="#e0e0e0"/>
        <circle cx="26" cy="28" r="16" fill="#cfd8dc"/>
        <circle cx="26" cy="30" r="13.5" fill="#ffe0b2"/>
        <!-- Gafas y sonrisa -->
        <circle cx="21" cy="29" r="3.5" fill="none" stroke="#8d6e63" stroke-width="1.2"/>
        <circle cx="31" cy="29" r="3.5" fill="none" stroke="#8d6e63" stroke-width="1.2"/>
        <circle cx="21" cy="29" r="1.3" fill="#212121"/><circle cx="31" cy="29" r="1.3" fill="#212121"/>
        <path d="M21 36 Q26 40 31 36" stroke="#c62828" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      </g>

      <!-- Madre (Centro) -->
      <g transform="translate(122, 56)">
        <path d="M10 30 Q28 4 46 30 L50 64 L6 64 Z" fill="#4e342e"/>
        <rect x="8" y="52" width="40" height="64" rx="12" fill="#d81b60"/>
        <polygon points="20,52 28,66 36,52" fill="#ffe0b2"/>
        <circle cx="28" cy="32" r="15" fill="#ffdfc4"/>
        <path d="M13 26 Q28 12 43 26 Q36 18 28 19 Q20 18 13 26 Z" fill="#4e342e"/>
        <circle cx="22.5" cy="31" r="1.6" fill="#212121"/><circle cx="33.5" cy="31" r="1.6" fill="#212121"/>
        <path d="M22 38 Q28 43 34 38" stroke="#ad1457" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      </g>

      <!-- Nieto (Derecha con gorra y camiseta a rayas) -->
      <g transform="translate(188, 78)">
        <rect x="8" y="42" width="32" height="52" rx="9" fill="#ff9800"/>
        <rect x="8" y="54" width="32" height="5" fill="#fff8e1"/>
        <rect x="8" y="66" width="32" height="5" fill="#fff8e1"/>
        <circle cx="24" cy="26" r="13" fill="#ffdfc4"/>
        <!-- Gorra azul con visera -->
        <path d="M11 22 Q24 8 37 22 Z" fill="#1976d2"/>
        <path d="M22 18 L43 21 Q38 24 22 22 Z" fill="#0d47a1"/>
        <circle cx="19.5" cy="26" r="1.6" fill="#212121"/><circle cx="28.5" cy="26" r="1.6" fill="#212121"/>
        <path d="M19.5 32 Q24 36 28.5 32" stroke="#d84315" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      </g>
    </svg>
  `
});
