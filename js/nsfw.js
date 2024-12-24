document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const uwuMode = urlParams.get('nsfw') === 'true';

    if (uwuMode) {
      document.body.classList.add('nsfw-mode');
      
      const sectionImages = document.querySelectorAll('.section-image');
      sectionImages.forEach((img, index) => {
        img.style.backgroundImage = `url('/img/icons/uwu-section-${index + 1}.webp')`;
      });
    }
  });