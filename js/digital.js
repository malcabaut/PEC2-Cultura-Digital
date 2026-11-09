/**
 * ========================================================
 * js/digital.js - Lógica Integral de Google Photos y Fase Digital
 *  - Fase 1: Smartphone HUD dinámico por visión artificial (detección semántica) y captura instantánea
 *  - Fase 2: Pipeline de la nube (desconstrucción binaria de píxeles, metadatos EXIF y visión por computador)
 *  - Fase 3: Motor relacional de Google Photos (consultas relacionales instantáneas, reconocimiento facial,
 *            geolocalización EXIF, portada de álbum inteligente remediado, e inspector de variabilidad no destructiva)
 * ========================================================
 */

/**
 * Actualiza el visor del smartphone en Fase 1 con el recuadro de enfoque predictivo
 * y la etiqueta semántica de confianza calculada por el modelo de visión IA.
 */
function updateDigitalHUD(photo) {
  if (!photo) return;
  const tagEl = document.getElementById('ai-confidence-tag');
  const boxEl = document.getElementById('ai-focus-box');
  if (!tagEl || !boxEl) return;

  const tags = photo.tags || [];

  if (photo.isUserUpload) {
    tagEl.innerHTML = `📤 ${photo.title} • Foto real subida • IA Enfoque Nítido`;
    boxEl.style.width = '105px';
    boxEl.style.height = '105px';
    boxEl.style.top = '45%';
    boxEl.style.left = '50%';
  } else if (tags.includes('Perro') || tags.includes('Mascotas') || tags.includes('Gato')) {
    tagEl.innerHTML = '🐾 Mascota detectada • 99.8% • Enfoque continuo a ojos';
    boxEl.style.width = '100px';
    boxEl.style.height = '100px';
    boxEl.style.top = '42%';
    boxEl.style.left = '48%';
  } else if (tags.includes('Familia') || tags.includes('Retrato') || tags.includes('Cumpleaños')) {
    tagEl.innerHTML = '👤 Rostro humano detectado • 99.4% • Ojo izquierdo enfocado';
    boxEl.style.width = '85px';
    boxEl.style.height = '85px';
    boxEl.style.top = '38%';
    boxEl.style.left = '50%';
  } else if (tags.includes('Comida') || tags.includes('Pizza')) {
    tagEl.innerHTML = '🍕 Plato gastronómico • 99.1% • Modo Realce de Color';
    boxEl.style.width = '120px';
    boxEl.style.height = '90px';
    boxEl.style.top = '50%';
    boxEl.style.left = '50%';
  } else if (tags.includes('Monumento') || tags.includes('Arquitectura') || tags.includes('París') || tags.includes('Catedral')) {
    tagEl.innerHTML = '🏛️ Monumento patrimonial • 98.6% • Corrección de perspectiva';
    boxEl.style.width = '105px';
    boxEl.style.height = '130px';
    boxEl.style.top = '45%';
    boxEl.style.left = '50%';
  } else if (tags.includes('Playa') || tags.includes('Paisaje') || tags.includes('Montaña') || tags.includes('Atardecer')) {
    tagEl.innerHTML = '🌅 Paisaje natural • 99.0% • Optimización HDR+ de cielo';
    boxEl.style.width = '130px';
    boxEl.style.height = '80px';
    boxEl.style.top = '48%';
    boxEl.style.left = '50%';
  } else if (tags.includes('Noche') || tags.includes('Fiesta') || tags.includes('Concierto') || tags.includes('Fuegos')) {
    tagEl.innerHTML = '🌙 Poca luz detectada • Visión Nocturna / Night Sight (2.5s)';
    boxEl.style.width = '110px';
    boxEl.style.height = '90px';
    boxEl.style.top = '46%';
    boxEl.style.left = '50%';
  } else {
    tagEl.innerHTML = `✨ ${photo.title} • IA Escena Óptima (98.2%)`;
    boxEl.style.width = '95px';
    boxEl.style.height = '95px';
    boxEl.style.top = '45%';
    boxEl.style.left = '50%';
  }
}

/**
 * Inicializa la cámara digital del smartphone en Fase 1 (Disparo computacional y cambio de escena)
 */
