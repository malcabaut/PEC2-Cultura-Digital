/**
 * Fotograma 27 / 36
 * Escena: Santuario Fushimi Inari y Cerezos en Kioto (Primavera en Japón)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-27',
  frameNumber: 27,
  title: 'Torii y Cerezos en Kioto',
  year: '2024',
  date: '03 de abril de 2024, 11:15',
  sceneEV: 12, // Luz primaveral entre flores de cerezo (Sakura)
  tags: ['Viaje', 'Arquitectura', 'Flores', 'Monumento', 'Naturaleza', '2024'],
  analogCaption: 'El pórtico Torii bermellón enmarcado por las ramas de cerezo en flor en Kioto.',
  pageNumber: 'Fotograma 27 de 36',
  exif: {
    camera: 'Google Pixel 8 Pro',
    lens: '24mm ƒ/1.68',
    iso: 'ISO 64 • 1/1000s',
    gps: '34.9671° N, 135.7727° E (Kioto, Japón)',
    fileSize: '4.28 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Puerta Torii japonesa', conf: '99.9%' },
    { label: 'Flor de cerezo (Sakura)', conf: '99.5%' },
    { label: 'Monte Fuji en horizonte', conf: '96.8%' },
    { label: 'Primavera en Japón', conf: '95.4%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sakura-sky-p27" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#90caf9"/>
          <stop offset="65%" stop-color="#fce4ec"/>
          <stop offset="100%" stop-color="#fff8e1"/>
        </linearGradient>
      </defs>

      <!-- Cielo primaveral suave y sol naciente -->
      <rect width="300" height="150" fill="url(#sakura-sky-p27)"/>
      <circle cx="215" cy="58" r="24" fill="#ffcdd2" opacity="0.65"/>

      <!-- Silueta del Monte Fuji nevado en la lejanía -->
      <path d="M145 142 Q198 122 215 78 Q232 122 285 142 Z" fill="#7986cb" opacity="0.65"/>
      <path d="M196 105 Q215 78 234 105 L224 102 L215 108 L206 101 Z" fill="#ffffff"/>

      <!-- Lago tranquilo y sendero de piedra -->
      <rect y="140" width="300" height="60" fill="#4fc3f7" opacity="0.45"/>
      <path d="M0 154 L300 154 L300 200 L0 200 Z" fill="#546e7a"/>
      <polygon points="108,154 192,154 228,200 72,200" fill="#90a4ae"/>

      <!-- GRAN PUERTA TORII BERMELLÓN TRADICIONAL -->
      <g transform="translate(88, 48)">
        <!-- Pilares cilíndricos con basa negra -->
        <rect x="20" y="24" width="11" height="96" fill="#d32f2f"/>
        <rect x="93" y="24" width="11" height="96" fill="#d32f2f"/>
        <rect x="18" y="102" width="15" height="18" fill="#212121"/>
        <rect x="91" y="102" width="15" height="18" fill="#212121"/>
        <!-- Dintel superior curvado (Kasagi) -->
        <path d="M0 14 Q62 24 124 14 L120 24 Q62 32 4 24 Z" fill="#212121"/>
        <path d="M4 22 Q62 30 120 22 L118 28 Q62 35 6 28 Z" fill="#d32f2f"/>
        <!-- Travesaño secundario (Nuki) y tablilla central -->
        <rect x="10" y="38" width="104" height="7" fill="#d32f2f"/>
        <rect x="55" y="25" width="14" height="16" fill="#212121" stroke="#ffd54f" stroke-width="1"/>
      </g>

      <!-- Ramas de cerezo japonés en flor (Sakura) en primer plano -->
      <path d="M0 24 Q55 34 95 16 M42 26 Q62 46 82 42" stroke="#4e342e" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M300 30 Q245 42 215 22" stroke="#4e342e" stroke-width="3.5" fill="none" stroke-linecap="round"/>

      <g fill="#f8bbd0">
        <circle cx="18" cy="22" r="14"/><circle cx="44" cy="28" r="16"/><circle cx="72" cy="20" r="14"/><circle cx="78" cy="40" r="11"/>
        <circle cx="282" cy="28" r="15"/><circle cx="254" cy="34" r="14"/><circle cx="228" cy="24" r="12"/>
      </g>
      <g fill="#f06292">
        <circle cx="24" cy="24" r="4"/><circle cx="48" cy="26" r="4.5"/><circle cx="70" cy="22" r="4"/>
        <circle cx="276" cy="30" r="4"/><circle cx="250" cy="32" r="4"/>
      </g>
      <!-- Pétalos rosas flotando en la brisa -->
      <g fill="#f48fb1">
        <ellipse cx="122" cy="65" rx="3" ry="1.5" transform="rotate(25 122 65)"/>
        <ellipse cx="165" cy="92" rx="3" ry="1.5" transform="rotate(-20 165 92)"/>
        <ellipse cx="142" cy="128" rx="3" ry="1.5" transform="rotate(15 142 128)"/>
      </g>
    </svg>
  `
});

