/**
 * Fotograma 31 / 36
 * Escena: Invernadero Botánico y Mariposas (Luz húmeda tropical)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-31',
  frameNumber: 31,
  title: 'Invernadero de Cristal y Mariposas',
  year: '2024',
  date: '07 de mayo de 2024, 12:30',
  sceneEV: 11, // Luz cenital tamizada por cúpula de vidrio
  tags: ['Naturaleza', 'Flores', 'Parque', 'Arquitectura', '2024'],
  analogCaption: 'Cúpula de hierro y cristal del Real Jardín Botánico. Helechos gigantes y mariposas.',
  pageNumber: 'Fotograma 31 de 36',
  exif: {
    camera: 'Google Pixel 8 Pro (Enfoque Macro)',
    lens: '50mm ƒ/1.9',
    iso: 'ISO 100 • 1/400s',
    gps: '40.4111° N, 3.6911° W (Real Jardín Botánico, Madrid)',
    fileSize: '4.18 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Invernadero de cristal', conf: '99.8%' },
    { label: 'Mariposa Monarca', conf: '99.4%' },
    { label: 'Flora tropical y helechos', conf: '98.1%' },
    { label: 'Jardín botánico', conf: '96.7%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glass-dome-p31" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e0f7fa"/>
          <stop offset="100%" stop-color="#a5d6a7"/>
        </linearGradient>
      </defs>

      <!-- Bóveda de cristal del invernadero -->
      <rect width="300" height="200" fill="url(#glass-dome-p31)"/>

      <!-- Estructura geométrica de hierro blanco de la cúpula -->
      <g stroke="#ffffff" stroke-width="2" fill="none" opacity="0.85">
        <path d="M20 200 Q20 15 150 15 Q280 15 280 200"/>
        <path d="M65 200 Q65 25 150 15 Q235 25 235 200"/>
        <line x1="150" y1="15" x2="150" y2="200"/>
        <line x1="20" y1="65" x2="280" y2="65"/>
        <line x1="20" y1="115" x2="280" y2="115"/>
      </g>

      <!-- Vegetación tropical exuberante (Monstera, palmas y helechos) -->
      <g fill="#1b5e20">
        <ellipse cx="45" cy="165" rx="52" ry="42"/>
        <ellipse cx="255" cy="165" rx="52" ry="42"/>
        <ellipse cx="150" cy="180" rx="75" ry="35" fill="#2e7d32"/>
      </g>
      <g fill="#43a047">
        <path d="M18 145 Q42 95 86 125 Q54 155 18 145 Z"/>
        <path d="M282 145 Q258 95 214 125 Q246 155 282 145 Z"/>
        <path d="M110 155 Q150 105 190 155 Z"/>
      </g>

      <!-- Flores exóticas de hibisco y aves del paraíso -->
      <circle cx="82" cy="138" r="10" fill="#e91e63"/><circle cx="82" cy="138" r="3" fill="#ffeb3b"/>
      <circle cx="218" cy="142" r="9" fill="#ff5722"/><circle cx="218" cy="142" r="3" fill="#ffeb3b"/>
      <circle cx="148" cy="148" r="11" fill="#ec407a"/><circle cx="148" cy="148" r="3.5" fill="#fff9c4"/>

      <!-- MARIPOSA MONARCA EN PRIMER PLANO VOLANDO -->
      <g transform="translate(132, 74) rotate(-12)">
        <!-- Alas naranjas con bordes negros -->
        <path d="M18 18 Q-6 -4 2 22 Q8 32 18 22 Z" fill="#ff6d00" stroke="#212121" stroke-width="2"/>
        <path d="M18 18 Q42 -4 34 22 Q28 32 18 22 Z" fill="#ff9100" stroke="#212121" stroke-width="2"/>
        <path d="M18 22 Q2 30 8 38 Q16 38 18 24 Z" fill="#ffab00" stroke="#212121" stroke-width="1.8"/>
        <path d="M18 22 Q34 30 28 38 Q20 38 18 24 Z" fill="#ffab00" stroke="#212121" stroke-width="1.8"/>
        <!-- Cuerpo y antenas -->
        <ellipse cx="18" cy="22" rx="2" ry="9" fill="#212121"/>
        <path d="M17 14 Q12 8 10 10 M19 14 Q24 8 26 10" stroke="#212121" stroke-width="1" fill="none"/>
      </g>
    </svg>
  `
});