function initDigitalCamera() {
  const btnDigitalShoot = document.getElementById('btn-digital-shoot');
  const btnFilter = document.getElementById('btn-switch-filter');
  const flashOverlay = document.getElementById('digital-shutter-flash');
  const thumbMini = document.getElementById('thumb-mini-box');
  const digitalStatusMsg = document.getElementById('digital-status-msg');

  if (btnDigitalShoot) {
    btnDigitalShoot.addEventListener('click', () => {
      AudioFX.playDigitalShutter();

      if (flashOverlay) {
        flashOverlay.classList.add('flashing');
        setTimeout(() => flashOverlay.classList.remove('flashing'), 120);
      }

      const currentPhoto = getCurrentPhoto();
      if (thumbMini && currentPhoto) {
        thumbMini.innerHTML = renderUniquePhotoSvg(currentPhoto.svg);
      }

      if (currentPhoto) {
        const shotNumber = (AppState.digitalExtraShots ? AppState.digitalExtraShots.length : 0) + 1;
        const clonedDigitalShot = {
          ...currentPhoto,
          id: `digital-shot-${Date.now()}-${shotNumber}`,
          title: `${currentPhoto.title} (Captura #${shotNumber})`,
          year: String(new Date().getFullYear()),
          date: `Hoy, ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`,
          tags: [...new Set(['Reciente', ...(currentPhoto.tags || [])])]
        };
        AppState.digitalExtraShots.unshift(clonedDigitalShot);
        renderGooglePhotosGrid();
      }

      const totalCloud = getDigitalPhotos().length;
      if (digitalStatusMsg) {
        digitalStatusMsg.innerHTML = `<strong>Captura computacional instantánea (Sin límite de fotos):</strong> La IA calculó exposición y enfoque en 30ms. Archivo #${totalCloud} guardado y sincronizado en Google Photos (${totalCloud} fotos en la nube • ∞ almacenamiento • Coste: 0,00 €).`;
      }

      rotateNextScene();
    });
  }

  if (btnFilter) {
    btnFilter.addEventListener('click', () => {
      AudioFX.playDatabasePing();
      rotateNextScene();
    });
  }
}

/**
 * Desconstrucción de Nuevos Medios (Fase 2 Digital):
 * Muestra la descomposición de la fotografía en matriz numérica de píxeles,
 * metadatos estructurados EXIF y segmentación semántica por visión por computador.
 */
function updatePipelineViews() {
  const currentPhoto = getCurrentPhoto();
  if (!currentPhoto) return;

  // 1. Matriz de píxeles (Representación Numérica - Manovich, 2005)
  const matrixBox = document.getElementById('pixel-matrix-preview');
  if (matrixBox) {
    matrixBox.innerHTML = '';
    const sampleHexes = ['#3a88e9', '#5ca2f5', '#ff9800', '#ffd54f', '#2c2a29', '#4caf50', '#81c784', '#e91e63'];
    for (let i = 0; i < 48; i++) {
      const cell = document.createElement('div');
      cell.className = 'pixel-cell';
      const color = sampleHexes[Math.floor(Math.random() * sampleHexes.length)];
      cell.style.backgroundColor = color;
      cell.title = `Píxel (${i % 8}, ${Math.floor(i / 8)}): ${color}`;
      matrixBox.appendChild(cell);
    }
  }

  // 2. Metadatos EXIF (Modularidad de la Información)
  const exifGrid = document.getElementById('exif-display-fields');
  const gpsLabel = document.getElementById('gps-coords-label');
  if (exifGrid && currentPhoto.exif) {
    exifGrid.innerHTML = `
      <div class="exif-item"><strong>Cámara:</strong> ${currentPhoto.exif.camera || 'Google Pixel'}</div>
      <div class="exif-item"><strong>Óptica:</strong> ${currentPhoto.exif.lens || '24mm ƒ/1.85'}</div>
      <div class="exif-item"><strong>Sensibilidad:</strong> ${currentPhoto.exif.iso || 'ISO 50'}</div>
      <div class="exif-item"><strong>Resolución:</strong> ${currentPhoto.exif.dimensions || '4032 × 3024'}</div>
      <div class="exif-item"><strong>Tamaño:</strong> ${currentPhoto.exif.fileSize || '3.4 MB'}</div>
      <div class="exif-item"><strong>Fecha/Hora:</strong> ${currentPhoto.date || '2023'}</div>
    `;
  }
  if (gpsLabel && currentPhoto.exif) {
    gpsLabel.textContent = `GPS: ${currentPhoto.exif.gps || 'Coordenadas activas'}`;
  }

  // 3. Visión por Computador (Etiquetas IA y Transcodificación)
  const scannerTarget = document.getElementById('scanner-image-target');
  const tagList = document.getElementById('semantic-tag-list');
  if (scannerTarget) {
    const existingSvg = scannerTarget.querySelector('svg');
    if (existingSvg) existingSvg.remove();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = renderUniquePhotoSvg(currentPhoto.svg);
    if (tempDiv.firstElementChild) {
      scannerTarget.prepend(tempDiv.firstElementChild);
    }
  }

  if (tagList) {
    tagList.innerHTML = '';
    const aiTags = currentPhoto.aiTags || [];
    aiTags.forEach(tag => {
      const tagBadge = document.createElement('span');
      tagBadge.className = 'sem-tag';
      tagBadge.innerHTML = `${tag.label} <span>(${tag.conf})</span>`;
      tagList.appendChild(tagBadge);
    });
  }
}

