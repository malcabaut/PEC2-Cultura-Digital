/**
 * Fotograma 20 / 36
 * Escena: Taller de Pintura y Escultura (Interior bohemio)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-20',
  frameNumber: 20,
  title: 'Taller de Pintura del Artista',
  year: '2023',
  date: '17 de noviembre de 2023, 12:10',
  sceneEV: 7, // Luz interior cenital de buhardilla
  tags: ['Arte', 'Pintura', 'Retrato', 'Creatividad', '2023'],
  analogCaption: 'Caballete con lienzo al óleo, botes de pigmentos y pinceles en el estudio de Malasaña.',
  pageNumber: 'Fotograma 20 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 250 • 1/90s',
    gps: '40.4260° N, 3.7042° W (Barrio de Malasaña, Madrid)',
    fileSize: '3.70 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Caballete de pintura', conf: '99.8%' },
    { label: 'Estudio de arte', conf: '99.1%' },
    { label: 'Lienzo al óleo', conf: '96.5%' },
    { label: 'Paleta de colores', conf: '94.3%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Pared del estudio con ladrillo visto y tragaluz -->
      <rect width="300" height="158" fill="#efeae4"/>
      <g fill="#d7ccc8" opacity="0.6">
        <rect x="20" y="30" width="22" height="9"/><rect x="45" y="30" width="22" height="9"/>
        <rect x="32" y="42" width="22" height="9"/><rect x="57" y="42" width="22" height="9"/>
        <rect x="220" y="50" width="22" height="9"/><rect x="245" y="50" width="22" height="9"/>
      </g>

      <!-- Ventanal de buhardilla a la izquierda -->
      <rect x="0" y="12" width="42" height="86" fill="#e1f5fe" stroke="#8d6e63" stroke-width="3"/>
      <line x1="0" y1="55" x2="42" y2="55" stroke="#8d6e63" stroke-width="2"/>
      <polygon points="42,12 140,0 190,200 42,158" fill="#fffde7" opacity="0.22"/>

      <!-- Suelo de tarima de madera con salpicaduras de pintura -->
      <rect y="158" width="300" height="42" fill="#a1887f"/>
      <line x1="0" y1="158" x2="300" y2="158" stroke="#6d4c41" stroke-width="3"/>
      <circle cx="115" cy="184" r="4" fill="#29b6f6" opacity="0.7"/>
      <circle cx="168" cy="188" r="3" fill="#e91e63" opacity="0.7"/>
      <circle cx="142" cy="192" r="2.5" fill="#ffeb3b" opacity="0.8"/>

      <!-- Busto clásico de escayola sobre pedestal al fondo -->
      <rect x="48" y="114" width="24" height="44" fill="#cfd8dc" stroke="#b0bec5" stroke-width="1"/>
      <ellipse cx="60" cy="96" rx="9" ry="12" fill="#fafafa" stroke="#cfd8dc" stroke-width="1"/>
      <path d="M50 114 Q60 105 70 114 Z" fill="#eceff1"/>

      <!-- CABALLETE DE MADERA DE HAYA CENTRAL -->
      <line x1="145" y1="16" x2="104" y2="186" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
      <line x1="151" y1="16" x2="192" y2="186" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
      <line x1="148" y1="22" x2="148" y2="178" stroke="#5d4037" stroke-width="4" stroke-linecap="round"/>

      <!-- Lienzo pintado al óleo sobre el caballete -->
      <rect x="94" y="38" width="108" height="76" rx="1" fill="#fff8e1" stroke="#bcaaa4" stroke-width="2"/>
      <!-- Obra pictórica en el lienzo (paisaje expresionista) -->
      <rect x="98" y="42" width="100" height="42" fill="#29b6f6"/>
      <circle cx="124" cy="60" r="12" fill="#ffeb3b"/>
      <path d="M98 84 L128 58 L156 84 Z" fill="#7e57c2"/>
      <path d="M138 84 L172 52 L198 84 Z" fill="#5c6bc0"/>
      <rect x="98" y="84" width="100" height="26" fill="#26a69a"/>
      <path d="M110 96 Q148 86 186 98" stroke="#ff7043" stroke-width="4" fill="none" stroke-linecap="round"/>

      <!-- Bandeja portapinceles del caballete -->
      <rect x="84" y="114" width="128" height="6" rx="1" fill="#6d4c41"/>
      <rect x="142" y="32" width="12" height="6" fill="#5d4037"/>

      <!-- Mesa auxiliar con paleta de madera y botes de pinceles -->
      <rect x="216" y="128" width="68" height="54" fill="#6d4c41"/>
      <rect x="212" y="124" width="76" height="6" fill="#8d6e63"/>

      <!-- Bote de cristal con agua turquesa y pinceles -->
      <rect x="232" y="102" width="18" height="22" rx="2" fill="#b2ebf2" stroke="#78909c" stroke-width="1"/>
      <line x1="236" y1="102" x2="230" y2="80" stroke="#4e342e" stroke-width="2"/>
      <circle cx="230" cy="79" r="2.5" fill="#e53935"/>
      <line x1="241" y1="102" x2="241" y2="76" stroke="#4e342e" stroke-width="2"/>
      <circle cx="241" cy="75" r="2.5" fill="#1e88e5"/>
      <line x1="246" y1="102" x2="252" y2="82" stroke="#4e342e" stroke-width="2"/>
      <circle cx="252" cy="81" r="2.5" fill="#fdd835"/>

      <!-- Paleta de pintor con manchas de óleo -->
      <ellipse cx="268" cy="122" rx="14" ry="6" fill="#d7a15c" stroke="#8d5215" stroke-width="1"/>
      <circle cx="262" cy="121" r="2" fill="#e53935"/>
      <circle cx="268" cy="120" r="2" fill="#ffeb3b"/>
      <circle cx="274" cy="122" r="2" fill="#1e88e5"/>
    </svg>
  `
});
