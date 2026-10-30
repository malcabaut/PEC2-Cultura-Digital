/**
 * ========================================================
 * js/album.js - Lógica del Álbum Físico (Fase 3) y Revelado Químico (Fase 2)
 * Continuidad estricta entre Toma (Fase 1) -> Revelado (Fase 2) -> Álbum (Fase 3),
 * Minijuego ampliado de montaje en el álbum y pipeline de la nube.
 * ========================================================
 */

function evaluateFrameShotData(photoIndex, photo) {
  const recorded = AppState.shotsHistory[photoIndex];
  if (recorded) {
    const clampedMeterEV = typeof recorded.clampedMeterEV === 'number'
      ? recorded.clampedMeterEV
      : Math.max(-3.0, Math.min(3.0, recorded.deltaEV || 0));
    const meterPercent = typeof recorded.meterPercent === 'number'
      ? recorded.meterPercent
      : Math.min(100, Math.round((Math.abs(clampedMeterEV) / 3.0) * 100));
    return { ...recorded, clampedMeterEV, meterPercent, wasShotByUser: true };
  }
  // Si aún no se disparó la foto en Fase 1, nunca entró luz por el obturador:
  // en el revelado sale sin exposición, subexpuesta al máximo (-3.0 EV = 100% negra en positivo / transparente en negativo)
  return {
    aperture: AppState.aperture,
    speed: AppState.shutterSpeed,
    deltaEV: -3.0,
    clampedMeterEV: -3.0,
    meterPercent: 100,
    isUnfocused: false,
    focusDiff: 0,
    status: 'unshot_underexposed',
    isShaky: false,
    wasShotByUser: false
  };
}

function getDiagnosisForShot(shotData) {
  const ap = shotData.aperture;
  const sp = shotData.speed;
  const delta = shotData.deltaEV || 0;
  const clamped = Math.max(-3.0, Math.min(3.0, delta));
  const pct = Math.min(100, Math.round((Math.abs(clamped) / 3.0) * 100));
  const originTag = shotData.wasShotByUser ? '📸 Tomada en Fase 1' : '🎞️ No disparada en Fase 1';

  if (!shotData.wasShotByUser) {
    return {
      shortLabel: `⬛ Sin disparar (-3EV Max)`,
      negShortLabel: `⬜ Sin exponer (-3EV Max)`,
      detailLabel: `⬛ FOTO NO TOMADA: Subexpuesta al máximo (-3.0 EV • 100% sin luz porque el obturador no se abrió en Fase 1)`,
      cssClass: 'exposure-underexposed',
      badgeClass: 'badge-under'
    };
  }

  if (delta >= 2.85) {
    return {
      shortLabel: `⬜ Blanca 100% (+3EV)`,
      negShortLabel: `⬛ Neg. Negro 100% (+3EV)`,
      detailLabel: `⬜ BLANCA / QUEMADA AL 100% (+${clamped.toFixed(1)} EV al tope del exposímetro) • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-overexposed',
      badgeClass: 'badge-over'
    };
  }
  if (delta <= -2.85) {
    return {
      shortLabel: `⬛ Negra 100% (-3EV)`,
      negShortLabel: `⬜ Neg. Vacío 100% (-3EV)`,
      detailLabel: `⬛ NEGRA / SUBEXPUESTA AL 100% (${clamped.toFixed(1)} EV al mínimo del exposímetro) • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-underexposed',
      badgeClass: 'badge-under'
    };
  }
  if (delta > 0.6) {
    return {
      shortLabel: `☀️ Sobreexp. ${pct}% (+${clamped.toFixed(1)}EV)`,
      negShortLabel: `🎞️ Neg. Denso ${pct}% (+${clamped.toFixed(1)}EV)`,
      detailLabel: `☀️ SOBREEXPUESTA AL ${pct}% (+${clamped.toFixed(1)} EV de +3.0 EV) • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-overexposed',
      badgeClass: 'badge-over'
    };
  }
  if (delta < -0.6) {
    return {
      shortLabel: `🌑 Subexp. ${pct}% (${clamped.toFixed(1)}EV)`,
      negShortLabel: `🎞️ Neg. Claro ${pct}% (${clamped.toFixed(1)}EV)`,
      detailLabel: `🌑 SUBEXPUESTA AL ${pct}% (${clamped.toFixed(1)} EV de -3.0 EV) • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-underexposed',
      badgeClass: 'badge-under'
    };
  }
  if (shotData.isUnfocused) {
    return {
      shortLabel: '🔴 Desenfocada',
      negShortLabel: '🎞️ Neg. Desenfocado',
      detailLabel: `❌ DESENFOCADA (Prisma desalineado) • Exposición ${clamped >= 0 ? '+' : ''}${clamped.toFixed(1)} EV (${pct}%) • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-unfocused',
      badgeClass: 'badge-unfocused'
    };
  }
  if (shotData.isShaky) {
    return {
      shortLabel: `👋 Movida (1/${sp}s)`,
      negShortLabel: `🎞️ Neg. Movido`,
      detailLabel: `👋 TREPIDADA sin trípode • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-shaky',
      badgeClass: 'badge-shaky'
    };
  }
  return {
    shortLabel: `✓ Óptima (${clamped >= 0 ? '+' : ''}${clamped.toFixed(1)}EV)`,
    negShortLabel: `🎞️ Neg. Óptimo (0EV)`,
    detailLabel: `✅ EXPOSICIÓN Y ENFOQUE ÓPTIMOS (${clamped >= 0 ? '+' : ''}${clamped.toFixed(1)} EV • Desv. ${pct}%) • ƒ/${ap} • 1/${sp}s (${originTag})`,
    cssClass: 'exposure-ok',
    badgeClass: ''
  };
}

