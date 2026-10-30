/**
 * Fotograma 32 / 36
 * Escena: Paella Valenciana frente al Mediterráneo (Mediodía luminoso)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-32',
  frameNumber: 32,
  title: 'Paella junto al Mediterráneo',
  year: '2024',
  date: '28 de julio de 2024, 14:30',
  sceneEV: 14, // Terraza soleada frente al mar
  tags: ['Comida', 'Playa', 'Familia', 'Amigos', 'Verano', '2024'],
  analogCaption: 'Domingo de paella a leña frente a la playa de la Malvarrosa. Arroz en su punto y limón.',
  pageNumber: 'Fotograma 32 de 36',
  exif: {
    camera: 'Google Pixel 8 Pro',
    lens: '24mm ƒ/1.68',
    iso: 'ISO 50 • 1/1800s',
    gps: '39.4765° N, 0.3236° W (Playa de la Malvarrosa, Valencia)',
    fileSize: '4.08 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Paella tradicional', conf: '99.9%' },
    { label: 'Gastronomía mediterránea', conf: '99.4%' },
    { label: 'Comida al aire libre', conf: '97.8%' },
    { label: 'Vista al mar', conf: '95.2%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Cielo y mar Mediterráneo al fondo -->
      <rect width="300" height="48" fill="#4fc3f7"/>
      <rect y="48" width="300" height="32" fill="#0288d1"/>
      <line x1="0" y1="78" x2="300" y2="78" stroke="#ffffff" stroke-width="2" opacity="0.7"/>

      <!-- Mesa con mantel blanco de chiringuito -->
      <rect y="78" width="300" height="122" fill="#eceff1"/>
      <rect y="78" width="300" height="5" fill="#cfd8dc"/>

      <!-- Asas de hierro negro de la paella -->
      <path d="M52 136 Q32 136 32 142 Q32 148 52 148" fill="none" stroke="#212121" stroke-width="5" stroke-linecap="round"/>
      <path d="M248 136 Q268 136 268 142 Q268 148 248 148" fill="none" stroke="#212121" stroke-width="5" stroke-linecap="round"/>

      <!-- PAELLA VALENCIANA AL AZAFRÁN -->
      <ellipse cx="150" cy="142" rx="98" ry="46" fill="#263238" stroke="#111" stroke-width="3"/>
      <ellipse cx="150" cy="142" rx="91" ry="41" fill="#ffb300"/>
      <ellipse cx="150" cy="142" rx="85" ry="37" fill="#ffca28"/>

      <!-- Gajos de limón en el centro y verduras (bajoqueta) -->
      <circle cx="150" cy="142" r="10" fill="#fff59d" stroke="#fbc02d" stroke-width="2"/>
      <g fill="#388e3c">
        <rect x="115" y="120" width="16" height="5" rx="2" transform="rotate(25 123 122)"/>
        <rect x="168" y="122" width="16" height="5" rx="2" transform="rotate(-25 176 124)"/>
        <rect x="112" y="156" width="16" height="5" rx="2" transform="rotate(-20 120 158)"/>
        <rect x="172" y="154" width="16" height="5" rx="2" transform="rotate(20 180 156)"/>
      </g>

      <!-- Langostinos / Gambas rojas dispuestas simétricamente -->
      <g stroke="#d84315" stroke-width="6" stroke-linecap="round" fill="none">
        <path d="M92 136 Q104 126 112 138"/>
        <path d="M188 138 Q196 126 208 136"/>
        <path d="M138 114 Q150 106 162 114"/>
        <path d="M138 168 Q150 176 162 168"/>
      </g>

      <!-- Mejillones negros en los bordes -->
      <g fill="#1a1a1a">
        <ellipse cx="76" cy="142" rx="9" ry="5"/>
        <ellipse cx="224" cy="142" rx="9" ry="5"/>
        <ellipse cx="102" cy="166" rx="8" ry="5" transform="rotate(20 102 166)"/>
        <ellipse cx="198" cy="166" rx="8" ry="5" transform="rotate(-20 198 166)"/>
      </g>
    </svg>
  `
});

