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
      shortLabel: `⬛ Foto no tomada`,
      negShortLabel: `⬛ Foto no tomada`,
      detailLabel: `⬛ FOTO NO TOMADA`,
      cssClass: 'exposure-underexposed',
      badgeClass: 'badge-under'
    };
  }

  const focusShortExtra = shotData.isUnfocused ? ' + 🔴 Desenf.' : '';
  const focusDetailExtra = shotData.isUnfocused ? ' • 🔴 DESENFOCADA (Prisma desalineado)' : '';
  const shakyShortExtra = shotData.isShaky ? ` + 👋 Movida` : '';
  const shakyDetailExtra = shotData.isShaky ? ` • 👋 TREPIDADA (1/${sp}s)` : '';
  const combinedShortExtra = `${focusShortExtra}${shakyShortExtra}`;
  const combinedDetailExtra = `${focusDetailExtra}${shakyDetailExtra}`;

  if (delta >= 2.85) {
    return {
      shortLabel: `⬜ Blanca 100% (+3EV)${combinedShortExtra}`,
      negShortLabel: `⬛ Neg. Negro 100% (+3EV)${combinedShortExtra}`,
      detailLabel: `⬜ BLANCA / QUEMADA AL 100% (+${clamped.toFixed(1)} EV al tope del exposímetro)${combinedDetailExtra} • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-overexposed',
      badgeClass: 'badge-over'
    };
  }
  if (delta <= -2.85) {
    return {
      shortLabel: `⬛ Negra 100% (-3EV)`,
      negShortLabel: `⬜ Neg. Vacío 100% (-3EV)`,
      detailLabel: `⬛ NEGRA / SUBEXPUESTA AL 100% (${clamped.toFixed(1)} EV al mínimo del exposímetro)${combinedDetailExtra} • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-underexposed',
      badgeClass: 'badge-under'
    };
  }
  if (delta > 0.6) {
    return {
      shortLabel: `☀️ Sobreexp. ${pct}% (+${clamped.toFixed(1)}EV)${combinedShortExtra}`,
      negShortLabel: `🎞️ Neg. Denso ${pct}% (+${clamped.toFixed(1)}EV)${combinedShortExtra}`,
      detailLabel: `☀️ SOBREEXPUESTA AL ${pct}% (+${clamped.toFixed(1)} EV de +3.0 EV)${combinedDetailExtra} • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-overexposed',
      badgeClass: 'badge-over'
    };
  }
  if (delta < -0.6) {
    return {
      shortLabel: `🌑 Subexp. ${pct}% (${clamped.toFixed(1)}EV)${combinedShortExtra}`,
      negShortLabel: `🎞️ Neg. Claro ${pct}% (${clamped.toFixed(1)}EV)${combinedShortExtra}`,
      detailLabel: `🌑 SUBEXPUESTA AL ${pct}% (${clamped.toFixed(1)} EV de -3.0 EV)${combinedDetailExtra} • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-underexposed',
      badgeClass: 'badge-under'
    };
  }
  if (shotData.isUnfocused) {
    return {
      shortLabel: `🔴 Desenfocada${shakyShortExtra}`,
      negShortLabel: `🎞️ Neg. Desenfocado${shakyShortExtra}`,
      detailLabel: `🔴 DESENFOCADA (Prisma desalineado)${shakyDetailExtra} • Exposición Óptima (${clamped >= 0 ? '+' : ''}${clamped.toFixed(1)} EV • ${pct}%) • ƒ/${ap} • 1/${sp}s (${originTag})`,
      cssClass: 'exposure-unfocused',
      badgeClass: 'badge-unfocused'
    };
  }
  if (shotData.isShaky) {
    return {
      shortLabel: `👋 Movida (1/${sp}s)`,
      negShortLabel: `🎞️ Neg. Movido`,
      detailLabel: `👋 TREPIDADA sin trípode • Exposición Óptima (${clamped >= 0 ? '+' : ''}${clamped.toFixed(1)} EV) • ƒ/${ap} • 1/${sp}s (${originTag})`,
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

  const totalReel = photos.length; // 12
  const maxBatchIdx = Math.max(0, Math.ceil(totalReel / 4) - 1); // 2 (3 tiras de 4)
  if (AppState.darkroomCurrentBatch > maxBatchIdx) {
    AppState.darkroomCurrentBatch = 0;
  }

  const batchIdx = AppState.darkroomCurrentBatch || 0;
  const batchObj = AppState.darkroomBatches[batchIdx] || { stage: 0, progress: 0 };
  const startIdx = batchIdx * 4;
  const endIdx = Math.min(totalReel, startIdx + 4);
  const countInBatch = endIdx - startIdx;

  if (AppState.darkroomSelectedSlot >= countInBatch) {
    AppState.darkroomSelectedSlot = 0;
  }

  // Actualizar pestañas de lotes (3 tiras de 4 fotos = 12 fotos)
  document.querySelectorAll('.batch-tab').forEach(tab => {
    const b = parseInt(tab.getAttribute('data-batch'), 10);
    const bState = AppState.darkroomBatches[b];
    if (!bState) {
      tab.style.display = 'none';
      return;
    }
    tab.style.display = '';
    tab.classList.toggle('active', b === batchIdx);
    const rangeStart = b * 4 + 1;
    const rangeEnd = Math.min(totalReel, (b + 1) * 4);
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

  // Renderizar la tira de 4 fotos en el orden del carrete de 12
  const stripGrid = document.getElementById('darkroom-strip-5');
  if (stripGrid) {
    stripGrid.innerHTML = '';
    for (let slot = 0; slot < countInBatch; slot++) {
      const pIdx = startIdx + slot;
      const photo = photos[pIdx];
      const shotData = evaluateFrameShotData(pIdx, photo);
      const diag = getDiagnosisForShot(shotData);
      const coverSvg = renderUniquePhotoSvg(photo.svg);

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
        innerSvgHtml = shotData.wasShotByUser ? coverSvg : '';
        holderInlineFilter = `style="filter: ${negStyle.filterCss} !important;"`;
      } else if (batchObj.stage === 2) {
        const posStyle = getPhotoChemicalFilterStyles(shotData, 'positive');
        stateClass = `stage-positive-revealed ${diag.cssClass}`;
        footerBadge = diag.shortLabel;
        innerSvgHtml = shotData.wasShotByUser ? coverSvg : '';
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

  // Actualizar la Cubeta Química con la foto seleccionada del lote de 4
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
    const coverSvg = renderUniquePhotoSvg(selectedPhoto.svg);
    const frameTitlePart = selectedShot.wasShotByUser ? ` (${selectedPhoto.title})` : '';

    if (batchObj.stage === 0) {
      latentImage.innerHTML = '';
      latentImage.className = 'latent-image-emerging stage-latent-hidden';
      latentImage.style.filter = '';
      if (trayDiagnosis) {
        trayDiagnosis.textContent = selectedShot.wasShotByUser
          ? `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')}${frameTitlePart} • ⬛ Emulsión opaca: Pulsa el botón inferior para pasar al Paso 1 (Negativo)`
          : `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')} • ⬛ FOTO NO TOMADA`;
      }
      if (timeElapsed) {
        timeElapsed.textContent = `Paso Actual: 1️⃣ Emulsión Oculta (Fotos ${startIdx + 1}–${endIdx} de ${totalReel})`;
      }
      if (trayTitle) {
        trayTitle.textContent = '👉 Siguiente paso: Pulsa el botón inferior para revelar las 4 fotos de la tira en NEGATIVO (Colores Invertidos)';
      }
      if (btnDevelop) {
        btnDevelop.disabled = false;
        btnDevelop.classList.add('btn-gentle-blink');
        btnDevelop.textContent = '🧪 PASO 1: Revelar a Negativo (Ver Colores Invertidos)';
      }
    } else if (batchObj.stage === 1) {
      const negStyle = getPhotoChemicalFilterStyles(selectedShot, 'negative');
      latentImage.innerHTML = selectedShot.wasShotByUser ? coverSvg : '';
      latentImage.className = `latent-image-emerging stage-negative-inverted`;
      latentImage.style.filter = negStyle.filterCss;
      if (trayDiagnosis) {
        trayDiagnosis.textContent = selectedShot.wasShotByUser
          ? `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')}${frameTitlePart} • 🎞️ ${negStyle.negDescription} • ƒ/${selectedShot.aperture} • 1/${selectedShot.speed}s`
          : `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')} • ⬛ FOTO NO TOMADA`;
      }
      if (timeElapsed) {
        timeElapsed.textContent = `Paso Actual: 2️⃣ ${selectedDiag.negShortLabel || 'Negativo Invertido'} (Fotos ${startIdx + 1}–${endIdx} de ${totalReel})`;
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
      latentImage.innerHTML = selectedShot.wasShotByUser ? coverSvg : '';
      latentImage.className = `latent-image-emerging stage-positive-revealed`;
      latentImage.style.filter = posStyle.filterCss;
      if (trayDiagnosis) {
        trayDiagnosis.textContent = selectedShot.wasShotByUser
          ? `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')}${frameTitlePart} • ${selectedDiag.detailLabel}`
          : `Foto #${String(selectedPhotoIdx + 1).padStart(2, '0')} • ⬛ FOTO NO TOMADA`;
      }
      if (timeElapsed) {
        timeElapsed.textContent = `Paso Actual: 3️⃣ ¡Tira ${batchIdx + 1} Revelada y Lista para el Álbum! (${selectedDiag.shortLabel})`;
      }
      if (trayTitle) {
        trayTitle.textContent = '✅ Tira revelada: Estas 4 copias ya están disponibles en el sobre del Álbum Físico (Fase 3)';
      }
      if (btnDevelop) {
        btnDevelop.disabled = false;
        btnDevelop.classList.add('btn-gentle-blink');
        const nextPendingIdx = AppState.darkroomBatches.findIndex((b, idx) => idx !== batchIdx && b.stage < 2);
        if (nextPendingIdx !== -1) {
          btnDevelop.textContent = `🎞️ PASAR A TIRA ${nextPendingIdx + 1}: Revelar Fotos ${nextPendingIdx * 4 + 1}–${Math.min(totalReel, (nextPendingIdx + 1) * 4)} ▶`;
        } else {
          btnDevelop.textContent = `📒 IR A LA FASE 3: Montar mis ${totalReel} Copias en el Álbum Físico ▶`;
        }
      }
    }
  }
}

/**
 * Inicializa o recupera el estado de montaje de un fotograma del carrete (0..11)
 */
function getOrInitAlbumPageMount(photoIdx) {
  if (!AppState.albumMountedPages[photoIdx]) {
    AppState.albumMountedPages[photoIdx] = {
      corners: { tl: false, tr: false, bl: false, br: false },
      mounted: false,
      customNote: ''
    };
  }
  return AppState.albumMountedPages[photoIdx];
}

/**
 * Asegura que el orden de los 12 huecos del álbum físico esté inicializado
 */
function getAlbumSlotOrder(totalPhotos = 12) {
  if (!Array.isArray(AppState.albumSlotOrder) || AppState.albumSlotOrder.length !== totalPhotos) {
    AppState.albumSlotOrder = Array.from({ length: totalPhotos }, (_, i) => i);
  }
  return AppState.albumSlotOrder;
}

/**
 * Construye una tarjeta de foto para uno de los 4 huecos del pliego abierto (2 en pág. izquierda, 2 en pág. derecha)
 */
function createAlbumSpreadSlotElement(slotPos, photoIdx, photo, isSelectedSlot) {
  const shotData = evaluateFrameShotData(photoIdx, photo);
  const devStage = getFrameDevelopmentStage(photoIdx);
  const mountState = getOrInitAlbumPageMount(photoIdx);
  const shotDiag = getDiagnosisForShot(shotData);
  const coverSvg = renderUniquePhotoSvg(photo.svg);

  // Si la foto ya está revelada en positivo y el usuario la había montado o si queremos mostrarla con sus esquineros
  const cornersCount = Object.values(mountState.corners).filter(Boolean).length;
  const isMounted = !!mountState.mounted;

  const slotCard = document.createElement('div');
  slotCard.className = `album-spread-slot ${isSelectedSlot ? 'selected-slot' : ''} ${isMounted ? 'is-mounted-slot' : 'is-unmounted-slot'}`;
  slotCard.setAttribute('data-slot-pos', String(slotPos));
  slotCard.setAttribute('data-photo-idx', String(photoIdx));

  const defaultCaption = shotData.wasShotByUser
    ? photo.analogCaption
    : 'Fotograma sin exponer en la cámara.';
  const handwrittenNote = (mountState.customNote && mountState.customNote.trim())
    ? `“${mountState.customNote.trim()}”`
    : defaultCaption;

  let innerVisualHtml = '';
  let filterInline = '';
  let statusPillText = '';

  if (devStage === 0) {
    statusPillText = '⬛ Sin revelar';
    innerVisualHtml = `
      <div class="slot-unrevealed-box">
        <span class="slot-unrev-icon">🎞️</span>
        <strong>Copia #${String(photoIdx + 1).padStart(2, '0')} en el carrete</strong>
        <small>${shotData.wasShotByUser ? `Disparada a ƒ/${shotData.aperture} • 1/${shotData.speed}s` : 'Sin disparar aún'}</small>
        <button type="button" class="btn-slot-action btn-slot-go-darkroom" data-go-batch="${Math.floor(photoIdx / 4)}" data-go-slot="${photoIdx % 4}">
          🧪 Revelar en Fase 2
        </button>
      </div>
    `;
  } else if (devStage === 1) {
    const negStyle = getPhotoChemicalFilterStyles(shotData, 'negative');
    filterInline = `style="filter: ${negStyle.filterCss};"`;
    statusPillText = '🎞️ En Negativo';
    innerVisualHtml = `
      <div class="slot-photo-surface" ${filterInline}>${shotData.wasShotByUser ? coverSvg : ''}</div>
      <div class="slot-action-overlay">
        <span>Negativo de plástico</span>
        <button type="button" class="btn-slot-action btn-slot-QuickMount" data-mount-photo="${photoIdx}">
          ✨ Positivar y Pegar Copia
        </button>
      </div>
    `;
  } else {
    const posStyle = getPhotoChemicalFilterStyles(shotData, 'positive');
    filterInline = `style="filter: ${posStyle.filterCss};"`;
    statusPillText = isMounted ? `📌 ${shotDiag.shortLabel}` : `✉️ En sobre (${cornersCount}/4 esq.)`;
    innerVisualHtml = `
      <div class="slot-photo-surface ${!isMounted ? 'loose-print-tilt' : ''}" ${filterInline}>
        ${shotData.wasShotByUser ? coverSvg : ''}
      </div>
      ${!isMounted ? `
        <div class="slot-action-overlay">
          <span>Copia suelta del laboratorio</span>
          <button type="button" class="btn-slot-action btn-slot-QuickMount" data-mount-photo="${photoIdx}">
            📌 Pegar con 4 Esquineros
          </button>
        </div>
      ` : ''}
    `;
  }

  slotCard.innerHTML = `
    <div class="slot-top-meta">
      <span class="slot-pos-label">Hueco ${slotPos + 1} • Foto #${String(photoIdx + 1).padStart(2, '0')}</span>
      <span class="slot-diag-pill">${statusPillText}</span>
    </div>

    <div class="slot-frame-paper">
      <button type="button" class="photo-corner corner-tl ${mountState.corners.tl ? 'corner-fixed' : 'corner-pending'}" data-corner="tl" data-photo-idx="${photoIdx}" title="Esquinero superior izquierdo"></button>
      <button type="button" class="photo-corner corner-tr ${mountState.corners.tr ? 'corner-fixed' : 'corner-pending'}" data-corner="tr" data-photo-idx="${photoIdx}" title="Esquinero superior derecho"></button>
      <button type="button" class="photo-corner corner-bl ${mountState.corners.bl ? 'corner-fixed' : 'corner-pending'}" data-corner="bl" data-photo-idx="${photoIdx}" title="Esquinero inferior izquierdo"></button>
      <button type="button" class="photo-corner corner-br ${mountState.corners.br ? 'corner-fixed' : 'corner-pending'}" data-corner="br" data-photo-idx="${photoIdx}" title="Esquinero inferior derecho"></button>
      ${innerVisualHtml}
    </div>

    <div class="slot-handwritten-caption" title="Haz clic para editar esta nota manuscrita abajo">
      <span class="slot-caption-pen">✒️</span>
      <p>${handwrittenNote}</p>
    </div>
  `;

  // Seleccionar este hueco al hacer clic en la tarjeta
  slotCard.addEventListener('click', (e) => {
    if (e.target.closest('.btn-slot-go-darkroom') || e.target.closest('.btn-slot-QuickMount') || e.target.closest('.photo-corner')) {
      return;
    }
    AppState.albumPageIndex = slotPos;
    AudioFX.playDialClick();
    renderAlbumPage();
  });

  // Eventos de los 4 esquineros individuales
  slotCard.querySelectorAll('.photo-corner').forEach(cornerBtn => {
    cornerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      AppState.albumPageIndex = slotPos;
      const pIdx = parseInt(cornerBtn.getAttribute('data-photo-idx'), 10);
      const bIdx = Math.floor(pIdx / 4);
      if (AppState.darkroomBatches[bIdx] && AppState.darkroomBatches[bIdx].stage < 2) {
        AppState.darkroomBatches[bIdx].stage = 2;
        AppState.darkroomBatches[bIdx].progress = 100;
      }
      const mState = getOrInitAlbumPageMount(pIdx);
      const cKey = cornerBtn.getAttribute('data-corner');
      mState.corners[cKey] = !mState.corners[cKey];
      mState.mounted = Object.values(mState.corners).every(Boolean);
      AudioFX.playDialClick();
      renderAlbumPage();
    });
  });

  // Botón directo de pegar copia con sus 4 esquineros
  const quickMountBtn = slotCard.querySelector('.btn-slot-QuickMount');
  if (quickMountBtn) {
    quickMountBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      AppState.albumPageIndex = slotPos;
      const pIdx = parseInt(quickMountBtn.getAttribute('data-mount-photo'), 10);
      const bIdx = Math.floor(pIdx / 4);
      if (AppState.darkroomBatches[bIdx] && AppState.darkroomBatches[bIdx].stage < 2) {
        AppState.darkroomBatches[bIdx].stage = 2;
        AppState.darkroomBatches[bIdx].progress = 100;
      }
      const mState = getOrInitAlbumPageMount(pIdx);
      mState.corners = { tl: true, tr: true, bl: true, br: true };
      mState.mounted = true;
      AudioFX.playPageFlip();
      renderAlbumPage();
    });
  }

  // Botón de ir al cuarto oscuro si no está revelada
  const goDarkBtn = slotCard.querySelector('.btn-slot-go-darkroom');
  if (goDarkBtn) {
    goDarkBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      AppState.darkroomCurrentBatch = parseInt(goDarkBtn.getAttribute('data-go-batch'), 10) || 0;
      AppState.darkroomSelectedSlot = parseInt(goDarkBtn.getAttribute('data-go-slot'), 10) || 0;
      if (typeof switchPhase === 'function') switchPhase(2);
    });
  }

  return slotCard;
}

