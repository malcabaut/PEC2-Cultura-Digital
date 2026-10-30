/**
 * Fotograma 19 / 36
 * Escena: Fuegos Artificiales en la Bahía (Noche cerrada con estallidos de luz)
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.push({
  id: 'photo-19',
  frameNumber: 19,
  title: 'Fuegos Artificiales en la Bahía',
  year: '2024',
  date: '23 de junio de 2024, 23:55',
  sceneEV: 4, // Noche oscura: requiere exposición prolongada
  tags: ['Fiesta', 'Noche', 'Celebración', 'Playa', '2024'],
  analogCaption: 'Noche de San Juan en la playa. Destellos de pólvora reflejados en el mar en calma.',
  pageNumber: 'Fotograma 19 de 36',
  exif: {
    camera: 'Google Pixel 8 (Modo Larga Exposición)',
    lens: '25mm ƒ/1.68',
    iso: 'ISO 200 • 2.0s (Trípode computacional)',
    gps: '43.3713° N, 8.3960° W (Playa de Riazor, A Coruña)',
    fileSize: '3.67 MB (24-bit RGB)',
    dimensions: '4080 × 3072 px'
  },
  aiTags: [
    { label: 'Fuegos artificiales', conf: '99.9%' },
    { label: 'Cielo nocturno', conf: '99.4%' },
    { label: 'Reflejos en el mar', conf: '97.2%' },
    { label: 'Celebración festiva', conf: '95.6%' }
  ],
  svg: `
    <svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="night-sky-p19" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#03050c"/>
          <stop offset="100%" stop-color="#0d1b2a"/>
        </linearGradient>
        <radialGradient id="fw-gold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd700" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="fw-pink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff007f" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#ff007f" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Cielo nocturno sobre la bahía -->
      <rect width="300" height="138" fill="url(#night-sky-p19)"/>

      <!-- Skyline iluminado de la bahía al fondo -->
      <path d="M0 138 L0 124 L25 124 L25 118 L48 118 L48 126 L85 126 L85 120 L120 120 L120 128 L180 128 L180 122 L225 122 L225 116 L252 116 L252 126 L300 126 L300 138 Z" fill="#101824"/>
      <g fill="#ffd54f" opacity="0.8">
        <rect x="12" y="130" width="2" height="2"/><rect x="32" y="124" width="2" height="2"/><rect x="64" y="131" width="2" height="2"/>
        <rect x="98" y="126" width="2" height="2"/><rect x="195" y="128" width="2" height="2"/><rect x="235" y="122" width="2" height="2"/>
        <rect x="272" y="130" width="2" height="2"/>
      </g>

      <!-- PALMERA PIROTÉCNICA 1: Dorado y Blanco (Izquierda-Centro) -->
      <circle cx="105" cy="56" r="42" fill="url(#fw-gold)"/>
      <g stroke="#ffd700" stroke-width="2" stroke-linecap="round" fill="none">
        <path d="M105 56 Q105 28 102 18"/><path d="M105 56 Q105 84 108 94"/>
        <path d="M105 56 Q76 56 66 62"/><path d="M105 56 Q134 56 144 62"/>
        <path d="M105 56 Q82 34 74 28"/><path d="M105 56 Q128 34 136 28"/>
        <path d="M105 56 Q82 78 74 86"/><path d="M105 56 Q128 78 136 86"/>
      </g>
      <circle cx="105" cy="56" r="5" fill="#ffffff"/>

      <!-- PALMERA PIROTÉCNICA 2: Magenta y Cian (Derecha) -->
      <circle cx="208" cy="44" r="36" fill="url(#fw-pink)"/>
      <g stroke="#ff007f" stroke-width="1.8" stroke-linecap="round" fill="none">
        <path d="M208 44 Q208 20 206 12"/><path d="M208 44 Q208 68 210 76"/>
        <path d="M208 44 Q182 44 174 49"/><path d="M208 44 Q234 44 242 49"/>
        <path d="M208 44 Q188 24 182 19"/><path d="M208 44 Q228 24 234 19"/>
        <path d="M208 44 Q188 64 182 70"/><path d="M208 44 Q228 64 234 70"/>
      </g>
      <g fill="#00e5ff">
        <circle cx="206" cy="12" r="1.8"/><circle cx="210" cy="76" r="1.8"/>
        <circle cx="174" cy="49" r="1.8"/><circle cx="242" cy="49" r="1.8"/>
        <circle cx="182" cy="19" r="1.8"/><circle cx="234" cy="19" r="1.8"/>
      </g>
      <circle cx="208" cy="44" r="4" fill="#ffffff"/>

      <!-- PALMERA PIROTÉCNICA 3: Cian (Centro Bajo) -->
      <g stroke="#00e5ff" stroke-width="1.5" stroke-linecap="round">
        <line x1="158" y1="82" x2="158" y2="64"/><line x1="158" y1="82" x2="158" y2="100"/>
        <line x1="158" y1="82" x2="140" y2="82"/><line x1="158" y1="82" x2="176" y2="82"/>
        <line x1="158" y1="82" x2="145" y2="69"/><line x1="158" y1="82" x2="171" y2="95"/>
        <line x1="158" y1="82" x2="171" y2="69"/><line x1="158" y1="82" x2="145" y2="95"/>
      </g>
      <circle cx="158" cy="82" r="3" fill="#ffffff"/>

      <!-- Mar en calma y reflejos de colores -->
      <rect y="138" width="300" height="62" fill="#07111e"/>
      <g stroke-linecap="round">
        <line x1="88" y1="146" x2="122" y2="146" stroke="#ffd700" stroke-width="2.5" opacity="0.65"/>
        <line x1="82" y1="156" x2="128" y2="156" stroke="#ffd700" stroke-width="3" opacity="0.45"/>
        <line x1="92" y1="168" x2="118" y2="168" stroke="#ffd700" stroke-width="2" opacity="0.3"/>

        <line x1="192" y1="145" x2="224" y2="145" stroke="#ff007f" stroke-width="2.5" opacity="0.65"/>
        <line x1="186" y1="155" x2="230" y2="155" stroke="#ff007f" stroke-width="3" opacity="0.45"/>
        <line x1="148" y1="150" x2="168" y2="150" stroke="#00e5ff" stroke-width="2" opacity="0.5"/>
      </g>

      <!-- Orilla de la playa con hoguera de San Juan y siluetas -->
      <path d="M0 172 Q95 168 180 185 L300 180 L300 200 L0 200 Z" fill="#04070d"/>
      <!-- Pequeña hoguera en la arena -->
      <circle cx="48" cy="176" r="10" fill="#ff6d00" opacity="0.35"/>
      <polygon points="44,180 48,168 52,180" fill="#ff9100"/>
      <polygon points="46,180 48,172 50,180" fill="#fff59d"/>
    </svg>
  `
});
