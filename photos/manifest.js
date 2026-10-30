/**
 * Manifiesto de la Colección de 36 Fotogramas Vectoriales
 * Ordena y valida la colección cargada de archivos independientes.
 */
window.PhotoLibrary = window.PhotoLibrary || [];
window.PhotoLibrary.sort((a, b) => a.frameNumber - b.frameNumber);
console.log(`[Fototeca] Cargados ${window.PhotoLibrary.length} fotogramas independientes en la colección.`);


