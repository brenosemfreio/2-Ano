/* Este sistema tem como objetivo filtrar os clientes maiores de idade de uma loja. O cadastro do cliente deve conter: nome, idade e e-mail. Após o filtro, também será possivel cadastrar novos clientes para visualizar no HTML. */

//Criando nossa base de dados (lista-array) de clientes em um arquivo par chave-valor:

        let clientes = [
    {
        nome: "Anna",
        idade: 25,
        email: "anna@gmail.com"
    },
    {
        nome: "Gabriel",
        idade: 17,
        email: "gabriel@gmail.com"
    },
    {
        nome: "Isabella",
        idade: 18,
        email: "isa@gmail.com"
    },
    {
        nome: "Lucas",
        idade: 20,
        email: "lucas@gmail.com"
    },
    {
        nome: "Mariannna",
        idade: 30,
        email: "mariannna@gmail.com"
    },
    {
        nome: "João",
        idade: 16,
        email: "joao@gmail.com"
    },
    {
        nome: "Fernanda",
        idade: 22,
        email: "fernanda@gmail.com"
    },
    {
        nome: "Ricardo",
        idade: 19,
        email: "ricardo@gmail.com"
    },
    {
        nome: "Carla",
        idade: 27,
        email: "carla@gmail.com"
    },
    {
        nome: "Pedro",
        idade: 15,
        email: "pedro@gmail.com"
    },
    {
        nome: "Sofia",
        idade: 21,
        email: "sofia@gmail.com"
    }
];
        // Esta função acessa os objetos (clientes) com idade maior ou igual a 18 anos e retorna os dados
        function filtrarClientesAdultos(clientes) {
            return clientes.idade >= 18;
        }
        // Esta função é invocada quando clicamos no botão mostrarCLientesAdultos
        function mostrarClientesAdultos() {
            let clientesAdultos = clientes.filter(filtrarClientesAdultos);

            let lista = document.getElementById("listaClientesAdultos");

            lista.innerHTML = ""; // Limpa os dados antes de mostrar no HTML

            //Percorre o array e cria um novo item na lista
            for (let i = 0; i < clientesAdultos.length; i++) {
                let item = document.createElement("li"); // Cria um novo item de lista (<li) para cada cliente adulto

                //Exibe os dados no item da lista criada: nome do cliente, idade do cliente e o e-mail do cliente (filtrados) e armazenados na variavel clientesAdultos.

                item.textContent = clientesAdultos[i].nome + " (" + clientesAdultos[i].idade + " anos) - " + clientesAdultos[i].email;
                lista.appendChild(item);
             
        }
        
        }

        // Castra novo cliente na lista
        function cadastrarCliente() {
            var nome = document.getElementById("nomeCliente").value;
            var idade = parseInt(document.getElementById("idadeCliente").value);
            var email = document.getElementById("emailCliente").value;

            //Validação simples: nome deve ter nome preenchido/idade e e-mail também, caso contrário exibe m
            if (nome && idade && email){
                clientes.push({
                    nome: nome,
                    idade: idade,
                    email: email
                });

                document.getElementById("mensagemCadastro").textContent = "Cliente cadastrado com sucesso!";
                document.getElementById("nomeCliente").value = "";
                document.getElementById("idadeCliente").value = "";
                document.getElementById("emailCliente").value = "";
             } else {
                document.getElementById("mensagemCadastro").textContent = "Preencha todos os campos corretamente.";
             }
        }