let adultos = 1;
let crianças = 1;
let destino = "Ásia";
let classe = "Executiva";	


//Ásia

if (destino === "Ásia" && classe === "Econômica") {
    preco = 4600;
    total = preco * (adultos + crianças);
}
else if (destino === "Ásia" && classe === "Executiva") {
    preco = 6800;
    total = preco * (adultos + crianças);
}


//Europa

if (destino === "Europa" && classe === "Econômica") {
    preco = 5800;
    total = preco * (adultos + crianças);
}
else if (destino === "Europa" && classe === "Executiva") {
    preco = 7300;
    total = preco * (adultos + crianças);
}

//Africa

if (destino === "Africa" && classe === "Econômica") {
    preco = 4200;
    total = preco * (adultos + crianças);
}
else if (destino === "Africa" && classe === "Executiva") {
    preco = 6900;
    total = preco * (adultos + crianças);
}
 
//Nacional
//Norte

if (destino === "Norte" && classe === "Econômica") {
    precoadulto = adultos * 2500;
    precocrianca = crianças * 1800;
    total = precoadulto + precocrianca;
}
else if (destino === "Norte" && classe === "Executiva") {
    precoadulto = 2500 + (20/100)*2500;
    precocrianca = 1800 + (10/100)*1800;
    total = precoadulto * adultos + precocrianca * crianças; 
}


//Sul

if (destino === "Sul" && classe === "Econômica") {
    preco = 3000;
    total = preco * (adultos + crianças);
}
else if (destino === "Sul" && classe === "Executiva") {
    preco = 4000;
    total = preco * (adultos + crianças);
}

console.log("Adultos: " + adultos, "/  Crianças: " + crianças, "/  Destino: " + destino, "/  Classe: " + classe, "/  Total: R$" + total);
