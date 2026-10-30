/**
 * ========================================================
 * js/main.js - Inicializador Principal del Interactivo
 * Coordina la navegación de fases, el carrete aleatorio de 10 fotos,
 * la carga de hasta 5 fotos reales del usuario y los modales teóricos
 * ========================================================
 */

function rotateNextScene() {
  const photos = getPhotos();
  if (photos.length === 0) return;
  AppState.currentSceneIndex = (AppState.currentSceneIndex + 1) % photos.length;
  renderSceneInViewfinders();
  if (typeof window.applyScenePresetCalibration === 'function') {
    window.applyScenePresetCalibration();
  } else {
    updateLightMeterDisplay();
    updateFocusSimulation();
  }
  updatePipelineViews();
  if (typeof window.updateGuidedStepsUI === 'function') {
    window.updateGuidedStepsUI();
  }
}

function renderSceneInViewfinders() {
  const scene = getCurrentPhoto();
  if (!scene) return;

  const analogContainer = document.getElementById('analog-current-scene');
  const digitalContainer = document.getElementById('digital-current-scene');
  const thumbMini = document.getElementById('thumb-mini-box');
  const prismTop = document.getElementById('prism-top-image');
  const prismBottom = document.getElementById('prism-bottom-image');

  if (analogContainer) analogContainer.innerHTML = renderUniquePhotoSvg(scene.svg);
  if (digitalContainer) digitalContainer.innerHTML = renderUniquePhotoSvg(scene.svg);
  if (prismTop) prismTop.innerHTML = renderUniquePhotoSvg(scene.svg);
  if (prismBottom) prismBottom.innerHTML = renderUniquePhotoSvg(scene.svg);
  if (thumbMini && !thumbMini.innerHTML.trim()) thumbMini.innerHTML = renderUniquePhotoSvg(scene.svg);

  updateDigitalHUD(scene);
}

function refreshEntireSimulationUI() {
  renderSceneInViewfinders();
  if (typeof window.applyScenePresetCalibration === 'function') {
    window.applyScenePresetCalibration();
  } else {
    updateLightMeterDisplay();
    updateFocusSimulation();
  }
  updateDarkroomTray();
  renderAlbumPage();
  renderGooglePhotosGrid();
  updatePipelineViews();
  if (typeof window.resetAnalogCrankUI === 'function') {
    window.resetAnalogCrankUI();
  }
  if (typeof window.updateGuidedStepsUI === 'function') {
    window.updateGuidedStepsUI();
  }

  const countSpan = document.getElementById('user-photos-count');
  const compBadge = document.getElementById('reel-composition-badge');
  const clearBtn = document.getElementById('btn-clear-uploads');
  const uCount = (AppState.userUploadedPhotos || []).length;
  const randCount = Math.max(0, 10 - uCount);

  if (countSpan) countSpan.textContent = String(uCount);
  if (compBadge) {
    compBadge.textContent = uCount > 0
      ? `🎞️ Carrete de 10: ${uCount} foto(s) tuya(s) + ${randCount} aleatoria(s)`
      : `🎲 Carrete activo: 10 fotos aleatorias (0/5 tuyas)`;
  }
  if (clearBtn) {
    clearBtn.style.display = uCount > 0 ? 'inline-flex' : 'none';
  }
}

/**
 * Inicializa la barra de herramientas para subir hasta 5 fotos reales del usuario
 * y sortear el carrete de 10 exposiciones.
 */
