/**
 * Fotograma 25 / 36
 * Escena: Tranvía Clásico n.º 28 en Lisboa (Luz dorada atlántica)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-25',
  frameNumber: 25,
  title: 'Tranvía 28 en Alfama, Lisboa',
  year: '2024',
  date: '14 de abril de 2024, 17:40',
  sceneEV: 13, // Sol de tarde reflejado en fachadas de azulejos
  tags: ['Viaje', 'Tren', 'Arquitectura', 'Vintage', 'Europa', '2024'],
  analogCaption: 'El mítico tranvía amarillo subiendo la cuesta adoquinada de Alfama entre fachadas de azulejos.',
  pageNumber: 'Fotograma 25 de 36',
  exif: {
    camera: 'Google Pixel 8 Pro',
    lens: '50mm ƒ/1.9',
    iso: 'ISO 64 • 1/1200s',
    gps: '38.7116° N, 9.1303° W (Barrio de Alfama, Lisboa)',
    fileSize: '3.94 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Tranvía histórico amarillo', conf: '99.9%' },
    { label: 'Calle empedrada de Lisboa', conf: '98.7%' },
    { label: 'Fachadas de azulejos', conf: '96.5%' },
    { label: 'Transporte público clásico', conf: '95.1%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-p25" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#42a5f5"/>
          <stop offset="100%" stop-color="#e3f2fd"/>
        </linearGradient>
        <linearGradient id="tram-yellow-p25" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffd600"/>
          <stop offset="100%" stop-color="#f57f17"/>
        </linearGradient>
      </defs>

      <!-- Cielo lisboeta y cables de catenaria -->
      <rect width="300" height="145" fill="url(#sky-p25)"/>
      <line x1="0" y1="22" x2="300" y2="12" stroke="#37474f" stroke-width="1"/>
      <line x1="0" y1="34" x2="300" y2="26" stroke="#37474f" stroke-width="1.2"/>

      <!-- Edificios históricos de Alfama (azulejos azules y fachadas salmón) -->
      <rect x="0" y="18" width="92" height="128" fill="#f8bbd0"/>
      <rect x="0" y="18" width="92" height="8" fill="#c62828"/>
      <rect x="208" y="10" width="92" height="136" fill="#bbdefb"/>
      <rect x="208" y="10" width="92" height="8" fill="#b71c1c"/>

      <!-- Balcones de forja y ventanas -->
      <g fill="#263238" stroke="#ffffff" stroke-width="1.2">
        <rect x="18" y="42" width="18" height="32"/><rect x="52" y="42" width="18" height="32"/>
        <rect x="18" y="88" width="18" height="32"/><rect x="52" y="88" width="18" height="32"/>
        <rect x="226" y="34" width="18" height="32"/><rect x="260" y="34" width="18" height="32"/>
        <rect x="226" y="82" width="18" height="32"/><rect x="260" y="82" width="18" height="32"/>
      </g>

      <!-- Cuesta adoquinada (Calçada portuguesa) y raíles -->
      <polygon points="0,142 300,132 300,200 0,200" fill="#78909c"/>
      <line x1="126" y1="138" x2="88" y2="200" stroke="#37474f" stroke-width="3"/>
      <line x1="174" y1="138" x2="212" y2="200" stroke="#37474f" stroke-width="3"/>

      <!-- TRANVÍA CLÁSICO N.º 28 AMARILLO Y BLANCO -->
      <g transform="translate(102, 42)">
        <!-- Pantógrafo superior conectado al cable -->
        <polygon points="48,14 34,-2 62,-2" fill="none" stroke="#263238" stroke-width="2"/>
        <line x1="28" y1="-14" x2="68" y2="-16" stroke="#263238" stroke-width="2"/>

        <!-- Techo abovedado blanco -->
        <path d="M10 24 Q48 10 86 24 Z" fill="#eceff1" stroke="#b0bec5" stroke-width="1.5"/>
        <!-- Letrero de línea "28 PRAZERES" -->
        <rect x="30" y="16" width="36" height="8" rx="1" fill="#212121"/>
        <text x="48" y="22.5" text-anchor="middle" fill="#ffd600" font-family="monospace" font-size="6.5" font-weight="bold">28 GRAÇA</text>

        <!-- Cuerpo superior blanco con 3 ventanales de madera -->
        <rect x="8" y="24" width="80" height="38" rx="3" fill="#fafafa" stroke="#8d6e63" stroke-width="2"/>
        <rect x="14" y="29" width="20" height="26" rx="2" fill="#263238" stroke="#6d4c41" stroke-width="1.5"/>
        <rect x="38" y="29" width="20" height="26" rx="2" fill="#37474f" stroke="#6d4c41" stroke-width="1.5"/>
        <rect x="62" y="29" width="20" height="26" rx="2" fill="#263238" stroke="#6d4c41" stroke-width="1.5"/>

        <!-- Cuerpo inferior amarillo brillante -->
        <rect x="6" y="60" width="84" height="38" rx="4" fill="url(#tram-yellow-p25)" stroke="#e65100" stroke-width="1.5"/>
        <rect x="6" y="60" width="84" height="4" fill="#ffffff"/>

        <!-- Faro central clásico de latón y número -->
        <circle cx="48" cy="79" r="9" fill="#37474f" stroke="#ffb300" stroke-width="2"/>
        <circle cx="48" cy="79" r="6" fill="#fffde7"/>

        <!-- Bogie inferior, parachoques y ruedas de hierro -->
        <rect x="12" y="98" width="72" height="10" fill="#212121"/>
        <path d="M16 108 L80 108 L74 115 L22 115 Z" fill="#37474f"/>
      </g>
    </svg>
  `
});

