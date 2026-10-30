/**
 * ========================================================
 * js/analog.js - Lógica de la Cámara Analógica de 35mm
 * Diales, Exposímetro TTL, Minijuego de Enfoque con Prisma y Disparo
 * ========================================================
 */

// Escalas fotográficas estándar de pasos completos (1 clic = exactamente ±1.0 EV)
const FULL_STOP_SPEEDS = [1000, 500, 250, 125, 60, 30, 15, 8, 4];
const FULL_STOP_APERTURES = [1.4, 2.0, 2.8, 4.0, 5.6, 8.0, 11.0, 16.0];
window.FULL_STOP_SPEEDS = FULL_STOP_SPEEDS;
window.FULL_STOP_APERTURES = FULL_STOP_APERTURES;

/**
 * Calcula el EV exacto por pasos enteros de rueda (Ley de Reciprocidad exacta):
 * - Subir 1 paso de Diafragma (ej. f/5.6 -> f/8) = +1 EV de cierre (-1.0 EV de luz en el exposímetro)
 * - Bajar 1 paso de Velocidad (ej. 1/500 -> 1/250) = -1 EV de obturación (+1.0 EV de luz en el exposímetro)
 * Por tanto, +1 paso de F y -1 paso de V suman 0.0 EV exactos y dejan la aguja en el mismo punto.
 */
function getDiscreteCameraEV(aperture, speed, iso = 400) {
  const apIdx = FULL_STOP_APERTURES.indexOf(Number(aperture));
  const spIdx = FULL_STOP_SPEEDS.indexOf(Number(speed));
  // f/1.4 -> +1 EV, f/2 -> +2 EV, ..., f/8 -> +6 EV, f/16 -> +8 EV
  const evAperture = apIdx >= 0 ? (apIdx + 1) : Math.round(Math.log2(aperture * aperture));
  // 1/1000s -> +10 EV, 1/500s -> +9 EV, 1/250s -> +8 EV, ..., 1/4s -> +2 EV
  const evSpeed = spIdx >= 0 ? (10 - spIdx) : Math.round(Math.log2(speed));
  const evIso = Math.round(Math.log2(iso / 100)); // ISO 400 -> 2 EV
  return (evAperture + evSpeed) - evIso;
}
window.getDiscreteCameraEV = getDiscreteCameraEV;

function calculateExposureDelta(sceneEV, aperture, speed, iso = 400) {
  const evCamera = getDiscreteCameraEV(aperture, speed, iso);
  const deltaEV = Math.round((evCamera - sceneEV) * 10) / 10; // Espera: si cierro diafragma (subo apIdx) entra MENOS luz -> deltaEV baja (-1 EV). Es decir: deltaEV = sceneEV - evCamera
  const realDeltaEV = Math.round((sceneEV - evCamera) * 10) / 10;
  const clampedMeterEV = Math.max(-3.0, Math.min(3.0, realDeltaEV));
  // Porcentaje de desviación sobre el rango del exposímetro (-3 a +3 EV -> 0% a 100%)
  const meterPercent = Math.min(100, Math.round((Math.abs(clampedMeterEV) / 3.0) * 100));
  return {
    evCamera: evCamera,
    deltaEV: realDeltaEV,
    clampedMeterEV: clampedMeterEV,
    meterPercent: meterPercent,
    isShaky: speed <= 30
  };
}

/**
 * Calcula los filtros ópticos y fotoquímicos exactos en porcentaje acorde al exposímetro (-3 a +3 EV)
 * teniendo en cuenta la inversión física del NEGATIVO (donde más luz oscurece la plata y menos luz deja el celuloide transparente)
 * y el POSITIVO final (donde +3 EV queda blanco quemado al 100% y -3 EV queda negro subexpuesto al 100%).
 */
