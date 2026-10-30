/**
 * Fotograma 17 / 36
 * Escena: Bodegón de Frutas Vintage (Luz suave de ventana)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-17',
  frameNumber: 17,
  title: 'Bodegón Clásico de Frutas',
  year: '1999',
  date: '14 de noviembre de 1999, 13:30',
  sceneEV: 8, // Luz cenital difusa de cocina antigua
  tags: ['Comida', 'Vintage', 'Arte', 'Naturaleza'],
  analogCaption: 'Ejercicio de bodegón con luz natural. Manzanas, peras y uvas sobre mantel de lino.',
  pageNumber: 'Fotograma 17 de 36',
  exif: {
    camera: 'Digitalizado de Diapositiva Kodachrome',
    lens: '50mm ƒ/1.4',
    iso: 'ISO 64 • 1/60s',
    gps: '40.4168° N, 3.7038° W (Estudio de Bellas Artes)',
    fileSize: '4.80 MB (Escáner de película)',
    dimensions: '3600 × 2400 px'
  },
  aiTags: [
    { label: 'Bodegón / Naturaleza muerta', conf: '99.8%' },
    { label: 'Frutas frescas', conf: '99.1%' },
    { label: 'Composición clásica', conf: '96.3%' },
    { label: 'Cesta de mimbre', conf: '94.0%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wall-p17" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#4e342e"/>
          <stop offset="65%" stop-color="#271914"/>
          <stop offset="100%" stop-color="#120b08"/>
        </radialGradient>
        <radialGradient id="apple-p17" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#ff5252"/>
          <stop offset="60%" stop-color="#c62828"/>
          <stop offset="100%" stop-color="#6b0f0f"/>
        </radialGradient>
        <radialGradient id="pear-p17" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#dce775"/>
          <stop offset="70%" stop-color="#9e9d24"/>
          <stop offset="100%" stop-color="#524c00"/>
        </radialGradient>
      </defs>

      <!-- Fondo pictórico al estilo claroscuro barroco -->
      <rect width="300" height="200" fill="url(#wall-p17)"/>

      <!-- Tablero de mesa de nogal -->
      <polygon points="0,124 300,124 300,200 0,200" fill="#3e2723"/>
      <line x1="0" y1="124" x2="300" y2="124" stroke="#5d4037" stroke-width="2"/>

      <!-- Paño de lino blanco con pliegues sobre la mesa -->
      <polygon points="36,124 252,124 226,188 64,192" fill="#f5f0e6" stroke="#d7ccc8" stroke-width="1"/>
      <polygon points="64,192 98,168 135,190" fill="#e0d6c5"/>

      <!-- Botella de vino de vidrio verde oscuro a la izquierda -->
      <g transform="translate(68, 42)">
        <rect x="14" y="0" width="8" height="22" fill="#1b3b1a"/>
        <rect x="13" y="0" width="10" height="4" fill="#8d1b1b"/>
        <path d="M4 38 Q4 20 14 20 L22 20 Q32 20 32 38 L32 92 L4 92 Z" fill="#1b3b1a" stroke="#0d200c" stroke-width="1"/>
        <rect x="8" y="48" width="20" height="24" fill="#f5e6c8"/>
        <path d="M9 28 L9 84" stroke="#a5d6a7" stroke-width="2" opacity="0.45" stroke-linecap="round"/>
      </g>

      <!-- Frutero de cerámica blanca con pie -->
      <polygon points="145,158 175,158 182,172 138,172" fill="#d7ccc8"/>
      <ellipse cx="160" cy="148" rx="58" ry="16" fill="#eceff1" stroke="#b0bec5" stroke-width="2"/>
      <ellipse cx="160" cy="145" rx="52" ry="12" fill="#cfd8dc"/>

      <!-- Pera dorada -->
      <ellipse cx="182" cy="132" rx="14" ry="17" fill="url(#pear-p17)"/>
      <circle cx="180" cy="118" r="9.5" fill="url(#pear-p17)"/>
      <path d="M180 109 Q182 103 186 105" stroke="#4e342e" stroke-width="2" fill="none"/>

      <!-- Manzana roja brillante -->
      <circle cx="142" cy="134" r="15" fill="url(#apple-p17)"/>
      <path d="M142 119 Q145 113 149 115" stroke="#4e342e" stroke-width="2" fill="none"/>
      <ellipse cx="151" cy="116" rx="5" ry="2.5" fill="#43a047" transform="rotate(-20 151 116)"/>

      <!-- Racimo de uvas moradas desbordando el frutero -->
      <g fill="#4a148c" stroke="#311b92" stroke-width="0.6">
        <circle cx="152" cy="142" r="5.5"/><circle cx="161" cy="140" r="5.5"/><circle cx="170" cy="143" r="5.5"/>
        <circle cx="148" cy="149" r="5.5"/><circle cx="157" cy="148" r="5.5"/><circle cx="166" cy="149" r="5.5"/><circle cx="174" cy="150" r="5"/>
        <circle cx="153" cy="156" r="5"/><circle cx="162" cy="156" r="5"/><circle cx="158" cy="163" r="4.5"/>
      </g>
      <!-- Brillos en las uvas -->
      <g fill="#e1bee7" opacity="0.65">
        <circle cx="150.5" cy="140.5" r="1.2"/><circle cx="159.5" cy="138.5" r="1.2"/>
        <circle cx="155.5" cy="146.5" r="1.2"/><circle cx="164.5" cy="147.5" r="1.2"/>
      </g>

      <!-- Naranja partida sobre el mantel en primer plano -->
      <g transform="translate(216, 162)">
        <path d="M0 0 A14 14 0 0 0 28 0 Z" fill="#ef6c00"/>
        <ellipse cx="14" cy="0" rx="14" ry="5" fill="#fff3e0"/>
        <ellipse cx="14" cy="0" rx="11.5" ry="3.8" fill="#ffa726"/>
      </g>
    </svg>
  `
});
