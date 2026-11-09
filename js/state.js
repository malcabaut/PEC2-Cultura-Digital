/**
 * ========================================================
 * js/state.js - Estado Global de la Simulación Fotográfica
 * Gestiona la colección de 36 fotografías vectoriales disponibles
 * (photos/photo-01.js a photo-36.js + manifest.js), el carrete activo
 * de 12 exposiciones (reveladas en 3 tiras de 4 fotos: 1–4, 5–8 y 9–12),
 * la subida de hasta 12 fotos reales del propio usuario y la continuidad
 * toma -> revelado -> álbum.
 * ========================================================
 */

var AppState = window.AppState = {
  currentPhase: 1,
  soundEnabled: true,
  analogPhotosLeft: 12,       // Carrete de 12 exposiciones (formato real 135)
  analogTotalPhotos: 12,
  analogShutterArmed: true,
  currentSceneIndex: 0,
  albumPageIndex: 0,
  activeFilter: 'all',
  activePipelineLayer: 'binary',
  variabilityFilter: 'normal',

  // Parámetros Ópticos de la Cámara Analógica
  aperture: 8.0,              // ƒ/8.0
  shutterSpeed: 500,          // 1/500s
  iso: 400,                   // Película Kodak Gold 400 ISO fija
  currentDeltaEV: 0,          // Desviación del exposímetro frente a la escena
  userFocus: 20,              // Anillo de enfoque manual (0 a 100)

  // Carrete activo analógico de 12 exposiciones (seleccionadas de las 36 vectoriales + hasta 12 fotos reales subidas por el usuario)
  reelPhotos: [],
  userUploadedPhotos: [],     // Fotos reales subidas por el usuario (sin límite en la nube digital, hasta 12 entran en el carrete analógico)
  digitalExtraShots: [],      // Capturas adicionales infinitas tomadas con el smartphone digital

  // Registro de disparos físicos en el carrete de 12 (en orden de toma: índice 0..11)
  shotsHistory: {},
  shotsOrder: [],             // Orden cronológico en que se dispararon

  // Estado del Minijuego Fotoquímico por tiras de 4 en 4 fotos (3 tiras = 12 fotos)
  // stage: 0 = Invisible (Latente), 1 = Colores Invertidos (Negativo), 2 = Imagen Revelada (Positivo con exposición)
  darkroomCurrentBatch: 0,
  darkroomSelectedSlot: 0,
  darkroomBatches: [
    { stage: 0, progress: 0 }, // Tira 1: Fotos 1–4
    { stage: 0, progress: 0 }, // Tira 2: Fotos 5–8
    { stage: 0, progress: 0 }  // Tira 3: Fotos 9–12
  ],

  // Estado del Álbum Físico a Doble Página (Fase 3)
  // 3 pliegos (spreads 0, 1, 2) x 4 huecos por pliego = 12 fotos del carrete
  albumMountedPages: {},
  albumActivePageSlot: 0,
  albumSpreadIndex: 0,
  albumSlotOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  albumCoverTitle: 'RECUERDOS Y VIAJES DE FAMILIA (1998–2024)'
};

/**
 * Construye o reconstruye el carrete de 12 exposiciones combinando las fotos reales
 * subidas por el usuario (hasta 12, el total del carrete) y fotos seleccionadas al azar de la librería de 36.
 */
function buildActiveReel(randomizeNewSelection = true) {
  const fullLib = window.PhotoLibrary || [];
  const uploaded = window.AppState.userUploadedPhotos || [];

  let randomPool = [];
  if (randomizeNewSelection || !window.AppState._cachedRandomPool || window.AppState._cachedRandomPool.length === 0) {
    const shuffled = [...fullLib].sort(() => Math.random() - 0.5);
    randomPool = shuffled.slice(0, 12);
    window.AppState._cachedRandomPool = randomPool;
  } else {
    randomPool = window.AppState._cachedRandomPool;
  }

  // Las primeras posiciones del carrete analógico son hasta 12 fotos reales subidas por el usuario y el resto aleatorias hasta completar 12
  // Seleccionamos ~30% de fotos (4 de las 12) que coinciden con la luz/enfoque actual de la cámara, incluyendo siempre la segunda foto (índice 1)
  const otherIndices = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].sort(() => Math.random() - 0.5);
  const presetOptimalSet = new Set([1, otherIndices[0], otherIndices[1], otherIndices[2]]);
  window.AppState.presetOptimalIndices = Array.from(presetOptimalSet);

  const analogUserUploads = uploaded.slice(0, 12);
  const combined = [...analogUserUploads, ...randomPool].slice(0, 12).map((item, idx) => ({
    ...item,
    reelSlot: idx,
    frameNumber: idx + 1,
    isPresetOptimal: presetOptimalSet.has(idx),
    pageNumber: `Fotograma ${String(idx + 1).padStart(2, '0')} de 12`
  }));

  window.AppState.reelPhotos = combined;
  return combined;
}

