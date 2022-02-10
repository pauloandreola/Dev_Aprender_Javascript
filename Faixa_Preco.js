// Criar um array de objetos de faixa de preços para que ele possa ser usado igual ao mercado livre
// faixas, tooltip, 

// Primeira opção
let faixas01 = [

    {tooltip: 'até R$699', minimo: 0, maximo: 699},
    {tooltip: 'de R$700 a R$999', minimo: 700, maximo: 999},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 9999999},

];

// Segunda opção  (Factory Function)
function criarFaixaPreco(tooltip, minimo, maximo) {

  return {

    tooltip,
    minimo,
    maximo

  }

}

let faixas02 = [

  criarFaixaPreco('a', 1, 100),
  criarFaixaPreco('b',100,1000),
  criarFaixaPreco('c',1000,10000)

]

//  Terceira opção   (Constructor Function)
function FaixaPreco(tooltip, minimo, maximo) {

  this.tooltip = tooltip,
  this.minimo = minimo,
  this.maximo = maximo

}
 let faixas03 = [

   new FaixaPreco('d', 10, 19),
   new FaixaPreco('e', 20, 29),
   new FaixaPreco('f', 30, 39)

 ];

console.log(faixas01);  // Apresentando Primeira opção
console.log(faixas03);  // Apresentando Terceira opção
console.log(faixas02);  // Apresentando Segunda opção