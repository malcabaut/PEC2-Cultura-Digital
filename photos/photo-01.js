/**
 * Fotograma 01 / 36
 * Escena: Torre Eiffel en París (Día soleado con cielo despejado)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-01',
  frameNumber: 1,
  title: 'Torre Eiffel en París',
  year: '2023',
  date: '14 de julio de 2023, 16:30',
  sceneEV: 14, // Día soleado exterior
  tags: ['París', 'Viaje', 'Monumento', 'Arquitectura', '2023'],
  analogCaption: 'París, verano de 1998. La Torre Eiffel recortada contra el cielo de julio.',
  pageNumber: 'Fotograma 01 de 36',
  exif: {
    camera: 'Google Pixel 7 Pro (Sensor 1/1.31")',
    lens: '24mm ƒ/1.85 Gran angular',
    iso: 'ISO 50 • 1/2000s',
    gps: '48.8584° N, 2.2945° E (Champ de Mars, París)',
    fileSize: '3.42 MB (24-bit RGB)',
    dimensions: '4032 × 3024 px'
  },
  aiTags: [
    { label: 'Torre Eiffel', conf: '99.8%' },
    { label: 'Cielo despejado', conf: '97.2%' },
    { label: 'Monumento de hierro', conf: '95.4%' },
    { label: 'Turismo en Europa', conf: '92.1%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky-p1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1967d2"/>
          <stop offset="55%" stop-color="#64b5f6"/>
          <stop offset="100%" stop-color="#e3f2fd"/>
        </linearGradient>
        <radialGradient id="sun-p1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="45%" stop-color="#fff9c4"/>
          <stop offset="100%" stop-color="#fff9c4" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="iron-p1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3e342f"/>
          <stop offset="45%" stop-color="#6b584d"/>
          <stop offset="100%" stop-color="#2b231f"/>
        </linearGradient>
        <linearGradient id="lawn-p1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#558b2f"/>
          <stop offset="100%" stop-color="#2e5718"/>
        </linearGradient>
      </defs>

      <!-- Cielo de verano parisino -->
      <rect width="300" height="200" fill="url(#sky-p1)"/>
      <circle cx="242" cy="42" r="36" fill="url(#sun-p1)"/>
      <circle cx="242" cy="42" r="14" fill="#fffde7"/>

      <!-- Nubes suaves con volumen -->
      <g fill="#ffffff" opacity="0.82">
        <path d="M18 68 Q30 52 48 58 Q65 44 85 56 Q102 50 112 66 Q120 72 105 74 L22 74 Z"/>
        <path d="M195 82 Q210 70 226 75 Q242 64 258 76 Q270 72 276 83 Z" opacity="0.7"/>
      </g>

      <!-- Horizonte urbano de París (tejados Haussmann y Los Inválidos al fondo) -->
      <path d="M0 158 L0 144 L18 144 L22 138 L38 138 L42 145 L75 145 L82 135 Q92 122 102 135 L108 145 L195 145 L202 139 L228 139 L232 145 L268 145 L274 138 L300 138 L300 158 Z" fill="#90a4ae" opacity="0.65"/>
      <circle cx="92" cy="133" r="8" fill="#c5a059" opacity="0.8"/>

      <!-- Jardines de Champ de Mars y paseo central -->
      <rect y="155" width="300" height="45" fill="url(#lawn-p1)"/>
      <polygon points="136,155 164,155 215,200 85,200" fill="#d7ccc8"/>
      <polygon points="142,155 158,155 195,200 105,200" fill="#e6dec3" opacity="0.7"/>

      <!-- Árboles laterales recortados en perspectiva -->
      <g fill="#2e5c1e">
        <circle cx="20" cy="152" r="18"/><circle cx="42" cy="154" r="15"/><circle cx="64" cy="155" r="13"/><circle cx="84" cy="156" r="11"/>
        <circle cx="280" cy="152" r="18"/><circle cx="258" cy="154" r="15"/><circle cx="236" cy="155" r="13"/><circle cx="216" cy="156" r="11"/>
      </g>
      <g fill="#437a2d" opacity="0.7">
        <circle cx="25" cy="148" r="12"/><circle cx="46" cy="150" r="10"/><circle cx="67" cy="152" r="9"/>
        <circle cx="275" cy="148" r="12"/><circle cx="254" cy="150" r="10"/><circle cx="233" cy="152" r="9"/>
      </g>

      <!-- TORRE EIFFEL CON CELOSÍA DE HIERRO DETALLADA -->
      <!-- Base y pilares inferiores -->
      <path d="M110 172 L125 122 L175 122 L190 172 L173 172 L163 134 L137 134 L127 172 Z" fill="url(#iron-p1)"/>
      <!-- Arco monumental del primer nivel -->
      <path d="M125 170 Q150 132 175 170" fill="none" stroke="#2b231f" stroke-width="3.5"/>
      <path d="M128 170 Q150 137 172 170" fill="none" stroke="#8d7768" stroke-width="1"/>

      <!-- Primera plataforma (Mirador 1) -->
      <rect x="119" y="118" width="62" height="5" rx="1" fill="#2b231f"/>
      <rect x="121" y="120" width="58" height="1.5" fill="#a1887f"/>

      <!-- Cuerpo intermedio (entre piso 1 y piso 2) -->
      <path d="M127 118 L137 76 L163 76 L173 118 L161 118 L155 86 L145 86 L139 118 Z" fill="url(#iron-p1)"/>
      <rect x="142" y="92" width="16" height="24" fill="#81c4f8" opacity="0.45"/>

      <!-- Segunda plataforma (Mirador doble) -->
      <rect x="132" y="72" width="36" height="4.5" rx="1" fill="#2b231f"/>
      <rect x="135" y="69" width="30" height="3" fill="#4e4039"/>

      <!-- Aguja superior esbelta -->
      <polygon points="139,69 146,20 154,20 161,69" fill="url(#iron-p1)"/>

      <!-- Entramado de celosía metálica (cruces de hierro) -->
      <g stroke="#9e887a" stroke-width="0.75" opacity="0.75">
        <line x1="115" y1="162" x2="132" y2="152"/><line x1="118" y1="152" x2="129" y2="162"/>
        <line x1="120" y1="146" x2="135" y2="136"/><line x1="123" y1="136" x2="132" y2="146"/>
        <line x1="185" y1="162" x2="168" y2="152"/><line x1="182" y1="152" x2="171" y2="162"/>
        <line x1="180" y1="146" x2="165" y2="136"/><line x1="177" y1="136" x2="168" y2="146"/>
        <line x1="130" y1="112" x2="143" y2="100"/><line x1="132" y1="100" x2="141" y2="112"/>
        <line x1="170" y1="112" x2="157" y2="100"/><line x1="168" y1="100" x2="159" y2="112"/>
        <line x1="135" y1="94" x2="145" y2="82"/><line x1="165" y1="94" x2="155" y2="82"/>
        <line x1="142" y1="62" x2="158" y2="54"/><line x1="142" y1="54" x2="158" y2="62"/>
        <line x1="144" y1="48" x2="156" y2="40"/><line x1="144" y1="40" x2="156" y2="48"/>
        <line x1="146" y1="34" x2="154" y2="26"/><line x1="146" y1="26" x2="154" y2="34"/>
      </g>

      <!-- Cúpula del faro y antena -->
      <path d="M145 20 Q150 13 155 20 Z" fill="#2b231f"/>
      <line x1="150" y1="16" x2="150" y2="5" stroke="#2b231f" stroke-width="1.5"/>
      <circle cx="150" cy="5" r="1.5" fill="#ffeb3b"/>

      <!-- Pequeñas siluetas de paseantes y farolas en el parque -->
      <g fill="#1b3014">
        <circle cx="142" cy="182" r="1.8"/><rect x="141" y="184" width="2" height="5"/>
        <circle cx="156" cy="185" r="1.8"/><rect x="155" y="187" width="2" height="5"/>
        <circle cx="122" cy="176" r="1.4"/><rect x="121.3" y="177.5" width="1.5" height="4"/>
      </g>
    </svg>
  `
});