function initUserPhotosAndReelControls() {
  const fileInput = document.getElementById('input-user-photos');
  const btnShuffle = document.getElementById('btn-shuffle-reel');
  const btnClear = document.getElementById('btn-clear-uploads');
  const statusMsg = document.getElementById('analog-status-msg');

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;

      const currentUploaded = AppState.userUploadedPhotos || [];
      const availableSlots = 5 - currentUploaded.length;
      if (availableSlots <= 0) {
        if (statusMsg) {
          statusMsg.innerHTML = '<strong>⚠️ Límite de 5 fotos propias alcanzado:</strong> Ya has subido 5 imágenes reales a tu carrete de 10. Pulsa "Limpiar" si quieres subir otras distintas.';
        }
        fileInput.value = '';
        return;
      }

      const filesToProcess = files.slice(0, availableSlots);
      let loadedCount = 0;

      filesToProcess.forEach((file, idx) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const dataUrl = ev.target.result;
          const cleanName = file.name.replace(/\.[^/.]+$/, '').slice(0, 28) || `Tu Foto ${currentUploaded.length + idx + 1}`;
          const nowStr = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
          const sizeKB = Math.max(120, Math.round(file.size / 1024));
          const evOptions = [11, 12, 13, 14];
          const focusOptions = [35, 45, 60, 75];
          const slotNumber = currentUploaded.length + 1;

          const customPhotoObj = {
            id: `user-photo-${Date.now()}-${idx}`,
            isUserUpload: true,
            frameNumber: slotNumber,
            title: `${cleanName} (Tu Foto)`,
            year: String(new Date().getFullYear()),
            date: `${nowStr}, ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
            sceneEV: evOptions[slotNumber % evOptions.length],
            targetFocus: focusOptions[slotNumber % focusOptions.length],
            tags: ['Personal', 'Tu Foto', 'Familia', 'Recuerdo', String(new Date().getFullYear())],
            analogCaption: `Recuerdo real (“${cleanName}”) revelado y pegado en el álbum analógico.`,
            exif: {
              camera: 'Cámara del Usuario (Imagen Real Subida)',
              lens: '35mm / 50mm Equivalente',
              iso: 'ISO 400 • Simulación Analógica/Digital',
              gps: 'Ubicación personal del usuario',
              fileSize: `${(sizeKB / 1024).toFixed(2)} MB (${file.type || 'image/jpeg'})`,
              dimensions: 'Resolución Original de Usuario'
            },
            aiTags: [
              { label: 'Foto Real del Usuario', conf: '100%' },
              { label: cleanName, conf: '99.4%' },
              { label: 'Recuerdo Personal', conf: '98.7%' },
              { label: 'Simulación Híbrida', conf: '97.9%' }
            ],
            svg: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#14110f"/><image href="${dataUrl}" x="0" y="0" width="300" height="200" preserveAspectRatio="xMidYMid slice"/></svg>`
          };

          AppState.userUploadedPhotos.push(customPhotoObj);
          loadedCount++;

          if (loadedCount === filesToProcess.length) {
            // Reconstruir el carrete de 10 manteniendo las fotos aleatorias y situando al usuario en su foto recién subida
            buildActiveReel(false);
            AppState.currentSceneIndex = AppState.userUploadedPhotos.length - filesToProcess.length;
            AppState.albumPageIndex = AppState.currentSceneIndex;
            AudioFX.playDatabasePing();
            refreshEntireSimulationUI();

            if (statusMsg) {
              statusMsg.innerHTML = `<strong>📤 ¡${AppState.userUploadedPhotos.length}/5 fotos reales cargadas en el carrete de 10!</strong> Ahora mismo estás viendo tu foto <em>"${customPhotoObj.title}"</em> en el visor. Enfocala, ajusta diafragma/velocidad, dispárala, revélala en Fase 2 y móntala en el Álbum de Fase 3.`;
            }
          }
        };
        reader.readAsDataURL(file);
      });

      fileInput.value = '';
    });
  }

  if (btnShuffle) {
    btnShuffle.addEventListener('click', () => {
      resetAndRandomizeReel(false);
      AudioFX.playWinder();
      refreshEntireSimulationUI();
      if (statusMsg) {
        const uCount = (AppState.userUploadedPhotos || []).length;
        statusMsg.innerHTML = `<strong>🎲 ¡Nuevo carrete de 10 sorteado!</strong> Se han seleccionado ${10 - uCount} fotos aleatorias nuevas${uCount > 0 ? ` junto con tus ${uCount} foto(s) subida(s)` : ''}. Contador reiniciado a 10 exposiciones.`;
      }
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      resetAndRandomizeReel(true);
      AudioFX.playDialClick();
      refreshEntireSimulationUI();
      if (statusMsg) {
        statusMsg.innerHTML = '<strong>🗑️ Fotos subidas eliminadas:</strong> El carrete vuelve a tener 10 fotografías aleatorias de la colección.';
      }
    });
  }
}