function getPhotoChemicalFilterStyles(shotData, stage = 'positive') {
  const deltaEV = shotData ? (shotData.deltaEV || 0) : 0;
  const clamped = Math.max(-3.0, Math.min(3.0, deltaEV));
  const absRatio = Math.min(1, Math.abs(clamped) / 3.0); // 0.0 en 0 EV, ~0.67 en ±2 EV, 1.0 en ±3 EV
  const pct = Math.round(absRatio * 100);

  let blurPx = 0;
  if (shotData && shotData.isUnfocused) {
    blurPx = Math.max(2.5, Math.min(6, (shotData.focusDiff || 20) * 0.12));
  } else if (shotData && shotData.isShaky) {
    blurPx = 2.8;
  }
  const blurPart = blurPx > 0 ? ` blur(${blurPx.toFixed(1)}px)` : '';
  const focusNote = (shotData && shotData.isUnfocused) ? ' • 🔴 DESENFOCADA' : '';
  const shakyNote = (shotData && shotData.isShaky) ? ' • 👋 TREPIDADA' : '';
  const extraDefectNote = `${focusNote}${shakyNote}`;

  if (stage === 'negative') {
    if (shotData && !shotData.wasShotByUser) {
      return {
        filterCss: `brightness(0) contrast(1) saturate(0)`,
        percent: 100,
        negDescription: `⬛ FOTO NO TOMADA`
      };
    } else if (clamped <= -2.85) {
      return {
        filterCss: `brightness(0) contrast(1) saturate(0)`,
        percent: 100,
        negDescription: `⬛ Subexpuesta al 100% (-3.0 EV al mínimo del exposímetro)${extraDefectNote}`
      };
    } else if (clamped >= 2.85) {
      // Tope +3 EV en negativo: emulsión totalmente ennegrecida por exceso de plata
      return {
        filterCss: `invert(1) hue-rotate(180deg) brightness(0.06) contrast(2.4)${blurPart}`,
        percent: 100,
        negDescription: `Negativo Denso 100% (Ennegrecido por +3.0 EV al máximo del exposímetro)${extraDefectNote}`
      };
    } else if (clamped > 0.4) {
      // Sobreexpuesto en negativo (+1 a +2.8 EV): se oscurece proporcionalmente (ej. en +2 EV está ~67% denso/oscuro)
      const negBright = Math.max(0.12, 1 - absRatio * 0.85).toFixed(2);
      const negContrast = (1.15 + absRatio * 0.8).toFixed(2);
      return {
        filterCss: `invert(1) hue-rotate(180deg) saturate(1.25) brightness(${negBright}) contrast(${negContrast})${blurPart}`,
        percent: pct,
        negDescription: `Negativo Denso/Oscuro (${pct}% sobreexpuesto • +${clamped.toFixed(1)} EV)${extraDefectNote}`
      };
    } else if (clamped < -0.4) {
      // Subexpuesto en negativo (-1 a -2.8 EV): se vuelve lavado/claro proporcionalmente (ej. en -2 EV está ~67% lavado)
      const negBright = (1 + absRatio * 1.45).toFixed(2);
      const negContrast = Math.max(0.35, 1.1 - absRatio * 0.7).toFixed(2);
      return {
        filterCss: `invert(1) hue-rotate(180deg) saturate(0.8) brightness(${negBright}) contrast(${negContrast})${blurPart}`,
        percent: pct,
        negDescription: `Negativo Lavado/Claro (${pct}% subexpuesto • ${clamped.toFixed(1)} EV)${extraDefectNote}`
      };
    }
    return {
      filterCss: `invert(1) hue-rotate(180deg) saturate(1.35) contrast(1.15)${blurPart}`,
      percent: pct,
      negDescription: `Negativo Equilibrado (${clamped >= 0 ? '+' : ''}${clamped.toFixed(1)} EV • Densidad de plata óptima)${extraDefectNote}`
    };
  }

  if (shotData && !shotData.wasShotByUser) {
    return {
      filterCss: `brightness(0) contrast(1) saturate(0)`,
      percent: 100,
      posDescription: `⬛ FOTO NO TOMADA`
    };
  } else if (clamped <= -2.85) {
    return {
      filterCss: `brightness(0) contrast(1) saturate(0)`,
      percent: 100,
      posDescription: `⬛ NEGRA / SUBEXPUESTA AL 100% (${clamped.toFixed(1)} EV al mínimo del exposímetro)${extraDefectNote}`
    };
  } else if (clamped >= 2.85) {
    return {
      filterCss: `brightness(5.5) contrast(0.12) saturate(0.05)${blurPart}`,
      percent: 100,
      posDescription: `⬜ BLANCA / QUEMADA AL 100% (+${clamped.toFixed(1)} EV al tope del exposímetro)${extraDefectNote}`
    };
  } else if (clamped > 0.5) {
    // Escala continua entre +0.5 EV y +2.85 EV (ej. +2.0 EV = 67% sobreexpuesta)
    const posBright = (1 + Math.pow(absRatio, 1.35) * 2.8).toFixed(2);
    const posContrast = Math.max(0.32, 1 - absRatio * 0.62).toFixed(2);
    const posSepia = Math.max(0.05, 0.22 - absRatio * 0.16).toFixed(2);
    return {
      filterCss: `brightness(${posBright}) contrast(${posContrast}) sepia(${posSepia})${blurPart}`,
      percent: pct,
      posDescription: `☀️ Sobreexpuesta al ${pct}% (+${clamped.toFixed(1)} EV de +3.0 EV)${extraDefectNote}`
    };
  } else if (clamped < -0.5) {
    // Escala continua entre -0.5 EV y -2.85 EV (ej. -2.0 EV = 67% subexpuesta)
    const posBright = Math.max(0.10, 1 - Math.pow(absRatio, 1.15) * 0.88).toFixed(2);
    const posContrast = (1 + absRatio * 0.95).toFixed(2);
    const posSepia = (0.22 + absRatio * 0.35).toFixed(2);
    return {
      filterCss: `brightness(${posBright}) contrast(${posContrast}) sepia(${posSepia})${blurPart}`,
      percent: pct,
      posDescription: `🌑 Subexpuesta al ${pct}% (${clamped.toFixed(1)} EV de -3.0 EV)${extraDefectNote}`
    };
  }

  return {
    filterCss: `sepia(0.18) contrast(1.04)${blurPart}`,
    percent: pct,
    posDescription: `✓ Exposición Óptima (${clamped >= 0 ? '+' : ''}${clamped.toFixed(1)} EV • Desviación ${pct}%)${extraDefectNote}`
  };
}
window.getPhotoChemicalFilterStyles = getPhotoChemicalFilterStyles;

