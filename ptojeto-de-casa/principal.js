// Controla a abertura do menu lateral e o recuo do card para trás
function toggleMenu() {
    const menu = document.getElementById('menuLateral');
    const botao = document.getElementById('btnMenu');
    const balaoCuriosidade = document.getElementById('balaoCuriosidade'); 
    
    menu.classList.toggle('ativo');
    botao.classList.toggle('ativo');
    balaoCuriosidade.classList.toggle('indo-para-tras'); 
}

// --- SISTEMA AUTOMÁTICO DO BALÃO DE CURIOSIDADES ---
const frasesCafe = [
    "Dica do Barista: Nosso Espresso combina perfeitamente com o bolo de nozes do cardápio! 🍰",
    "Você sabia? O café Zenith é produzido com grãos 100% Arábica, cultivados na sombra para um sabor mais doce.",
    "Uma boa ideia começa com um café. Uma grande ideia começa com um Zenith. 🧠✨",
    "Precisa de ajuda? Clique no botão de menu no canto superior para chamar o garçom! 🔔",
    "Curiosidade: O café espresso tem menos cafeína por xícara do que o café coado tradicional!",
    "Friozinho combinando com Zenith Coffee... Já deu uma olhada nas nossas opções de Cappuccino hoje? 🍫"
];

let indiceAtual = 0;

function atualizarBalao() {
    const elementoBalao = document.getElementById('balaoCuriosidade');
    const elementoTexto = document.getElementById('textoCuriosidade');
    
    // Trava de segurança: não altera o texto se o menu estiver aberto
    if (elementoBalao.classList.contains('indo-para-tras')) return;

    // Adiciona efeito rápido de sumir antes de trocar o texto
    elementoBalao.classList.add('balao-escondido');
    
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % frasesCafe.length;
        elementoTexto.innerHTML = frasesCafe[indiceAtual];
        elementoBalao.classList.remove('balao-escondido');
    }, 500);
}

// Rotaciona as frases a cada 7 segundos automaticamente
setInterval(atualizarBalao, 7000);