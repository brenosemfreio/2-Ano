let listaPresenca = ["Breno", "Anna", "Julia"];

function verificarPresenca(nome) {
    if(listaPresenca.includes(nome)){
        return nome + "está presente."
    }   
    else {
        return nome + "Não está presente."
    }
}
console.log(verificarPresenca("Breno, "));
console.log(verificarPresenca("Isabelly, "));
console.log(verificarPresenca("Italo, "));

