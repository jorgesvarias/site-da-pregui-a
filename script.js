// script.js

// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Função para mostrar a aba correspondente
function showTab(targetId) {
    // Esconde todas as abas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostra a aba correspondente ao link clicado
    const targetTab = document.getElementById(targetId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// Adiciona eventos de clique a cada link do menu
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o redirecionamento
        const targetId = this.getAttribute('data-target');
        showTab(targetId);
    });
});

// Mostra a aba inicial (Home)
showTab('home');
