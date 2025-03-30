var idade = 18;
var estadoCivil = "casado";
var motoristasAdicionais = 0;
var classePerigo = "c";
var valorBase = 0;

if (idade >= 18 && idade <= 27) {
    valorBase = 300;
} else if (idade >= 28 && idade <= 50) {
    valorBase = 230;
} else if (idade > 50) {
    valorBase = 270;
} else {
    console.log("Idade inválida.");
}

if (estadoCivil === "solteiro") {
    valorBase += valorBase * 0.20;
} else if (estadoCivil !== "casado") {
    console.log("Estado civil inválido. Use 'solteiro' ou 'casado'.");
}

if (motoristasAdicionais > 0) {
    valorBase += valorBase * (0.10 * motoristasAdicionais);
}

if (classePerigo === "a") {
    valorBase += valorBase * 0.10;
} else if (classePerigo === "b") {
    valorBase += valorBase * 0.20;
} else if (classePerigo === "c") {
    valorBase += valorBase * 0.30;
} else {
    console.log("Classe de perigo inválida. Use 'A', 'B' ou 'C'.");
}

console.log("O valor final do seguro é: R$" + valorBase);
