document.addEventListener('DOMContentLoaded', () => {
    
    // Fecha o menu mobile automaticamente ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarCollapse).display !== 'none' && 
                window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });

    // Adiciona classe 'scrolled' na navbar ao rolar a página
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black');
            navbar.classList.remove('bg-custom-dark');
        } else {
            navbar.classList.add('bg-custom-dark');
            navbar.classList.remove('bg-black');
        }
    });

    // Inicialização manual do Carrossel (Opcional, pois usamos data-bs-ride)
    const myCarousel = document.querySelector('#carouselServices');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 5000,
            wrap: true
        });
    }
});