/**
 * Activa o actualiza la Portada de Álbum Inteligente en Google Photos (Fase 3 Digital)
 * demostrando cómo el software remedia la portada y estructura del álbum familiar al instante
 * (Bolter y Grusin, 2000 [orig. 1999]; Alberich-Pascual, 2018).
 */
function updateSmartAlbumHeroBanner(queryTerm, customTitle = null, customSub = null, filteredPhotos = []) {
  const heroBox = document.getElementById('gphotos-instant-album-hero');
  const coverSvgBox = document.getElementById('instant-album-cover-svg');
  const titleEl = document.getElementById('instant-album-title');
  const subEl = document.getElementById('instant-album-subtitle');
  const countBadge = document.getElementById('instant-album-count-badge');
  const metaPills = document.getElementById('instant-album-meta-pills');
  const modeIndicator = document.getElementById('grid-mode-indicator');

  if (!heroBox) return;

  if (!queryTerm || queryTerm === 'all' || filteredPhotos.length === 0) {
    heroBox.style.display = 'none';
    if (modeIndicator) modeIndicator.textContent = 'Orden cronológico automático';
    return;
  }

  heroBox.style.display = 'grid';
  const coverPhoto = filteredPhotos[0];
  if (coverSvgBox && coverPhoto) {
    coverSvgBox.innerHTML = renderUniquePhotoSvg(coverPhoto.svg);
  }

  const cleanQuery = queryTerm.charAt(0).toUpperCase() + queryTerm.slice(1);
  if (titleEl) {
    titleEl.textContent = customTitle || `Álbum Inteligente: "${cleanQuery}"`;
  }
  if (subEl) {
    subEl.textContent = customSub || `Portada y recopilación generadas al instante mediante metadatos EXIF, geolocalización y visión IA.`;
  }
  if (countBadge) {
    countBadge.textContent = `${filteredPhotos.length} ${filteredPhotos.length === 1 ? 'recuerdo' : 'recuerdos'}`;
  }
  if (metaPills && coverPhoto) {
    const sampleGps = (coverPhoto.exif && coverPhoto.exif.gps) ? coverPhoto.exif.gps.split('(')[0].trim() : 'GPS Activo';
    const sampleTag = (coverPhoto.aiTags && coverPhoto.aiTags[0]) ? coverPhoto.aiTags[0].label : cleanQuery;
    metaPills.innerHTML = `
      <span>📍 ${sampleGps}</span>
      <span>🤖 IA: ${sampleTag}</span>
      <span>📅 ${coverPhoto.year}</span>
    `;
  }
  if (modeIndicator) {
    modeIndicator.textContent = '📖 Álbum Estructurado al Instante (IA)';
  }
}

/**
 * Ejecuta una consulta relacional (query) en la base de datos de Google Photos (Fase 3 Digital)
 */
