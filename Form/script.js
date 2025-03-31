document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var usuario = document.getElementById("usuario").value;
        var senha = document.getElementById("senha").value;
        var mensagem = document.getElementById("mensagem");
        
        if (usuario === "usuario" && senha === "1234") {
            mensagem.textContent = "Login bem-sucedido!";
            mensagem.style.color = "green";
        } else {

            mensagem.textContent = "Usuário ou senha incorretos!";
            mensagem.style.color = "red";
        }
    });
});
