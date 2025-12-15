// Função para formatar e enviar mensagem para o WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Captura os dados
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Número do WhatsApp
        const numeroWhatsApp = "5512981354209"; 

        // Cria a mensagem formatada
        const texto = `Olá, vim pelo site! %0A
        *Nome:* ${nome} %0A
        *Email:* ${email} %0A
        *Mensagem:* ${mensagem}`;

        // Abre o link
        const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
        window.open(url, '_blank');
        
        contactForm.reset();
    });
}

// Scroll Suave para links internos (compatibilidade extra)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Compensa a altura do menu fixo
            const headerOffset = 70; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

/* Animação ao Rolar (Scroll Animation)
   Adiciona a classe .in-view quando o elemento entra na tela
*/

document.addEventListener("DOMContentLoaded", function() {
    
    const observerOptions = {
        root: null,        // Observa a viewport (tela do dispositivo)
        rootMargin: '0px', // Sem margens extras
        threshold: 0.1     // Dispara quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que faz o elemento subir e aparecer
                entry.target.classList.add('in-view');
                
                // Para de observar o elemento depois que ele apareceu
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que tem a classe .animate-up
    const animatedElements = document.querySelectorAll('.animate-up');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});