let cor = "azul";

function resetaCor () {
  cor = null;
}

console.log(cor);
resetaCor();
console.log(cor);

let outraCor = "azul";

function corAjuste (color,tonalidade) {
  outraCor = color + ' ' + tonalidade; // Unindo as palavras/strings e passando por parâmetro
} 

console.log(outraCor);
corAjuste("vermelho","claro");
console.log(outraCor);