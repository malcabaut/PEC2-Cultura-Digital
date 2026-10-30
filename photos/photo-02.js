/**
 * Fotograma 02 / 36
 * Escena: Cumpleaños en Familia (Luz cálida de interior)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-02',
  frameNumber: 2,
  title: 'Cumpleaños del Abuelo',
  year: '2022',
  date: '20 de octubre de 2022, 14:15',
  sceneEV: 7, // Luz interior cálida de salón
  tags: ['Familia', 'Cumpleaños', 'Retrato', 'Sonrisa', 'Comida'],
  analogCaption: 'Los 70 años del abuelo en el comedor de casa. Todos reunidos soplando las velas.',
  pageNumber: 'Fotograma 02 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro (Modo Retrato)',
    lens: '50mm ƒ/1.9',
    iso: 'ISO 200 • 1/125s',
    gps: '40.4168° N, 3.7038° W (Madrid, España)',
    fileSize: '4.15 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Reunión familiar', conf: '99.5%' },
    { label: 'Pastel de cumpleaños', conf: '98.8%' },
    { label: 'Sonrisa / Expresión positiva', conf: '96.9%' },
    { label: 'Comedor interior', conf: '94.2%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="room-p2" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#fff8e7"/>
          <stop offset="65%" stop-color="#f7d7a8"/>
          <stop offset="100%" stop-color="#d7a66e"/>
        </radialGradient>
        <radialGradient id="candle-glow-p2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffeb3b" stop-opacity="0.7"/>
          <stop offset="60%" stop-color="#ff9800" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#ff9800" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="table-p2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6d4c41"/>
          <stop offset="100%" stop-color="#3e2723"/>
        </linearGradient>
      </defs>

      <!-- Pared cálida de salón familiar -->
      <rect width="300" height="200" fill="url(#room-p2)"/>

      <!-- Cuadros enmarcados al fondo -->
      <rect x="24" y="48" width="34" height="42" rx="2" fill="#8d6e63" stroke="#5d4037" stroke-width="2"/>
      <rect x="28" y="52" width="26" height="34" fill="#ffe0b2"/>
      <circle cx="41" cy="65" r="6" fill="#a1887f"/>
      <path d="M32 84 Q41 72 50 84" fill="#795548"/>

      <rect x="242" y="52" width="36" height="30" rx="2" fill="#8d6e63" stroke="#5d4037" stroke-width="2"/>
      <rect x="246" y="56" width="28" height="22" fill="#b3e5fc"/>
      <path d="M246 72 L256 63 L265 72 L274 66 L274 78 L246 78 Z" fill="#81c784"/>

      <!-- Guirnalda festiva de banderines -->
      <path d="M5 18 Q80 48 150 20 Q220 48 295 18" stroke="#8d6e63" stroke-width="1.5" fill="none"/>
      <polygon points="30,27 46,31 36,47" fill="#e91e63"/>
      <polygon points="62,33 78,35 70,51" fill="#29b6f6"/>
      <polygon points="96,34 112,31 105,49" fill="#66bb6a"/>
      <polygon points="130,27 146,22 140,40" fill="#ffa726"/>
      <polygon points="164,24 180,30 170,45" fill="#ab47bc"/>
      <polygon points="198,32 214,35 205,51" fill="#ef5350"/>
      <polygon points="232,34 248,30 241,48" fill="#ffee58"/>
      <polygon points="264,28 280,22 273,41" fill="#26a69a"/>

      <!-- Persona Izquierda (Hija) -->
      <g transform="translate(68, 66)">
        <path d="M8 28 Q24 4 40 28 L43 55 L5 55 Z" fill="#4e342e"/>
        <rect x="7" y="46" width="34" height="42" rx="10" fill="#00897b"/>
        <path d="M17 46 L24 56 L31 46" fill="#b2dfdb"/>
        <circle cx="24" cy="28" r="14" fill="#ffdfc4"/>
        <path d="M10 24 Q24 10 38 24 Q33 16 24 17 Q15 16 10 24 Z" fill="#4e342e"/>
        <circle cx="19" cy="27" r="1.6" fill="#2b1b17"/>
        <circle cx="29" cy="27" r="1.6" fill="#2b1b17"/>
        <circle cx="16" cy="31" r="2.5" fill="#f48fb1" opacity="0.45"/>
        <circle cx="32" cy="31" r="2.5" fill="#f48fb1" opacity="0.45"/>
        <path d="M19 33 Q24 38 29 33" stroke="#c62828" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      </g>

      <!-- Persona Derecha (Nieto) -->
      <g transform="translate(184, 72)">
        <rect x="8" y="42" width="32" height="40" rx="9" fill="#e53935"/>
        <rect x="8" y="54" width="32" height="4" fill="#ffcdd2"/>
        <circle cx="24" cy="26" r="13" fill="#ffdfc4"/>
        <path d="M11 22 Q24 9 37 22 Q32 15 24 15 Q16 15 11 22 Z" fill="#37474f"/>
        <!-- Gorrito de fiesta -->
        <polygon points="16,14 24,-4 32,14" fill="#7e57c2"/>
        <circle cx="24" cy="-4" r="3" fill="#ffeb3b"/>
        <circle cx="19.5" cy="26" r="1.6" fill="#2b1b17"/>
        <circle cx="28.5" cy="26" r="1.6" fill="#2b1b17"/>
        <path d="M19.5 31.5 Q24 36 28.5 31.5" stroke="#bf360c" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      </g>

      <!-- Figura Central: El Abuelo -->
      <g transform="translate(120, 52)">
        <!-- Chaqueta de punto y camisa -->
        <rect x="8" y="48" width="44" height="50" rx="12" fill="#283593"/>
        <polygon points="22,48 30,62 38,48" fill="#ffffff"/>
        <polygon points="28,54 32,54 31,72 29,72" fill="#c62828"/>
        <!-- Cabeza y pelo canoso -->
        <circle cx="13" cy="26" r="5" fill="#e0e0e0"/>
        <circle cx="47" cy="26" r="5" fill="#e0e0e0"/>
        <circle cx="30" cy="28" r="17" fill="#fbd2b0"/>
        <path d="M14 20 Q30 6 46 20 Q38 12 30 13 Q22 12 14 20 Z" fill="#eeeeee"/>
        <!-- Gafas del abuelo -->
        <rect x="19" y="23" width="9" height="6" rx="1.5" fill="none" stroke="#5d4037" stroke-width="1.4"/>
        <rect x="32" y="23" width="9" height="6" rx="1.5" fill="none" stroke="#5d4037" stroke-width="1.4"/>
        <line x1="28" y1="25" x2="32" y2="25" stroke="#5d4037" stroke-width="1.4"/>
        <circle cx="23.5" cy="26" r="1.4" fill="#212121"/>
        <circle cx="36.5" cy="26" r="1.4" fill="#212121"/>
        <!-- Bigote blanco y sonrisa -->
        <path d="M22 35 Q30 32 38 35" stroke="#eeeeee" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M24 37 Q30 42 36 37" stroke="#b71c1c" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      </g>

      <!-- Mesa de comedor con mantel -->
      <rect y="144" width="300" height="56" fill="url(#table-p2)"/>
      <path d="M0 144 L300 144 L300 156 Q275 162 250 156 Q225 150 200 156 Q175 162 150 156 Q125 150 100 156 Q75 162 50 156 Q25 150 0 156 Z" fill="#fff8e1"/>

      <!-- Copas de brindis en la mesa -->
      <ellipse cx="62" cy="148" rx="6" ry="3" fill="#ffecb3" stroke="#ffffff" stroke-width="1"/>
      <line x1="62" y1="151" x2="62" y2="158" stroke="#ffffff" stroke-width="1.2"/>
      <ellipse cx="238" cy="148" rx="6" ry="3" fill="#ffecb3" stroke="#ffffff" stroke-width="1"/>
      <line x1="238" y1="151" x2="238" y2="158" stroke="#ffffff" stroke-width="1.2"/>

      <!-- Resplandor cálido de las velas -->
      <circle cx="150" cy="112" r="38" fill="url(#candle-glow-p2)"/>

      <!-- Tarta de cumpleaños de dos pisos con glaseado -->
      <ellipse cx="150" cy="152" rx="36" ry="9" fill="#ffffff" stroke="#cfd8dc" stroke-width="1.5"/>
      <rect x="122" y="128" width="56" height="22" rx="4" fill="#f48fb1"/>
      <path d="M122 132 Q129 140 136 132 Q143 140 150 132 Q157 140 164 132 Q171 140 178 132 L178 128 L122 128 Z" fill="#ffffff"/>
      <ellipse cx="150" cy="128" rx="28" ry="6" fill="#fce4ec"/>
      <!-- Fresas decorativas -->
      <circle cx="130" cy="127" r="2.5" fill="#d32f2f"/>
      <circle cx="143" cy="128" r="2.5" fill="#d32f2f"/>
      <circle cx="157" cy="128" r="2.5" fill="#d32f2f"/>
      <circle cx="170" cy="127" r="2.5" fill="#d32f2f"/>

      <!-- Velas encendidas -->
      <g>
        <rect x="137" y="112" width="3" height="15" fill="#fff9c4" stroke="#fbc02d" stroke-width="0.5"/>
        <path d="M138.5 103 Q142 109 138.5 112 Q135 109 138.5 103 Z" fill="#ff9800"/>
        <circle cx="138.5" cy="109" r="1.5" fill="#ffff8d"/>

        <rect x="148.5" y="110" width="3" height="16" fill="#e1f5fe" stroke="#29b6f6" stroke-width="0.5"/>
        <path d="M150 101 Q153.5 107 150 110 Q146.5 107 150 101 Z" fill="#ff9800"/>
        <circle cx="150" cy="107" r="1.5" fill="#ffff8d"/>

        <rect x="160" y="112" width="3" height="15" fill="#fff9c4" stroke="#fbc02d" stroke-width="0.5"/>
        <path d="M161.5 103 Q165 109 161.5 112 Q158 109 161.5 103 Z" fill="#ff9800"/>
        <circle cx="161.5" cy="109" r="1.5" fill="#ffff8d"/>
      </g>
    </svg>
  `
});
