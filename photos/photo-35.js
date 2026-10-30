/**
 * Fotograma 35 / 36
 * Escena: Cámara Réflex y Carretes sobre Escritorio (Autorreferencia analógica)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-35',
  frameNumber: 35,
  title: 'Mesa del Fotógrafo Analógico',
  year: '1999',
  date: '25 de agosto de 1999, 19:00',
  sceneEV: 8, // Luz lateral de escritorio con objetos fotográficos
  tags: ['Vintage', 'Arte', 'Estudio', 'Personal'],
  analogCaption: 'Preparando el equipo antes del viaje: la cámara mecánica, chasis de 35mm y hoja de contactos.',
  pageNumber: 'Fotograma 35 de 36',
  exif: {
    camera: 'Digitalizado de Negativo 35mm Kodak Gold',
    lens: '50mm ƒ/1.8',
    iso: 'ISO 400 • 1/60s',
    gps: '40.4168° N, 3.7038° W (Estudio Fotográfico)',
    fileSize: '4.60 MB (Escáner de película)',
    dimensions: '3600 × 2400 px'
  },
  aiTags: [
    { label: 'Cámara réflex analógica 35mm', conf: '99.9%' },
    { label: 'Carrete fotográfico Kodak', conf: '99.6%' },
    { label: 'Fotografía vintage', conf: '98.4%' },
    { label: 'Lente óptica 50mm', conf: '96.9%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Mesa de madera oscura -->
      <rect width="300" height="200" fill="#3e2723"/>
      <rect y="0" width="300" height="90" fill="#271815"/>

      <!-- Fotografías impresas sobre la mesa -->
      <g transform="translate(26, 128) rotate(-10)">
        <rect x="0" y="0" width="54" height="44" fill="#ffffff" stroke="#cfd8dc" stroke-width="1"/>
        <rect x="4" y="4" width="46" height="30" fill="#81d4fa"/>
        <circle cx="16" cy="14" r="5" fill="#fff59d"/>
        <polygon points="4,34 24,18 42,34" fill="#43a047"/>
      </g>

      <!-- CÁMARA RÉFLEX CLÁSICA DE METAL Y CUERO EN EL CENTRO -->
      <g transform="translate(96, 54)">
        <!-- Pentaprisma superior cromado -->
        <polygon points="34,20 46,2 74,2 86,20" fill="#cfd8dc" stroke="#78909c" stroke-width="1.5"/>
        <!-- Diales superiores -->
        <rect x="12" y="14" width="16" height="6" fill="#b0bec5"/>
        <rect x="92" y="12" width="18" height="8" fill="#b0bec5"/>
        <rect x="112" y="15" width="8" height="5" fill="#d32f2f"/>

        <!-- Chasis metálico superior e inferior y cuerpo de cuero negro -->
        <rect x="6" y="20" width="108" height="14" rx="2" fill="#eceff1"/>
        <rect x="6" y="34" width="108" height="50" rx="3" fill="#1a1a1a" stroke="#424242" stroke-width="1"/>
        <rect x="6" y="80" width="108" height="6" rx="1" fill="#cfd8dc"/>

        <!-- Objetivo luminoso 50mm con reflejos multicapa en la lente -->
        <circle cx="60" cy="58" r="28" fill="#b0bec5" stroke="#37474f" stroke-width="2"/>
        <circle cx="60" cy="58" r="23" fill="#212121" stroke="#616161" stroke-width="1.5"/>
        <circle cx="60" cy="58" r="16" fill="#0d1b2a"/>
        <ellipse cx="54" cy="52" rx="6" ry="3.5" fill="#29b6f6" opacity="0.55" transform="rotate(-30 54 52)"/>
        <circle cx="66" cy="64" r="2.5" fill="#ab47bc" opacity="0.5"/>
      </g>

      <!-- Dos carretes de película 35mm Kodak Gold a la derecha -->
      <g transform="translate(226, 98)">
        <!-- Lengüeta de celuloide saliendo del chasis -->
        <path d="M0 18 L-24 24 L-20 40 L4 36 Z" fill="#6d4c41" opacity="0.85"/>
        <!-- Cilindro amarillo y negro -->
        <rect x="0" y="6" width="28" height="40" rx="2" fill="#ffb300" stroke="#212121" stroke-width="1.5"/>
        <rect x="0" y="16" width="28" height="12" fill="#212121"/>
        <text x="14" y="24" text-anchor="middle" fill="#ffb300" font-family="monospace" font-size="6.5" font-weight="bold">400</text>
        <ellipse cx="14" cy="6" rx="14" ry="4" fill="#212121"/>
        <rect x="9" y="0" width="10" height="6" fill="#424242"/>
      </g>
    </svg>
  `
});