function updateDarkroomTray() {
  const photos = getPhotos();
  if (photos.length === 0) return;

  const totalReel = photos.length; // 10
  const maxBatchIdx = Math.max(0, Math.ceil(totalReel / 5) - 1); // 1 (2 tiras de 5)
  if (AppState.darkroomCurrentBatch > maxBatchIdx) {
    AppState.darkroomCurrentBatch = 0;
  }

  const batchIdx = AppState.darkroomCurrentBatch || 0;
  const batchObj = AppState.darkroomBatches[batchIdx] || { stage: 0, progress: 0 };
  const startIdx = batchIdx * 5;
  const endIdx = Math.min(totalReel, startIdx + 5);
  const countInBatch = endIdx - startIdx;

  if (AppState.darkroomSelectedSlot >= countInBatch) {
    AppState.darkroomSelectedSlot = 0;
  }

  // Actualizar pestañas de lotes (2 tiras de 5 fotos = 10 fotos)
  document.querySelectorAll('.batch-tab').forEach(tab => {
    const b = parseInt(tab.getAttribute('data-batch'), 10);
    const bState = AppState.darkroomBatches[b];
    if (!bState) {
      tab.style.display = 'none';
      return;
    }
    tab.style.display = '';
    tab.classList.toggle('active', b === batchIdx);
    const rangeStart = b * 5 + 1;
    const rangeEnd = Math.min(totalReel, (b + 1) * 5);
    const statusIcon = bState.stage === 2 ? '✅' : bState.stage === 1 ? '🎞️' : '⬛';
    tab.textContent = `${statusIcon} Tira ${b + 1}: Fotos ${rangeStart}–${rangeEnd}`;
  });

  // Actualizar indicadores de las 3 etapas químicas
  const step0 = document.getElementById('chem-step-0');
  const step1 = document.getElementById('chem-step-1');
  const step2 = document.getElementById('chem-step-2');
  if (step0) step0.className = `chem-step ${batchObj.stage === 0 ? 'active' : 'done'}`;
  if (step1) step1.className = `chem-step ${batchObj.stage === 0 ? 'next-step-blink' : batchObj.stage === 1 ? 'active' : 'done'}`;
  if (step2) step2.className = `chem-step ${batchObj.stage === 1 ? 'next-step-blink' : batchObj.stage === 2 ? 'active done' : ''}`;

  // Renderizar la tira de 5 fotos en el orden del carrete de 10
  const stripGrid = document.getElementById('darkroom-strip-5');
  if (stripGrid) {
    stripGrid.innerHTML = '';
    for (let slot = 0; slot < countInBatch; slot++) {
      const pIdx = startIdx + slot;
      const photo = photos[pIdx];
      const shotData = evaluateFrameShotData(pIdx, photo);
      const diag = getDiagnosisForShot(shotData);
      const coverSvg = photo.svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ');

      const cell = document.createElement('div');
      cell.className = `strip-5-frame ${slot === AppState.darkroomSelectedSlot ? 'selected' : ''}`;

      let stateClass = 'stage-latent-hidden';
      let footerBadge = '⬛ Oculta (Sin revelar)';
      let innerSvgHtml = '';
      let holderInlineFilter = '';

      if (batchObj.stage === 1) {
        const negStyle = getPhotoChemicalFilterStyles(shotData, 'negative');
        stateClass = `stage-negative-inverted ${diag.cssClass}`;
        footerBadge = diag.negShortLabel || '🎞️ Negativo Invertido';
        innerSvgHtml = coverSvg;
        holderInlineFilter = `style="filter: ${negStyle.filterCss} !important;"`;
      } else if (batchObj.stage === 2) {
        const posStyle = getPhotoChemicalFilterStyles(shotData, 'positive');
        stateClass = `stage-positive-revealed ${diag.cssClass}`;
        footerBadge = diag.shortLabel;
        innerSvgHtml = coverSvg;
        holderInlineFilter = `style="filter: ${posStyle.filterCss} !important;"`;
      }

      const shotLabel = shotData.wasShotByUser
        ? (photo.isUserUpload ? '📤 Tuya • 📸' : '📸 Tomada')
        : (photo.isUserUpload ? '📤 Tuya • 🎞️' : '🎞️ Carrete');

      cell.innerHTML = `
        <div class="strip-frame-header">
          <span class="strip-frame-num">#${String(pIdx + 1).padStart(2, '0')}A</span>
          <span class="strip-frame-shot">${shotLabel}</span>
        </div>
        <div class="strip-frame-optic ${stateClass}">
          <div class="strip-svg-holder" ${holderInlineFilter}>${innerSvgHtml}</div>
          <div class="strip-latent-veil">
            <span>SIN REVELAR</span>
            <small>Pulsa Paso 1</small>
          </div>
        </div>
        <div class="strip-frame-footer">${footerBadge}</div>
      `;

      cell.addEventListener('click', () => {
        AppState.darkroomSelectedSlot = slot;
        AudioFX.playDialClick();
        updateDarkroomTray();
      });

      stripGrid.appendChild(cell);
    }
  }

  // Actualizar la Cubeta Química con la foto seleccionada del lote de 5
  const selectedPhotoIdx = startIdx + AppState.darkroomSelectedSlot;
  const selectedPhoto = photos[selectedPhotoIdx];
  const selectedShot = evaluateFrameShotData(selectedPhotoIdx, selectedPhoto);
  const selectedDiag = getDiagnosisForShot(selectedShot);

  const latentImage = document.getElementById('latent-image');
  const trayDiagnosis = document.getElementById('tray-frame-diagnosis');
  const timeElapsed = document.getElementById('analog-time-elapsed');
  const btnDevelop = document.getElementById('btn-start-develop');
  const progressFill = document.getElementById('chemical-progress-fill');
  const progressPill = document.getElementById('darkroom-progress-pill');
  const trayTitle = document.getElementById('darkroom-tray-title');

  const stageProgress = batchObj.stage === 0 ? 0 : batchObj.stage === 1 ? 50 : 100;
  if (progressFill) progressFill.style.width = `${stageProgress}%`;
  if (progressPill) progressPill.textContent = `Paso ${batchObj.stage} de 2 (${stageProgress}%)`;

  if (latentImage && selectedPhoto) {
    const coverSvg = selectedPhoto.svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ');

    if (batchObj.stage === 0) {
      latentImage.innerHTML = '';
      latentImage.className = 'latent-image-emerging stage-latent-hidden';
      latentImage.style.filter = '';
      if (trayDiagnosis) {
        trayDiagnosis.textContent = `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')} (${selectedPhoto.title}) • ⬛ Emulsión opaca: Pulsa el botón inferior para pasar al Paso 1 (Negativo)`;
      }
      if (timeElapsed) {
        timeElapsed.textContent = `Paso Actual: 1️⃣ Emulsión Oculta (Fotos ${startIdx + 1}–${endIdx} de 10)`;
      }
      if (trayTitle) {
        trayTitle.textContent = '👉 Siguiente paso: Pulsa el botón inferior para revelar las 5 fotos en NEGATIVO (Colores Invertidos y Densidad de Plata)';
      }
      if (btnDevelop) {
        btnDevelop.disabled = false;
        btnDevelop.classList.add('btn-gentle-blink');
        btnDevelop.textContent = '🧪 PASO 1: Revelar a Negativo (Ver Colores Invertidos)';
      }
    } else if (batchObj.stage === 1) {
      const negStyle = getPhotoChemicalFilterStyles(selectedShot, 'negative');
      latentImage.innerHTML = coverSvg;
      latentImage.className = `latent-image-emerging stage-negative-inverted`;
      latentImage.style.filter = negStyle.filterCss;
      if (trayDiagnosis) {
        trayDiagnosis.textContent = `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')} • 🎞️ ${negStyle.negDescription} • ƒ/${selectedShot.aperture} • 1/${selectedShot.speed}s`;
      }
      if (timeElapsed) {
        timeElapsed.textContent = `Paso Actual: 2️⃣ ${selectedDiag.negShortLabel || 'Negativo Invertido'} (Fotos ${startIdx + 1}–${endIdx} de 10)`;
      }
      if (trayTitle) {
        trayTitle.textContent = '👉 Siguiente paso: Pulsa el botón inferior para POSITIVAR y enviar estas copias al Álbum Físico (Fase 3)';
      }
      if (btnDevelop) {
        btnDevelop.disabled = false;
        btnDevelop.classList.add('btn-gentle-blink');
        btnDevelop.textContent = '✨ PASO 2: Positivar Copias para el Álbum (Comprobar Exposición)';
      }
    } else {
      const posStyle = getPhotoChemicalFilterStyles(selectedShot, 'positive');
      latentImage.innerHTML = coverSvg;
      latentImage.className = `latent-image-emerging stage-positive-revealed`;
      latentImage.style.filter = posStyle.filterCss;
      if (trayDiagnosis) {
        trayDiagnosis.textContent = `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')} (${selectedPhoto.title}) • ${selectedDiag.detailLabel}`;
      }
      if (timeElapsed) {
        timeElapsed.textContent = `Paso Actual: 3️⃣ ¡Tira ${batchIdx + 1} Revelada y Lista para el Álbum! (${selectedDiag.shortLabel})`;
      }
      if (trayTitle) {
        trayTitle.textContent = '✅ Tira revelada: Estas 5 copias ya están disponibles en el sobre del Álbum Físico (Fase 3)';
      }
      if (btnDevelop) {
        btnDevelop.disabled = false;
        btnDevelop.classList.add('btn-gentle-blink');
        const otherBatchIdx = batchIdx === 0 ? 1 : 0;
        const otherBatch = AppState.darkroomBatches[otherBatchIdx];
        if (otherBatch && otherBatch.stage < 2) {
          btnDevelop.textContent = `🎞️ PASAR A TIRA ${otherBatchIdx + 1}: Revelar Fotos ${otherBatchIdx * 5 + 1}–${Math.min(10, (otherBatchIdx + 1) * 5)} ▶`;
        } else {
          btnDevelop.textContent = '📒 IR A LA FASE 3: Montar mis 10 Copias en el Álbum Físico ▶';
        }
      }
    }
  }
}

