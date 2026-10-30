/**
 * Fotograma 03 / 36
 * Escena: Toby en la Playa (Luz brillante de mar y arena)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-03',
  frameNumber: 3,
  title: 'Toby en la Playa',
  year: '2024',
  date: '12 de agosto de 2024, 11:20',
  sceneEV: 15, // Sol brillante de playa y reflejos de agua
  tags: ['Mascotas', 'Playa', 'Perro', 'Naturaleza', '2024'],
  analogCaption: 'Toby corriendo por la arena de Zahara de los Atunes. El día más luminoso del verano.',
  pageNumber: 'Fotograma 03 de 36',
  exif: {
    camera: 'Google Pixel 8 (Sensor 50 MP)',
    lens: '25mm ƒ/1.68 Ráfaga rápida',
    iso: 'ISO 64 • 1/3200s (Action Pan)',
    gps: '36.1342° N, 5.8456° W (Costa de la Luz, Cádiz)',
    fileSize: '2.88 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Golden Retriever', conf: '99.9%' },
    { label: 'Perro / Canino', conf: '99.8%' },
    { label: 'Playa y Océano', conf: '98.5%' },
    { label: 'Actividad al aire libre', conf: '96.2%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-p3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#29b6f6"/>
          <stop offset="100%" stop-color="#b3e5fc"/>
        </linearGradient>
        <linearGradient id="sea-p3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0277bd"/>
          <stop offset="55%" stop-color="#00acc1"/>
          <stop offset="100%" stop-color="#80deea"/>
        </linearGradient>
        <linearGradient id="sand-p3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffe082"/>
          <stop offset="35%" stop-color="#ffd54f"/>
          <stop offset="100%" stop-color="#f9a825"/>
        </linearGradient>
        <linearGradient id="fur-p3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f4b952"/>
          <stop offset="100%" stop-color="#c98627"/>
        </linearGradient>
      </defs>

      <!-- Cielo y sol radiante -->
      <rect width="300" height="88" fill="url(#sky-p3)"/>
      <circle cx="48" cy="34" r="24" fill="#fff9c4" opacity="0.5"/>
      <circle cx="48" cy="34" r="15" fill="#fffde7"/>

      <!-- Gaviotas en el horizonte -->
      <path d="M180 32 Q185 26 190 32 Q195 26 200 32" stroke="#ffffff" stroke-width="1.5" fill="none"/>
      <path d="M215 24 Q219 19 223 24 Q227 19 231 24" stroke="#ffffff" stroke-width="1.3" fill="none"/>

      <!-- Océano Atlántico y velero lejano -->
      <rect y="84" width="300" height="50" fill="url(#sea-p3)"/>
      <polygon points="248,84 254,68 258,84" fill="#ffffff"/>
      <polygon points="246,84 252,73 248,84" fill="#e1f5fe"/>
      <rect x="245" y="84" width="14" height="2.5" fill="#37474f"/>

      <!-- Olas y espuma en la orilla -->
      <path d="M0 124 Q38 118 75 124 T150 124 T225 124 T300 124 L300 138 L0 138 Z" fill="#b2ebf2" opacity="0.7"/>
      <path d="M0 131 Q45 125 90 131 T180 131 T270 131 T300 131" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round"/>

      <!-- Arena dorada de la playa -->
      <rect y="132" width="300" height="68" fill="url(#sand-p3)"/>
      <path d="M0 132 Q60 139 120 134 T240 137 T300 133 L300 144 L0 144 Z" fill="#e6b85c" opacity="0.6"/>

      <!-- Pelota de playa y conchas -->
      <g transform="translate(242, 162)">
        <ellipse cx="0" cy="11" rx="12" ry="4" fill="#000000" opacity="0.18"/>
        <circle cx="0" cy="0" r="11" fill="#ffffff"/>
        <path d="M-11 0 A11 11 0 0 1 0 -11 L0 0 Z" fill="#e53935"/>
        <path d="M0 -11 A11 11 0 0 1 11 0 L0 0 Z" fill="#ffeb3b"/>
        <path d="M11 0 A11 11 0 0 1 0 11 L0 0 Z" fill="#1e88e5"/>
        <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
      </g>

      <!-- Sombra proyectada de Toby sobre la arena -->
      <ellipse cx="148" cy="176" rx="44" ry="8" fill="#b27814" opacity="0.35"/>

      <!-- GOLDEN RETRIEVER (TOBY) CORRIENDO FELIZ -->
      <g transform="translate(88, 92)">
        <!-- Cola peluda en movimiento -->
        <path d="M16 42 Q-6 22 6 8 Q14 18 24 36 Z" fill="url(#fur-p3)"/>
        <!-- Patas traseras en impulso -->
        <path d="M22 52 L8 78 L16 80 L28 56 Z" fill="#b87619"/>
        <path d="M32 54 L24 82 L33 83 L40 56 Z" fill="url(#fur-p3)"/>
        <!-- Cuerpo estilizado con pelaje -->
        <path d="M18 42 Q45 28 76 36 Q84 48 72 58 Q45 64 20 54 Z" fill="url(#fur-p3)"/>
        <path d="M35 56 Q52 65 68 55" fill="#f7ca72" opacity="0.8"/>
        <!-- Patas delanteras extendidas -->
        <path d="M64 52 L74 79 L83 78 L72 50 Z" fill="#b87619"/>
        <path d="M70 50 L92 73 L99 70 L78 46 Z" fill="url(#fur-p3)"/>
        <!-- Collar rojo con chapa dorada -->
        <path d="M66 30 L78 44" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
        <circle cx="77" cy="46" r="3" fill="#ffd600"/>
        <!-- Cabeza, hocico, oreja caída y lengua -->
        <circle cx="78" cy="24" r="14" fill="url(#fur-p3)"/>
        <path d="M84 18 L104 22 Q106 30 96 32 L82 31 Z" fill="#f4b952"/>
        <!-- Boca abierta y lengua rosa -->
        <path d="M86 30 L98 31 L93 36 L84 33 Z" fill="#4e342e"/>
        <path d="M90 32 Q94 42 98 38 Q99 34 94 31 Z" fill="#ff5252"/>
        <!-- Nariz y ojo brillante -->
        <circle cx="103" cy="23" r="3" fill="#212121"/>
        <circle cx="84" cy="20" r="2.4" fill="#1a1a1a"/>
        <circle cx="84.7" cy="19.3" r="0.8" fill="#ffffff"/>
        <!-- Oreja dorada al viento -->
        <path d="M68 16 Q56 24 63 36 Q73 36 74 22 Z" fill="#b57114"/>
      </g>

      <!-- Gotas de agua salpicando -->
      <g fill="#ffffff" opacity="0.85">
        <circle cx="78" cy="148" r="2"/><circle cx="84" cy="142" r="1.5"/><circle cx="195" cy="152" r="2"/>
      </g>
    </svg>
  `
});