function filterDatabasePhotos(queryTerm, customAlbumTitle = null, customAlbumSub = null) {
  const queryStatement = document.getElementById('db-query-statement');
  const execTimeEl = document.getElementById('query-exec-time');
  const resultsCountEl = document.getElementById('grid-results-count');
  const photos = getDigitalPhotos();

  const startTime = performance.now();
  let filtered = photos;

  if (queryTerm) {
    const qLower = queryTerm.toLowerCase();
    filtered = photos.filter(p => {
      const matchTitle = (p.title || '').toLowerCase().includes(qLower);
      const matchYear = String(p.year || '').toLowerCase().includes(qLower);
      const matchTags = (p.tags || []).some(t => t.toLowerCase().includes(qLower));
      const matchGps = (p.exif && p.exif.gps) ? p.exif.gps.toLowerCase().includes(qLower) : false;
      const matchAi = (p.aiTags || []).some(ai => ai.label.toLowerCase().includes(qLower));
      return matchTitle || matchYear || matchTags || matchGps || matchAi;
    });

    if (queryStatement) {
      queryStatement.innerHTML = `<code>SELECT * FROM photos_library WHERE (tags LIKE '%${queryTerm}%' OR gps_exif LIKE '%${queryTerm}%' OR face_cluster LIKE '%${queryTerm}%') ORDER BY timestamp ASC;</code>`;
    }
  } else {
    if (queryStatement) {
      queryStatement.innerHTML = `<code>SELECT * FROM photos_library ORDER BY timestamp DESC;</code>`;
    }
  }

  const duration = (performance.now() - startTime + Math.random() * 6 + 3).toFixed(1);
  if (execTimeEl) execTimeEl.textContent = `Consulta: ${duration} ms`;
  if (resultsCountEl) {
    resultsCountEl.textContent = queryTerm
      ? `📖 Álbum estructurado al instante: ${filtered.length} recuerdos recopilados (de ${photos.length} en la nube)`
      : `Mostrando ${filtered.length} recuerdos indexados en la nube (Sin límite • Total: ${photos.length})`;
  }

  updateSmartAlbumHeroBanner(queryTerm, customAlbumTitle, customAlbumSub, filtered);
  AudioFX.playDatabasePing();
  renderGooglePhotosGrid(filtered);
}

/**
 * Renderiza la cuadrícula de recuerdos de Google Photos
 */
function renderGooglePhotosGrid(items = null) {
  const grid = document.getElementById('gphotos-grid');
  const resultsCountEl = document.getElementById('grid-results-count');
  if (!grid) return;

  const allDigital = getDigitalPhotos();
  const photos = items || allDigital;
  if (!items && resultsCountEl) {
    resultsCountEl.textContent = `Mostrando ${photos.length} recuerdos indexados en la nube (Sin límite • Total: ${allDigital.length})`;
  }
  grid.innerHTML = '';

  if (photos.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 24px; text-align: center; color: #5f6368; font-size: 0.85rem;">
        🔍 <strong>Sin resultados:</strong> No hay registros en la base de datos con ese metadato, rostro o coordenada GPS.
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();
  photos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'gphoto-card';
    card.setAttribute('data-id', photo.id);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    const gpsShort = (photo.exif && photo.exif.gps)
      ? (photo.exif.gps.includes('(') ? photo.exif.gps.split('(')[1].replace(')', '') : photo.exif.gps)
      : '';
    card.title = `${photo.title} (${photo.year})${gpsShort ? ' • 📍 ' + gpsShort : ''}`;
    card.setAttribute('aria-label', card.title);

    const coverSvg = renderUniquePhotoSvg(photo.svg);
    const tagDisplay = (photo.tags && photo.tags[0]) ? photo.tags[0] : 'Foto';
    card.innerHTML = `
      <div class="gphoto-card-img">${coverSvg}</div>
      <div class="gphoto-card-top-gps">${gpsShort ? `📍 ${gpsShort.split(',')[0]}` : `📅 ${photo.year}`}</div>
      <div class="gphoto-card-badge">${tagDisplay} • ${photo.year}</div>
    `;

    card.addEventListener('click', () => openPhotoInspector(photo));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPhotoInspector(photo);
      }
    });
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
}

/**
 * Abre el inspector modal de fotografía digital con metadatos EXIF, etiquetas semánticas
 * y filtros algorítmicos no destructivos (Principio de Variabilidad de Manovich).
 */
