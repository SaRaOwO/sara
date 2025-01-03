// Definir las rutas
const routes = {
    '/privacy-policy': 'privacy-policy',
    '/terms-of-use': 'terms-of-use'
};

// Función para manejar los clics en los enlaces
function handleNavigation(e) {
    // Solo para los enlaces internos
    if (e.target.tagName === 'A' && !e.target.href.startsWith('https://')) {
        e.preventDefault();
        const path = new URL(e.target.href).pathname;
        const route = routes[path];
        if (route) {
            // La redirección ahora la maneja .htaccess
            window.location.pathname = route;
        }
    }
}

// Agregar el event listener al nav
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', handleNavigation);
    }
});