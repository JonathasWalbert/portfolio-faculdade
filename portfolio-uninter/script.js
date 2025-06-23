let button = document.getElementById('whatsapp-form');





button.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let mensagem = document.getElementById('mensagem').value.trim();

    if(nome !== '' || mensagem !== ''){
        const numberWpp = '5596984051486'
        const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
        const url = `https://wa.me/${numberWpp}?text=${encodeURIComponent(texto)}`;
        window.open(url, '_blank');

        document.getElementById('nome').value = '';
        document.getElementById('mensagem').value = '';

    } else {
            alert('Por favor, preencha todos os campos.');
        }
})

