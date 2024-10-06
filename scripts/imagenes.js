const visibleImages = document.querySelector('.visible-images');

// Asegúrate de que la galería esté correctamente alineada
function setGalleryWidth() {
    const totalImages = visibleImages.children.length;
    visibleImages.style.width = `${totalImages * 20}%`; // 20% por cada imagen
}

// Llama a la función para establecer el ancho de la galería
setGalleryWidth();






