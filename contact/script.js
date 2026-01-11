const form = document.getElementById('form-services');
const mensagem = document.getElementById('sucesso')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const dados = new FormData(form);
    const pedido = {
        nome: dados.get('nome'),
        email: dados.get('email'),
        telefone: dados.get('telefone'),
        servico: dados.get('service')
    };

    console.log('Pedido recebido: ', pedido)
    alert('formulario enviado')
    window.location.href="../home/index.html"
    
});