function updateLightMeterDisplay() {
  const currentPhoto = getCurrentPhoto();
  if (!currentPhoto) return;

  const sceneEV = currentPhoto.sceneEV || 12;
  const { deltaEV, clampedMeterEV, meterPercent, isShaky } = calculateExposureDelta(sceneEV, AppState.aperture, AppState.shutterSpeed, AppState.iso);
  AppState.currentDeltaEV = deltaEV;

  const needleEl = document.getElementById('meter-needle');
  const ledOver = document.getElementById('led-over');
  const ledOk = document.getElementById('led-ok');
  const ledUnder = document.getElementById('led-under');
  const diagnosisPill = document.getElementById('meter-diagnosis-pill');
  const lensSpec = document.getElementById('lens-display-spec');

  if (lensSpec) {
    lensSpec.textContent = `50mm ƒ/${AppState.aperture.toFixed(1)} • 1/${AppState.shutterSpeed}s`;
  }

  // Escala del exposímetro de -3.0 EV a +3.0 EV
  const needleTopPercent = 50 - (clampedMeterEV / 3.0) * 42;

  if (needleEl) needleEl.style.top = `${needleTopPercent}%`;

  if (ledOver && ledOk && ledUnder) {
    ledOver.classList.remove('active');
    ledOk.classList.remove('active');
    ledUnder.classList.remove('active');

    if (deltaEV > 0.5) ledOver.classList.add('active');
    else if (deltaEV < -0.5) ledUnder.classList.add('active');
    else ledOk.classList.add('active');
  }

  if (diagnosisPill) {
    let statusText = '';
    let colorClass = '#81c995';

    if (deltaEV >= 2.85) {
      statusText = `TOPE +3.0 EV (100% Sobreexpuesta • Foto Blanca / Negativo Negro)`;
      colorClass = '#ff1744';
    } else if (deltaEV >= 1.5) {
      statusText = `Sobreexpuesta +${clampedMeterEV.toFixed(1)} EV (${meterPercent}% quemada)`;
      colorClass = '#ff5252';
    } else if (deltaEV > 0.5) {
      statusText = `Lig. Sobreexpuesta +${clampedMeterEV.toFixed(1)} EV (${meterPercent}%)`;
      colorClass = '#ffb74d';
    } else if (deltaEV <= -2.85) {
      statusText = `TOPE -3.0 EV (100% Subexpuesta • Foto Negra / Negativo Transparente)`;
      colorClass = '#2979ff';
    } else if (deltaEV <= -1.5) {
      statusText = `Subexpuesta ${clampedMeterEV.toFixed(1)} EV (${meterPercent}% oscura)`;
      colorClass = '#448aff';
    } else if (deltaEV < -0.5) {
      statusText = `Lig. Subexpuesta ${clampedMeterEV.toFixed(1)} EV (${meterPercent}%)`;
      colorClass = '#90caf9';
    } else {
      statusText = `Exposición Óptima (${clampedMeterEV >= 0 ? '+' : ''}${clampedMeterEV.toFixed(1)} EV)`;
      colorClass = '#81c995';
    }

    if (isShaky) statusText += ` ⚠️ Trepidación a 1/${AppState.shutterSpeed}s`;

    diagnosisPill.innerHTML = `Exposímetro (-3 a +3): <strong style="color: ${colorClass};">${statusText}</strong>`;
  }
}

/**
 * Minijuego de Enfoque con Prisma de Imagen Partida (Split-Image)
 */
function updateFocusSimulation() {
  const currentPhoto = getCurrentPhoto();
  if (!currentPhoto) return;

  const targetFocus = getTargetFocusForPhoto(currentPhoto);
  const diff = AppState.userFocus - targetFocus;
  const absDiff = Math.abs(diff);

  const topOffset = -diff * 0.75;
  const bottomOffset = diff * 0.75;

  const topImage = document.getElementById('prism-top-image');
  const bottomImage = document.getElementById('prism-bottom-image');
  const prismTag = document.getElementById('prism-status-tag');
  const focusPill = document.getElementById('focus-diagnosis-pill');
  const sceneProjection = document.getElementById('analog-current-scene');

  if (topImage) topImage.style.transform = `translateX(${topOffset}px)`;
  if (bottomImage) bottomImage.style.transform = `translateX(${bottomOffset}px)`;

  const blurAmount = (absDiff * 0.08).toFixed(1);
  if (sceneProjection) sceneProjection.style.filter = `blur(${blurAmount}px)`;

  const isSharp = absDiff <= 6;
  if (prismTag) {
    if (isSharp) {
      prismTag.className = 'prism-status-tag aligned';
      prismTag.textContent = '🟢 Prisma Alineado (Enfoque Nítido)';
    } else {
      prismTag.className = 'prism-status-tag';
      prismTag.textContent = diff > 0 ? '🔴 Imagen Partida (Enfocado lejos)' : '🔴 Imagen Partida (Enfocado cerca)';
    }
  }

  if (focusPill) {
    focusPill.innerHTML = isSharp 
      ? `Enfoque: <strong style="color: #69f0ae;">🟢 Nítido (Prisma alineado)</strong>`
      : `Enfoque: <strong style="color: #ff5252;">🔴 Desenfocado (${absDiff}% error)</strong>`;
  }
}

/**
 * Alterna entre ver la cámara por fuera o asomar el ojo al visor óptico
 */
