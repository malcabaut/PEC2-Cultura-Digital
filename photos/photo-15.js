/**
 * Fotograma 15 / 36
 * Escena: Acueducto Romano de Segovia (Luz de tarde dorada)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-15',
  frameNumber: 15,
  title: 'Acueducto Romano de Segovia',
  year: '2023',
  date: '12 de octubre de 2023, 18:05',
  sceneEV: 13, // Piedra de granito bañada en sol dorado
  tags: ['Viaje', 'Arquitectura', 'Monumento', 'Historia', '2023'],
  analogCaption: 'Los arcos milenarios de granito recortados contra el azul puro de Castilla.',
  pageNumber: 'Fotograma 15 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 80 • 1/1200s',
    gps: '40.9479° N, 4.1184° W (Plaza del Azoguejo, Segovia)',
    fileSize: '4.02 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Acueducto romano', conf: '99.9%' },
    { label: 'Arcos de piedra', conf: '99.2%' },
    { label: 'Monumento histórico', conf: '97.5%' },
    { label: 'Luz dorada', conf: '95.1%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-p15" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1565c0"/>
          <stop offset="65%" stop-color="#64b5f6"/>
          <stop offset="100%" stop-color="#e3f2fd"/>
        </linearGradient>
        <linearGradient id="granite-p15" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#e6ceac"/>
          <stop offset="65%" stop-color="#cbb08d"/>
          <stop offset="100%" stop-color="#9c8265"/>
        </linearGradient>
      </defs>

      <!-- Cielo castellano intenso -->
      <rect width="300" height="175" fill="url(#sky-p15)"/>

      <!-- Silueta de la Sierra de Guadarrama y tejados de Segovia al fondo -->
      <path d="M0 172 L0 150 Q55 135 120 148 Q195 130 260 146 L300 140 L300 172 Z" fill="#90a4ae" opacity="0.5"/>
      <g fill="#d87a56" opacity="0.8">
        <polygon points="22,165 36,154 50,165"/>
        <polygon points="88,165 104,152 120,165"/>
        <polygon points="228,165 244,154 260,165"/>
      </g>

      <!-- ACUEDUCTO ROMANO DE DOBLE ARQUERÍA DE SILLARES DE GRANITO -->
      <!-- Canal superior de conducción de agua -->
      <rect x="0" y="28" width="300" height="12" fill="url(#granite-p15)" stroke="#795548" stroke-width="1"/>
      <rect x="0" y="38" width="300" height="5" fill="#8d6e63"/>

      <!-- Piso superior de arcos -->
      <rect x="0" y="43" width="300" height="48" fill="url(#granite-p15)"/>
      <!-- Huecos de los 5 arcos superiores con cielo visible -->
      <g fill="url(#sky-p15)" stroke="#795548" stroke-width="1.5">
        <path d="M14 91 L14 62 Q32 46 50 62 L50 91 Z"/>
        <path d="M72 91 L72 62 Q90 46 108 62 L108 91 Z"/>
        <path d="M131 91 L131 62 Q150 46 169 62 L169 91 Z"/>
        <path d="M192 91 L192 62 Q210 46 228 62 L228 91 Z"/>
        <path d="M250 91 L250 62 Q268 46 286 62 L286 91 Z"/>
      </g>

      <!-- Hornacina central con estatua -->
      <rect x="122" y="34" width="56" height="12" fill="#bcaaa4" stroke="#6d4c41" stroke-width="1"/>
      <path d="M146 45 L146 37 Q150 34 154 37 L154 45 Z" fill="#5d4037"/>

      <!-- Cornisa intermedia -->
      <rect x="0" y="91" width="300" height="8" fill="#a1887f" stroke="#5d4037" stroke-width="1"/>

      <!-- Piso inferior de grandes pilares escalonados -->
      <rect x="0" y="99" width="300" height="75" fill="url(#granite-p15)"/>
      <g fill="url(#sky-p15)" stroke="#795548" stroke-width="1.5">
        <path d="M12 174 L12 122 Q32 103 52 122 L52 174 Z"/>
        <path d="M70 174 L70 122 Q90 103 110 122 L110 174 Z"/>
        <path d="M130 174 L130 122 Q150 103 170 122 L170 174 Z"/>
        <path d="M190 174 L190 122 Q210 103 230 122 L230 174 Z"/>
        <path d="M248 174 L248 122 Q268 103 288 122 L288 174 Z"/>
      </g>

      <!-- Líneas horizontales de sillares de piedra sin argamasa -->
      <g stroke="#795548" stroke-width="0.8" opacity="0.65">
        <line x1="52" y1="118" x2="70" y2="118"/><line x1="110" y1="118" x2="130" y2="118"/><line x1="170" y1="118" x2="190" y2="118"/><line x1="230" y1="118" x2="248" y2="118"/>
        <line x1="52" y1="136" x2="70" y2="136"/><line x1="110" y1="136" x2="130" y2="136"/><line x1="170" y1="136" x2="190" y2="136"/><line x1="230" y1="136" x2="248" y2="136"/>
        <line x1="52" y1="154" x2="70" y2="154"/><line x1="110" y1="154" x2="130" y2="154"/><line x1="170" y1="154" x2="190" y2="154"/><line x1="230" y1="154" x2="248" y2="154"/>
      </g>

      <!-- Suelo de piedra de la Plaza del Azoguejo -->
      <rect y="172" width="300" height="28" fill="#8d6e63"/>
      <rect y="172" width="300" height="4" fill="#6d4c41"/>
    </svg>
  `
});