/**
 * Renderiza el Álbum Familiar Clásico a Doble Página (Pliegos de 4 fotos, Sobre del Laboratorio + Tira de Negativos)
 */
function renderAlbumPage() {
  const photos = getPhotos();
  if (photos.length === 0) return;

  const slotOrder = getAlbumSlotOrder(photos.length);
  if (typeof AppState.albumPageIndex !== 'number' || AppState.albumPageIndex < 0 || AppState.albumPageIndex >= photos.length) {
    AppState.albumPageIndex = 0;
  }

  // El pliego activo (0, 1 o 2) viene determinado por el hueco seleccionado (0..3 -> pliego 0, 4..7 -> pliego 1, 8..11 -> pliego 2)
  const activeSlotPos = AppState.albumPageIndex;
  const spreadIdx = Math.floor(activeSlotPos / 4);
  AppState.albumSpreadIndex = spreadIdx;
  const activePhotoIdx = slotOrder[activeSlotPos];
  const activePhoto = photos[activePhotoIdx];

  // Estadísticas globales de continuidad (12 fotos)
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
  if (statMountEl) statMountEl.textContent = `📒 En Álbum: ${totalMounted}/${photos.length}`;

  // Actualizar pestañas de los 3 pliegos del libro abierto
  document.querySelectorAll('.spread-tab').forEach(tab => {
    const s = parseInt(tab.getAttribute('data-spread'), 10);
    tab.classList.toggle('active', s === spreadIdx);
  });

  // 1. Renderizar el Sobre del Laboratorio + Tira de Negativos en Plástico (12 fotogramas)
  const envelopeStrip = document.getElementById('album-envelope-strip');
  if (envelopeStrip) {
    envelopeStrip.innerHTML = '';
    photos.forEach((p, idx) => {
      const wasShot = !!AppState.shotsHistory[idx];
      const devStage = getFrameDevelopmentStage(idx);
      const mountState = getOrInitAlbumPageMount(idx);
      const shotEval = evaluateFrameShotData(idx, p);
      const diag = getDiagnosisForShot(shotEval);

      const slotBtn = document.createElement('button');
      slotBtn.type = 'button';
      const posInAlbum = slotOrder.indexOf(idx);
      slotBtn.className = `envelope-thumb-slot ${idx === activePhotoIdx ? 'active' : ''} ${mountState.mounted ? 'is-mounted' : ''}`;
      slotBtn.title = `Copia #${idx + 1} (${p.title}) • Haz clic para verla o colocarla en el hueco seleccionado`;

      let stateBadge = '⬛ Latente';
      let thumbVisualClass = 'env-latent';
      let thumbInner = '';
      let thumbStyleAttr = '';

      // Mini tira superior de negativo con colores invertidos (si ya pasó por el baño químico)
      const negFilter = getPhotoChemicalFilterStyles(shotEval, 'negative').filterCss;
      const negStripHtml = (devStage >= 1 && wasShot)
        ? `<div class="env-mini-negative-strip" style="filter: ${negFilter};">${renderUniquePhotoSvg(p.svg)}</div>`
        : `<div class="env-mini-negative-strip unexposed-neg"><span>35mm</span></div>`;

      if (devStage === 1) {
        const negStyle = getPhotoChemicalFilterStyles(shotEval, 'negative');
        stateBadge = diag.negShortLabel || '🎞️ Negativo';
        thumbVisualClass = 'env-negative';
        thumbStyleAttr = `style="filter: ${negStyle.filterCss};"`;
        thumbInner = wasShot ? renderUniquePhotoSvg(p.svg) : '';
      } else if (devStage === 2) {
        const posStyle = getPhotoChemicalFilterStyles(shotEval, 'positive');
        stateBadge = mountState.mounted ? `📌 Pág. ${Math.floor(posInAlbum / 2) + 1}` : `✨ Copia 10×15`;
        thumbVisualClass = 'env-positive';
        thumbStyleAttr = `style="filter: ${posStyle.filterCss};"`;
        thumbInner = wasShot ? renderUniquePhotoSvg(p.svg) : '';
      }

      slotBtn.innerHTML = `
        <div class="env-slot-top">
          <span>#${String(idx + 1).padStart(2, '0')}A</span>
          <span>${mountState.mounted ? '📌' : (wasShot ? '📸' : '🎞️')}</span>
        </div>
        ${negStripHtml}
        <div class="env-slot-preview ${thumbVisualClass}" ${thumbStyleAttr}>${thumbInner}</div>
        <span class="env-slot-status">${stateBadge}</span>
      `;

      slotBtn.addEventListener('click', () => {
        // Si el usuario hace clic en una foto del sobre:
        // Si ya está en el pliego o quiere ir a donde está colocada, o si hace clic para montarla
        const targetSlotPos = slotOrder.indexOf(idx);
        if (targetSlotPos !== -1) {
          AppState.albumPageIndex = targetSlotPos;
        }
        // Si estaba revelada y aún no pegada, la pega directamente con sus 4 esquineros para que sea comodísimo
        if (devStage === 2 && !mountState.mounted) {
          mountState.corners = { tl: true, tr: true, bl: true, br: true };
          mountState.mounted = true;
        }
        AudioFX.playPageFlip();
        renderAlbumPage();
      });

      envelopeStrip.appendChild(slotBtn);
    });
  }

  // 2. Renderizar el Libro Abierto a Doble Página (4 huecos por pliego: 2 en izquierda, 2 en derecha)
  const leftSlotsContainer = document.getElementById('album-left-slots');
  const rightSlotsContainer = document.getElementById('album-right-slots');
  const leftPageNum = document.getElementById('left-page-num');
  const rightPageNum = document.getElementById('right-page-num');
  const leftChapter = document.getElementById('left-page-chapter');
  const rightChapter = document.getElementById('right-page-chapter');

  const spreadChapters = [
    ['Pliego I • Inicio del Carrete', 'Viajes y Recuerdos en Papel'],
    ['Pliego II • Mitad del Carrete', 'Reuniones, Amigos y Naturaleza'],
    ['Pliego III • Final del Carrete', 'Últimas Exposiciones Reveladas']
  ];

  if (leftPageNum) leftPageNum.textContent = `Pág. 0${spreadIdx * 2 + 1}`;
  if (rightPageNum) rightPageNum.textContent = `Pág. 0${spreadIdx * 2 + 2}`;
  if (leftChapter && spreadChapters[spreadIdx]) leftChapter.textContent = spreadChapters[spreadIdx][0];
  if (rightChapter && spreadChapters[spreadIdx]) rightChapter.textContent = spreadChapters[spreadIdx][1];

  const startSlot = spreadIdx * 4;
  if (leftSlotsContainer) {
    leftSlotsContainer.innerHTML = '';
    for (let s = startSlot; s < Math.min(photos.length, startSlot + 2); s++) {
      const pIdx = slotOrder[s];
      const cardEl = createAlbumSpreadSlotElement(s, pIdx, photos[pIdx], s === activeSlotPos);
      leftSlotsContainer.appendChild(cardEl);
    }
  }

  if (rightSlotsContainer) {
    rightSlotsContainer.innerHTML = '';
    for (let s = startSlot + 2; s < Math.min(photos.length, startSlot + 4); s++) {
      const pIdx = slotOrder[s];
      const cardEl = createAlbumSpreadSlotElement(s, pIdx, photos[pIdx], s === activeSlotPos);
      rightSlotsContainer.appendChild(cardEl);
    }
  }

  // 3. Actualizar la Barra Inspectora Inferior del Hueco Seleccionado
  const selectedBadge = document.getElementById('album-selected-slot-badge');
  const badgeEl = document.getElementById('album-exposure-badge');
  const noteInput = document.getElementById('album-custom-note-input');

  if (activePhoto) {
    const activeShot = evaluateFrameShotData(activePhotoIdx, activePhoto);
    const activeDiag = getDiagnosisForShot(activeShot);
    const activeMount = getOrInitAlbumPageMount(activePhotoIdx);

    if (selectedBadge) {
      selectedBadge.textContent = `📌 Hueco ${activeSlotPos + 1} (Pág. 0${Math.floor(activeSlotPos / 2) + 1}) • Foto #${String(activePhotoIdx + 1).padStart(2, '0')}: ${activePhoto.title}`;
    }
    if (badgeEl) {
      badgeEl.className = `slot-exposure-summary photo-exposure-badge ${activeDiag.badgeClass || ''}`;
      badgeEl.textContent = activeDiag.detailLabel;
    }
    if (noteInput) {
      noteInput.value = activeMount.customNote || '';
      noteInput.placeholder = `✒️ Escribe pie de foto para "${activePhoto.title}" (ej. "${activePhoto.analogCaption.slice(0, 48)}...")`;
    }
  }
}

