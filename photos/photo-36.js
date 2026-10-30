/**
 * Fotograma 36 / 36
 * Escena: Vía Láctea sobre el Desierto (Cielo profundo y astrofotografía)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-36',
  frameNumber: 36,
  title: 'Vía Láctea en el Desierto',
  year: '2024',
  date: '11 de agosto de 2024, 01:45',
  sceneEV: 4, // Cielo profundo sin contaminación lumínica
  tags: ['Noche', 'Cielo', 'Paisaje', 'Naturaleza', 'Aventura', '2024'],
  analogCaption: 'Noche de las Perseidas en el desierto. El arco galáctico brillando sobre los arcos de roca.',
  pageNumber: 'Fotograma 36 de 36',
  exif: {
    camera: 'Google Pixel 8 Pro (Astrofotografía 4 min)',
    lens: '24mm ƒ/1.68',
    iso: 'ISO 3200 • 16s × 15 tomas apiladas',
    gps: '28.2723° N, 16.6425° W (Cañadas del Teide, Tenerife)',
    fileSize: '4.52 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Vía Láctea y núcleo galáctico', conf: '99.9%' },
    { label: 'Estrella fugaz / Perseidas', conf: '99.1%' },
    { label: 'Astrofotografía computacional', conf: '98.7%' },
    { label: 'Formación rocosa nocturna', conf: '96.2%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cosmos-p36" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#03040a"/>
          <stop offset="55%" stop-color="#0d132a"/>
          <stop offset="100%" stop-color="#231934"/>
        </linearGradient>
        <radialGradient id="galactic-core-p36" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd54f" stop-opacity="0.65"/>
          <stop offset="45%" stop-color="#ba68c8" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#3f51b5" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Bóveda celeste nocturna -->
      <rect width="300" height="165" fill="url(#cosmos-p36)"/>

      <!-- Banda diagonal de la Vía Láctea y su núcleo galáctico -->
      <g transform="rotate(-32 150 85)">
        <ellipse cx="150" cy="85" rx="140" ry="32" fill="url(#galactic-core-p36)"/>
        <ellipse cx="145" cy="85" rx="68" ry="18" fill="url(#galactic-core-p36)"/>
        <!-- Franja de polvo interestelar oscuro -->
        <path d="M60 84 Q145 78 230 88" stroke="#080a16" stroke-width="6" fill="none" opacity="0.65"/>
      </g>

      <!-- Campo de estrellas y estrella fugaz (Perseida) -->
      <g fill="#ffffff">
        <circle cx="28" cy="24" r="1.1"/><circle cx="64" cy="42" r="0.9"/><circle cx="96" cy="18" r="1.3"/>
        <circle cx="132" cy="68" r="1.4"/><circle cx="154" cy="52" r="1.2"/><circle cx="178" cy="36" r="1"/>
        <circle cx="212" cy="22" r="1.3"/><circle cx="254" cy="38" r="1"/><circle cx="278" cy="66" r="1.2"/>
        <circle cx="48" cy="96" r="1"/><circle cx="118" cy="108" r="1.2"/><circle cx="228" cy="92" r="1.1"/>
      </g>
      <line x1="52" y1="36" x2="92" y2="54" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="92" cy="54" r="2" fill="#80d8ff"/>

      <!-- Arco natural de roca y mesetas del desierto en silueta -->
      <path d="M0 158 L0 132 L36 118 L58 132 L92 146 L175 148 L196 92 L248 88 L268 142 L300 138 L300 200 L0 200 Z" fill="#0d0811"/>
      <!-- Hueco bajo el arco de piedra -->
      <path d="M206 148 Q222 106 242 148 Z" fill="#1e162e"/>
    </svg>
  `
});

