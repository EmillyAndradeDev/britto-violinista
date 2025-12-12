/**
 * Scripts Específicos e Lógica de Formulário
 */

// Função para formatar e enviar mensagem para o WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Captura os dados
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Número do WhatsApp (somente números)
        const numeroWhatsApp = "5512981354209"; 

        // Cria a mensagem formatada
        const texto = `Olá, vim pelo site! %0A
        *Nome:* ${nome} %0A
        *Email:* ${email} %0A
        *Mensagem:* ${mensagem}`;

        // Abre o link
        const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
        window.open(url, '_blank');
        
        // Limpa o formulário (opcional)
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