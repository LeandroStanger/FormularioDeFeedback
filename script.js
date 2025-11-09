document.getElementById('feedback').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assuntotxt = document.getElementById('assuntotxt').value;
    const texto = document.getElementById('texto').value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    const sugestao = document.getElementById('sugestao').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('assuntotxt', assuntotxt);
    localStorage.setItem('texto', texto);
    localStorage.setItem('rating', rating);
    localStorage.setItem('sugestao', sugestao);

    document.getElementById('mensagem').textContent = `Obrigado, ${nome}! Seu feedback (Nota: ${rating}★) foi enviado com sucesso! Sua sugestão foi ${sugestao}.`;
    this.reset();

    alert(`Obrigado, ${nome}! Você enviou com suceso!!!`)
});

document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="enviar"]');

    // 1) Ao carregar, recupera e marca a nota salva
    const saved = localStorage.getItem('rating');
    if (saved) {
        const r = document.getElementById('star' + saved);
        if (r) r.checked = true;
    }

    // 2) Ao mudar, salva em localStorage
    radios.forEach(radio => {
        radio.addEventListener('change', e => {
            localStorage.setItem('rating', e.target.value);
        });
    });
});

document.getElementById('feedback').addEventListener('submit', function(e) {
    e.preventDefault();
    
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        window.location.href = 'obrigado.html#obrigado';
    }).catch(error => {
        console.error('Erro:', error);
    });
});