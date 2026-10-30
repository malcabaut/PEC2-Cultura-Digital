/**
 * Fotograma 34 / 36
 * Escena: El Coliseo de Roma (Tarde dorada en Italia)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-34',
  frameNumber: 34,
  title: 'El Coliseo de Roma al Sol',
  year: '2023',
  date: '22 de septiembre de 2023, 17:50',
  sceneEV: 13, // Piedra travertino bajo sol de tarde
  tags: ['Viaje', 'Arquitectura', 'Monumento', 'Historia', 'Europa', '2023'],
  analogCaption: 'El anfiteatro Flavio bañado por la cálida luz romana de septiembre entre pinos mediterráneos.',
  pageNumber: 'Fotograma 34 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 64 • 1/1500s',
    gps: '41.8902° N, 12.4922° E (Piazza del Colosseo, Roma)',
    fileSize: '4.15 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Coliseo de Roma', conf: '99.9%' },
    { label: 'Anfiteatro romano', conf: '99.5%' },
    { label: 'Patrimonio mundial', conf: '98.2%' },
    { label: 'Turismo en Italia', conf: '96.0%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rome-sky-p34" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e88e5"/>
          <stop offset="65%" stop-color="#90caf9"/>
          <stop offset="100%" stop-color="#ffe0b2"/>
        </linearGradient>
        <linearGradient id="travertine-p34" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f5deb3"/>
          <stop offset="55%" stop-color="#dfc18d"/>
          <stop offset="100%" stop-color="#b3925e"/>
        </linearGradient>
      </defs>

      <!-- Cielo romano al atardecer -->
      <rect width="300" height="165" fill="url(#rome-sky-p34)"/>

      <!-- Pinos romanos (Pinus pinea) a los lados -->
      <rect x="26" y="95" width="6" height="70" fill="#4e342e"/>
      <ellipse cx="29" cy="88" rx="28" ry="14" fill="#2e5718"/>
      <rect x="268" y="102" width="5" height="63" fill="#4e342e"/>
      <ellipse cx="270" cy="96" rx="24" ry="12" fill="#2e5718"/>

      <!-- EL COLISEO DE ROMA CON SU PERFIL ESCALONADO ICÓNICO -->
      <g transform="translate(46, 36)">
        <!-- Anillo exterior alto (izquierda y centro) y anillo interior escalonado (derecha) -->
        <path d="M0 128 L0 18 Q68 6 136 14 L136 42 L176 46 L176 74 L208 78 L208 128 Z" fill="url(#travertine-p34)" stroke="#8d6e63" stroke-width="1"/>

        <!-- Cornisas horizontales -->
        <line x1="0" y1="42" x2="136" y2="42" stroke="#8d6e63" stroke-width="2"/>
        <line x1="0" y1="68" x2="176" y2="68" stroke="#8d6e63" stroke-width="2"/>
        <line x1="0" y1="96" x2="208" y2="96" stroke="#8d6e63" stroke-width="2"/>

        <!-- Tres niveles de arcos de medio punto -->
        <g fill="#4e342e">
          <!-- Nivel 3 (Superior) -->
          <path d="M12 68 L12 52 Q20 45 28 52 L28 68 Z"/><path d="M38 68 L38 52 Q46 45 54 52 L54 68 Z"/>
          <path d="M64 68 L64 52 Q72 45 80 52 L80 68 Z"/><path d="M90 68 L90 52 Q98 45 106 52 L106 68 Z"/>
          <path d="M116 68 L116 52 Q124 45 132 52 L132 68 Z"/>
          <!-- Nivel 2 (Medio) -->
          <path d="M12 96 L12 78 Q20 71 28 78 L28 96 Z"/><path d="M38 96 L38 78 Q46 71 54 78 L54 96 Z"/>
          <path d="M64 96 L64 78 Q72 71 80 78 L80 96 Z"/><path d="M90 96 L90 78 Q98 71 106 78 L106 96 Z"/>
          <path d="M116 96 L116 78 Q124 71 132 78 L132 96 Z"/><path d="M142 96 L142 78 Q150 71 158 78 L158 96 Z"/>
          <!-- Nivel 1 (Inferior) -->
          <path d="M12 128 L12 106 Q20 99 28 106 L28 128 Z"/><path d="M38 128 L38 106 Q46 99 54 106 L54 128 Z"/>
          <path d="M64 128 L64 106 Q72 99 80 106 L80 128 Z"/><path d="M90 128 L90 106 Q98 99 106 106 L106 128 Z"/>
          <path d="M116 128 L116 106 Q124 99 132 106 L132 128 Z"/><path d="M142 128 L142 106 Q150 99 158 106 L158 128 Z"/>
          <path d="M168 128 L168 106 Q176 99 184 106 L184 128 Z"/>
        </g>
      </g>

      <!-- Explanada y jardines inferiores -->
      <rect y="164" width="300" height="36" fill="#558b2f"/>
      <polygon points="85,164 215,164 255,200 45,200" fill="#bcaaa4"/>
    </svg>
  `
});