function updatePipelineViews() {
  const currentPhoto = getCurrentPhoto();
  if (!currentPhoto) return;

  // 1. Matriz de píxeles
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

  // 2. Metadatos EXIF
  const exifGrid = document.getElementById('exif-display-fields');
  const gpsLabel = document.getElementById('gps-coords-label');
  if (exifGrid) {
    exifGrid.innerHTML = `
      <div class="exif-item"><strong>Cámara:</strong> ${currentPhoto.exif.camera}</div>
      <div class="exif-item"><strong>Óptica:</strong> ${currentPhoto.exif.lens}</div>
      <div class="exif-item"><strong>Sensibilidad:</strong> ${currentPhoto.exif.iso}</div>
      <div class="exif-item"><strong>Resolución:</strong> ${currentPhoto.exif.dimensions}</div>
      <div class="exif-item"><strong>Tamaño:</strong> ${currentPhoto.exif.fileSize}</div>
      <div class="exif-item"><strong>Fecha/Hora:</strong> ${currentPhoto.date}</div>
    `;
  }
  if (gpsLabel) gpsLabel.textContent = `GPS: ${currentPhoto.exif.gps}`;

  // 3. Visión por Computador (Etiquetas IA)
  const scannerTarget = document.getElementById('scanner-image-target');
  const tagList = document.getElementById('semantic-tag-list');
  if (scannerTarget) {
    const existingSvg = scannerTarget.querySelector('svg');
    if (existingSvg) existingSvg.remove();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = currentPhoto.svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ');
    if (tempDiv.firstElementChild) {
      scannerTarget.prepend(tempDiv.firstElementChild);
    }
  }

  if (tagList) {
    tagList.innerHTML = '';
    currentPhoto.aiTags.forEach(tag => {
      const tagBadge = document.createElement('span');
      tagBadge.className = 'sem-tag';
      tagBadge.innerHTML = `${tag.label} <span>(${tag.conf})</span>`;
      tagList.appendChild(tagBadge);
    });
  }
}