function toggleCameraView(showViewfinder) {
  AppState.isPeekingViewfinder = showViewfinder;
  const exteriorView = document.getElementById('camera-exterior-view');
  const interiorView = document.getElementById('viewfinder-interior-view');
  const toggleBtn = document.getElementById('btn-toggle-camera-view');

  if (showViewfinder) {
    if (exteriorView) {
      exteriorView.style.display = 'none';
      exteriorView.classList.add('hidden');
    }
    if (interiorView) interiorView.style.display = 'flex';
    if (toggleBtn) toggleBtn.innerHTML = '<span>📷 Ver Cámara Exterior</span>';
    updateFocusSimulation();
    updateLightMeterDisplay();
  } else {
    if (exteriorView) {
      exteriorView.style.display = 'flex';
      exteriorView.classList.remove('hidden');
    }
    if (interiorView) interiorView.style.display = 'none';
    if (toggleBtn) toggleBtn.innerHTML = '<span>👁️ Mirar por Visor</span>';
  }
  AudioFX.playDialClick();
}

function initAnalogCamera() {
  const btnAnalogShoot = document.getElementById('btn-analog-shoot');
  const analogCounter = document.getElementById('analog-counter');
  const analogTopCounter = document.getElementById('analog-top-counter');
  const shutterCurtain = document.getElementById('analog-shutter-curtain');
  const statusMsg = document.getElementById('analog-status-msg');
  const carreteStat = document.getElementById('carrete-stat');

  function updateAllReelCountersUI() {
    if (analogCounter) analogCounter.textContent = AppState.analogPhotosLeft;
    if (analogTopCounter) analogTopCounter.textContent = AppState.analogPhotosLeft;
    if (carreteStat) {
      const currentFrameNum = Math.min(AppState.analogTotalPhotos, AppState.analogTotalPhotos + 1 - AppState.analogPhotosLeft);
      carreteStat.textContent = `Foto ${String(currentFrameNum).padStart(2, '0')} de ${AppState.analogTotalPhotos}`;
    }
  }
  window.updateAllReelCountersUI = updateAllReelCountersUI;
  updateAllReelCountersUI();

  const apertureSelect = document.getElementById('analog-aperture-select');
  const speedSelect = document.getElementById('analog-speed-select');

  // =========================================================================
  // 1. RUEDAS CIRCULARES MOVIBLES: VELOCIDAD Y DIAFRAGMA
  // =========================================================================
  const SPEED_VALUES = FULL_STOP_SPEEDS;
  const APERTURE_VALUES = FULL_STOP_APERTURES;

  const speedWheel = document.getElementById('wheel-shutter-speed');
  const speedRotor = document.getElementById('speed-wheel-rotor');
  const topSpeedDisplay = document.getElementById('top-speed-display');

  const apertureWheel = document.getElementById('wheel-aperture');
  const apertureRotor = document.getElementById('aperture-wheel-rotor');
  const topApertureDisplay = document.getElementById('top-aperture-display');

  function findOptimalSettingsForPhoto(photo) {
    const sceneEV = photo ? (photo.sceneEV || 12) : 12;
    const targetFocus = getTargetFocusForPhoto(photo);
    let bestAperture = 8.0;
    let bestSpeed = 500;
    let bestAbsDelta = Infinity;

    for (const sp of SPEED_VALUES) {
      if (sp <= 30) continue; // Evitar trepidación
      for (const ap of APERTURE_VALUES) {
        const { deltaEV } = calculateExposureDelta(sceneEV, ap, sp, AppState.iso);
        const absD = Math.abs(deltaEV);
        if (absD < bestAbsDelta) {
          bestAbsDelta = absD;
          bestAperture = ap;
          bestSpeed = sp;
        }
      }
    }
    return { aperture: bestAperture, speed: bestSpeed, focus: targetFocus };
  }
  window.findOptimalSettingsForPhoto = findOptimalSettingsForPhoto;

  function syncRotaryWheelsVisual() {
    const sIdx = Math.max(0, SPEED_VALUES.indexOf(AppState.shutterSpeed));
    const speedAngle = -sIdx * 40; // 9 posiciones * 40° = 360°
    if (speedRotor) speedRotor.style.transform = `rotate(${speedAngle}deg)`;
    if (topSpeedDisplay) {
      topSpeedDisplay.textContent = AppState.shutterSpeed === 1 ? '1s' : `1/${AppState.shutterSpeed}`;
    }
    if (speedSelect) speedSelect.value = String(AppState.shutterSpeed);

    const aIdx = Math.max(0, APERTURE_VALUES.indexOf(AppState.aperture));
    const apertureAngle = -aIdx * 45; // 8 posiciones * 45° = 360°
    if (apertureRotor) apertureRotor.style.transform = `rotate(${apertureAngle}deg)`;
    if (topApertureDisplay) {
      topApertureDisplay.textContent = `ƒ/${AppState.aperture.toFixed(1)}`;
    }
    if (apertureSelect) apertureSelect.value = String(AppState.aperture.toFixed(1));
  }

  function stepSpeed(delta) {
    const curIdx = Math.max(0, SPEED_VALUES.indexOf(AppState.shutterSpeed));
    const nextIdx = (curIdx + delta + SPEED_VALUES.length) % SPEED_VALUES.length;
    AppState.shutterSpeed = SPEED_VALUES[nextIdx];
    AudioFX.playDialClick();
    syncRotaryWheelsVisual();
    updateLightMeterDisplay();
    if (typeof window.updateGuidedStepsUI === 'function') window.updateGuidedStepsUI(false);
  }

  function stepAperture(delta) {
    const curIdx = Math.max(0, APERTURE_VALUES.indexOf(AppState.aperture));
    const nextIdx = (curIdx + delta + APERTURE_VALUES.length) % APERTURE_VALUES.length;
    AppState.aperture = APERTURE_VALUES[nextIdx];
    AudioFX.playDialClick();
    syncRotaryWheelsVisual();
    updateLightMeterDisplay();
    if (typeof window.updateGuidedStepsUI === 'function') window.updateGuidedStepsUI(false);
  }

  function attachRotatableDial(wheelEl, stepCallback) {
    if (!wheelEl) return;
    let isDraggingDial = false;
    let startX = 0;
    let startY = 0;
    let accumDrag = 0;
    let movedDuringPress = false;

    wheelEl.addEventListener('pointerdown', (e) => {
      isDraggingDial = true;
      movedDuringPress = false;
      startX = e.clientX;
      startY = e.clientY;
      accumDrag = 0;
      wheelEl.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    wheelEl.addEventListener('pointermove', (e) => {
      if (!isDraggingDial) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;
      accumDrag += (dx - dy);

      if (Math.abs(accumDrag) >= 18) {
        const steps = Math.trunc(accumDrag / 18);
        accumDrag -= steps * 18;
        movedDuringPress = true;
        stepCallback(steps > 0 ? 1 : -1);
      }
    });

    const endDialDrag = () => {
      if (!isDraggingDial) return;
      isDraggingDial = false;
      if (!movedDuringPress) {
        stepCallback(1);
      }
    };

    wheelEl.addEventListener('pointerup', endDialDrag);
    wheelEl.addEventListener('pointercancel', () => { isDraggingDial = false; });

    wheelEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      stepCallback(e.deltaY > 0 ? 1 : -1);
    }, { passive: false });
  }

  attachRotatableDial(speedWheel, stepSpeed);
  attachRotatableDial(apertureWheel, stepAperture);
  window.syncRotaryWheelsVisual = syncRotaryWheelsVisual;
  syncRotaryWheelsVisual();

  // =========================================================================
  // 1B. ASISTENTES AUTOMÁTICOS (ENFOQUE AUTO + BALANCE AUTO EV + PRESET 30%)
  // =========================================================================
  const btnAutoFocus = document.getElementById('btn-auto-focus');
  const btnAutoExposure = document.getElementById('btn-auto-exposure');
  const btnAutoAll = document.getElementById('btn-auto-all');
  const presetBadge = document.getElementById('preset-photo-badge');

  function applyScenePresetCalibration() {
    const currentPhoto = getCurrentPhoto();
    if (!currentPhoto) return;

    // La velocidad, el diafragma y el anillo de enfoque de la cámara NUNCA se mueven solos al cambiar de foto;
    // se quedan exactamente donde estaban en el último disparo, y es la nueva foto la que tiene sus propios niveles de luz
    if (typeof window.adaptIncomingPhotoLightToFixedCamera === 'function') {
      window.adaptIncomingPhotoLightToFixedCamera(currentPhoto);
    }

    if (presetBadge) {
      if (currentPhoto.isPresetOptimal) {
        presetBadge.style.display = 'inline-flex';
        presetBadge.textContent = `✨ Escena #${String(AppState.currentSceneIndex + 1).padStart(2, '0')}: Parámetros para toma perfecta`;
      } else {
        presetBadge.style.display = 'none';
      }
    }

    updateLightMeterDisplay();
    updateFocusSimulation();
    if (typeof window.updateGuidedStepsUI === 'function') window.updateGuidedStepsUI();
  }
  window.applyScenePresetCalibration = applyScenePresetCalibration;

  if (btnAutoFocus) {
    btnAutoFocus.addEventListener('click', () => {
      const currentPhoto = getCurrentPhoto();
      if (!currentPhoto) return;
      const targetFocus = getTargetFocusForPhoto(currentPhoto);
      AppState.userFocus = targetFocus;
      const vfSlider = document.getElementById('viewfinder-focus-slider');
      if (vfSlider) vfSlider.value = targetFocus;
      AudioFX.playFocusClick();
      updateFocusSimulation();
      if (statusMsg) {
        statusMsg.innerHTML = `<strong>🎯 Enfoque Automático completado:</strong> El prisma de imagen partida se ha alineado al 100% (distancia óptima para <em>${currentPhoto.title}</em>).`;
      }
      if (typeof window.updateGuidedStepsUI === 'function') window.updateGuidedStepsUI();
    });
  }

  if (btnAutoExposure) {
    btnAutoExposure.addEventListener('click', () => {
      const currentPhoto = getCurrentPhoto();
      if (!currentPhoto) return;
      const opt = findOptimalSettingsForPhoto(currentPhoto);
      AppState.aperture = opt.aperture;
      AppState.shutterSpeed = opt.speed;
      AudioFX.playDialClick();
      syncRotaryWheelsVisual();
      updateLightMeterDisplay();
      if (statusMsg) {
        statusMsg.innerHTML = `<strong>⚖️ Balance Automático completado:</strong> Ruedas ajustadas a <strong>ƒ/${opt.aperture.toFixed(1)}</strong> y <strong>1/${opt.speed}s</strong> para clavar el exposímetro en luz óptima (0.0 EV).`;
      }
      if (typeof window.updateGuidedStepsUI === 'function') window.updateGuidedStepsUI();
    });
  }

  if (btnAutoAll) {
    btnAutoAll.addEventListener('click', () => {
      const currentPhoto = getCurrentPhoto();
      if (!currentPhoto) return;
      const opt = findOptimalSettingsForPhoto(currentPhoto);
      AppState.aperture = opt.aperture;
      AppState.shutterSpeed = opt.speed;
      AppState.userFocus = opt.focus;
      const vfSlider = document.getElementById('viewfinder-focus-slider');
      if (vfSlider) vfSlider.value = opt.focus;
      AudioFX.playFocusClick();
      AudioFX.playDialClick();
      syncRotaryWheelsVisual();
      updateLightMeterDisplay();
      updateFocusSimulation();
      if (statusMsg) {
        statusMsg.innerHTML = `<strong>✨ Enfoque y Balance Óptimos:</strong> Cámara calibrada a <strong>ƒ/${opt.aperture.toFixed(1)}</strong>, <strong>1/${opt.speed}s</strong> y prisma nítido. ¡Ya puedes pulsar el botón disparador cromado!`;
      }
      if (typeof window.updateGuidedStepsUI === 'function') window.updateGuidedStepsUI();
    });
  }

  // =========================================================================
  // 2. MANIVELA DE REBOBINADO / ARRASTRE (EXIGE DAR 3 VUELTAS COMPLETAS)
  // =========================================================================
  const crankWheel = document.getElementById('rewind-crank-wheel');
  const crankRotor = document.getElementById('rewind-rotor-disc');
  const crankCircle = document.getElementById('crank-progress-circle');
  const crankBadge = document.getElementById('crank-turns-badge');

  const TOTAL_TURNS_REQUIRED = 3;
  const TOTAL_DEG_REQUIRED = TOTAL_TURNS_REQUIRED * 360; // 1080°
  const CIRCUMFERENCE = 245; // 2 * PI * 39
  let crankAccumDeg = TOTAL_DEG_REQUIRED; // Empieza cargado (3/3)
  let visualRotorAngle = 0;
  let lastClickTick = 0;

  let isCranking = false;

  function updateCrankVisualUI() {
    const ratio = Math.min(1, Math.max(0, crankAccumDeg / TOTAL_DEG_REQUIRED));
    const offset = CIRCUMFERENCE * (1 - ratio);
    if (crankCircle) crankCircle.style.strokeDashoffset = `${offset}`;
    if (crankRotor) crankRotor.style.transform = `rotate(${visualRotorAngle}deg)`;

    const turnsDone = (crankAccumDeg / 360).toFixed(1);
    if (AppState.analogShutterArmed) {
      if (crankWheel) {
        crankWheel.classList.remove('needs-winding');
        crankWheel.classList.add('is-locked');
      }
      if (crankBadge) {
        crankBadge.classList.remove('pending');
        crankBadge.textContent = `🔒 Bloqueado (${TOTAL_TURNS_REQUIRED}/${TOTAL_TURNS_REQUIRED})`;
      }
    } else {
      if (crankWheel) {
        crankWheel.classList.add('needs-winding');
        crankWheel.classList.remove('is-locked');
      }
      if (crankBadge) {
        crankBadge.classList.add('pending');
        crankBadge.textContent = `Gira: ${turnsDone} / ${TOTAL_TURNS_REQUIRED} vueltas ↻`;
      }
    }
  }

  function advanceCrankByDegrees(degDelta) {
    // Si ya terminó de bobinar (tope mecánico alcanzado), no se puede mover ni un grado más
    if (degDelta <= 0 || AppState.analogShutterArmed) {
      return;
    }

    const allowedDelta = Math.min(degDelta, TOTAL_DEG_REQUIRED - crankAccumDeg);
    if (allowedDelta <= 0) return;

    crankAccumDeg += allowedDelta;
    visualRotorAngle += allowedDelta;

    // Sonido de carraca mecánica cada 45 grados de giro
    if (crankAccumDeg - lastClickTick >= 45) {
      lastClickTick = crankAccumDeg;
      AudioFX.playDialClick();
    }

    if (crankAccumDeg >= TOTAL_DEG_REQUIRED) {
      crankAccumDeg = TOTAL_DEG_REQUIRED;
      AppState.analogShutterArmed = true;
      isCranking = false; // Corta el giro en seco al llegar al tope mecánico
      AudioFX.playWinder();
      updateCrankVisualUI();
      if (typeof window.updateGuidedStepsUI === 'function') window.updateGuidedStepsUI(false);
      if (statusMsg) {
        if (AppState.analogPhotosLeft <= 0) {
          statusMsg.innerHTML = '<strong>🔒 ¡Carrete de 12 totalmente rebobinado y bloqueado!</strong> La película ha vuelto al chasis metálico. Pasa a la <strong>Fase 2 (El Revelado)</strong> para revelar tus 12 fotos en el cuarto oscuro.';
        } else {
          statusMsg.innerHTML = '<strong>🔒 ¡Tope mecánico alcanzado (3/3 vueltas)!</strong> El carrete ha terminado de bobinarse y la manivela ha quedado bloqueada. Ya puedes disparar el siguiente fotograma.';
        }
      }
    } else {
      updateCrankVisualUI();
      const remaining = ((TOTAL_DEG_REQUIRED - crankAccumDeg) / 360).toFixed(1);
      if (statusMsg) {
        statusMsg.innerHTML = `<strong>🔄 Bobinando el carrete (${(crankAccumDeg / 360).toFixed(1)} de ${TOTAL_TURNS_REQUIRED} vueltas):</strong> Todavía queda un poco (faltan <strong>${remaining} vueltas</strong>). Sigue girando la manivela en círculos.`;
      }
    }
  }

  if (crankWheel) {
    let prevAngle = null;
    let prevPos = null;
    let degThisGesture = 0;

    crankWheel.addEventListener('pointerdown', (e) => {
      if (AppState.analogShutterArmed) {
        isCranking = false;
        if (statusMsg) {
          statusMsg.innerHTML = '<strong>🔒 Manivela bloqueada:</strong> El carrete ya está bobinado al tope y no se puede mover más hasta que dispares la foto.';
        }
        return;
      }
      isCranking = true;
      degThisGesture = 0;
      const rect = crankWheel.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      prevAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
      prevPos = { x: e.clientX, y: e.clientY };
      crankWheel.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    crankWheel.addEventListener('pointermove', (e) => {
      if (!isCranking || AppState.analogShutterArmed) return;
      const rect = crankWheel.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const curAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);

      let angleDiff = curAngle - prevAngle;
      if (angleDiff > 180) angleDiff -= 360;
      if (angleDiff < -180) angleDiff += 360;
      prevAngle = curAngle;

      const distMove = Math.hypot(e.clientX - prevPos.x, e.clientY - prevPos.y);
      prevPos = { x: e.clientX, y: e.clientY };

      // Toma el giro circular o el movimiento continuo de arrastre
      const effectiveDeg = Math.max(Math.abs(angleDiff), distMove * 1.35);
      degThisGesture += effectiveDeg;
      advanceCrankByDegrees(effectiveDeg);
    });

    const stopCranking = () => {
      if (!isCranking) return;
      isCranking = false;
      // Si el usuario solo hizo un clic rápido sin girar la manivela
      if (!AppState.analogShutterArmed && degThisGesture < 35) {
        if (statusMsg) {
          statusMsg.innerHTML = `<strong>⚠️ La manivela no es un botón:</strong> Mantén pulsado el ratón sobre la manivela izquierda y <strong>gírala en círculos dando ${TOTAL_TURNS_REQUIRED} vueltas completas</strong> para arrastrar el carrete (llevas ${(crankAccumDeg / 360).toFixed(1)}/${TOTAL_TURNS_REQUIRED} vueltas).`;
        }
      }
    };

    crankWheel.addEventListener('pointerup', stopCranking);
    crankWheel.addEventListener('pointercancel', () => { isCranking = false; });

    crankWheel.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (AppState.analogShutterArmed) {
        if (statusMsg) {
          statusMsg.innerHTML = '<strong>🔒 Manivela bloqueada:</strong> El carrete ya está bobinado al tope y no se puede mover más hasta que dispares la foto.';
        }
        return;
      }
      advanceCrankByDegrees(40);
    }, { passive: false });
  }

  updateCrankVisualUI();

  // =========================================================================
  // 3. VISOR CON FOTO PEQUEÑA QUE SE AGRANDA EN HOVER + MINIJUEGO DE ENFOQUE
  // =========================================================================
  const vfHoverZone = document.getElementById('viewfinder-hover-zone');
  const vfFocusSlider = document.getElementById('viewfinder-focus-slider');
  const btnFocusNear = document.getElementById('btn-focus-near');
  const btnFocusFar = document.getElementById('btn-focus-far');
  const vfGlass = document.getElementById('analog-viewfinder-glass');

  const onFocusChange = (val) => {
    const clamped = Math.max(0, Math.min(100, parseInt(val, 10)));
    AppState.userFocus = clamped;
    if (vfFocusSlider) vfFocusSlider.value = clamped;
    AudioFX.playFocusClick();
    updateFocusSimulation();
    if (typeof window.updateGuidedStepsUI === 'function') window.updateGuidedStepsUI(false);
  };

  if (vfFocusSlider) {
    vfFocusSlider.addEventListener('input', (e) => onFocusChange(e.target.value));
    // Mantener el visor agrandado mientras se arrastra el deslizador de enfoque
    vfFocusSlider.addEventListener('pointerdown', () => {
      if (vfHoverZone) vfHoverZone.classList.add('is-expanded');
    });
  }

  window.addEventListener('pointerup', () => {
    if (vfHoverZone) vfHoverZone.classList.remove('is-expanded');
  });

  if (btnFocusNear) {
    btnFocusNear.addEventListener('click', (e) => {
      e.stopPropagation();
      onFocusChange(AppState.userFocus - 12);
    });
  }
  if (btnFocusFar) {
    btnFocusFar.addEventListener('click', (e) => {
      e.stopPropagation();
      onFocusChange(AppState.userFocus + 12);
    });
  }

  // También permitir enfocar con la rueda del ratón dentro del visor agrandado
  if (vfGlass) {
    vfGlass.addEventListener('wheel', (e) => {
      e.preventDefault();
      const step = e.deltaY > 0 ? -5 : 5;
      onFocusChange(AppState.userFocus + step);
    }, { passive: false });
  }

  // =========================================================================
  // 4. BOTÓN DISPARADOR MECÁNICO CROMADO (CARRETE DE 12 EXPOSICIONES)
  // =========================================================================
  if (btnAnalogShoot) {
    btnAnalogShoot.addEventListener('click', () => {
      if (AppState.analogPhotosLeft <= 0) {
        statusMsg.innerHTML = '<strong>❌ Carrete de 12 agotado:</strong> Ya has impresionado los 12 fotogramas del carrete. Pasa a la <strong>Fase 2 (El Revelado)</strong> para revelarlos en tiras de 4 y luego montarlos en el Álbum.';
        return;
      }

      if (!AppState.analogShutterArmed) {
        const turnsLeft = ((TOTAL_DEG_REQUIRED - crankAccumDeg) / 360).toFixed(1);
        statusMsg.innerHTML = `<strong>⚠️ Carrete sin bobinar:</strong> Todavía te faltan <strong>${turnsLeft} vueltas</strong> en la manivela izquierda. Gírala en círculos con el ratón hasta completar las 3 vueltas.`;
        return;
      }

      AudioFX.playAnalogShutter();

      if (shutterCurtain) {
        shutterCurtain.classList.add('blackout');
        setTimeout(() => shutterCurtain.classList.remove('blackout'), 240);
      }

      const currentPhoto = getCurrentPhoto();
      const sceneEV = currentPhoto ? (currentPhoto.sceneEV || 12) : 12;
      const { deltaEV, clampedMeterEV, meterPercent, isShaky } = calculateExposureDelta(sceneEV, AppState.aperture, AppState.shutterSpeed, AppState.iso);

      const targetFocus = getTargetFocusForPhoto(currentPhoto);
      const focusDiff = Math.abs(AppState.userFocus - targetFocus);
      const isUnfocused = focusDiff > 10;

      let shotStatus = 'ok';
      if (deltaEV >= 2.85) shotStatus = 'whiteout';
      else if (deltaEV <= -2.85) shotStatus = 'blackout_under';
      else if (deltaEV > 0.6) shotStatus = 'overexposed';
      else if (deltaEV < -0.6) shotStatus = 'underexposed';
      else if (isShaky) shotStatus = 'shaky';
      else if (isUnfocused) shotStatus = 'unfocused';

      const frameIndex = AppState.currentSceneIndex;
      AppState.shotsHistory[frameIndex] = {
        photoId: currentPhoto ? currentPhoto.id : `frame-${frameIndex}`,
        aperture: AppState.aperture,
        speed: AppState.shutterSpeed,
        deltaEV: deltaEV,
        clampedMeterEV: clampedMeterEV,
        meterPercent: meterPercent,
        isUnfocused: isUnfocused,
        focusDiff: focusDiff,
        status: shotStatus,
        isShaky: isShaky,
        timestamp: new Date().toLocaleTimeString()
      };
      if (!AppState.shotsOrder.includes(frameIndex)) {
        AppState.shotsOrder.push(frameIndex);
      }

      AppState.analogPhotosLeft--;
      AppState.analogShutterArmed = false;
      crankAccumDeg = 0;
      lastClickTick = 0;
      updateCrankVisualUI();
      updateAllReelCountersUI();

      const expText = deltaEV >= 2.85 ? `TOPE +3.0 EV (100% blanca/quemada)` :
                      deltaEV <= -2.85 ? `TOPE -3.0 EV (100% negra/subexpuesta)` :
                      deltaEV > 0.6 ? `sobreexpuesta ${meterPercent}% (+${clampedMeterEV.toFixed(1)} EV)` : 
                      deltaEV < -0.6 ? `subexpuesta ${meterPercent}% (${clampedMeterEV.toFixed(1)} EV)` : `luz óptima (0.0 EV)`;
      const focusText = isUnfocused ? `❌ desenfocada (prisma desalineado)` : `✓ enfoque nítido`;
      const takenNum = AppState.analogTotalPhotos - AppState.analogPhotosLeft;

      statusMsg.innerHTML = `<strong>📸 Fotograma ${takenNum} de ${AppState.analogTotalPhotos} capturado (${currentPhoto ? currentPhoto.title : ''}):</strong> Expuesto a <strong>ƒ/${AppState.aperture}</strong>, <strong>1/${AppState.shutterSpeed}s</strong> (${expText}) y <strong>${focusText}</strong>. Ahora <strong>da 3 vueltas a la manivela izquierda</strong> con el ratón para avanzar el carrete.`;

      rotateNextScene();
    });
  }

  // Exponer reseteo de manivela cuando se sortea un carrete nuevo
  window.resetAnalogCrankUI = () => {
    crankAccumDeg = TOTAL_DEG_REQUIRED;
    lastClickTick = 0;
    AppState.analogShutterArmed = true;
    updateCrankVisualUI();
    updateAllReelCountersUI();
  };
}


