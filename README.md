# 📸 De la Emulsión al Algoritmo
### Recurso Educativo Interactivo para Cultura Digital (PEC2)
**Autores de Referencia:** Jay David Bolter & Richard Grusin (1999) • Lev Manovich (2001)  
**Tema:** Remediación y Transcodificación en la evolución de la Fotografía: Del Carrete Analógico de 24 fotos a la Base de Datos de Google Photos.

---

## 🎯 1. Novedades y Mecánicas Interactivas

* **Cámara Analógica Física con Ocular Interactivo:**
  - La cámara analógica ya no muestra una pantalla abierta. Muestra su **cuerpo frontal físico de 35mm** con chasis metálico, cuero negro texturizado, objetivo cilíndrico de 50mm con escala de distancias y el **ocular réflex óptico arriba**.
  - **Interacción por Ocular:** El usuario hace clic en el ocular (*"👁️ ASOMAR EL OJO AL VISOR"*) para acercarse y mirar a través del pentaprisma.
* **Minijuego de Enfoque con Prisma de Imagen Partida (*Split-Image Rangefinder*):**
  - Simula el sistema de enfoque clásico de las cámaras réflex analógicas de los años 70 y 80 (Nikon FM2, Canon AE-1, Olympus OM-1).
  - En el centro del visor hay un círculo con dos mitades partidas: si el anillo de enfoque manual no está ajustado a la distancia del sujeto, las mitades superior e inferior se desfasan horizontalmente y la imagen se ve borrosa.
  - Al girar el anillo de enfoque (de 0.7m a $\infty$), las dos mitades se alinean hasta unirse a la perfección (*"🟢 Prisma Alineado • Enfoque Nítido"*).
  - **Consecuencia en el Revelado y el Álbum:** Si disparas sin alinear el prisma, la foto positivada en papel baritado saldrá borrosa con la marca `❌ DESENFOCADA (Prisma desfasado)`.
* **Física Óptica y Exposímetro TTL de Aguja Galvanométrica:**
  - Diales manuales de Diafragma ($\text{ƒ}/1.4$ a $\text{ƒ}/16$) y Velocidad de Obturación ($1/1000\text{s}$ a $1\text{s}$) con película fija de **ISO 400**.
  - Aguja galvanométrica física en escala `[+2 .. 0 .. -2] EV` y semáforo LED de 3 luces.
  - Afecta al resultado real: fotos quemadas (blancas), subexpuestas (negras) o trepidadas por velocidad lenta.
* **HUD Inteligente Dinámico de Google Photos:**
  - El visor digital del smartphone detecta automáticamente el sujeto de cada foto:
    - 🐾 *Mascota detectada • 99.8% • Enfoque continuo a ojos*
    - 👤 *Rostro humano detectado • 99.4% • Ojo izquierdo enfocado*
    - 🍕 *Plato gastronómico • 99.1% • Modo Realce de Color*
    - 🏛️ *Monumento / Patrimonio • 98.6% • Corrección de perspectiva*
    - 🌅 *Paisaje natural • 99.0% • Optimización HDR+ de cielo*
    - 🌙 *Baja iluminación • Modo Visión Nocturna / Night Sight (2.5s)*
  - Demostración de **Automatización radical** (*Lev Manovich*): el usuario no necesita tocar anillos de enfoque ni medir luz con agujas; la máquina calcula todo en 30 milisegundos.
* **24 Archivos de Fotografías Separados:**
  - Ubicados en la carpeta [`photos/`](file:///c:/DATOS/AAP_IA/CulturaDigitalPEC2/photos/) (`photo-01.js` a `photo-24.js` + `manifest.js`).

---

## 🔬 2. Marco Teórico Universitario (PEC2)

### A. Bolter & Grusin (1999) — *Remediation*
1. **Inmediatez Transparente:** La cámara del smartphone borra la maquinaria y la técnica (el autoenfoque por IA y el HDR automático sustituyen la destreza manual del fotógrafo).
2. **Hipermediación:** Presencia simultánea de interfaces de software, recuadros de confianza porcentual de IA, metadatos y geolocalización GPS.
3. **Remediación del Álbum:** Google Photos mantiene el concepto de "Álbum", pero lo convierte en una consulta relacional instantánea.

### B. Lev Manovich (2001) — *El Lenguaje de los Nuevos Medios*
1. **Representación Numérica:** Del grano continuo fotoquímico de haluro de plata a matrices matemáticas discretas de píxeles $f(x,y) \to [R, G, B]$.
2. **Modularidad:** Separación limpia entre píxeles, metadatos EXIF y etiquetas semánticas de IA.
3. **Automatización:** Autoenfoque predictivo, balance de blancos y clasificación automática sin intervención humana.
4. **Variabilidad:** La foto digital no es fija como la copia en papel: admite filtros CSS no destructivos en tiempo real.
5. **Transcodificación Cultural y Base de Datos:** La lógica de la base de datos relacional y vectorial (*queries* instantáneas) sustituye a la narrativa lineal del álbum encuadernado (hojeado obligatorio fotograma a fotograma).

---

## 📁 3. Estructura del Proyecto

```text
CulturaDigitalPEC2/
├── index.html              # Estructura semántica Split-Screen y modales
├── style.css               # Estética Dual (Vintage papel/cuero vs. Google Material)
├── js/                     # Código JavaScript modular
│   ├── state.js
│   ├── audio.js
│   ├── theory.js
│   ├── analog.js
│   ├── digital.js
│   ├── album.js
│   └── main.js
├── README.md               # Memoria técnica y conceptual
└── photos/                 # Las 24 fotos separadas en archivos independientes
    ├── photo-01.js a photo-24.js
    └── manifest.js         # Indexación de la fototeca
```

---

## 🚀 4. Despliegue en GitHub Pages

1. Sube todos los archivos y la carpeta `photos/` a tu repositorio en GitHub.
2. Ve a **Settings** > **Pages**.
3. En **Source**, selecciona **Deploy from a branch**, rama `main` (o `master`) y carpeta `/ (root)`.
4. Guarda y en un par de minutos tu aplicación web estará disponible públicamente.