/**
 * Inicializa o recupera el estado de montaje de una página del álbum (0..9)
 */
function getOrInitAlbumPageMount(pageIdx, photo) {
  if (!AppState.albumMountedPages[pageIdx]) {
    AppState.albumMountedPages[pageIdx] = {
      corners: { tl: false, tr: false, bl: false, br: false },
      mounted: false,
      customNote: ''
    };
  }
  return AppState.albumMountedPages[pageIdx];
}

/**
 * Renderiza el Álbum Físico con continuidad total (Fase 1 -> Fase 2 -> Fase 3)
 * y su minijuego ampliado de montaje con esquineras y notas manuscritas.
 */
function renderAlbumPage() {
  const photos = getPhotos();
  if (photos.length === 0) return;

  if (AppState.albumPageIndex >= photos.length) {
    AppState.albumPageIndex = 0;
  }

  const pageIdx = AppState.albumPageIndex;
  const photo = photos[pageIdx];
  const photoContainer = document.getElementById('album-photo-display');
  const captionEl = document.getElementById('album-caption');
  const pageIndicator = document.getElementById('album-page-indicator');
  const pageWrapper = document.getElementById('album-current-page');
  const badgeEl = document.getElementById('album-exposure-badge');
  const traceEl = document.getElementById('album-continuity-trace');
  const cornersTag = document.getElementById('corners-progress-tag');
  const mountOverlay = document.getElementById('album-mount-overlay');
  const noteInput = document.getElementById('album-custom-note-input');

  // Estadísticas globales de continuidad (10 fotos)
  let totalShot = 0;
  let totalRevealed = 0;
  let totalMounted = 0;
  for (let i = 0; i < photos.length; i++) {
    if (AppState.shotsHistory[i]) totalShot++;
    if (getFrameDevelopmentStage(i) === 2) totalRevealed++;
    const m = AppState.albumMountedPages[i];
    if (m && m.mounted) totalMounted++;
  }

  const statShotEl = document.getElementById('album-stat-shot');
  const statRevEl = document.getElementById('album-stat-rev');
  const statMountEl = document.getElementById('album-stat-mounted');
  if (statShotEl) statShotEl.textContent = `📸 Tomadas: ${totalShot}/${photos.length}`;
  if (statRevEl) statRevEl.textContent = `🧪 Reveladas: ${totalRevealed}/${photos.length}`;
  if (statMountEl) statMountEl.textContent = `📒 Montadas: ${totalMounted}/${photos.length}`;

  // Renderizar la tira-sobre del laboratorio con las 10 miniaturas interactivas
  const envelopeStrip = document.getElementById('album-envelope-strip');
  if (envelopeStrip) {
    envelopeStrip.innerHTML = '';
    photos.forEach((p, idx) => {
      const wasShot = !!AppState.shotsHistory[idx];
      const devStage = getFrameDevelopmentStage(idx);
      const mountState = getOrInitAlbumPageMount(idx, p);
      const shotEval = evaluateFrameShotData(idx, p);
      const diag = getDiagnosisForShot(shotEval);

      const slotBtn = document.createElement('button');
      slotBtn.type = 'button';
      slotBtn.className = `envelope-thumb-slot ${idx === pageIdx ? 'active' : ''} ${mountState.mounted ? 'is-mounted' : ''}`;

      let stateBadge = '⬛ Latente';
      let thumbVisualClass = 'env-latent';
      let thumbInner = '';
      let thumbStyleAttr = '';

      if (devStage === 1) {
        const negStyle = getPhotoChemicalFilterStyles(shotEval, 'negative');
        stateBadge = diag.negShortLabel || '🎞️ Negativo';
        thumbVisualClass = `env-negative`;
        thumbStyleAttr = `style="filter: ${negStyle.filterCss};"`;
        thumbInner = p.svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ');
      } else if (devStage === 2) {
        const posStyle = getPhotoChemicalFilterStyles(shotEval, 'positive');
        stateBadge = mountState.mounted ? `📌 ${diag.shortLabel}` : `✨ ${diag.shortLabel}`;
        thumbVisualClass = `env-positive`;
        thumbStyleAttr = `style="filter: ${posStyle.filterCss};"`;
        thumbInner = p.svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ');
      }

      slotBtn.innerHTML = `
        <div class="env-slot-top">
          <span>#${String(idx + 1).padStart(2, '0')}</span>
          <span>${wasShot ? '📸' : '🎞️'}</span>
        </div>
        <div class="env-slot-preview ${thumbVisualClass}" ${thumbStyleAttr}>${thumbInner}</div>
        <span class="env-slot-status">${stateBadge}</span>
      `;

      slotBtn.addEventListener('click', () => {
        AppState.albumPageIndex = idx;
        AudioFX.playPageFlip();
        renderAlbumPage();
      });

      envelopeStrip.appendChild(slotBtn);
    });
  }

  if (pageWrapper) {
    pageWrapper.style.transform = 'scale(0.985)';
    setTimeout(() => { pageWrapper.style.transform = 'scale(1)'; }, 120);
  }

  const shotData = evaluateFrameShotData(pageIdx, photo);
  const devStage = getFrameDevelopmentStage(pageIdx);
  const mountState = getOrInitAlbumPageMount(pageIdx, photo);
  const coverSvg = photo.svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid slice" ');

  // Actualizar estado visual de las 4 esquineras interactivas
  const cornersCount = Object.values(mountState.corners).filter(Boolean).length;
  document.querySelectorAll('#album-mounted-frame .photo-corner').forEach(cornerBtn => {
    const cKey = cornerBtn.getAttribute('data-corner');
    const isFixed = !!mountState.corners[cKey];
    cornerBtn.classList.toggle('corner-fixed', isFixed);
    cornerBtn.classList.toggle('corner-pending', devStage === 2 && !isFixed);
  });

  if (cornersTag) {
    if (devStage < 2) {
      cornersTag.textContent = '🧪 Pendiente de revelar en Fase 2';
    } else if (mountState.mounted) {
      cornersTag.textContent = '📌 Copia pegada en álbum (4/4 esquineras)';
    } else {
      cornersTag.textContent = `📐 Esquineras fijadas: ${cornersCount}/4 (haz clic en las esquinas)`;
    }
  }

  // Continuidad visual en la página del álbum según Fase 1 y Fase 2
  const shotDiag = getDiagnosisForShot(shotData);
  if (photoContainer) {
    photoContainer.className = 'physical-photo-print';
    photoContainer.style.filter = '';

    if (devStage === 0) {
      // Aún NO se ha revelado en el Cuarto Oscuro (Fase 2)
      photoContainer.innerHTML = `
        <div class="album-unrevealed-placeholder">
          <span class="unrev-icon">🎞️</span>
          <strong>Fotograma #${String(pageIdx + 1).padStart(2, '0')} sin revelar aún</strong>
          <p>${shotData.wasShotByUser
            ? `Disparaste esta foto en la Fase 1 a ƒ/${shotData.aperture} y 1/${shotData.speed}s (${shotDiag.shortLabel}), pero sigue oculta en el carrete.`
            : 'Este fotograma del carrete aún no ha pasado por los líquidos del cuarto oscuro.'}</p>
          <button type="button" class="btn-go-darkroom-inline" id="btn-inline-go-phase2">
            🧪 Ir a Fase 2 (Cuarto Oscuro) para revelarla
          </button>
        </div>
      `;
      if (mountOverlay) mountOverlay.style.display = 'none';
      if (badgeEl) {
        badgeEl.className = 'photo-exposure-badge badge-under';
        badgeEl.textContent = `⬛ EMULSIÓN LATENTE • Revela la Tira ${Math.floor(pageIdx / 5) + 1} en Fase 2`;
      }
    } else if (devStage === 1) {
      // Se quedó a medias en Negativo (Paso 1 de Fase 2): muestra el negativo con la densidad real de plata según los EV (-3 a +3)
      const negStyle = getPhotoChemicalFilterStyles(shotData, 'negative');
      photoContainer.innerHTML = coverSvg;
      photoContainer.style.filter = negStyle.filterCss;
      if (mountOverlay) {
        mountOverlay.style.display = 'flex';
        const mTitle = document.getElementById('mount-overlay-title');
        const mDesc = document.getElementById('mount-overlay-desc');
        const mBtn = document.getElementById('btn-mount-current-photo');
        if (mTitle) mTitle.textContent = `🎞️ ${negStyle.negDescription}`;
        if (mDesc) mDesc.textContent = 'En el negativo químico la luz actúa al revés (+EV ennegrece la plata; -EV deja el celuloide claro). Pulsa abajo para positivar a papel y montar en el álbum.';
        if (mBtn) mBtn.textContent = '✨ Positivar a copia en papel y montar ahora';
      }
      if (badgeEl) {
        badgeEl.className = 'photo-exposure-badge badge-shaky';
        badgeEl.textContent = `🎞️ ${negStyle.negDescription} • ƒ/${shotData.aperture} • 1/${shotData.speed}s`;
      }
    } else {
      // devStage === 2: Foto revelada en positivo con su porcentaje proporcional al exposímetro (-3 a +3 EV)
      const posStyle = getPhotoChemicalFilterStyles(shotData, 'positive');
      photoContainer.innerHTML = coverSvg;
      photoContainer.style.filter = posStyle.filterCss;

      if (badgeEl) {
        badgeEl.className = `photo-exposure-badge ${shotDiag.badgeClass || ''}`;
        badgeEl.textContent = shotDiag.detailLabel;
      }

      if (!mountState.mounted) {
        photoContainer.classList.add('unmounted-preview');
        if (mountOverlay) {
          mountOverlay.style.display = 'flex';
          const mTitle = document.getElementById('mount-overlay-title');
          const mDesc = document.getElementById('mount-overlay-desc');
          const mBtn = document.getElementById('btn-mount-current-photo');
          if (mTitle) mTitle.textContent = `📐 Montar Copia #${String(pageIdx + 1).padStart(2, '0')} (${shotDiag.shortLabel} • ${cornersCount}/4 esquineras)`;
          if (mDesc) mDesc.textContent = 'Haz clic en las 4 esquineras del marco o pulsa el botón para pegar esta fotografía revelada en la página.';
          if (mBtn) mBtn.textContent = '📌 Pegar copia y fijar las 4 esquineras';
        }
      } else {
        if (mountOverlay) mountOverlay.style.display = 'none';
      }
    }

    const inlineBtn = document.getElementById('btn-inline-go-phase2');
    if (inlineBtn) {
      inlineBtn.addEventListener('click', () => {
        AppState.darkroomCurrentBatch = Math.floor(pageIdx / 5);
        AppState.darkroomSelectedSlot = pageIdx % 5;
        if (typeof switchPhase === 'function') switchPhase(2);
      });
    }
  }

  if (traceEl) {
    const shotStr = shotData.wasShotByUser ? `📸 Tomada (ƒ/${shotData.aperture}, 1/${shotData.speed}s)` : '🎞️ En carrete';
    const revStr = devStage === 2 ? '✅ Revelada' : devStage === 1 ? '🎞️ En negativo' : '⬛ Sin revelar';
    const mntStr = mountState.mounted ? '📌 Pegada en álbum' : '📐 Sin pegar';
    traceEl.textContent = `${shotStr} ➔ ${revStr} ➔ ${mntStr}`;
  }

  const finalCaption = mountState.customNote && mountState.customNote.trim()
    ? `“${mountState.customNote.trim()}”`
    : photo.analogCaption;
  if (captionEl) captionEl.textContent = finalCaption;
  if (noteInput) noteInput.value = mountState.customNote || '';
  if (pageIndicator) pageIndicator.textContent = `Fotograma ${String(pageIdx + 1).padStart(2, '0')} de ${photos.length}`;
}

