/**
 * Fotograma 08 / 36
 * Escena: Mercado de Flores al Sol (Luz vibrante de mañana)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-08',
  frameNumber: 8,
  title: 'Puesto del Mercado de Flores',
  year: '2024',
  date: '24 de abril de 2024, 10:15',
  sceneEV: 13, // Sol matinal suave y colorido
  tags: ['Viaje', 'Naturaleza', 'Flores', 'Comida', '2024'],
  analogCaption: 'Puesto de tulipanes y claveles en el mercado de las flores. Explosión de color primaveral.',
  pageNumber: 'Fotograma 08 de 36',
  exif: {
    camera: 'Google Pixel 8 (Macro Focus)',
    lens: '25mm ƒ/1.68',
    iso: 'ISO 50 • 1/1600s',
    gps: '52.3676° N, 4.9041° E (Bloemenmarkt, Ámsterdam)',
    fileSize: '4.32 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Tulipanes y flores', conf: '99.9%' },
    { label: 'Mercado callejero', conf: '97.8%' },
    { label: 'Colores saturados', conf: '96.5%' },
    { label: 'Botánica urbana', conf: '94.0%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-p8" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fffde7"/>
          <stop offset="100%" stop-color="#ffe0b2"/>
        </linearGradient>
        <linearGradient id="zinc-p8" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#78909c"/>
          <stop offset="50%" stop-color="#b0bec5"/>
          <stop offset="100%" stop-color="#546e7a"/>
        </linearGradient>
      </defs>

      <!-- Fondo luminoso del mercado -->
      <rect width="300" height="200" fill="url(#bg-p8)"/>

      <!-- Mostrador escalonado de madera -->
      <rect y="145" width="300" height="55" fill="#6d4c41"/>
      <rect y="142" width="300" height="6" fill="#8d6e63"/>

      <!-- Toldo tradicional a rayas rojas y crema con ondas -->
      <rect width="300" height="36" fill="#c62828"/>
      <g fill="#fff8e1">
        <polygon points="0,0 30,0 26,36 0,36"/>
        <polygon points="60,0 90,0 86,36 56,36"/>
        <polygon points="120,0 150,0 146,36 116,36"/>
        <polygon points="180,0 210,0 206,36 176,36"/>
        <polygon points="240,0 270,0 266,36 236,36"/>
      </g>
      <path d="M0 36 Q15 46 30 36 Q45 46 60 36 Q75 46 90 36 Q105 46 120 36 Q135 46 150 36 Q165 46 180 36 Q195 46 210 36 Q225 46 240 36 Q255 46 270 36 Q285 46 300 36 L300 32 L0 32 Z" fill="#8e0000"/>

      <!-- Pizarra de precios colgada -->
      <rect x="115" y="46" width="70" height="22" rx="3" fill="#263238" stroke="#8d6e63" stroke-width="2"/>
      <text x="150" y="60" text-anchor="middle" fill="#ffffff" font-family="monospace" font-size="8" font-weight="bold">TULIPANES 5€</text>

      <!-- RAMO 1: Tulipanes Rojos y Rosas (Izquierda) -->
      <g transform="translate(22, 72)">
        <g stroke="#2e7d32" stroke-width="2.5" fill="none">
          <path d="M18 55 Q12 30 10 14"/><path d="M26 55 Q24 28 24 8"/>
          <path d="M34 55 Q35 28 38 10"/><path d="M42 55 Q48 30 52 16"/>
          <path d="M50 55 Q58 34 62 20"/>
        </g>
        <!-- Hojas lanceoladas -->
        <path d="M14 52 Q4 32 16 26 Q18 40 22 52 Z" fill="#43a047"/>
        <path d="M46 52 Q60 32 48 24 Q44 38 42 52 Z" fill="#388e3c"/>
        <!-- Cálices de tulipán -->
        <path d="M4 14 Q4 2 10 4 Q16 2 16 14 Q10 20 4 14 Z" fill="#e53935"/>
        <path d="M18 8 Q18 -4 24 -2 Q30 -4 30 8 Q24 15 18 8 Z" fill="#d81b60"/>
        <path d="M32 10 Q32 -2 38 0 Q44 -2 44 10 Q38 17 32 10 Z" fill="#e53935"/>
        <path d="M46 16 Q46 4 52 6 Q58 4 58 16 Q52 22 46 16 Z" fill="#f06292"/>
        <path d="M56 20 Q56 9 62 11 Q68 9 68 20 Q62 26 56 20 Z" fill="#c62828"/>
        <!-- Cubo de zinc -->
        <polygon points="6,46 66,46 58,112 14,112" fill="url(#zinc-p8)"/>
        <ellipse cx="36" cy="46" rx="30" ry="4" fill="#546e7a"/>
        <line x1="9" y1="65" x2="63" y2="65" stroke="#455a64" stroke-width="1.5"/>
      </g>

      <!-- RAMO 2: Tulipanes Amarillos y Girasoles (Centro) -->
      <g transform="translate(114, 70)">
        <g stroke="#2e7d32" stroke-width="2.5" fill="none">
          <path d="M18 55 Q12 30 12 12"/><path d="M28 55 Q27 25 27 6"/>
          <path d="M38 55 Q40 25 42 8"/><path d="M48 55 Q54 30 56 14"/>
        </g>
        <path d="M16 52 Q6 30 18 24 Q22 38 24 52 Z" fill="#43a047"/>
        <path d="M48 52 Q62 30 50 24 Q44 38 42 52 Z" fill="#388e3c"/>
        <!-- Flores amarillas y naranjas -->
        <circle cx="12" cy="12" r="9" fill="#fbc02d"/><circle cx="12" cy="12" r="4" fill="#5d4037"/>
        <path d="M21 6 Q21 -6 27 -4 Q33 -6 33 6 Q27 13 21 6 Z" fill="#ffeb3b"/>
        <circle cx="42" cy="8" r="9.5" fill="#ffa000"/><circle cx="42" cy="8" r="4.5" fill="#4e342e"/>
        <path d="M50 14 Q50 2 56 4 Q62 2 62 14 Q56 20 50 14 Z" fill="#fdd835"/>
        <!-- Cubo de zinc -->
        <polygon points="6,48 66,48 58,114 14,114" fill="url(#zinc-p8)"/>
        <ellipse cx="36" cy="48" rx="30" ry="4" fill="#546e7a"/>
        <line x1="9" y1="67" x2="63" y2="67" stroke="#455a64" stroke-width="1.5"/>
      </g>

      <!-- RAMO 3: Tulipanes Violetas y Lavanda (Derecha) -->
      <g transform="translate(206, 72)">
        <g stroke="#2e7d32" stroke-width="2.5" fill="none">
          <path d="M18 55 Q12 30 10 14"/><path d="M28 55 Q26 26 25 8"/>
          <path d="M38 55 Q40 26 42 10"/><path d="M48 55 Q56 32 58 16"/>
        </g>
        <path d="M15 52 Q5 32 16 26 Q20 40 22 52 Z" fill="#43a047"/>
        <path d="M46 52 Q60 32 48 24 Q44 38 42 52 Z" fill="#388e3c"/>
        <path d="M4 14 Q4 2 10 4 Q16 2 16 14 Q10 20 4 14 Z" fill="#8e24aa"/>
        <path d="M19 8 Q19 -4 25 -2 Q31 -4 31 8 Q25 15 19 8 Z" fill="#ab47bc"/>
        <path d="M36 10 Q36 -2 42 0 Q48 -2 48 10 Q42 17 36 10 Z" fill="#6a1b9a"/>
        <path d="M52 16 Q52 4 58 6 Q64 4 64 16 Q58 22 52 16 Z" fill="#ba68c8"/>
        <!-- Cubo de zinc -->
        <polygon points="6,46 66,46 58,112 14,112" fill="url(#zinc-p8)"/>
        <ellipse cx="36" cy="46" rx="30" ry="4" fill="#546e7a"/>
        <line x1="9" y1="65" x2="63" y2="65" stroke="#455a64" stroke-width="1.5"/>
      </g>
    </svg>
  `
});
