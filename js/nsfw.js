document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const uwuMode = urlParams.get('nsfw') === 'true';
  
  if (uwuMode) {
    // Añadir clase al body
    document.body.classList.add('nsfw-mode');
    
    // Cambiar imagen del hero
    const hero = document.getElementById('hero');
    if (hero) {
      hero.style.backgroundImage = "url('/img/modeusnsfw.svg')";
    }
    
    // Cambiar imágenes de las secciones
    const sectionImages = document.querySelectorAll('.section-image');
    sectionImages.forEach((img, index) => {
      img.style.backgroundImage = `url('/img/icons/uwu-section-${index + 1}.webp')`;
    });
  }
});