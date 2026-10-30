/**
 * ========================================================
 * js/digital.js - Lógica de Google Photos
 * HUD dinámico por visión IA, disparador digital, búsqueda y visor no destructivo
 * ========================================================
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

function filterDatabasePhotos(queryTerm) {
  const queryStatement = document.getElementById('db-query-statement');
  const execTimeEl = document.getElementById('query-exec-time');
  const resultsCountEl = document.getElementById('grid-results-count');
  const photos = getDigitalPhotos();

  const startTime = performance.now();
  let filtered = photos;

  if (queryTerm) {
    filtered = photos.filter(p => {
      const matchTitle = p.title.toLowerCase().includes(queryTerm);
      const matchYear = p.year.toLowerCase().includes(queryTerm);
      const matchTags = p.tags.some(t => t.toLowerCase().includes(queryTerm));
      return matchTitle || matchYear || matchTags;
    });

    if (queryStatement) {
      queryStatement.innerHTML = `<code>SELECT * FROM photos_library WHERE tags LIKE '%${queryTerm}%' OR title LIKE '%${queryTerm}%';</code>`;
    }
  } else {
    if (queryStatement) {
      queryStatement.innerHTML = `<code>SELECT * FROM photos_library ORDER BY timestamp DESC;</code>`;
    }
  }

  const duration = (performance.now() - startTime + Math.random() * 8 + 4).toFixed(1);
  if (execTimeEl) execTimeEl.textContent = `Consulta: ${duration} ms`;
  if (resultsCountEl) resultsCountEl.textContent = `Mostrando ${filtered.length} recuerdos indexados en la nube (Sin límite • Total: ${photos.length})`;

  AudioFX.playDatabasePing();
  renderGooglePhotosGrid(filtered);
}

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
      <div style="grid-column: span 3; padding: 24px; text-align: center; color: #5f6368; font-size: 0.85rem;">
        🔍 <strong>Sin resultados:</strong> No hay registros en la base de datos con esa etiqueta semántica.
      </div>
    `;
    return;
  }

  photos.forEach(photo => {
    const card = document.createElement('div');
    card.className = 'gphoto-card';
    card.setAttribute('data-id', photo.id);
    card.title = `${photo.title} (${photo.year})`;

    const coverSvg = renderUniquePhotoSvg(photo.svg);
    card.innerHTML = `
      <div class="gphoto-card-img">${coverSvg}</div>
      <div class="gphoto-card-badge">${photo.tags[0]} • ${photo.year}</div>
    `;

    card.addEventListener('click', () => openPhotoInspector(photo));
    grid.appendChild(card);
  });
}

function openPhotoInspector(photo) {
  const inspector = document.getElementById('photo-inspector');
  const imgPane = document.getElementById('inspector-image');
  const titleEl = document.getElementById('inspector-title');
  const dateEl = document.getElementById('inspector-date');
  const chipsEl = document.getElementById('inspector-chips');

  const coverSvg = renderUniquePhotoSvg(photo.svg);
  if (imgPane) imgPane.innerHTML = coverSvg;
  if (titleEl) titleEl.textContent = photo.title;
  if (dateEl) dateEl.textContent = photo.date;

  if (chipsEl) {
    chipsEl.innerHTML = '';
    photo.tags.forEach(t => {
      const chip = document.createElement('span');
      chip.className = 'sem-tag';
      chip.textContent = `#${t}`;
      chipsEl.appendChild(chip);
    });
  }

  document.querySelectorAll('.v-filter-btn').forEach(b => b.classList.remove('active'));
  const normalBtn = document.querySelector('.v-filter-btn[data-vfilter="normal"]');
  if (normalBtn) normalBtn.classList.add('active');
  applyVariabilityFilter('normal');

  if (inspector) inspector.style.display = 'block';
  AudioFX.playDatabasePing();
}

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