function switchPhase(phaseNumber) {
  AppState.currentPhase = phaseNumber;

  document.querySelectorAll('.phase-btn').forEach(btn => {
    const p = parseInt(btn.getAttribute('data-phase'), 10);
    btn.classList.toggle('active', p === phaseNumber);
  });

  document.querySelectorAll('.stage-phase').forEach(stage => {
    stage.classList.remove('active');
  });

  const analogStage = document.getElementById(`analog-phase-${phaseNumber}`);
  const digitalStage = document.getElementById(`digital-phase-${phaseNumber}`);

  if (analogStage) analogStage.classList.add('active');
  if (digitalStage) digitalStage.classList.add('active');

  if (phaseNumber === 2) updateDarkroomTray();
  if (phaseNumber === 3) {
    renderAlbumPage();
  }
  if (typeof window.updateGuidedStepsUI === 'function') {
    window.updateGuidedStepsUI(false);
  }

  AudioFX.playDatabasePing();
}

function initPhaseNavigation() {
  document.querySelectorAll('.phase-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPhase = parseInt(btn.getAttribute('data-phase'), 10);
      switchPhase(targetPhase);
    });
  });
}

function initSoundToggle() {
  const soundBtn = document.getElementById('btn-sound-toggle');
  const soundLabel = document.getElementById('sound-label');
  const wavePath = document.getElementById('audio-waves');

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      AppState.soundEnabled = !AppState.soundEnabled;
      if (soundLabel) soundLabel.textContent = AppState.soundEnabled ? 'Sonido: ON' : 'Sonido: OFF';
      if (wavePath) wavePath.style.display = AppState.soundEnabled ? 'block' : 'none';
      if (AppState.soundEnabled) {
        AudioFX.init();
        AudioFX.playDatabasePing();
      }
    });
  }
}

function initMasterTheoryDossier() {
  const btnOpen = document.getElementById('btn-theory-master');
  const modal = document.getElementById('modal-theory-master');
  if (!modal || !btnOpen) return;

  const btnClose = modal.querySelector('.btn-close-modal');
  const btnAck = document.getElementById('btn-ack-master');

  const openDossier = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    AudioFX.playDatabasePing();
  };

  const closeDossier = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  btnOpen.addEventListener('click', openDossier);
  if (btnClose) btnClose.addEventListener('click', closeDossier);
  if (btnAck) btnAck.addEventListener('click', closeDossier);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeDossier();
  });
}

function initTheoryGlassesModals() {
  const modalAnalog = document.getElementById('modal-theory-analog');
  const modalDigital = document.getElementById('modal-theory-digital');

  const openTheoryModal = (isAnalog) => {
    const phaseKey = `phase${AppState.currentPhase}`;
    const data = isAnalog ? TheoryContent[phaseKey].analog : TheoryContent[phaseKey].digital;
    const targetModal = isAnalog ? modalAnalog : modalDigital;

    const titleEl = document.getElementById(isAnalog ? 'analog-modal-title' : 'digital-modal-title');
    const bodyEl = document.getElementById(isAnalog ? 'analog-modal-body' : 'digital-modal-body');

    if (titleEl) titleEl.textContent = data.title;
    if (bodyEl) bodyEl.innerHTML = data.body;

    if (targetModal) {
      targetModal.classList.add('open');
      targetModal.setAttribute('aria-hidden', 'false');
    }
    AudioFX.playDatabasePing();
  };

  const analogGlasses = document.querySelector('.analog-glasses');
  const googleGlasses = document.querySelector('.google-glasses');

  if (analogGlasses) analogGlasses.addEventListener('click', () => openTheoryModal(true));
  if (googleGlasses) googleGlasses.addEventListener('click', () => openTheoryModal(false));

  [modalAnalog, modalDigital].forEach(modal => {
    if (!modal) return;
    const closeBtn = modal.querySelector('.btn-close-modal');
    const ackBtn = modal.querySelector('.btn-ack-theory');

    if (closeBtn) closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
    if (ackBtn) ackBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });
}

