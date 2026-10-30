/**
 * Fotograma 23 / 36
 * Escena: Biblioteca Antigua y Libros (Luz tenue de flexo verde clásico)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-23',
  frameNumber: 23,
  title: 'Biblioteca Histórica y Lámpara Verde',
  year: '2023',
  date: '28 de octubre de 2023, 19:10',
  sceneEV: 6, // Interior en penumbra con flexo de banquero
  tags: ['Libros', 'Vintage', 'Biblioteca', 'Estudio', '2023'],
  analogCaption: 'Mesa de caoba en la biblioteca vieja. El cono de luz verde sobre las páginas abiertas.',
  pageNumber: 'Fotograma 23 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro (Modo Nocturno)',
    lens: '24mm ƒ/1.85',
    iso: 'ISO 400 • 1/40s',
    gps: '40.4233° N, 3.6901° W (Biblioteca Nacional, Madrid)',
    fileSize: '3.50 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Biblioteca clásica', conf: '99.8%' },
    { label: 'Lámpara de banquero verde', conf: '99.2%' },
    { label: 'Libros encuadernados', conf: '97.5%' },
    { label: 'Madera noble', conf: '95.1%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lamp-cone-p23" cx="50%" cy="20%" r="70%">
          <stop offset="0%" stop-color="#fff9c4" stop-opacity="0.55"/>
          <stop offset="60%" stop-color="#dce775" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#dce775" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="shade-p23" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#43a047"/>
          <stop offset="100%" stop-color="#1b5e20"/>
        </linearGradient>
      </defs>

      <!-- Estanterías de caoba en penumbra -->
      <rect width="300" height="118" fill="#1f120d"/>
      <rect y="52" width="300" height="5" fill="#3e2723"/>
      <rect y="102" width="300" height="6" fill="#3e2723"/>

      <!-- Lomos de libros antiguos con nervios dorados -->
      <g stroke="#140b08" stroke-width="0.8">
        <rect x="16" y="14" width="11" height="38" fill="#8e1616"/>
        <rect x="28" y="10" width="14" height="42" fill="#1b4d20"/>
        <rect x="43" y="16" width="10" height="36" fill="#b26a00"/>
        <rect x="54" y="12" width="13" height="40" fill="#1a237e"/>
        <rect x="68" y="15" width="12" height="37" fill="#4a148c"/>

        <rect x="18" y="62" width="13" height="40" fill="#5d4037"/>
        <rect x="32" y="65" width="11" height="37" fill="#b71c1c"/>
        <rect x="44" y="60" width="15" height="42" fill="#004d40"/>
        <rect x="60" y="64" width="12" height="38" fill="#e65100"/>
        <rect x="73" y="61" width="14" height="41" fill="#283593"/>

        <rect x="212" y="12" width="14" height="40" fill="#1b5e20"/>
        <rect x="227" y="16" width="11" height="36" fill="#b71c1c"/>
        <rect x="239" y="10" width="15" height="42" fill="#311b92"/>
        <rect x="255" y="14" width="12" height="38" fill="#bf360c"/>

        <rect x="208" y="62" width="14" height="40" fill="#880e4f"/>
        <rect x="223" y="60" width="14" height="42" fill="#1565c0"/>
        <rect x="238" y="65" width="12" height="37" fill="#f57f17"/>
        <rect x="251" y="61" width="15" height="41" fill="#2e7d32"/>
        <rect x="267" y="64" width="13" height="38" fill="#4e342e"/>
      </g>

      <!-- Mesa de lectura de caoba pulida -->
      <rect y="114" width="300" height="86" fill="#3b2014"/>
      <line x1="0" y1="114" x2="300" y2="114" stroke="#5d4037" stroke-width="3"/>

      <!-- Cono de luz proyectado por la lámpara de banquero -->
      <polygon points="150,62 42,200 258,200" fill="url(#lamp-cone-p23)"/>

      <!-- Globo terráqueo clásico a la izquierda -->
      <g transform="translate(54, 118)">
        <circle cx="16" cy="16" r="14" fill="#c5a059" stroke="#5d4037" stroke-width="1"/>
        <path d="M10 8 Q18 12 14 22 Q22 20 24 12 Z" fill="#6d4c41" opacity="0.6"/>
        <path d="M16 0 A18 18 0 0 1 16 32" fill="none" stroke="#ffb300" stroke-width="2"/>
        <rect x="10" y="32" width="12" height="4" fill="#ffb300"/>
      </g>

      <!-- LÁMPARA VERDE DE BANQUERO (ESMaltada y Latón) -->
      <ellipse cx="150" cy="122" rx="18" ry="6" fill="#ffb300" stroke="#b26a00" stroke-width="1.5"/>
      <rect x="147" y="66" width="6" height="56" fill="#ffca28"/>
      <path d="M114 68 C114 48 186 48 186 68 Z" fill="url(#shade-p23)" stroke="#0d3b13" stroke-width="1.5"/>
      <ellipse cx="150" cy="68" rx="36" ry="6" fill="#a5d6a7" opacity="0.85"/>
      <!-- Cadenita de encendido de latón -->
      <line x1="164" y1="68" x2="164" y2="84" stroke="#ffd54f" stroke-width="1.2" stroke-dasharray="2,1"/>
      <circle cx="164" cy="85" r="2" fill="#ffb300"/>

      <!-- LIBRO ANTIGUO ABIERTO Y GAFAS DE LECTURA EN PRIMER PLANO -->
      <g transform="translate(95, 148)">
        <!-- Cubierta de cuero -->
        <polygon points="0,34 55,30 110,34 114,38 55,34 -4,38" fill="#4e342e"/>
        <!-- Páginas abiertas con curvatura -->
        <path d="M2 10 Q28 4 55 12 Q82 4 108 10 L112 34 Q82 26 55 34 Q28 26 -2 34 Z" fill="#fff8e1" stroke="#d7ccc8" stroke-width="1"/>
        <line x1="55" y1="12" x2="55" y2="34" stroke="#bcaaa4" stroke-width="1.5"/>
        <!-- Renglones de texto simulados -->
        <g stroke="#8d6e63" stroke-width="1" opacity="0.7">
          <line x1="10" y1="16" x2="46" y2="18"/><line x1="10" y1="21" x2="46" y2="23"/><line x1="10" y1="26" x2="40" y2="28"/>
          <line x1="64" y1="18" x2="100" y2="16"/><line x1="64" y1="23" x2="100" y2="21"/><line x1="64" y1="28" x2="94" y2="26"/>
        </g>
        <!-- Cinta marcapáginas roja -->
        <path d="M55 34 Q58 42 52 46" stroke="#c62828" stroke-width="2.5" fill="none"/>
      </g>
    </svg>
  `
});
