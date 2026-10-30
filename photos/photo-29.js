/**
 * Fotograma 29 / 36
 * Escena: Callejón de Noche Lluviosa y Luces de Neón (Reflejos sobre asfalto)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-29',
  frameNumber: 29,
  title: 'Noche de Lluvia y Neón',
  year: '2024',
  date: '09 de noviembre de 2024, 21:40',
  sceneEV: 5, // Noche urbana lluviosa con letreros luminosos
  tags: ['Noche', 'Viaje', 'Arquitectura', 'Agua', '2024'],
  analogCaption: 'Paraguas bajo la lluvia nocturna. Los neones rosas y azules duplicados en los charcos.',
  pageNumber: 'Fotograma 29 de 36',
  exif: {
    camera: 'Google Pixel 8 Pro (Visión Nocturna)',
    lens: '24mm ƒ/1.68',
    iso: 'ISO 800 • 1/40s',
    gps: '35.6938° N, 139.7034° E (Shinjuku, Tokio)',
    fileSize: '3.98 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Luces de neón', conf: '99.9%' },
    { label: 'Reflejos en asfalto mojado', conf: '99.3%' },
    { label: 'Noche lluviosa', conf: '97.8%' },
    { label: 'Paisaje urbano nocturno', conf: '96.4%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wet-street-p29" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a0e1a"/>
          <stop offset="100%" stop-color="#161b2e"/>
        </linearGradient>
      </defs>

      <!-- Cielo y edificios nocturnos en perspectiva -->
      <rect width="300" height="135" fill="#060812"/>
      <polygon points="0,0 108,35 108,135 0,152" fill="#0f1424"/>
      <polygon points="300,0 192,35 192,135 300,152" fill="#0f1424"/>

      <!-- CARTELES LUMINOSOS DE NEÓN (Cian, Magenta y Ámbar) -->
      <rect x="24" y="24" width="22" height="58" rx="3" fill="#1a0826" stroke="#ff007f" stroke-width="2.5"/>
      <circle cx="35" cy="38" r="5" fill="#ff007f"/>
      <rect x="29" y="50" width="12" height="4" fill="#00e5ff"/>
      <rect x="29" y="60" width="12" height="4" fill="#ff007f"/>

      <rect x="64" y="46" width="32" height="18" rx="2" fill="#072227" stroke="#00e5ff" stroke-width="2"/>
      <text x="80" y="58" text-anchor="middle" fill="#00e5ff" font-family="monospace" font-size="8" font-weight="bold">CAFE</text>

      <rect x="236" y="18" width="26" height="68" rx="3" fill="#241605" stroke="#ffab00" stroke-width="2.5"/>
      <line x1="249" y1="28" x2="249" y2="76" stroke="#ffab00" stroke-width="3" stroke-dasharray="6,4"/>

      <rect x="200" y="52" width="26" height="36" rx="2" fill="#1a0826" stroke="#e040fb" stroke-width="2"/>

      <!-- Asfalto mojado reflejando los neones -->
      <polygon points="108,135 192,135 300,200 0,200" fill="url(#wet-street-p29)"/>

      <!-- Charcos brillantes de neón en el suelo -->
      <g opacity="0.75">
        <ellipse cx="64" cy="168" rx="28" ry="5" fill="#ff007f"/>
        <ellipse cx="78" cy="156" rx="18" ry="3.5" fill="#00e5ff"/>
        <ellipse cx="228" cy="172" rx="30" ry="5.5" fill="#ffab00"/>
        <ellipse cx="206" cy="158" rx="20" ry="3.5" fill="#e040fb"/>
      </g>

      <!-- Peatón de espaldas con paraguas transparente bajo la lluvia -->
      <g transform="translate(132, 86)">
        <!-- Silueta con gabardina -->
        <rect x="12" y="24" width="14" height="34" rx="3" fill="#05070e"/>
        <line x1="15" y1="58" x2="14" y2="74" stroke="#05070e" stroke-width="3.5"/>
        <line x1="23" y1="58" x2="24" y2="74" stroke="#05070e" stroke-width="3.5"/>
        <!-- Paraguas iluminado por el neón -->
        <path d="M-4 24 Q19 2 42 24 Z" fill="#00e5ff" opacity="0.55" stroke="#ffffff" stroke-width="1.2"/>
        <line x1="19" y1="10" x2="19" y2="30" stroke="#ffffff" stroke-width="1.2"/>
      </g>

      <!-- Líneas diagonales de lluvia fina -->
      <g stroke="#b3e5fc" stroke-width="0.7" opacity="0.45">
        <line x1="40" y1="10" x2="32" y2="35"/><line x1="115" y1="20" x2="107" y2="45"/>
        <line x1="168" y1="12" x2="160" y2="37"/><line x1="265" y1="30" x2="257" y2="55"/>
        <line x1="88" y1="95" x2="80" y2="120"/><line x1="215" y1="105" x2="207" y2="130"/>
      </g>
    </svg>
  `
});