function clearAllHintGlows() {
  document.querySelectorAll('.subtle-next-step-glow').forEach(el => {
    el.classList.remove('subtle-next-step-glow');
  });
}

function updateGuidedStepsUI(applySubtleGlow = false) {
  const g1 = document.getElementById('g-step-1');
  const g2 = document.getElementById('g-step-2');
  const g3 = document.getElementById('g-step-3');
  const g4 = document.getElementById('g-step-4');
  const liveHint = document.getElementById('guide-live-hint');

  [g1, g2, g3, g4].forEach(el => {
    if (el) el.classList.remove('active', 'done');
  });

  if (applySubtleGlow) {
    clearAllHintGlows();
  }

  const currentPhoto = getCurrentPhoto();
  const targetFocus = getTargetFocusForPhoto(currentPhoto);
  const isFocusOk = Math.abs(AppState.userFocus - targetFocus) <= 10;
  const isExposureOk = Math.abs(AppState.currentDeltaEV || 0) <= 0.6 && AppState.shutterSpeed > 30;
  const shotsTakenCount = Object.keys(AppState.shotsHistory || {}).length;

  if (AppState.currentPhase === 1) {
    if (AppState.analogPhotosLeft <= 0 && AppState.analogShutterArmed) {
      if (g1) g1.classList.add('done');
      if (g2) g2.classList.add('done');
      if (g3) g3.classList.add('done');
      if (g4) g4.classList.add('active');
      if (liveHint) {
        liveHint.innerHTML = '🎉 <strong>¡Carrete de 10 completado!</strong> Haz clic arriba en <strong>02 El Revelado</strong> para revelar tus fotos en el cuarto oscuro.';
      }
      if (applySubtleGlow) {
        const nav2 = document.getElementById('nav-phase-2');
        if (nav2) nav2.classList.add('subtle-next-step-glow');
      }
    } else if (!AppState.analogShutterArmed) {
      if (g1) g1.classList.add('done');
      if (g2) g2.classList.add('done');
      if (g3) g3.classList.add('active');
      if (liveHint) {
        liveHint.innerHTML = '🔄 <strong>Siguiente paso (Paso 3):</strong> Arrastra en círculos la <strong>manivela izquierda</strong> dando 3 vueltas para bobinar el carrete al siguiente fotograma.';
      }
      if (applySubtleGlow) {
        const crank = document.getElementById('rewind-crank-wheel');
        if (crank) crank.classList.add('subtle-next-step-glow');
      }
    } else if (!isFocusOk || !isExposureOk) {
      if (g1) g1.classList.add('active');
      const presetNote = currentPhoto && currentPhoto.isPresetOptimal
        ? ' <em>(Esta foto venía pre-ajustada)</em>'
        : '';
      if (liveHint) {
        const missingParts = [];
        if (!isFocusOk) missingParts.push('enfocar el visor (o pulsar <strong>🎯 Enfoque Automático</strong>)');
        if (!isExposureOk) missingParts.push('equilibrar la luz a 0.0 EV con las ruedas (o pulsar <strong>⚖️ Balance Auto</strong>)');
        liveHint.innerHTML = `💡 <strong>Paso 1 (Calibrar foto #${AppState.currentSceneIndex + 1}):</strong> Falta ${missingParts.join(' y ')}.${presetNote} También puedes disparar ya si quieres ver cómo sale defectuosa.`;
      }
      if (applySubtleGlow) {
        if (!isFocusOk) {
          const btnAF = document.getElementById('btn-auto-focus');
          const vfZone = document.getElementById('viewfinder-hover-zone');
          if (btnAF) btnAF.classList.add('subtle-next-step-glow');
          if (vfZone) vfZone.classList.add('subtle-next-step-glow');
        }
        if (!isExposureOk) {
          const btnAE = document.getElementById('btn-auto-exposure');
          const wSp = document.getElementById('wheel-shutter-speed');
          const wAp = document.getElementById('wheel-aperture');
          if (btnAE) btnAE.classList.add('subtle-next-step-glow');
          if (wSp) wSp.classList.add('subtle-next-step-glow');
          if (wAp) wAp.classList.add('subtle-next-step-glow');
        }
        const btnAll = document.getElementById('btn-auto-all');
        if (btnAll) btnAll.classList.add('subtle-next-step-glow');
      }
    } else {
      // Está enfocada y bien expuesta, y el obturador está armado -> Listo para disparar
      if (g1) g1.classList.add('done');
      if (g2) g2.classList.add('active');
      const presetTag = currentPhoto && currentPhoto.isPresetOptimal
        ? '✨ <strong>¡Esta foto (#0' + (AppState.currentSceneIndex + 1) + ') ya viene perfecta de fábrica!</strong> '
        : '✅ <strong>¡Enfoque y luz clavados a 0.0 EV!</strong> ';
      if (liveHint) {
        liveHint.innerHTML = `${presetTag}<strong>Siguiente paso (Paso 2):</strong> Pulsa el <strong>botón disparador cromado</strong> arriba a la derecha para tomar la foto.${shotsTakenCount > 0 ? ' <em>(O pasa a Fase 2 cuando quieras revelar).</em>' : ''}`;
      }
      if (applySubtleGlow) {
        const shutterBtn = document.getElementById('btn-analog-shoot');
        if (shutterBtn) shutterBtn.classList.add('subtle-next-step-glow');
      }
    }
  } else if (AppState.currentPhase === 2) {
    if (applySubtleGlow) {
      const btnDev = document.getElementById('btn-start-develop');
      const b0 = AppState.darkroomBatches[0];
      const b1 = AppState.darkroomBatches[1];
      if (b0 && b0.stage === 2 && b1 && b1.stage === 2) {
        const nav3 = document.getElementById('nav-phase-3');
        if (nav3) nav3.classList.add('subtle-next-step-glow');
      }
      if (btnDev) btnDev.classList.add('subtle-next-step-glow');
    }
  } else if (AppState.currentPhase === 3) {
    if (applySubtleGlow) {
      const pageIdx = AppState.albumPageIndex;
      const mountState = AppState.albumMountedPages[pageIdx];
      if (!mountState || !mountState.mounted) {
        const btnMount = document.getElementById('btn-mount-current-photo');
        const btnQuickAll = document.getElementById('btn-quick-mount-all');
        if (btnMount) btnMount.classList.add('subtle-next-step-glow');
        if (btnQuickAll) btnQuickAll.classList.add('subtle-next-step-glow');
      } else {
        const btnNext = document.getElementById('btn-album-next');
        if (btnNext) btnNext.classList.add('subtle-next-step-glow');
      }
    }
  }
}
window.updateGuidedStepsUI = updateGuidedStepsUI;

function initIdleNextStepHelper() {
  let idleTimer = null;
  const IDLE_WAIT_MS = 4500; // Si el usuario se queda parado 4.5s, el siguiente paso empieza a brillar poco a poco

  const resetIdleTimer = () => {
    clearAllHintGlows();
    updateGuidedStepsUI(false);
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      updateGuidedStepsUI(true);
    }, IDLE_WAIT_MS);
  };

  ['pointerdown', 'keydown', 'wheel', 'click'].forEach(evtName => {
    window.addEventListener(evtName, resetIdleTimer, { passive: true });
  });

  resetIdleTimer();
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  buildActiveReel(true);
  initPhaseNavigation();
  initSoundToggle();
  initMasterTheoryDossier();
  initTheoryGlassesModals();
  initUserPhotosAndReelControls();
  initAnalogCamera();
  initDigitalCamera();
  initDarkroomAndAlbum();

  // Render inicial de escenas
  refreshEntireSimulationUI();
  initIdleNextStepHelper();
});

