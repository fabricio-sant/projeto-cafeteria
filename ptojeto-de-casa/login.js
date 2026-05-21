const inputSenha = document.getElementById('senha');
const btnOlho = document.getElementById('btn-mostrar-senha');
const iconeOlho = document.getElementById('icone-olho');

btnOlho.addEventListener('click', function () {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text'; 
        iconeOlho.textContent = 'visibility_off'; 
        btnOlho.setAttribute('aria-label', 'Ocultar senha');
    } else {
        inputSenha.type = 'password'; 
        iconeOlho.textContent = 'visibility'; 
        btnOlho.setAttribute('aria-label', 'Mostrar senha');
    }
});