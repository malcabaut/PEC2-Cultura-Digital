/**
 * Fotograma 05 / 36
 * Escena: Cena con Amigos y Pizza (Luz tenue de taberna)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-05',
  frameNumber: 5,
  title: 'Cena con Amigos y Pizza',
  year: '2024',
  date: '18 de enero de 2024, 21:50',
  sceneEV: 6, // Interior con luz de ambiente nocturna baja
  tags: ['Comida', 'Amigos', 'Fiesta', 'Familia', '2024'],
  analogCaption: 'Cena de inauguración del piso. Pizza artesanal en la mesa compartida.',
  pageNumber: 'Fotograma 05 de 36',
  exif: {
    camera: 'Google Pixel 8 (Visión Nocturna)',
    lens: '25mm ƒ/1.68',
    iso: 'ISO 400 • 1/45s',
    gps: '41.3879° N, 2.1699° E (Barrio de Gràcia, Barcelona)',
    fileSize: '3.19 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Pizza al horno', conf: '99.7%' },
    { label: 'Comida gourmet', conf: '98.9%' },
    { label: 'Mesa compartida', conf: '95.6%' },
    { label: 'Reunión social', conf: '93.1%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tab-p5" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#5d4037"/>
          <stop offset="70%" stop-color="#3e2723"/>
          <stop offset="100%" stop-color="#1b0f0d"/>
        </radialGradient>
        <radialGradient id="crust-p5" cx="50%" cy="50%" r="50%">
          <stop offset="75%" stop-color="#e6a856"/>
          <stop offset="92%" stop-color="#c67d28"/>
          <stop offset="100%" stop-color="#8d5215"/>
        </radialGradient>
      </defs>

      <!-- Mesa rústica de madera de taberna -->
      <rect width="300" height="200" fill="url(#tab-p5)"/>
      <g stroke="#271713" stroke-width="1" opacity="0.45">
        <line x1="0" y1="40" x2="300" y2="40"/>
        <line x1="0" y1="100" x2="300" y2="100"/>
        <line x1="0" y1="160" x2="300" y2="160"/>
      </g>

      <!-- Mantel individual a cuadros blancos y rojos en esquina -->
      <polygon points="0,0 90,0 55,200 0,200" fill="#b71c1c" opacity="0.35"/>

      <!-- Tabla de madera redonda con mango -->
      <rect x="218" y="92" width="40" height="18" rx="6" fill="#8d6e63" stroke="#4e342e" stroke-width="2" transform="rotate(15 218 100)"/>
      <circle cx="150" cy="102" r="82" fill="#8d6e63" stroke="#4e342e" stroke-width="3"/>

      <!-- Masa de pizza napolitana -->
      <circle cx="150" cy="102" r="72" fill="url(#crust-p5)"/>
      <!-- Motas tostadas del horno de leña -->
      <circle cx="105" cy="50" r="3" fill="#4e342e" opacity="0.6"/>
      <circle cx="198" cy="56" r="3.5" fill="#4e342e" opacity="0.6"/>
      <circle cx="214" cy="126" r="3" fill="#4e342e" opacity="0.6"/>
      <circle cx="92" cy="142" r="3.5" fill="#4e342e" opacity="0.6"/>

      <!-- Salsa de tomate y mozzarella fundida -->
      <circle cx="150" cy="102" r="61" fill="#c62828"/>
      <path d="M150 45 Q185 45 204 75 Q214 108 196 138 Q174 162 140 158 Q104 156 92 124 Q84 90 108 62 Q128 45 150 45 Z" fill="#fff8e1"/>

      <!-- Líneas de corte de las 8 porciones -->
      <g stroke="#c67d28" stroke-width="1.2" opacity="0.45">
        <line x1="150" y1="30" x2="150" y2="174"/>
        <line x1="78" y1="102" x2="222" y2="102"/>
        <line x1="99" y1="51" x2="201" y2="153"/>
        <line x1="201" y1="51" x2="99" y2="153"/>
      </g>

      <!-- Rodajas de pepperoni con detalle -->
      <g fill="#b71c1c" stroke="#8e0000" stroke-width="1">
        <circle cx="128" cy="74" r="9.5"/><circle cx="172" cy="76" r="9.5"/>
        <circle cx="114" cy="105" r="9.5"/><circle cx="184" cy="108" r="9.5"/>
        <circle cx="132" cy="134" r="9.5"/><circle cx="168" cy="132" r="9.5"/>
        <circle cx="150" cy="96" r="9"/>
      </g>
      <g fill="#ffcdd2" opacity="0.6">
        <circle cx="126" cy="72" r="1.2"/><circle cx="131" cy="76" r="1"/>
        <circle cx="170" cy="74" r="1.2"/><circle cx="182" cy="106" r="1.2"/>
        <circle cx="130" cy="132" r="1.2"/><circle cx="166" cy="130" r="1.2"/>
      </g>

      <!-- Aceitunas negras y champiñones -->
      <g fill="#212121">
        <circle cx="150" cy="66" r="4.5"/><circle cx="150" cy="66" r="1.8" fill="#fff8e1"/>
        <circle cx="105" cy="84" r="4.5"/><circle cx="105" cy="84" r="1.8" fill="#fff8e1"/>
        <circle cx="192" cy="88" r="4.5"/><circle cx="192" cy="88" r="1.8" fill="#fff8e1"/>
        <circle cx="152" cy="144" r="4.5"/><circle cx="152" cy="144" r="1.8" fill="#fff8e1"/>
      </g>

      <!-- Hojas de albahaca fresca -->
      <g fill="#2e7d32">
        <path d="M140 88 Q148 76 156 88 Q148 100 140 88 Z" transform="rotate(-20 148 88)"/>
        <path d="M154 114 Q162 102 170 114 Q162 126 154 114 Z" transform="rotate(35 162 114)"/>
        <path d="M118 118 Q126 106 134 118 Q126 130 118 118 Z" transform="rotate(-40 126 118)"/>
      </g>

      <!-- Copas de vino tinto y vela en la mesa -->
      <g>
        <circle cx="38" cy="44" r="18" fill="#ffffff" opacity="0.15" stroke="#e0e0e0" stroke-width="1.5"/>
        <circle cx="38" cy="44" r="13" fill="#6a1b29"/>
        <path d="M31 38 Q36 33 42 36" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.6"/>

        <circle cx="264" cy="154" r="18" fill="#ffffff" opacity="0.15" stroke="#e0e0e0" stroke-width="1.5"/>
        <circle cx="264" cy="154" r="13" fill="#6a1b29"/>
        <path d="M257 148 Q262 143 268 146" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.6"/>

        <!-- Pequeño portavelas cálido -->
        <circle cx="258" cy="38" r="14" fill="#ff9800" opacity="0.25"/>
        <circle cx="258" cy="38" r="7" fill="#fff8e1" stroke="#ffb300" stroke-width="1.5"/>
        <circle cx="258" cy="38" r="3" fill="#ff6f00"/>
      </g>
    </svg>
  `
});