function openPhotoInspector(photo) {
  const inspector = document.getElementById('photo-inspector');
  const imgPane = document.getElementById('inspector-image');
  const titleEl = document.getElementById('inspector-title');
  const dateEl = document.getElementById('inspector-date');
  const gpsEl = document.getElementById('inspector-gps');
  const chipsEl = document.getElementById('inspector-chips');

  const coverSvg = renderUniquePhotoSvg(photo.svg);
  if (imgPane) imgPane.innerHTML = coverSvg;
  if (titleEl) titleEl.textContent = photo.title;
  if (dateEl) dateEl.textContent = `📅 ${photo.date} • ${photo.exif ? photo.exif.camera : ''}`;
  if (gpsEl) {
    gpsEl.textContent = (photo.exif && photo.exif.gps) ? `📍 Geolocalización EXIF: ${photo.exif.gps}` : '';
  }

  if (chipsEl) {
    chipsEl.innerHTML = '';
    (photo.tags || []).forEach(t => {
      const chip = document.createElement('span');
      chip.className = 'sem-tag';
      chip.textContent = `#${t}`;
      chipsEl.appendChild(chip);
    });
    if (photo.aiTags && photo.aiTags.length > 0) {
      photo.aiTags.slice(0, 2).forEach(ai => {
        const aiChip = document.createElement('span');
        aiChip.className = 'sem-tag ai-conf-chip';
        aiChip.innerHTML = `🤖 ${ai.label} <span>(${ai.conf})</span>`;
        chipsEl.appendChild(aiChip);
      });
    }
  }

  document.querySelectorAll('.v-filter-btn').forEach(b => b.classList.remove('active'));
  const normalBtn = document.querySelector('.v-filter-btn[data-vfilter="normal"]');
  if (normalBtn) normalBtn.classList.add('active');
  applyVariabilityFilter('normal');

  if (inspector) {
    inspector.style.display = 'block';
    const closeBtn = document.getElementById('btn-close-inspector');
    if (closeBtn) closeBtn.focus();
  }
  AudioFX.playDatabasePing();
}

/**
 * Principio de Variabilidad (Lev Manovich, 2005):
 * Los filtros digitales en CSS operan sobre la matriz numérica en tiempo real sin destruir
 * el archivo original almacenado en la nube.
 */
function applyVariabilityFilter(filterType) {
  const imgPane = document.getElementById('inspector-image');
  if (!imgPane) return;

  switch (filterType) {
    case 'warm':
      imgPane.style.filter = 'sepia(0.35) saturate(1.2) hue-rotate(-10deg)';
      break;
    case 'cool':
      imgPane.style.filter = 'saturate(0.9) hue-rotate(25deg) brightness(1.05)';
      break;
    case 'bw':
      imgPane.style.filter = 'grayscale(1) contrast(1.15)';
      break;
    default:
      imgPane.style.filter = 'none';
      break;
  }
}

/**
 * Inicializa todos los eventos de la base de datos de Google Photos, filtros, pestañas del pipeline,
 * avatares faciales y botones de lugares EXIF con debouncing para un rendimiento óptimo.
 */
