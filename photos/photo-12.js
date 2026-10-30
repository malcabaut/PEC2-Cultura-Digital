/**
 * Fotograma 12 / 36
 * Escena: Café en la Plaza Mayor (Terraza soleada con soportales)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-12',
  frameNumber: 12,
  title: 'Café en la Plaza Mayor',
  year: '2023',
  date: '18 de mayo de 2023, 17:15',
  sceneEV: 13, // Sombra suave bajo toldo con plaza soleada
  tags: ['Comida', 'Viaje', 'Amigos', 'Arquitectura', '2023'],
  analogCaption: 'Café con leche y churros en los soportales de la Plaza Mayor. Tarde templada de primavera.',
  pageNumber: 'Fotograma 12 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 100 • 1/1000s',
    gps: '40.4154° N, 3.7074° W (Plaza Mayor, Madrid)',
    fileSize: '3.55 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Taza de café', conf: '99.7%' },
    { label: 'Terraza al aire libre', conf: '98.2%' },
    { label: 'Plaza histórica', conf: '96.5%' },
    { label: 'Soportales de ladrillo', conf: '93.8%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="facade-p12" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b71c1c"/>
          <stop offset="100%" stop-color="#8e1616"/>
        </linearGradient>
      </defs>

      <!-- Cielo azul de Madrid y chapiteles de pizarra -->
      <rect width="300" height="32" fill="#64b5f6"/>
      <polygon points="20,26 36,2 52,26" fill="#37474f"/>
      <line x1="36" y1="2" x2="36" y2="0" stroke="#ffd54f" stroke-width="1.5"/>
      <polygon points="248,26 264,2 280,26" fill="#37474f"/>
      <rect y="22" width="300" height="8" fill="#455a64"/>

      <!-- Fachada clásica rojiza de la Plaza Mayor -->
      <rect y="28" width="300" height="98" fill="url(#facade-p12)"/>
      <rect y="28" width="300" height="4" fill="#d7ccc8"/>
      <rect y="84" width="300" height="4" fill="#d7ccc8"/>

      <!-- Balcones de hierro forjado con contraventanas -->
      <g fill="#263238" stroke="#e0e0e0" stroke-width="0.8">
        <rect x="26" y="40" width="20" height="34"/><rect x="86" y="40" width="20" height="34"/>
        <rect x="140" y="40" width="20" height="34"/><rect x="194" y="40" width="20" height="34"/>
        <rect x="254" y="40" width="20" height="34"/>
      </g>
      <g fill="#1c262b">
        <rect x="21" y="66" width="30" height="9" rx="1"/><rect x="81" y="66" width="30" height="9" rx="1"/>
        <rect x="135" y="66" width="30" height="9" rx="1"/><rect x="189" y="66" width="30" height="9" rx="1"/>
        <rect x="249" y="66" width="30" height="9" rx="1"/>
      </g>

      <!-- Soportales de piedra de granito -->
      <rect y="88" width="300" height="38" fill="#bcaaa4"/>
      <g fill="#3e2723">
        <path d="M12 126 L12 106 Q36 92 60 106 L60 126 Z"/>
        <path d="M74 126 L74 106 Q98 92 122 106 L122 126 Z"/>
        <path d="M136 126 L136 106 Q150 94 164 106 L164 126 Z"/>
        <path d="M178 126 L178 106 Q202 92 226 106 L226 126 Z"/>
        <path d="M240 126 L240 106 Q264 92 288 106 L288 126 Z"/>
      </g>

      <!-- Suelo adoquinado soleado -->
      <rect y="126" width="300" height="74" fill="#d7ccc8"/>
      <line x1="0" y1="142" x2="300" y2="142" stroke="#bcaaa4" stroke-width="1"/>

      <!-- MESA DE MÁRMOL DE TERRAZA EN PRIMER PLANO -->
      <rect x="144" y="176" width="12" height="24" fill="#37474f"/>
      <ellipse cx="150" cy="172" rx="92" ry="24" fill="#eceff1" stroke="#b0bec5" stroke-width="3"/>
      <ellipse cx="150" cy="170" rx="86" ry="20" fill="#fafafa"/>

      <!-- Periódico doblado y gafas de sol -->
      <g transform="translate(76, 160) rotate(-8)">
        <rect x="0" y="0" width="38" height="20" rx="1" fill="#eeeeee" stroke="#9e9e9e" stroke-width="0.8"/>
        <rect x="4" y="3" width="18" height="3" fill="#616161"/>
        <line x1="4" y1="9" x2="34" y2="9" stroke="#9e9e9e" stroke-width="1"/>
        <line x1="4" y1="13" x2="34" y2="13" stroke="#9e9e9e" stroke-width="1"/>
        <line x1="4" y1="16" x2="24" y2="16" stroke="#9e9e9e" stroke-width="1"/>
      </g>

      <!-- Plato con croissant dorado -->
      <ellipse cx="195" cy="172" rx="20" ry="8" fill="#ffffff" stroke="#cfd8dc" stroke-width="1.2"/>
      <path d="M182 170 Q195 158 208 170 Q202 175 195 169 Q188 175 182 170 Z" fill="#f57f17" stroke="#e65100" stroke-width="1"/>

      <!-- Taza de café con leche y arte latte -->
      <g transform="translate(148, 160)">
        <!-- Platillo -->
        <ellipse cx="0" cy="8" rx="22" ry="9" fill="#ffffff" stroke="#b0bec5" stroke-width="1.5"/>
        <!-- Asa de porcelana -->
        <path d="M14 -4 Q23 -4 23 2 Q23 7 14 6" fill="none" stroke="#ffffff" stroke-width="3"/>
        <path d="M14 -4 Q23 -4 23 2 Q23 7 14 6" fill="none" stroke="#b0bec5" stroke-width="1"/>
        <!-- Cuerpo de la taza -->
        <path d="M-15 -6 L15 -6 Q15 9 0 9 Q-15 9 -15 -6 Z" fill="#ffffff" stroke="#cfd8dc" stroke-width="1"/>
        <!-- Superficie de crema y café -->
        <ellipse cx="0" cy="-6" rx="14" ry="5.5" fill="#6d4c41"/>
        <path d="M-4 -6 Q0 -10 4 -6 Q0 -2 -4 -6 Z" fill="#fff8e1" opacity="0.85"/>
        <!-- Humo aromático ascendiendo -->
        <path d="M-4 -14 Q-7 -20 -2 -25 T-4 -34" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.7" stroke-linecap="round"/>
        <path d="M4 -12 Q7 -18 2 -23 T4 -32" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.55" stroke-linecap="round"/>
      </g>
    </svg>
  `
});
