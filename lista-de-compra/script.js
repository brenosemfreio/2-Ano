document.addEventListener('DOMContentLoaded', function() {
    var lista = ['arroz', 'feijão', 'macarrão'];
    var listaDeCompras = document.getElementById('listaDeCompras');
    var botao = document.getElementById('adicionarItemBtn');
    var campo = document.getElementById('itemInput');

    // Mostrar itens iniciais
    for (var i = 0; i < lista.length; i++) {
        var li = document.createElement('li');
        li.textContent = lista[i];
        listaDeCompras.appendChild(li);
    }

    botao.addEventListener('click', function() {
        if (lista.length >= 5) {
            alert('Sua lista está completa.');
            return;
        }

        var novoItem = campo.value.trim();

        if (novoItem === '') {
            alert('Digite um item válido.');
            return;
        }

        lista.push(novoItem);

        var li = document.createElement('li');
        li.textContent = novoItem;
        listaDeCompras.appendChild(li);

        alert('Item adicionado com sucesso!');

        campo.value = '';
        campo.focus();

        if (lista.length >= 5) {
            alert('Sua lista está completa.');
        }
    });
});
