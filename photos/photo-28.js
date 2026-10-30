/**
 * Fotograma 28 / 36
 * Escena: Tocadiscos de Vinilo y Música Analógica (Tarde acogedora)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-28',
  frameNumber: 28,
  title: 'Tocadiscos de Vinilo Clásico',
  year: '2023',
  date: '19 de noviembre de 2023, 18:30',
  sceneEV: 7, // Luz interior cálida sobre plato giradiscos
  tags: ['Música', 'Vintage', 'Arte', 'Estudio', '2023'],
  analogCaption: 'Aguja sobre los surcos del vinilo de jazz. El sonido cálido e irrepetible del soporte físico.',
  pageNumber: 'Fotograma 28 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro (Macro)',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 320 • 1/60s',
    gps: '40.4168° N, 3.7038° W (Madrid, España)',
    fileSize: '3.64 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Disco de vinilo LP', conf: '99.9%' },
    { label: 'Tocadiscos analógico', conf: '99.5%' },
    { label: 'Brazo fonocaptor y aguja', conf: '98.1%' },
    { label: 'Audio de alta fidelidad', conf: '95.0%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wood-plinth-p28" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#8d5215"/>
          <stop offset="50%" stop-color="#6d3b0c"/>
          <stop offset="100%" stop-color="#3e2005"/>
        </linearGradient>
      </defs>

      <!-- Fondo cálido del salón musical -->
      <rect width="300" height="200" fill="#261812"/>

      <!-- Plinto de madera de nogal del tocadiscos -->
      <rect x="24" y="18" width="252" height="164" rx="8" fill="url(#wood-plinth-p28)" stroke="#a66829" stroke-width="2"/>
      <rect x="32" y="26" width="236" height="148" rx="4" fill="#212121" stroke="#424242" stroke-width="1"/>

      <!-- Plato estroboscópico metálico y disco de vinilo LP de 33 RPM -->
      <circle cx="126" cy="100" r="68" fill="#9e9e9e" stroke="#616161" stroke-width="2" stroke-dasharray="3,2"/>
      <circle cx="126" cy="100" r="64" fill="#121212"/>

      <!-- Reflejos iridiscentes de luz en los microsurcos del vinilo -->
      <path d="M126 100 L76 52 A64 64 0 0 1 102 40 Z" fill="#ffffff" opacity="0.14"/>
      <path d="M126 100 L176 148 A64 64 0 0 1 150 160 Z" fill="#ffffff" opacity="0.14"/>

      <!-- Surcos concéntricos del LP -->
      <circle cx="126" cy="100" r="54" fill="none" stroke="#2c2c2c" stroke-width="0.8"/>
      <circle cx="126" cy="100" r="44" fill="none" stroke="#2c2c2c" stroke-width="0.8"/>
      <circle cx="126" cy="100" r="34" fill="none" stroke="#2c2c2c" stroke-width="0.8"/>

      <!-- Galleta central (Label) naranja y crema -->
      <circle cx="126" cy="100" r="22" fill="#ff6d00" stroke="#fff8e1" stroke-width="2"/>
      <circle cx="126" cy="100" r="9" fill="#fff8e1"/>
      <circle cx="126" cy="100" r="3" fill="#bdbdbd"/>

      <!-- Botón de encendido y selector 33 / 45 RPM -->
      <rect x="40" y="148" width="14" height="18" rx="2" fill="#424242" stroke="#757575" stroke-width="1"/>
      <circle cx="47" cy="154" r="2.5" fill="#ff5252"/>
      <circle cx="204" cy="154" r="9" fill="#757575" stroke="#bdbdbd" stroke-width="1.5"/>

      <!-- Base del brazo fonocaptor (Tonearm) y aguja apoyada en el disco -->
      <circle cx="234" cy="56" r="18" fill="#424242" stroke="#9e9e9e" stroke-width="2"/>
      <circle cx="234" cy="56" r="9" fill="#bdbdbd"/>
      <!-- Contrapeso trasero -->
      <rect x="228" y="30" width="12" height="10" rx="2" fill="#757575"/>
      <!-- Tubo cromado en S del brazo -->
      <path d="M234 56 L228 112 Q226 124 212 126 L174 122" fill="none" stroke="#e0e0e0" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Portacápsulas (Headshell) sobre el surco -->
      <rect x="160" y="117" width="16" height="9" rx="1.5" fill="#111111" stroke="#ffb300" stroke-width="1" transform="rotate(-8 168 121)"/>
    </svg>
  `
});