function initDarkroomAndAlbum() {
  const btnDevelop = document.getElementById('btn-start-develop');
  const step0 = document.getElementById('chem-step-0');
  const step1 = document.getElementById('chem-step-1');
  const step2 = document.getElementById('chem-step-2');

  // Selector de lotes de 4 en 4 fotos (3 tiras = 12 fotos)
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
      const nextPendingIdx = AppState.darkroomBatches.findIndex((b, idx) => idx !== bIdx && b.stage < 2);
      if (nextPendingIdx !== -1) {
        AppState.darkroomCurrentBatch = nextPendingIdx;
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
  // CONTROLES DEL ÁLBUM FAMILIAR A DOBLE PÁGINA (Pliegos, Orden, Notas y Montaje)
  // =========================================================================
  document.querySelectorAll('.spread-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const s = parseInt(tab.getAttribute('data-spread'), 10) || 0;
      AppState.albumSpreadIndex = s;
      AppState.albumPageIndex = s * 4;
      AudioFX.playPageFlip();
      renderAlbumPage();
    });
  });

  const btnQuickMountAll = document.getElementById('btn-quick-mount-all');
  if (btnQuickMountAll) {
    btnQuickMountAll.addEventListener('click', () => {
      const photos = getPhotos();
      // Si alguna foto aún no se había disparado en Fase 1, le damos una toma equilibrada para que el usuario pueda ver el álbum completo funcionando al instante
      photos.forEach((p, idx) => {
        if (!AppState.shotsHistory[idx]) {
          const opt = typeof window.findOptimalSettingsForPhoto === 'function'
            ? window.findOptimalSettingsForPhoto(p)
            : { aperture: 8.0, speed: 250, focus: 50 };
          AppState.shotsHistory[idx] = {
            photoId: p.id,
            aperture: opt.aperture,
            speed: opt.speed,
            deltaEV: 0,
            clampedMeterEV: 0,
            meterPercent: 0,
            isUnfocused: false,
            focusDiff: 0,
            status: 'ok',
            isShaky: false
          };
        }
      });
      AppState.darkroomBatches.forEach(b => {
        b.stage = 2;
        b.progress = 100;
      });
      photos.forEach((p, idx) => {
        const m = getOrInitAlbumPageMount(idx);
        m.corners = { tl: true, tr: true, bl: true, br: true };
        m.mounted = true;
      });
      AudioFX.playPageFlip();
      renderAlbumPage();
    });
  }

  const btnResetOrder = document.getElementById('btn-reset-album-order');
  if (btnResetOrder) {
    btnResetOrder.addEventListener('click', () => {
      const photos = getPhotos();
      AppState.albumSlotOrder = Array.from({ length: photos.length }, (_, i) => i);
      AppState.albumPageIndex = 0;
      AudioFX.playPageFlip();
      renderAlbumPage();
    });
  }

  const btnSwapPrev = document.getElementById('btn-swap-prev');
  const btnSwapNext = document.getElementById('btn-swap-next');

  if (btnSwapPrev) {
    btnSwapPrev.addEventListener('click', () => {
      const photos = getPhotos();
      const order = getAlbumSlotOrder(photos.length);
      const curSlot = AppState.albumPageIndex || 0;
      if (curSlot > 0) {
        const tmp = order[curSlot - 1];
        order[curSlot - 1] = order[curSlot];
        order[curSlot] = tmp;
        AppState.albumPageIndex = curSlot - 1;
        AudioFX.playPageFlip();
        renderAlbumPage();
      }
    });
  }

  if (btnSwapNext) {
    btnSwapNext.addEventListener('click', () => {
      const photos = getPhotos();
      const order = getAlbumSlotOrder(photos.length);
      const curSlot = AppState.albumPageIndex || 0;
      if (curSlot < order.length - 1) {
        const tmp = order[curSlot + 1];
        order[curSlot + 1] = order[curSlot];
        order[curSlot] = tmp;
        AppState.albumPageIndex = curSlot + 1;
        AudioFX.playPageFlip();
        renderAlbumPage();
      }
    });
  }

  const btnSaveNote = document.getElementById('btn-save-album-note');
  const noteInput = document.getElementById('album-custom-note-input');
  if (btnSaveNote && noteInput) {
    const saveNoteFn = () => {
      const photos = getPhotos();
      const order = getAlbumSlotOrder(photos.length);
      const activePhotoIdx = order[AppState.albumPageIndex || 0];
      const mountState = getOrInitAlbumPageMount(activePhotoIdx);
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

  // Navegación secuencial por pliegos del álbum físico (Pliego Anterior / Pliego Siguiente)
  const btnPrev = document.getElementById('btn-album-prev');
  const btnNext = document.getElementById('btn-album-next');

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      const curSpread = Math.floor((AppState.albumPageIndex || 0) / 4);
      if (curSpread > 0) {
        AppState.albumPageIndex = (curSpread - 1) * 4;
        AudioFX.playPageFlip();
        renderAlbumPage();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      const photos = getPhotos();
      const maxSpread = Math.ceil(photos.length / 4) - 1;
      const curSpread = Math.floor((AppState.albumPageIndex || 0) / 4);
      if (curSpread < maxSpread) {
        AppState.albumPageIndex = (curSpread + 1) * 4;
        AudioFX.playPageFlip();
        renderAlbumPage();
      }
    });
  }
}



