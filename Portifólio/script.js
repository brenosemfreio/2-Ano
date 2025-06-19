  let acesa = false;

  function trocarLampada() {
    const lampada = document.getElementById('lampada');
    const contatos = document.getElementById('contatos');

    acesa = !acesa;

    lampada.src = acesa
      ? 'img/acesa.png'
      : 'img/apagada.png';

    if (acesa) {
      contatos.classList.add('contato-ativo');
    } else {
      contatos.classList.remove('contato-ativo');
    }
  }

