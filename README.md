# 📸 De la Emulsión al Algoritmo
### Recurso Educativo Interactivo para Cultura Digital (PEC2 - UOC)
**Autores de Referencia:** Jay David Bolter y Richard Grusin (2000 [orig. 1999]) • Lev Manovich (2005 [2001], 2013) • Jordi Alberich-Pascual (2018) • Joan Fontcuberta (2016) • Mitchel Resnick (2007) • Roland Barthes (1989 [1980]) • Paula Velasco Padial (2017)  
**Tema:** Remediación, Apropiación, Transcodificación y Postfotografía en la evolución de la imagen: Del Carrete Analógico de 12 exposiciones (sobre una colección de 36 fotografías) a la Base de Datos de Google Photos.

---

## 🎯 1. Novedades y Mecánicas Interactivas

* **Cámara Réflex Analógica de 35mm en Doble Vista (Cenital + Trasera con Ocular Interactivo):**
  - **Vista Superior Cenital (`#camera-top-deck`):** Chasis metálico con diales rotatorios interactivos de **Velocidad de Obturación** ($1/1000\text{s}$ a $1/4\text{s}$) y **Diafragma** ($\text{ƒ}/1.4$ a $\text{ƒ}/16$), pentaprisma con zapata de flash (*hot shoe*), botón disparador cromado con contador de exposiciones y **manivela de rebobinado/arrastre de 3 vueltas completas** para armar el obturador y avanzar al siguiente fotograma.
  - **Vista Trasera e Interacción por Ocular (`#camera-exterior-view`):** Muestra el visor ocular réflex óptico en el centro (que **se agranda automáticamente al pasar el ratón / *hover*** para mirar a través del pentaprisma y enfocar), la puerta trasera de cuero negro texturizado con el **porta-etiqueta central Kodak Gold 400 (12 EXP • 35mm)** y la **barra de asistentes rápidos** (*Enfoque Automático*, *Balance Auto 0.0 EV* y *Todo Óptimo*).
* **Minijuego de Enfoque con Prisma de Imagen Partida (*Split-Image Rangefinder*):**
  - Simula el sistema de enfoque clásico de las cámaras réflex analógicas de los años 70 y 80 (Pentax K1000, Nikon FM2, Canon AE-1).
  - En el centro del visor hay un círculo con dos mitades partidas: si el deslizador/anillo de enfoque manual no está ajustado a la distancia del sujeto, las mitades superior e inferior se desfasan horizontalmente y la imagen se ve borrosa.
  - Al ajustar el enfoque (de $0.7\text{m}$ a $\infty$), las dos mitades se alinean hasta unirse a la perfección (*"🟢 Prisma Alineado • Enfoque Nítido"*).
  - **Consecuencia en el Revelado y el Álbum:** Si disparas sin alinear el prisma, la foto positivada en papel baritado saldrá borrosa con la marca `🔴 DESENFOCADA (Prisma desalineado)`.
* **Física Óptica y Exposímetro TTL de Aguja Galvanométrica:**
  - Diales rotatorios manuales de Diafragma ($\text{ƒ}/1.4$ a $\text{ƒ}/16$) y Velocidad de Obturación ($1/1000\text{s}$ a $1/4\text{s}$) con película fija de **ISO 400**.
  - Aguja galvanométrica física en escala `[+3 .. 0 .. -3] EV` y semáforo LED de 3 luces (`▲`, `●`, `▼`).
  - Afecta al resultado fotoquímico real en Fase 2 y Fase 3: fotos quemadas (blancas), subexpuestas (negras) o trepidadas por velocidad lenta.
* **Revelado Químico por Lotes (Fase 2) y Álbum Físico a Doble Página (Fase 3):**
  - **Cuarto Oscuro en 3 Tiras de 4 Fotogramas:** Las **12 exposiciones del carrete activo** se revelan en **3 tiras de 4 fotos** (`Fotos 1–4`, `Fotos 5–8` y `Fotos 9–12`), pasando de *1. Emulsión Latente (Oculta)* a *2. Negativo (Colores Invertidos)* y *3. Positivado (Imagen + Exposición)* mediante agitación en la cubeta química.
  - **Sobre de Laboratorio Fotoprix y Montaje Manual:** En la Fase 3, las 12 copias se entregan junto a su tira de negativos en funda de plástico para pegarlas con **4 esquineros** en **3 pliegos a doble página** (4 fotos por pliego) y rotular pies de foto manuscritos.
