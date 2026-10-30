/**
 * Fotograma 06 / 36
 * Escena: Retrato Clásico en Blanco y Negro (Estudio fotográfico)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-06',
  frameNumber: 6,
  title: 'Retrato de Estudio en B&W',
  year: '1998',
  date: '03 de mayo de 1998, 11:00',
  sceneEV: 10, // Estudio con iluminación controlada de foco
  tags: ['Familia', 'Retrato', 'Vintage', 'Estudio'],
  analogCaption: 'Foto formal de estudio. Iluminación lateral clásica y película Ilford de grano fino.',
  pageNumber: 'Fotograma 06 de 36',
  exif: {
    camera: 'Digitalizado de Negativo Químico B&W',
    lens: '85mm ƒ/2.0 Retrato de estudio',
    iso: 'ISO 100 • 1/125s (Película Ilford HP5)',
    gps: '40.4168° N, 3.7038° W (Estudio Foto Ramblas)',
    fileSize: '5.10 MB (Escáner de película)',
    dimensions: '3600 × 2400 px'
  },
  aiTags: [
    { label: 'Retrato en blanco y negro', conf: '99.8%' },
    { label: 'Rostro humano', conf: '99.5%' },
    { label: 'Iluminación clásica de estudio', conf: '96.2%' },
    { label: 'Fotografía monocroma', conf: '98.0%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="studio-bg-p6" cx="62%" cy="42%" r="65%">
          <stop offset="0%" stop-color="#525252"/>
          <stop offset="55%" stop-color="#222222"/>
          <stop offset="100%" stop-color="#080808"/>
        </radialGradient>
        <linearGradient id="face-light-p6" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stop-color="#e8e8e8"/>
          <stop offset="52%" stop-color="#b8b8b8"/>
          <stop offset="58%" stop-color="#5e5e5e"/>
          <stop offset="100%" stop-color="#2b2b2b"/>
        </linearGradient>
      </defs>

      <!-- Fondo de ciclorama de estudio con foco Rembrandt -->
      <rect width="300" height="200" fill="url(#studio-bg-p6)"/>

      <!-- Haz sutil del foco lateral derecho -->
      <polygon points="300,0 185,0 120,200 300,200" fill="#ffffff" opacity="0.06"/>

      <!-- Hombros y abrigo clásico de solapa -->
      <path d="M68 200 Q84 146 150 144 Q216 146 232 200 Z" fill="#171717" stroke="#383838" stroke-width="1"/>
      <polygon points="122,146 150,192 134,200 108,154" fill="#2c2c2c"/>
      <polygon points="178,146 150,192 166,200 192,154" fill="#3d3d3d"/>
      <!-- Cuello de camisa blanca -->
      <polygon points="134,142 150,174 166,142" fill="#dcdcdc"/>

      <!-- Cuello con sombra dramática -->
      <rect x="136" y="122" width="28" height="26" rx="6" fill="#6e6e6e"/>
      <path d="M150 122 L164 122 L164 146 L150 140 Z" fill="#bdbdbd"/>

      <!-- Cabello ondulado clásico (fondo) -->
      <path d="M108 92 Q102 32 150 30 Q198 32 192 92 Q196 124 180 136 L120 136 Q104 124 108 92 Z" fill="#121212"/>

      <!-- Rostro con iluminación Rembrandt (mitad derecha iluminada, triángulo de luz en mejilla izquierda) -->
      <ellipse cx="150" cy="86" rx="33" ry="43" fill="url(#face-light-p6)"/>
      <!-- Triángulo de luz Rembrandt en el pómulo en sombra -->
      <polygon points="126,86 141,86 135,101" fill="#a8a8a8" opacity="0.65"/>

      <!-- Cabello delantero y flequillo -->
      <path d="M115 78 Q122 42 154 42 Q182 44 185 78 Q174 54 150 52 Q128 54 115 78 Z" fill="#0f0f0f"/>
      <path d="M154 44 Q175 48 182 68" stroke="#555555" stroke-width="1.2" fill="none"/>

      <!-- Cejas y ojos expresivos con brillo (catchlight) -->
      <path d="M125 74 Q134 70 142 74" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M158 74 Q166 70 175 74" stroke="#1a1a1a" stroke-width="2" fill="none" stroke-linecap="round"/>

      <ellipse cx="134" cy="81" rx="5.5" ry="3.2" fill="#dcdcdc"/>
      <circle cx="134" cy="81" r="2.6" fill="#141414"/>
      <circle cx="135" cy="80" r="0.9" fill="#ffffff"/>

      <ellipse cx="166" cy="81" rx="5.5" ry="3.2" fill="#f5f5f5"/>
      <circle cx="166" cy="81" r="2.6" fill="#141414"/>
      <circle cx="167" cy="80" r="1" fill="#ffffff"/>

      <!-- Nariz y labios en claroscuro -->
      <path d="M150 76 L147 98 L154 100" stroke="#3a3a3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M140 110 Q150 107 160 110 Q150 115 140 110 Z" fill="#4a4a4a"/>
      <path d="M140 110 Q150 112 160 110" stroke="#222222" stroke-width="1" fill="none"/>

      <!-- Marco sutil de viñeteado analógico -->
      <rect width="300" height="200" fill="none" stroke="#000000" stroke-width="6" opacity="0.35"/>
    </svg>
  `
});
