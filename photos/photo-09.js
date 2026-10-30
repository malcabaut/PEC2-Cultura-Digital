/**
 * Fotograma 09 / 36
 * Escena: Gato Durmiendo en el Alféizar (Sombra interior con rayo de sol)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-09',
  frameNumber: 9,
  title: 'Mishi Durmiendo al Sol',
  year: '2023',
  date: '10 de noviembre de 2023, 15:20',
  sceneEV: 8, // Luz filtrada por cortina en ventana
  tags: ['Mascotas', 'Gato', 'Retrato', 'Naturaleza', '2023'],
  analogCaption: 'Mishi acurrucado en el alféizar de la ventana aprovechando el último rayo de sol de la tarde.',
  pageNumber: 'Fotograma 09 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro (Enfoque Macro)',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 160 • 1/120s',
    gps: '40.4168° N, 3.7038° W (Madrid, España)',
    fileSize: '3.12 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Gato doméstico', conf: '99.8%' },
    { label: 'Mascota durmiendo', conf: '99.1%' },
    { label: 'Alféizar de ventana', conf: '96.3%' },
    { label: 'Luz natural suave', conf: '94.5%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="win-p9" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#81d4fa"/>
          <stop offset="100%" stop-color="#e1f5fe"/>
        </linearGradient>
        <linearGradient id="sunbeam-p9" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff9c4" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#fff59d" stop-opacity="0.1"/>
        </linearGradient>
        <linearGradient id="cat-p9" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffa726"/>
          <stop offset="100%" stop-color="#ef6c00"/>
        </linearGradient>
      </defs>

      <!-- Pared interior en penumbra suave -->
      <rect width="300" height="200" fill="#4e342e"/>

      <!-- Gran ventanal con jardín exterior desenfocado -->
      <rect x="28" y="0" width="244" height="145" fill="url(#win-p9)"/>
      <circle cx="90" cy="110" r="35" fill="#81c784" opacity="0.6"/>
      <circle cx="195" cy="105" r="42" fill="#66bb6a" opacity="0.55"/>
      <circle cx="75" cy="36" r="16" fill="#fffde7" opacity="0.9"/>

      <!-- Carpintería de madera blanca de la ventana -->
      <rect x="24" y="0" width="8" height="145" fill="#eceff1"/>
      <rect x="268" y="0" width="8" height="145" fill="#eceff1"/>
      <rect x="146" y="0" width="8" height="145" fill="#eceff1"/>
      <rect x="28" y="68" width="244" height="7" fill="#eceff1"/>

      <!-- Cortina izquierda semitransparente recogida -->
      <path d="M0 0 L52 0 Q42 75 26 145 L0 145 Z" fill="#fff8e1" opacity="0.85"/>

      <!-- Alféizar de madera cálida -->
      <rect y="142" width="300" height="58" fill="#8d6e63"/>
      <rect y="142" width="300" height="8" fill="#a1887f"/>
      <line x1="0" y1="150" x2="300" y2="150" stroke="#5d4037" stroke-width="2"/>

      <!-- Maceta de terracota con planta verde a la izquierda -->
      <g transform="translate(52, 92)">
        <path d="M18 28 Q2 10 8 2 Q20 12 22 28 Z" fill="#2e7d32"/>
        <path d="M24 28 Q26 4 34 0 Q36 14 28 28 Z" fill="#43a047"/>
        <path d="M28 28 Q44 12 46 22 Q36 28 28 28 Z" fill="#388e3c"/>
        <polygon points="10,28 38,28 33,54 15,54" fill="#d84315"/>
        <rect x="8" y="25" width="32" height="5" rx="1.5" fill="#bf360c"/>
      </g>

      <!-- Rayo de sol diagonal con motas de polvo flotando -->
      <polygon points="36,0 146,0 265,200 120,200" fill="url(#sunbeam-p9)"/>
      <g fill="#fffde7" opacity="0.75">
        <circle cx="115" cy="52" r="1.3"/><circle cx="138" cy="78" r="1"/><circle cx="164" cy="96" r="1.5"/>
        <circle cx="148" cy="112" r="1.2"/><circle cx="188" cy="118" r="1"/>
      </g>

      <!-- GATO ATIGRADO NARANJA (MISHI) ACURRUCADO -->
      <g transform="translate(128, 108)">
        <!-- Sombra bajo el cuerpo -->
        <ellipse cx="48" cy="48" rx="44" ry="9" fill="#3e2723" opacity="0.45"/>

        <!-- Cuerpo redondeado -->
        <ellipse cx="48" cy="34" rx="38" ry="23" fill="url(#cat-p9)"/>

        <!-- Rayas atigradas dorsales -->
        <path d="M34 13 Q38 26 34 38" stroke="#bf360c" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M48 11 Q52 26 48 40" stroke="#bf360c" stroke-width="3.2" stroke-linecap="round" fill="none"/>
        <path d="M62 14 Q66 27 61 39" stroke="#bf360c" stroke-width="3" stroke-linecap="round" fill="none"/>

        <!-- Cola peluda enroscada hacia adelante -->
        <path d="M82 38 Q96 34 90 22 Q84 14 74 22" stroke="#ef6c00" stroke-width="9" stroke-linecap="round" fill="none"/>
        <path d="M87 30 L92 28 M84 22 L89 19" stroke="#bf360c" stroke-width="2.5"/>

        <!-- Patitas blancas delanteras -->
        <ellipse cx="14" cy="46" rx="8" ry="4.5" fill="#fff8e1"/>
        <ellipse cx="28" cy="48" rx="8" ry="4.5" fill="#fff8e1"/>

        <!-- Cabeza apoyada sobre las patas -->
        <circle cx="20" cy="30" r="17" fill="url(#cat-p9)"/>
        <!-- Orejas con interior rosado -->
        <polygon points="6,19 11,4 21,15" fill="#e65100"/>
        <polygon points="9,17 12,8 18,15" fill="#f48fb1"/>
        <polygon points="22,15 32,4 35,20" fill="#e65100"/>
        <polygon points="24,15 30,8 33,18" fill="#f48fb1"/>

        <!-- Ojos cerrados plácidamente -->
        <path d="M10 31 Q14 35 18 31" stroke="#3e2723" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        <path d="M22 31 Q26 35 30 31" stroke="#3e2723" stroke-width="1.8" fill="none" stroke-linecap="round"/>

        <!-- Hocico blanco, nariz rosada y bigotes -->
        <ellipse cx="20" cy="37" rx="7" ry="4.5" fill="#fff8e1"/>
        <polygon points="17.5,35 22.5,35 20,38" fill="#ec407a"/>
        <g stroke="#ffffff" stroke-width="1" opacity="0.9">
          <line x1="12" y1="36" x2="0" y2="34"/><line x1="12" y1="38" x2="1" y2="40"/>
          <line x1="28" y1="36" x2="40" y2="34"/><line x1="28" y1="38" x2="39" y2="40"/>
        </g>
      </g>
    </svg>
  `
});