/**
 * Ajusta los niveles de luz (sceneEV) y distancia de enfoque (targetFocus) de la foto entrante
 * SIN tocar jamás los diales de velocidad, diafragma ni el anillo de enfoque de la cámara:
 * - Si la foto pertenece al 30% (incluida la 2ª foto), la escena tiene exactamente la luz y distancia que ya marca la cámara.
 * - En el 70% restante, la escena cambia sus niveles de luz y distancia para que el usuario tenga que ajustar la cámara.
 */
function adaptIncomingPhotoLightToFixedCamera(photo) {
  if (!photo) return;
  const ap = window.AppState.aperture || 8.0;
  const sp = window.AppState.shutterSpeed || 500;
  const iso = window.AppState.iso || 400;
  const currentFoc = typeof window.AppState.userFocus === 'number' ? window.AppState.userFocus : 20;

  const evCam = typeof window.getDiscreteCameraEV === 'function'
    ? window.getDiscreteCameraEV(ap, sp, iso)
    : Math.round(Math.log2((ap * ap) * sp) - Math.log2(iso / 100));

  if (photo.isPresetOptimal) {
    // La escena entrante coincide exactamente (0.0 EV) con cómo dejó el usuario la velocidad, el diafragma y el enfoque
    photo.sceneEV = evCam;
    photo.targetFocus = currentFoc;
  } else {
    // La foto entrante difiere en pasos enteros exactos de EV (-2, -1, +1, +2, +3, -3 EV)
    // para que con 1, 2 o 3 clics de rueda de Velocidad o Diafragma quede clavada en 0.0 EV
    const evShifts = [-2, -1, 1, 2, -2, 2, -1, 1];
    const shift = evShifts[(photo.reelSlot || 0) % evShifts.length];
    let targetSceneEV = evCam + shift;
    // Mantener dentro del rango físico alcanzable por la cámara sin trepidación (EV 7 a EV 16)
    if (targetSceneEV < 7) targetSceneEV = evCam + Math.abs(shift);
    if (targetSceneEV > 15) targetSceneEV = evCam - Math.abs(shift);
    photo.sceneEV = targetSceneEV;

    const focusShifts = [35, -35, 45, -30, 40];
    const fShift = focusShifts[(photo.reelSlot || 0) % focusShifts.length];
    let newTarget = currentFoc + fShift;
    if (newTarget > 92) newTarget = Math.max(12, currentFoc - 38);
    if (newTarget < 12) newTarget = Math.min(90, currentFoc + 38);
    photo.targetFocus = Math.round(newTarget);
  }
}
window.adaptIncomingPhotoLightToFixedCamera = adaptIncomingPhotoLightToFixedCamera;

/**
 * Reinicia el carrete de 12 exposiciones sorteando una nueva selección aleatoria de la colección de 36 (manteniendo o no las hasta 12 fotos subidas por el usuario)
 */