function initDigitalDatabaseAndUI() {
  const searchInput = document.getElementById('gphotos-search-input');
  const clearBtn = document.getElementById('btn-clear-search');
  const filterChips = document.querySelectorAll('.filter-chip');
  const faceButtons = document.querySelectorAll('.face-avatar-btn');
  const placeButtons = document.querySelectorAll('.place-map-pill');
  const btnCloseInstantAlbum = document.getElementById('btn-close-instant-album');
  const btnCloseInspector = document.getElementById('btn-close-inspector');
  const inspector = document.getElementById('photo-inspector');
  const vFilterBtns = document.querySelectorAll('.v-filter-btn');
  const pipeTabs = document.querySelectorAll('.pipe-tab');

  const clearSmartActiveStates = () => {
    faceButtons.forEach(b => b.classList.remove('active'));
    placeButtons.forEach(b => b.classList.remove('active'));
  };

  // Pestañas del pipeline de la nube (Fase 2 Digital)
  pipeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      pipeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetLayer = tab.getAttribute('data-layer');
      AppState.activePipelineLayer = targetLayer;

      document.querySelectorAll('.pipeline-view').forEach(view => view.classList.remove('active'));
      const activeView = document.getElementById(`view-${targetLayer}`);
      if (activeView) activeView.classList.add('active');

      AudioFX.playDatabasePing();
    });
  });

  // Búsqueda en Google Photos con debounce de 120ms
  let searchDebounceTimer = null;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        const rawVal = e.target.value.trim();
        const query = rawVal.toLowerCase();
        if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
        clearSmartActiveStates();

        let effectiveQuery = query;
        if (query.includes('parís') || query.includes('paris')) effectiveQuery = 'parís';
        else if (query.includes('playa') || query.includes('costa')) effectiveQuery = 'playa';
        else if (query.includes('mascota') || query.includes('perro') || query.includes('toby')) effectiveQuery = 'mascotas';
        else if (query.includes('familia') || query.includes('abuelo')) effectiveQuery = 'familia';

        filterDatabasePhotos(effectiveQuery, rawVal ? `Álbum: "${rawVal}"` : null, null);
      }, 120);
    });
  }

  const resetToAllLibrary = () => {
    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
    clearSmartActiveStates();
    filterChips.forEach(c => c.classList.toggle('active', c.getAttribute('data-filter') === 'all'));
    filterDatabasePhotos('');
  };

  if (clearBtn) clearBtn.addEventListener('click', resetToAllLibrary);
  if (btnCloseInstantAlbum) btnCloseInstantAlbum.addEventListener('click', resetToAllLibrary);

  // Chips temáticos de Google Photos
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      clearSmartActiveStates();
      chip.classList.add('active');

      const filterVal = chip.getAttribute('data-filter');
      const albumTitle = chip.getAttribute('data-album-title');
      const albumSub = chip.getAttribute('data-album-sub');
      AppState.activeFilter = filterVal;

      if (filterVal === 'all') {
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        filterDatabasePhotos('');
      } else {
        if (searchInput) searchInput.value = albumTitle ? albumTitle.replace(/[^\w\sáéíóúñÁÉÍÓÚÑ]/g, '').trim() : filterVal;
        if (clearBtn) clearBtn.style.display = 'block';
        filterDatabasePhotos(filterVal.toLowerCase(), albumTitle, albumSub);
      }
    });
  });

  // Agrupación Facial por IA (Clusters de Rostros)
  faceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-smart-query') || '';
      const aTitle = btn.getAttribute('data-album-title');
      const aSub = btn.getAttribute('data-album-sub');
      clearSmartActiveStates();
      filterChips.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      if (searchInput) searchInput.value = aTitle || q;
      if (clearBtn) clearBtn.style.display = 'block';
      filterDatabasePhotos(q.toLowerCase(), aTitle, aSub);
    });
  });

  // Agrupación Geográfica EXIF (Lugares y Mapas)
  placeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-smart-query') || '';
      const aTitle = btn.getAttribute('data-album-title');
      const aSub = btn.getAttribute('data-album-sub');
      clearSmartActiveStates();
      filterChips.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      if (searchInput) searchInput.value = aTitle || q;
      if (clearBtn) clearBtn.style.display = 'block';
      filterDatabasePhotos(q.toLowerCase(), aTitle, aSub);
    });
  });

  // Cierre del inspector de foto
  if (btnCloseInspector && inspector) {
    btnCloseInspector.addEventListener('click', () => {
      inspector.style.display = 'none';
    });
  }

  // Filtros de variabilidad de Manovich
  vFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterType = btn.getAttribute('data-vfilter');
      AppState.variabilityFilter = filterType;
      applyVariabilityFilter(filterType);
      AudioFX.playDatabasePing();
    });
  });
}

/**
 * Inicializador general del módulo digital
 */
function initDigitalModule() {
  initDigitalCamera();
  initDigitalDatabaseAndUI();
}

// Exposición en el objeto global window
window.updateDigitalHUD = updateDigitalHUD;
window.initDigitalCamera = initDigitalCamera;
window.updatePipelineViews = updatePipelineViews;
window.updateSmartAlbumHeroBanner = updateSmartAlbumHeroBanner;
window.filterDatabasePhotos = filterDatabasePhotos;
window.renderGooglePhotosGrid = renderGooglePhotosGrid;
window.openPhotoInspector = openPhotoInspector;
window.applyVariabilityFilter = applyVariabilityFilter;
window.initDigitalDatabaseAndUI = initDigitalDatabaseAndUI;
window.initDigitalModule = initDigitalModule;
