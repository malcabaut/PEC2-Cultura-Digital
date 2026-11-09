/**
 * ========================================================
 * js/theory.js - Dossier Teórico y Notas Pedagógicas PEC2
 * Referencias (Estilo Chicago 17.ª ed.):
 *  - Bolter, Jay David y Richard Grusin (2000 [orig. 1999]): Remediation: Understanding New Media
 *  - Manovich, Lev (2005 [2001]): El lenguaje de los nuevos medios de comunicación
 *  - Manovich, Lev (2013): El software toma el mando
 *  - Alberich-Pascual, Jordi (2018): «Elementos de la creatividad multimedia: apropiación, remediación, hibridación»
 *  - Fontcuberta, Joan (2016): La furia de las imágenes: Notas sobre la postfotografía
 *  - Resnick, Mitchel (2007): «Sowing the Seeds for a More Creative Society»
 *  - Velasco Padial, Paula (2017): «Reseña de La furia de las imágenes...» (Arte, Individuo y Sociedad 29, n.º 2)
 * ========================================================
 */

var TheoryContent = window.TheoryContent = {
  phase1: {
    analog: {
      title: 'Fase 1 (Analógico): Indexicalidad, Huella Física y el “Esto ha sido”',
      body: `
        <div class="theory-citation">
          <blockquote>"El punto de inflexión se gesta cuando el píxel sustituye al nitrato de plata. Esto supone un nuevo desafío, pues el formato digital termina de una vez por todas con las ideas de indexicalidad (Peirce) y transparencia (Walton)."</blockquote>
          <cite>— Joan Fontcuberta, <em>La furia de las imágenes</em> (2016) / Paula Velasco Padial (2017)</cite>
        </div>
        <p><strong>1. El Signo Indexical (Charles S. Peirce):</strong> En la fotografía argéntica tradicional, la luz reflejada por el referente golpea físicamente los cristales de haluro de plata. Existe un vínculo material, causal y físico entre el objeto real y su huella en el celuloide (la <em>indexicalidad</em>).</p>
        <p><strong>2. El Prisma de Imagen Partida y el Exposímetro TTL:</strong> Enfocar y medir la luz son operaciones mecánicas sujetas al error físico. Si no alineas las dos mitades del prisma o no equilibras la aguja galvanométrica con las ruedas de velocidad y diafragma, la emulsión quedará desenfocada o quemada de forma irreversible.</p>
        <p><strong>3. El Noema de Roland Barthes (“Esto ha sido” / <em>Ça a été</em>):</strong> En <em>La cámara lúcida</em> (1989 [1980]), <strong>Roland Barthes</strong> definió el noema de la fotografía como el certificado de presencia real del referente ante el objetivo. Durante siglo y medio, la finitud de los carretes de 35 mm (12, 24 o 36 exposiciones) y el registro fotoquímico sostuvieron la fe en el realismo documental; sin embargo —como matiza críticamente <strong>Paula Velasco Padial</strong> (2017)— la fotografía nunca fue un registro neutro: todo <em>"esto ha sido"</em> contuvo siempre un <em>"para mí"</em> implícito (una mirada subjetiva) y una vocación de escritura visual.</p>
      `
    },
    digital: {
      title: 'Fase 1 (Digital): El Homo Photographicus, la Superabundancia y el “Yo estaba allí”',
      body: `
        <div class="theory-citation">
          <blockquote>"La postfotografía hace referencia a la fotografía que fluye en el espacio híbrido de la sociabilidad digital y que es consecuencia de la superabundancia visual [...] Hoy todos somos productores y consumidores de imágenes: aparece el <em>Homo photographicus</em>."</blockquote>
          <cite>— Joan Fontcuberta, <em>La furia de las imágenes</em> (2016, pp. 7, 32)</cite>
        </div>
        <p><strong>1. Del <em>Homo faber</em> al <em>Homo photographicus</em> (Fontcuberta, 2016):</strong> Los teléfonos móviles giran hoy en torno a la cámara y la conexión en red. Ya no es necesario dominar las reglas ópticas de un aparato complejo: el software toma el mando (<strong>Manovich, 2013</strong>), automatiza el enfoque (Visión IA) y democratiza el disparo con coste marginal cero, diluyendo la frontera clásica entre el ojo experto y el <em>amateur</em>.</p>
        <p><strong>2. Inmediatez Transparente vs. Hipermediación (Bolter y Grusin, 2000 [orig. 1999]):</strong> La pantalla ofrece una ventana inmediata (WYSIWYG), pero superpone simultáneamente recuadros de reconocimiento facial, etiquetas de IA y métricas de sincronización en la nube.</p>
        <p><strong>3. Del “Esto ha sido” al “Yo estaba allí” (<em>Imago, ergo sum</em>):</strong> En la era <em>selfie</em>, Fontcuberta (2016) señala que no buscamos tanto registrar el mundo para el futuro como afirmar nuestro estar en el mundo en un <em>"presente en suspensión, eternizado"</em> y compartirlo al instante como acto de comunicación interpersonal.</p>
      `
    }
  },
  phase2: {
    analog: {
      title: 'Fase 2 (Analógico): Alquimia del Cuarto Oscuro y Fricción Temporal',
      body: `
        <div class="theory-citation">
          <blockquote>"En los albores de lo fotográfico, la dificultad de un procedimiento cuasi alquímico hacía que la imagen estuviese ligada a una materialidad lenta, finita e irreversible sobre sales de plata y papel baritado."</blockquote>
          <cite>— Paula Velasco Padial (2017) & Lev Manovich (2005 [2001])</cite>
        </div>
        <p><strong>1. La Latencia y la Espera:</strong> En el paradigma analógico existe una separación temporal obligatoria entre el instante de la toma y la contemplación de la imagen. Las 12 exposiciones del carrete permanecen invisibles (imagen latente) hasta sumergirse por tiras de 4 fotogramas en los baños del cuarto oscuro.</p>
        <p><strong>2. Huella Continua e Inmutable:</strong> Al pasar del estado oculto al negativo de colores invertidos y finalmente al positivo en papel, la reacción química fija para siempre los aciertos o errores de exposición (diafragma/velocidad) y de enfoque cometidos en la Fase 1.</p>
      `
    },
    digital: {
      title: 'Fase 2 (Digital): Transcodificación, Desmaterialización y el Software al Mando',
      body: `
        <div class="theory-citation">
          <blockquote>"Para la fotografía digital la verdad constituía una opción, no ya una obstinación [...] La fotografía digital es consecuencia de una economía que privilegia la información como mercancía: tiene como material el lenguaje, los códigos y los algoritmos."</blockquote>
          <cite>— Joan Fontcuberta, <em>La furia de las imágenes</em> (2016, p. 30) & Lev Manovich (2013)</cite>
        </div>
        <p><strong>1. El Píxel sustituye al Haluro de Plata (Representación Numérica, Manovich, 2005):</strong> La imagen pierde su cuerpo físico (<em>inmaterialidad y transmitabilidad</em>). Al convertirse en una matriz discreta de valores RGB y metadatos EXIF, se rompe el vínculo indexical con el referente físico.</p>
        <p><strong>2. El Software Toma el Mando (Manovich, 2013):</strong> Lo que denominamos "fotografía digital" es, en realidad, una ejecución algorítmica de software que hibrida técnicas previas. Como subraya Fontcuberta (2016), la facilidad de esta mediación computacional educa la suspicacia del público contemporáneo.</p>
        <p><strong>3. Transcodificación Cultural (Manovich, 2005):</strong> Google Photos traduce la experiencia humana (<em>capa cultural</em>) en vectores de 512 dimensiones, coordenadas GPS y etiquetas de visión artificial (<em>capa informática</em>).</p>
      `
    }
  },
  phase3: {
    analog: {
      title: 'Fase 3 (Analógico): El Álbum Físico como Sintagma, Memoria y Escritura',
      body: `
        <div class="theory-citation">
          <blockquote>"Si la fotografía ha estado tautológicamente ligada a la verdad y a la memoria [...] el álbum familiar funcionaba como una narración cronológica cerrada y un objeto tangible de evocación del pasado."</blockquote>
          <cite>— Joan Fontcuberta (2016, p. 15) & Lev Manovich, Cap. 5 'La Base de Datos' (2005 [2001])</cite>
        </div>
        <p><strong>1. Narrativa Secuencial Cerrada (Manovich, 2005):</strong> El álbum físico impone un orden sintagmático: página tras página, las copias reveladas se fijan artesanalmente con 4 esquineras en el orden del carrete.</p>
        <p><strong>2. La Fotografía como Escritura y Gesto Social:</strong> La dedicatoria manuscrita al pie de cada foto confirma la tesis de Paula Velasco Padial (2017): la fotografía siempre fue simultáneamente <em>arte y documento</em>, <em>escritura y lenguaje</em>, y un acto social concebido para ser compartido con los demás.</p>
      `
    },
    digital: {
      title: 'Fase 3 (Digital): Base de Datos, Remediación como Apropiación y Ecología Visual',
      body: `
        <div class="theory-citation">
          <blockquote>"Un medio remedia a otro cuando se apropia de las técnicas, las formas y la significación social de otros medios y aspira a competir con ellos o a remodelarlos en nombre de lo real."</blockquote>
          <cite>— Jay David Bolter y Richard Grusin, <em>Remediation</em> (2000 [orig. 1999], p. 45) / Jordi Alberich-Pascual (2018)</cite>
        </div>
        <p><strong>1. Remediación como Apropiación e Hibridación (Bolter y Grusin, 2000: 45; Alberich-Pascual, 2018):</strong> Google Photos no se limita a establecer una simple comparación con el álbum analógico, sino que <strong>se apropia de sus formas, metáforas visuales</strong> (cuadrículas de copias, portadas destacadas, páginas cronológicas) y de su <strong>significación social</strong> (el ritual de preservar y compartir la memoria familiar) para redefinirlas algorítmicamente mediante el software (<strong>Manovich, 2013</strong>).</p>
        <p><strong>2. La Base de Datos frente al Relato Lineal (Manovich, 2005):</strong> Frente al álbum secuencial cerrado, Google Photos opera como un paradigma relacional abierto. No hojeamos páginas físicamente: ejecutamos consultas (<em>queries</em>) instantáneas por reconocimiento facial, etiquetas semánticas, fechas o coordenadas GPS.</p>
        <p><strong>3. Adopción Digital y Prescripción de Sentido (Fontcuberta, 2016):</strong> En la era de la <em>infoxicación</em>, la autoría romántica cede paso a la <strong>ecología de las imágenes</strong>. Al subir fotos propias, recontextualizarlas o aplicar filtros no destructivos (<em>Principio de Variabilidad</em>), el valor creativo ya no reside en fabricar más imágenes, sino en dotarlas de intención, acogerlas y prescribirles sentido.</p>
      `
    }
  }
};