function resetAndRandomizeReel(clearUserUploads = false) {
  if (clearUserUploads) {
    window.AppState.userUploadedPhotos = [];
    window.AppState.digitalExtraShots = [];
  }
  buildActiveReel(true);
  window.AppState.analogTotalPhotos = 12;
  window.AppState.analogPhotosLeft = 12;
  window.AppState.analogShutterArmed = true;
  window.AppState.currentSceneIndex = 0;
  window.AppState.albumPageIndex = 0;
  window.AppState.shotsHistory = {};
  window.AppState.shotsOrder = [];
  window.AppState.darkroomCurrentBatch = 0;
  window.AppState.darkroomSelectedSlot = 0;
  window.AppState.darkroomBatches = [
    { stage: 0, progress: 0 },
    { stage: 0, progress: 0 },
    { stage: 0, progress: 0 }
  ];
  window.AppState.albumMountedPages = {};
  window.AppState.albumActivePageSlot = 0;
  window.AppState.albumSpreadIndex = 0;
  window.AppState.albumSlotOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
}

/**
 * Devuelve las 12 fotos del carrete analógico activo (Fase 1 analógica, Cuarto Oscuro en 3 tiras de 4 y Álbum Físico)
 */
function getPhotos() {
  if (!window.AppState.reelPhotos || window.AppState.reelPhotos.length === 0) {
    buildActiveReel(true);
  }
  return window.AppState.reelPhotos;
}

/**
 * Devuelve TODAS las fotos de la base de datos digital de Google Photos (sin límite de fotos:
 * incluye las fotos subidas por el usuario, las capturas digitales extra y las 36 de la colección)
 */
function getDigitalPhotos() {
  const fullLib = window.PhotoLibrary || [];
  const uploaded = window.AppState.userUploadedPhotos || [];
  const extraShots = window.AppState.digitalExtraShots || [];
  return [...extraShots, ...uploaded, ...fullLib];
}

function getCurrentPhoto() {
  const list = getPhotos();
  if (list.length === 0) return null;
  return list[window.AppState.currentSceneIndex % list.length];
}

/**
 * Prepara el SVG de una fotografía con IDs internos únicos por instancia
 * para evitar que múltiples copias de un mismo SVG en el DOM colisionen en sus <defs> (linearGradient/radialGradient)
 * cuando una copia oculta en otra pestaña hace que url(#id) se vea negro en el Álbum o la Galería.
 */
window._svgInstanceSeq = 0;
function renderUniquePhotoSvg(svgStr) {
  if (!svgStr) return '';
  const uid = `u${++window._svgInstanceSeq}`;
  let result = svgStr;
  if (!result.includes('preserveAspectRatio=')) {
    result = result.replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ');
  }
  return result
    .replace(/\bid="([^"]+)"/g, `id="$1-${uid}"`)
    .replace(/url\(#([^)]+)\)/g, `url(#$1-${uid})`)
    .replace(/href="#([^"]+)"/g, `href="#$1-${uid}"`);
}
window.renderUniquePhotoSvg = renderUniquePhotoSvg;

/**
 * Devuelve si un fotograma del carrete (0..11) ya ha sido revelado en el cuarto oscuro (Fase 2)
 */
function getFrameDevelopmentStage(photoIndex) {
  const batchIdx = Math.floor(photoIndex / 4);
  const batch = window.AppState.darkroomBatches[batchIdx];
  return batch ? batch.stage : 0;
}

/**
 * Distancia focal objetivo de cada fotografía (0 a 100)
 */
function getTargetFocusForPhoto(photo) {
  if (!photo) return 50;
  if (typeof photo.targetFocus === 'number') return photo.targetFocus;
  const tags = photo.tags || [];
  if (tags.includes('Comida') || tags.includes('Música')) return 20; // Macro (~0.7m)
  if (tags.includes('Flores') || tags.includes('Gato') || tags.includes('Libros')) return 30; // ~1.2m
  if (tags.includes('Retrato') || tags.includes('Familia') || tags.includes('Mascotas') || tags.includes('Personal')) return 45; // ~2m
  if (tags.includes('Arte') || tags.includes('Estudio') || tags.includes('Cultura')) return 50;
  if (tags.includes('Bicicleta') || tags.includes('Parque') || tags.includes('Tren')) return 65; // ~4m
  if (tags.includes('París') || tags.includes('Monumento') || tags.includes('Arquitectura')) return 80; // ~10m
  if (tags.includes('Playa') || tags.includes('Montaña') || tags.includes('Paisaje') || tags.includes('Cielo') || tags.includes('Nieve')) return 90; // Infinito (∞)
  return 50;
}


