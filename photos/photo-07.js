/**
 * Fotograma 07 / 36
 * Escena: Catedral Gótica (Día nublado suave)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-07',
  frameNumber: 7,
  title: 'Catedral de Notre Dame',
  year: '2023',
  date: '15 de julio de 2023, 11:40',
  sceneEV: 12, // Día nublado brillante
  tags: ['París', 'Viaje', 'Arquitectura', 'Monumento', '2023'],
  analogCaption: 'Notre Dame vista desde la orilla del Sena. Cielo encapotado de verano.',
  pageNumber: 'Fotograma 07 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro (Ultra Gran Angular)',
    lens: '12mm ƒ/2.2',
    iso: 'ISO 80 • 1/800s',
    gps: '48.8530° N, 2.3499° E (Île de la Cité, París)',
    fileSize: '3.65 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Catedral gótica', conf: '99.7%' },
    { label: 'Arquitectura histórica', conf: '98.5%' },
    { label: 'Rosetón y torres', conf: '96.4%' },
    { label: 'Río Sena', conf: '92.3%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-p7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#78909c"/>
          <stop offset="60%" stop-color="#b0bec5"/>
          <stop offset="100%" stop-color="#eceff1"/>
        </linearGradient>
        <linearGradient id="stone-p7" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d7ccc8"/>
          <stop offset="50%" stop-color="#efeae6"/>
          <stop offset="100%" stop-color="#bcaaa4"/>
        </linearGradient>
        <linearGradient id="seine-p7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#455a64"/>
          <stop offset="100%" stop-color="#263238"/>
        </linearGradient>
      </defs>

      <!-- Cielo parisino nublado suave -->
      <rect width="300" height="158" fill="url(#sky-p7)"/>
      <g fill="#ffffff" opacity="0.45">
        <ellipse cx="60" cy="36" rx="42" ry="12"/>
        <ellipse cx="235" cy="44" rx="48" ry="14"/>
      </g>

      <!-- Aguja central gótica al fondo -->
      <polygon points="146,58 150,10 154,58" fill="#546e7a"/>
      <circle cx="150" cy="10" r="1.5" fill="#ffd54f"/>

      <!-- FACHADA OCCIDENTAL DE NOTRE DAME -->
      <g transform="translate(75, 28)">
        <!-- Torres gemelas -->
        <rect x="10" y="10" width="38" height="118" fill="url(#stone-p7)" stroke="#8d6e63" stroke-width="0.8"/>
        <rect x="102" y="10" width="38" height="118" fill="url(#stone-p7)" stroke="#8d6e63" stroke-width="0.8"/>
        <!-- Cuerpo central -->
        <rect x="48" y="42" width="54" height="86" fill="url(#stone-p7)" stroke="#8d6e63" stroke-width="0.8"/>

        <!-- Ventanales ojivales de las torres -->
        <path d="M18 42 L18 22 Q29 14 40 22 L40 42 Z" fill="#37474f"/>
        <path d="M110 42 L110 22 Q121 14 132 22 L132 42 Z" fill="#37474f"/>

        <!-- Galería de las Quimeras (columnata) -->
        <rect x="10" y="46" width="130" height="8" fill="#a1887f"/>
        <g stroke="#4e342e" stroke-width="1">
          <line x1="16" y1="46" x2="16" y2="54"/><line x1="24" y1="46" x2="24" y2="54"/><line x1="32" y1="46" x2="32" y2="54"/><line x1="40" y1="46" x2="40" y2="54"/>
          <line x1="52" y1="46" x2="52" y2="54"/><line x1="60" y1="46" x2="60" y2="54"/><line x1="68" y1="46" x2="68" y2="54"/><line x1="75" y1="46" x2="75" y2="54"/><line x1="82" y1="46" x2="82" y2="54"/><line x1="90" y1="46" x2="90" y2="54"/><line x1="98" y1="46" x2="98" y2="54"/>
          <line x1="110" y1="46" x2="110" y2="54"/><line x1="118" y1="46" x2="118" y2="54"/><line x1="126" y1="46" x2="126" y2="54"/><line x1="134" y1="46" x2="134" y2="54"/>
        </g>

        <!-- Gran Rosetón Central con vidrieras -->
        <circle cx="75" cy="72" r="15" fill="#263238" stroke="#6d4c41" stroke-width="2"/>
        <circle cx="75" cy="72" r="11" fill="#1e88e5" opacity="0.6"/>
        <circle cx="75" cy="72" r="5" fill="#e53935" opacity="0.8"/>
        <g stroke="#d7ccc8" stroke-width="0.9">
          <line x1="75" y1="57" x2="75" y2="87"/>
          <line x1="60" y1="72" x2="90" y2="72"/>
          <line x1="64" y1="61" x2="86" y2="83"/>
          <line x1="86" y1="61" x2="64" y2="83"/>
        </g>

        <!-- Ventanales laterales del nivel del rosetón -->
        <path d="M20 84 L20 64 Q29 56 38 64 L38 84 Z" fill="#455a64"/>
        <path d="M112 84 L112 64 Q121 56 130 64 L130 84 Z" fill="#455a64"/>

        <!-- Galería de los Reyes -->
        <rect x="10" y="90" width="130" height="7" fill="#bcaaa4" stroke="#8d6e63" stroke-width="0.6"/>

        <!-- Tres Pórticos Góticos Abocinados -->
        <path d="M16 128 L16 106 Q29 94 42 106 L42 128 Z" fill="#4e342e"/>
        <path d="M21 128 L21 110 Q29 101 37 110 L37 128 Z" fill="#263238"/>

        <path d="M54 128 L54 102 Q75 88 96 102 L96 128 Z" fill="#4e342e"/>
        <path d="M61 128 L61 107 Q75 96 89 107 L89 128 Z" fill="#263238"/>

        <path d="M108 128 L108 106 Q121 94 134 106 L134 128 Z" fill="#4e342e"/>
        <path d="M113 128 L113 110 Q121 101 129 110 L129 128 Z" fill="#263238"/>
      </g>

      <!-- Árboles en la ribera y muro del Sena -->
      <g fill="#2e7d32">
        <circle cx="42" cy="144" r="18"/><circle cx="65" cy="147" r="14"/>
        <circle cx="238" cy="145" r="16"/><circle cx="262" cy="142" r="19"/>
      </g>
      <rect y="152" width="300" height="8" fill="#90a4ae"/>
      <line x1="0" y1="152" x2="300" y2="152" stroke="#546e7a" stroke-width="2"/>

      <!-- Río Sena y reflejos de piedra -->
      <rect y="160" width="300" height="40" fill="url(#seine-p7)"/>
      <g stroke="#cfd8dc" stroke-width="1.2" opacity="0.45">
        <line x1="90" y1="168" x2="210" y2="168"/>
        <line x1="105" y1="176" x2="195" y2="176"/>
        <line x1="80" y1="185" x2="220" y2="185"/>
        <line x1="115" y1="193" x2="185" y2="193"/>
      </g>
    </svg>
  `
});