* **HUD Inteligente Dinámico y Motor Relacional de Google Photos:**
  - El visor digital del smartphone detecta automáticamente el sujeto de cada foto:
    - 🐾 *Mascota detectada • 99.8% • Enfoque continuo a ojos*
    - 👤 *Rostro humano detectado • 99.4% • Ojo izquierdo enfocado*
    - 🍕 *Plato gastronómico • 99.1% • Modo Realce de Color*
    - 🏛️ *Monumento / Patrimonio • 98.6% • Corrección de perspectiva*
    - 🌅 *Paisaje natural • 99.0% • Optimización HDR+ de cielo*
    - 🌙 *Baja iluminación • Modo Visión Nocturna / Night Sight (2.5s)*
  - Demostración de **Automatización radical** y control del software (**Manovich, 2005, 2013**): la máquina calcula enfoque, HDR y etiquetado semántico en milisegundos.
* **Colección de 36 Fotografías Vectoriales + Carrete Activo de 12 Exposiciones + Subida de Fotos Propias:**
  - Ubicadas en la carpeta [`photos/`](file:///c:/DATOS/AAP_IA/CulturaDigitalPEC2/photos/) ([`photo-01.js`](file:///c:/DATOS/AAP_IA/CulturaDigitalPEC2/photos/photo-01.js) a [`photo-36.js`](file:///c:/DATOS/AAP_IA/CulturaDigitalPEC2/photos/photo-36.js) + [`manifest.js`](file:///c:/DATOS/AAP_IA/CulturaDigitalPEC2/photos/manifest.js)).
  - En cada sesión se carga un **carrete activo de 12 exposiciones** seleccionadas de la colección de 36, permitiendo además al usuario **subir hasta 12 fotografías reales propias** desde su dispositivo para integrarlas en el visor réflex, el cuarto oscuro, el álbum físico y la base de datos de Google Photos.

---

## 🔬 2. Marco Teórico Universitario (PEC2)

### A. Bolter y Grusin (2000 [orig. 1999]) y Alberich-Pascual (2018) — *Remediación como Apropiación e Hibridación*
1. **Inmediatez Transparente:** La cámara del smartphone busca borrar la interfaz técnica (el autoenfoque por IA y el HDR automático sustituyen la destreza manual óptica y mecánica del fotógrafo).
2. **Hipermediación:** Presencia simultánea de capas de software, recuadros de confianza porcentual de IA, metadatos EXIF, clusters faciales y mapas de geolocalización GPS.
3. **Remediación como Apropiación del Álbum:** Siguiendo a **Bolter y Grusin (2000: 45)** y **Alberich-Pascual (2018)**, Google Photos no solo "compara" con el álbum físico, sino que **se apropia de sus formas, metáforas visuales** (cuadrículas, portadas, páginas cronológicas) y de su **significación social** para redefinirlas e hibridarlas algorítmicamente.

### B. Lev Manovich (2005 [2001], 2013) — *El Lenguaje de los Nuevos Medios* y *El Software Toma el Mando*
1. **Representación Numérica:** Del grano continuo fotoquímico de haluro de plata a matrices matemáticas discretas de píxeles $f(x,y) \to [R, G, B]$.
2. **Modularidad:** Separación estructural entre píxeles, metadatos EXIF y etiquetas semánticas de IA.
3. **Automatización y Software al Mando:** Autoenfoque predictivo, balance de blancos y clasificación automática en álbumes inteligentes mediante redes neuronales sin intervención manual (**Manovich, 2013**).
4. **Variabilidad:** La foto digital no queda fijada irreversiblemente como la copia en papel baritado: admite filtros CSS no destructivos en tiempo real.
5. **Transcodificación Cultural y Base de Datos:** La lógica de la base de datos relacional y vectorial (*queries* instantáneas) sustituye a la narrativa lineal sintagmática del álbum encuadernado.

### C. Joan Fontcuberta (2016) y Paula Velasco Padial (2017) — *Postfotografía y La Furia de las Imágenes*
1. **Del *"Esto ha sido"* (Barthes, 1989 [1980]) al *"Yo estaba allí"*:** Quiebra de la indexicalidad física cuando el píxel sustituye al nitrato de plata; la imagen fluye en un presente en suspensión dentro de la sociabilidad digital.
2. **Homo Photographicus y Ecología Visual:** Ante la superabundancia visual e infoxicación, la autoría se desplaza de fabricar imágenes a **adoptarlas y prescribir sentidos**, integrando al espectador como coautor.

### D. Mitchel Resnick (2007) — *La Espiral del Pensamiento Creativo*
1. **Diseño Metodológico Experiencial:** El proyecto aplica las fases de **Imaginar, Crear, Jugar, Compartir y Reflexionar** a través de los minijuegos del visor réflex, el revelado por lotes en el cuarto oscuro, el montaje del álbum familiar y el buscador relacional de Google Photos.

---

## 📁 3. Estructura del Proyecto

```text
CulturaDigitalPEC2/
├── index.html              # Estructura semántica Split-Screen y modales (Dossier Chicago 17.ª ed.)
├── style.css               # Punto de entrada CSS que importa hojas modulares en /css
├── css/                    # Hojas de estilo modulares (base, layout, analog, digital, modals)
├── js/                     # Código JavaScript modular
│   ├── state.js            # Gestión de la fototeca de 36 fotos, carrete de 12 exp. y subida de hasta 12 fotos reales
│   ├── audio.js            # Síntesis de audio procedural (Web Audio API)
│   ├── theory.js           # Textos teóricos por fases (Chicago 17.ª ed.)
│   ├── analog.js           # Cámara réflex 35mm (vista cenital + trasera ocular), exposímetro y prisma partido
│   ├── digital.js          # Google Photos, HUD de visión IA y motor relacional
│   ├── album.js            # Cuarto oscuro (3 tiras de 4 fotos), sobre Fotoprix y álbum físico (3 pliegos)
│   └── main.js             # Coordinador general y eventos de interfaz
├── script.js               # Verificador e índice de módulos
├── README.md               # Memoria técnica, conceptual y bibliográfica
└── photos/                 # Colección de 36 fotografías vectoriales en archivos independientes
    ├── photo-01.js a photo-36.js
    └── manifest.js         # Indexación y ordenación de la fototeca de 36 fotogramas
```

---

## 🚀 4. Despliegue en GitHub Pages

1. Sube todos los archivos y las carpetas `css/`, `js/` y `photos/` a tu repositorio en GitHub.
2. Ve a **Settings** > **Pages**.
3. En **Source**, selecciona **Deploy from a branch**, rama `main` (o `master`) y carpeta `/ (root)`.
4. Guarda y en un par de minutos tu aplicación web estará disponible públicamente.

---

## 📚 6. Referencias Bibliográficas y Declaración de Uso de IA (Estilo Chicago 17.ª ed.)

* Alberich-Pascual, Jordi. «Elementos de la creatividad multimedia: apropiación, remediación, hibridación». *Mosaic*, n.º 156 (2018). https://doi.org/10.7238/m.n156.1803.
* Barthes, Roland. *La cámara lúcida: Nota sobre la fotografía*. Barcelona: Paidós, 1989 [1980].
* Bolter, Jay David y Richard Grusin. *Remediation: Understanding New Media*. Cambridge, MA: MIT Press, 2000 [1999].
* Fontcuberta, Joan. *La furia de las imágenes: Notas sobre la postfotografía*. Barcelona: Galaxia Gutenberg, 2016.
* Manovich, Lev. *El lenguaje de los nuevos medios de comunicación: La imagen en la era digital*. Barcelona: Paidós, 2005 [2001].
* Manovich, Lev. *El software toma el mando*. Barcelona: Editorial UOC, 2013.
* Resnick, Mitchel. «Sowing the Seeds for a More Creative Society». *Learning & Leading with Technology* 35, n.º 4 (2007): 18–22.
* Velasco Padial, Paula. «Reseña de *La furia de las imágenes: notas sobre la postfotografía*, de Joan Fontcuberta». *Arte, Individuo y Sociedad* 29, n.º 2 (2017): 425–427.

**Nota metodológica y citación de IA:** Google. *Antigravity / Gemini* (Versión de 2026). Herramientas de inteligencia artificial utilizadas como apoyo en la codificación de prototipado web interactivo (*Vibe Coding*), estructuración de datos y revisión sintáctica. La autoría intelectual, el enfoque autoetnográfico y el análisis crítico corresponden íntegramente al alumno Miguel Alcaide Bautista.

