let clientes=[
    {
      nome: "Anna",
      idade: 25,
      email: "anna@email.com"
  },
    {
      nome: "Gabriel",
      idade: 17,
      email: "gabriel@email.com"
    },
     {
      nome: "Isabella",
      idade: 18,
      email: "isa@email.com"
    },
     {
        nome: "Lucas",
        idade: 22,
        email: "lucas@email.com"
      },
      {
        nome: "Mariana",
        idade: 19,
        email: "mariana@email.com"
      },
      {
        nome: "Pedro",
        idade: 16,
        email: "pedro@email.com"
      },
      {
        nome: "Fernanda",
        idade: 30,
        email: "fernanda@email.com"
      },
      {
        nome: "Bruno",
        idade: 20,
        email: "bruno@email.com"
      },
      {
        nome: "Larissa",
        idade: 15,
        email: "larissa@email.com"
      },
      {
        nome: "Eduardo",
        idade: 28,
        email: "eduardo@email.com"
      }  
];
// Esta função acessa os objetos (clientes) com idade maior ou igual a 18 anos e retorna os dados
    function filtrarClientesAdultos(clientes) {
      return clientes.idade >= 18;
    }
// Esta função é invocada quando clicamos no botão mostrarClientesAdultos
    function mostrarClientesAdultos() {
      let clientesAdultos = clientes.filter(filtrarClientesAdultos);

      let lista = document.getElementById("listaClientesAdultos");

      lista.innerHTML = ""; //Limpa os dados antes de mostrar no HTML

// Percorre o array e cria um novo item de lista
      for (let i = 0; i < clientesAdultos.length; i++) {
        let item = document.createElement("li"); //Cria um novo item de lista (<li>) para cada cliente adulto.
//Exibe os dados no ítem da lista criada: nome do cliente, idade do cliente e o e-mail do cliente (filtrados) e armazenados na variável clientesAdultos.
        item.textContent = clientesAdultos[i].nome + " (" + clientesAdultos[i].idade + " anos) - " + clientesAdultos[i].email;
        lista.appendChild(item);
      }
    }  
    // Cadastra novo cliente na lista
    function cadastrarCliente() {
      let nome = document.getElementById("nomeCliente").value;
      let idade = parseInt(document.getElementById("idadeCliente").value);
      let email = document.getElementById("emailCliente").value;

      // Validação simples: nome deve ter nome preenchido/idade e e-mail também, caso contrário exibe msg
      if (nome && idade && email) {
        clientes.push({ nome: nome, idade: idade, email: email });

        document.getElementById("mensagemCadastro").textContent = "Cliente cadastrado com sucesso!";
        document.getElementById("nomeCliente").value = "";
        document.getElementById("idadeCliente").value = "";
        document.getElementById("emailCliente").value = "";
      } else {
        document.getElementById("mensagemCadastro").textContent = "Por favor, preencha todos os campos.";
      }
    }