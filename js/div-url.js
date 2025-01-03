const infoBoxes = document.querySelectorAll('.info-box');

infoBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Obtiene el atributo "data-url" del elemento
        const url = box.getAttribute('data-url');
        if (url) {
            // Redirige a la URL
            window.open(url, '_blank'); // Abre en una nueva pestaña
        }
    });
});

