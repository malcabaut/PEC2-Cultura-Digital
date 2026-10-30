/**
 * Fotograma 16 / 36
 * Escena: Festival de Globos Aerostáticos (Amanecer en Capadocia)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-16',
  frameNumber: 16,
  title: 'Festival de Globos Aerostáticos',
  year: '2024',
  date: '08 de junio de 2024, 06:40',
  sceneEV: 10, // Luz suave y rosada del primer alba
  tags: ['Viaje', 'Aventura', 'Cielo', 'Paisaje', '2024'],
  analogCaption: 'Decenas de globos de colores elevándose sobre los valles al romper el día.',
  pageNumber: 'Fotograma 16 de 36',
  exif: {
    camera: 'Google Pixel 8 (Teleobjetivo 5x)',
    lens: '120mm ƒ/2.8',
    iso: 'ISO 100 • 1/500s',
    gps: '38.6431° N, 34.8289° E (Valle de Göreme, Capadocia)',
    fileSize: '3.45 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Globos aerostáticos', conf: '99.9%' },
    { label: 'Amanecer en el valle', conf: '98.4%' },
    { label: 'Cielo pastel', conf: '96.8%' },
    { label: 'Vuelo panorámico', conf: '94.2%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dawn-p16" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4a154b"/>
          <stop offset="35%" stop-color="#c2185b"/>
          <stop offset="70%" stop-color="#ff8a65"/>
          <stop offset="100%" stop-color="#fff59d"/>
        </linearGradient>
      </defs>

      <!-- Cielo del alba en Capadocia -->
      <rect width="300" height="162" fill="url(#dawn-p16)"/>
      <circle cx="245" cy="135" r="32" fill="#fffde7" opacity="0.45"/>

      <!-- Valles rocosos y chimeneas de las hadas -->
      <path d="M0 156 Q48 134 95 152 Q155 128 215 154 Q260 138 300 148 L300 200 L0 200 Z" fill="#8d6e63"/>
      <path d="M0 172 Q75 148 145 170 Q215 146 300 168 L300 200 L0 200 Z" fill="#4e342e"/>
      <!-- Formaciones cónicas de Capadocia -->
      <polygon points="34,175 40,144 46,175" fill="#5d4037"/>
      <polygon points="50,178 55,150 60,178" fill="#4e342e"/>
      <polygon points="222,174 228,146 234,174" fill="#5d4037"/>

      <!-- Globos lejanos en el horizonte -->
      <g fill="#311b92" opacity="0.6">
        <circle cx="28" cy="96" r="5"/><rect x="26.5" y="102" width="3" height="2"/>
        <circle cx="96" cy="112" r="4"/><rect x="94.8" y="117" width="2.4" height="1.8"/>
        <circle cx="195" cy="104" r="4.5"/><rect x="193.5" y="109.5" width="3" height="2"/>
        <circle cx="276" cy="84" r="5.5"/><rect x="274.5" y="90.5" width="3" height="2"/>
      </g>

      <!-- Globo Secundario Izquierdo -->
      <g transform="translate(52, 48) scale(0.72)">
        <path d="M0 26 C0 8 44 8 44 26 C44 40 32 50 28 58 L16 58 C12 50 0 40 0 26 Z" fill="#8e24aa"/>
        <path d="M12 13 Q22 10 32 13 L26 58 L18 58 Z" fill="#ffca28"/>
        <circle cx="22" cy="61" r="2.5" fill="#ff9800"/>
        <rect x="17" y="64" width="10" height="7" rx="1" fill="#4e342e"/>
      </g>

      <!-- Globo Secundario Derecho -->
      <g transform="translate(216, 36) scale(0.8)">
        <path d="M0 26 C0 8 44 8 44 26 C44 40 32 50 28 58 L16 58 C12 50 0 40 0 26 Z" fill="#00897b"/>
        <path d="M12 13 Q22 10 32 13 L26 58 L18 58 Z" fill="#ff7043"/>
        <circle cx="22" cy="61" r="2.5" fill="#ffeb3b"/>
        <rect x="17" y="64" width="10" height="7" rx="1" fill="#4e342e"/>
      </g>

      <!-- GLOBO AEROSTÁTICO PRINCIPAL EN PRIMER PLANO -->
      <g transform="translate(118, 22)">
        <!-- Envoltura multicolor con gajos -->
        <path d="M4 36 C4 6 60 6 60 36 C60 56 44 70 39 82 L25 82 C20 70 4 56 4 36 Z" fill="#e53935"/>
        <path d="M14 14 Q32 8 50 14 C50 42 40 64 37 82 L27 82 C24 64 14 42 14 14 Z" fill="#ffb300"/>
        <path d="M23 11 Q32 9 41 11 L35 82 L29 82 Z" fill="#1e88e5"/>
        <!-- Franja decorativa horizontal -->
        <path d="M5 36 Q32 42 59 36" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.85"/>
        <!-- Llamarada del quemador -->
        <circle cx="32" cy="86" r="4" fill="#ffeb3b"/>
        <circle cx="32" cy="86" r="2" fill="#ffffff"/>
        <!-- Cables y barquilla de mimbre -->
        <line x1="26" y1="82" x2="27" y2="91" stroke="#3e2723" stroke-width="1"/>
        <line x1="38" y1="82" x2="37" y2="91" stroke="#3e2723" stroke-width="1"/>
        <rect x="24" y="91" width="16" height="11" rx="2" fill="#6d4c41" stroke="#3e2723" stroke-width="1"/>
      </g>
    </svg>
  `
});