function initDarkroomAndAlbum() {
  const btnDevelop = document.getElementById('btn-start-develop');
  const step0 = document.getElementById('chem-step-0');
  const step1 = document.getElementById('chem-step-1');
  const step2 = document.getElementById('chem-step-2');

  // Selector de lotes de 5 en 5 fotos (2 tiras = 10 fotos)
  document.querySelectorAll('.batch-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const b = parseInt(tab.getAttribute('data-batch'), 10);
      AppState.darkroomCurrentBatch = b;
      AppState.darkroomSelectedSlot = 0;
      AudioFX.playDialClick();
      updateDarkroomTray();
    });
  });

  // Función manual paso a paso (0: Oculta -> 1: Colores Invertidos -> 2: Imagen Revelada Final)
  function advanceManualDarkroomStep() {
    const bIdx = AppState.darkroomCurrentBatch || 0;
    const batchObj = AppState.darkroomBatches[bIdx];
    if (!batchObj) return;

    if (batchObj.stage === 0) {
      batchObj.stage = 1;
      batchObj.progress = 50;
      AudioFX.playChemicalSplash();
      updateDarkroomTray();
    } else if (batchObj.stage === 1) {
      batchObj.stage = 2;
      batchObj.progress = 100;
      AudioFX.playChemicalSplash();
      updateDarkroomTray();
    } else {
      const otherBatchIdx = bIdx === 0 ? 1 : 0;
      const otherBatch = AppState.darkroomBatches[otherBatchIdx];
      if (otherBatch && otherBatch.stage < 2) {
        AppState.darkroomCurrentBatch = otherBatchIdx;
        AppState.darkroomSelectedSlot = 0;
        AudioFX.playDialClick();
        updateDarkroomTray();
      } else if (typeof switchPhase === 'function') {
        switchPhase(3);
      }
    }
  }

  if (btnDevelop) {
    btnDevelop.addEventListener('click', advanceManualDarkroomStep);
  }

  if (step0) {
    step0.addEventListener('click', () => {
      const bObj = AppState.darkroomBatches[AppState.darkroomCurrentBatch || 0];
      if (bObj) {
        bObj.stage = 0;
        bObj.progress = 0;
        AudioFX.playDialClick();
        updateDarkroomTray();
      }
    });
  }
  if (step1) {
    step1.addEventListener('click', () => {
      const bObj = AppState.darkroomBatches[AppState.darkroomCurrentBatch || 0];
      if (bObj && bObj.stage === 0) advanceManualDarkroomStep();
    });
  }
  if (step2) {
    step2.addEventListener('click', () => {
      const bObj = AppState.darkroomBatches[AppState.darkroomCurrentBatch || 0];
      if (bObj && bObj.stage === 1) advanceManualDarkroomStep();
    });
  }

  // =========================================================================
  // MINIJUEGO AMPLIADO DEL ÁLBUM FÍSICO (Esquineras, Pegado y Nota Manuscrita)
  // =========================================================================
  document.querySelectorAll('#album-mounted-frame .photo-corner').forEach(cornerBtn => {
    cornerBtn.addEventListener('click', () => {
      const pageIdx = AppState.albumPageIndex;
      const devStage = getFrameDevelopmentStage(pageIdx);
      if (devStage < 2) {
        // Si estaba en negativo, lo positivamos al tocar la esquinera
        const bIdx = Math.floor(pageIdx / 5);
        if (AppState.darkroomBatches[bIdx]) {
          AppState.darkroomBatches[bIdx].stage = 2;
          AppState.darkroomBatches[bIdx].progress = 100;
        }
      }
      const mountState = getOrInitAlbumPageMount(pageIdx);
      const cKey = cornerBtn.getAttribute('data-corner');
      mountState.corners[cKey] = !mountState.corners[cKey];
      const allFixed = Object.values(mountState.corners).every(Boolean);
      mountState.mounted = allFixed;
      AudioFX.playDialClick();
      renderAlbumPage();
    });
  });

  const btnMountCurrent = document.getElementById('btn-mount-current-photo');
  if (btnMountCurrent) {
    btnMountCurrent.addEventListener('click', () => {
      const pageIdx = AppState.albumPageIndex;
      const bIdx = Math.floor(pageIdx / 5);
      if (AppState.darkroomBatches[bIdx] && AppState.darkroomBatches[bIdx].stage < 2) {
        AppState.darkroomBatches[bIdx].stage = 2;
        AppState.darkroomBatches[bIdx].progress = 100;
      }
      const mountState = getOrInitAlbumPageMount(pageIdx);
      mountState.corners = { tl: true, tr: true, bl: true, br: true };
      mountState.mounted = true;
      AudioFX.playPageFlip();
      renderAlbumPage();
    });
  }

  const btnQuickMountAll = document.getElementById('btn-quick-mount-all');
  if (btnQuickMountAll) {
    btnQuickMountAll.addEventListener('click', () => {
      const photos = getPhotos();
      // Revela las tiras que falten y monta las 10 fotos en el álbum
      AppState.darkroomBatches.forEach(b => {
        b.stage = 2;
        b.progress = 100;
      });
      photos.forEach((p, idx) => {
        const m = getOrInitAlbumPageMount(idx, p);
        m.corners = { tl: true, tr: true, bl: true, br: true };
        m.mounted = true;
      });
      AudioFX.playPageFlip();
      renderAlbumPage();
    });
  }

  const btnSaveNote = document.getElementById('btn-save-album-note');
  const noteInput = document.getElementById('album-custom-note-input');
  if (btnSaveNote && noteInput) {
    const saveNoteFn = () => {
      const pageIdx = AppState.albumPageIndex;
      const mountState = getOrInitAlbumPageMount(pageIdx);
      mountState.customNote = noteInput.value;
      AudioFX.playDialClick();
      renderAlbumPage();
    };
    btnSaveNote.addEventListener('click', saveNoteFn);
    noteInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        saveNoteFn();
      }
    });
  }

  // Pestañas del pipeline de Google Photos
  const pipeTabs = document.querySelectorAll('.pipe-tab');
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

  // Navegación secuencial de páginas del álbum
  const btnPrev = document.getElementById('btn-album-prev');
  const btnNext = document.getElementById('btn-album-next');

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (AppState.albumPageIndex > 0) {
        AppState.albumPageIndex--;
        AudioFX.playPageFlip();
        renderAlbumPage();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      const photos = getPhotos();
      if (AppState.albumPageIndex < photos.length - 1) {
        AppState.albumPageIndex++;
        AudioFX.playPageFlip();
        renderAlbumPage();
      }
    });
  }

  // Buscador y chips de Google Photos
  const searchInput = document.getElementById('gphotos-search-input');
  const clearBtn = document.getElementById('btn-clear-search');
  const filterChips = document.querySelectorAll('.filter-chip');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
      filterDatabasePhotos(query);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      clearBtn.style.display = 'none';
      filterDatabasePhotos('');
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filterVal = chip.getAttribute('data-filter');
      AppState.activeFilter = filterVal;

      if (filterVal === 'all') {
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        filterDatabasePhotos('');
      } else {
        if (searchInput) searchInput.value = filterVal;
        if (clearBtn) clearBtn.style.display = 'block';
        filterDatabasePhotos(filterVal.toLowerCase());
      }
    });
  });

  // Modal del inspector
  const btnCloseInspector = document.getElementById('btn-close-inspector');
  const inspector = document.getElementById('photo-inspector');
  const vFilterBtns = document.querySelectorAll('.v-filter-btn');

  if (btnCloseInspector && inspector) {
    btnCloseInspector.addEventListener('click', () => { inspector.style.display = 'none'; });
  }

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


