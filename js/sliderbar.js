document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeMenu = document.querySelector('.close-menu');

    function toggleMenu() {
        sidebar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

    // Cerrar menú cuando se hace clic fuera
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Cerrar menú cuando se hace clic en un enlace del sidebar
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});


// Animación de aparición de contenido (sin cambios)
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.content, .section-image, .info-boxes-container').forEach((element) => {
        observer.observe(element);
    });
});
