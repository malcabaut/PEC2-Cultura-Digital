/**
 * Fotograma 14 / 36
 * Escena: Bicicletas en el Canal de Ámsterdam (Día suave otoñal)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-14',
  frameNumber: 14,
  title: 'Bicicletas junto al Canal',
  year: '2024',
  date: '26 de abril de 2024, 16:20',
  sceneEV: 11, // Luz tamizada entre fachadas y canales
  tags: ['Viaje', 'Bicicleta', 'Canal', 'Europa', '2024'],
  analogCaption: 'Bicicletas atadas a la barandilla de hierro del canal. El ritmo pausado de los pedales.',
  pageNumber: 'Fotograma 14 de 36',
  exif: {
    camera: 'Google Pixel 8',
    lens: '25mm ƒ/1.68',
    iso: 'ISO 100 • 1/640s',
    gps: '52.3702° N, 4.8952° E (Canal Prinsengracht, Ámsterdam)',
    fileSize: '3.78 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Bicicleta urbana', conf: '99.8%' },
    { label: 'Canal de agua', conf: '98.6%' },
    { label: 'Fachadas estrechas', conf: '96.2%' },
    { label: 'Barandilla de puente', conf: '94.5%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-p14" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b3e5fc"/>
          <stop offset="100%" stop-color="#e0f7fa"/>
        </linearGradient>
        <linearGradient id="canal-p14" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00695c"/>
          <stop offset="100%" stop-color="#004d40"/>
        </linearGradient>
      </defs>

      <!-- Cielo holandés luminoso -->
      <rect width="300" height="95" fill="url(#sky-p14)"/>

      <!-- Casas estrechas tradicionales de Ámsterdam con hastiales escalonados y ventanas blancas -->
      <!-- Casa 1 -->
      <rect x="14" y="22" width="46" height="72" fill="#6d4c41"/>
      <polygon points="14,22 24,14 30,8 44,8 50,14 60,22" fill="#4e342e"/>
      <!-- Casa 2 -->
      <rect x="60" y="16" width="44" height="78" fill="#263238"/>
      <path d="M60 16 Q82 -2 104 16 Z" fill="#1c262b"/>
      <!-- Casa 3 -->
      <rect x="104" y="26" width="48" height="68" fill="#b71c1c"/>
      <polygon points="104,26 128,8 152,26" fill="#8e0000"/>
      <!-- Casa 4 -->
      <rect x="152" y="18" width="46" height="76" fill="#8d6e63"/>
      <polygon points="152,18 164,10 186,10 198,18" fill="#5d4037"/>
      <!-- Casa 5 -->
      <rect x="198" y="22" width="48" height="72" fill="#2e7d32"/>
      <polygon points="198,22 222,5 246,22" fill="#1b5e20"/>
      <!-- Casa 6 -->
      <rect x="246" y="16" width="44" height="78" fill="#455a64"/>
      <polygon points="246,16 268,2 290,16" fill="#263238"/>

      <!-- Ventanas cuadriculadas blancas en todas las fachadas -->
      <g fill="#37474f" stroke="#ffffff" stroke-width="1.2">
        <rect x="24" y="34" width="10" height="16"/><rect x="40" y="34" width="10" height="16"/>
        <rect x="24" y="58" width="10" height="16"/><rect x="40" y="58" width="10" height="16"/>
        <rect x="70" y="28" width="10" height="16"/><rect x="84" y="28" width="10" height="16"/>
        <rect x="70" y="52" width="10" height="16"/><rect x="84" y="52" width="10" height="16"/>
        <rect x="114" y="36" width="10" height="16"/><rect x="132" y="36" width="10" height="16"/>
        <rect x="162" y="30" width="10" height="16"/><rect x="178" y="30" width="10" height="16"/>
        <rect x="208" y="34" width="10" height="16"/><rect x="226" y="34" width="10" height="16"/>
        <rect x="256" y="30" width="10" height="16"/><rect x="272" y="30" width="10" height="16"/>
      </g>

      <!-- Canal Prinsengracht y reflejos -->
      <rect y="92" width="300" height="44" fill="url(#canal-p14)"/>
      <line x1="20" y1="104" x2="90" y2="104" stroke="#80cbc4" stroke-width="1.5" opacity="0.5"/>
      <line x1="170" y1="114" x2="260" y2="114" stroke="#80cbc4" stroke-width="1.5" opacity="0.5"/>

      <!-- Puente adoquinado en primer plano -->
      <rect y="132" width="300" height="68" fill="#607d8b"/>
      <rect y="130" width="300" height="5" fill="#37474f"/>

      <!-- Barandilla de hierro forjado negro -->
      <line x1="0" y1="104" x2="300" y2="104" stroke="#1a1a1a" stroke-width="3.5"/>
      <g stroke="#1a1a1a" stroke-width="2">
        <line x1="25" y1="104" x2="25" y2="132"/><line x1="55" y1="104" x2="55" y2="132"/>
        <line x1="85" y1="104" x2="85" y2="132"/><line x1="115" y1="104" x2="115" y2="132"/>
        <line x1="145" y1="104" x2="145" y2="132"/><line x1="175" y1="104" x2="175" y2="132"/>
        <line x1="205" y1="104" x2="205" y2="132"/><line x1="235" y1="104" x2="235" y2="132"/>
        <line x1="265" y1="104" x2="265" y2="132"/>
      </g>

      <!-- BICICLETA HOLANDESA CON CESTA DE FLORES APOYADA EN LA BARANDILLA -->
      <g transform="translate(88, 102)">
        <!-- Sombra en los adoquines -->
        <ellipse cx="62" cy="70" rx="54" ry="6" fill="#263238" opacity="0.5"/>

        <!-- Ruedas con llanta crema y radios -->
        <circle cx="24" cy="50" r="20" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
        <circle cx="24" cy="50" r="17.5" fill="none" stroke="#fff8e1" stroke-width="1.2"/>
        <circle cx="96" cy="50" r="20" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
        <circle cx="96" cy="50" r="17.5" fill="none" stroke="#fff8e1" stroke-width="1.2"/>
        <g stroke="#cfd8dc" stroke-width="0.7">
          <line x1="24" y1="30" x2="24" y2="70"/><line x1="4" y1="50" x2="44" y2="50"/>
          <line x1="10" y1="36" x2="38" y2="64"/><line x1="38" y1="36" x2="10" y2="64"/>
          <line x1="96" y1="30" x2="96" y2="70"/><line x1="76" y1="50" x2="116" y2="50"/>
          <line x1="82" y1="36" x2="110" y2="64"/><line x1="110" y1="36" x2="82" y2="64"/>
        </g>

        <!-- Cuadro clásico rojo carmín -->
        <path d="M24 50 L54 50 L78 24 L42 26 Z" fill="none" stroke="#d32f2f" stroke-width="3.5" stroke-linejoin="round"/>
        <line x1="54" y1="50" x2="40" y2="16" stroke="#d32f2f" stroke-width="3.5"/>
        <line x1="96" y1="50" x2="76" y2="10" stroke="#d32f2f" stroke-width="3.5"/>

        <!-- Plato y cadena -->
        <circle cx="54" cy="50" r="5" fill="#cfd8dc" stroke="#37474f" stroke-width="1.5"/>

        <!-- Sillín de cuero marrón y manillar cromado -->
        <path d="M32 16 L48 16 Q46 21 34 20 Z" fill="#5d4037"/>
        <path d="M66 10 L78 10 L82 14" fill="none" stroke="#eceff1" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Cesta de mimbre delantera con flores -->
        <rect x="82" y="14" width="16" height="13" rx="2" fill="#d7a15c" stroke="#8d5215" stroke-width="1.2"/>
        <circle cx="86" cy="12" r="3.5" fill="#ffeb3b"/>
        <circle cx="92" cy="11" r="3.5" fill="#e91e63"/>
        <circle cx="96" cy="13" r="3" fill="#ff9800"/>
      </g>
    </svg>
  `
});
