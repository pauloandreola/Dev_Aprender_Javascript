const relacaoNumeros = [0, 1, 2, 3, 4, 5];
const relacaoLetras = ['a', 'b', 'c', 'd'];

//  Forma antiga para passar por todos os números
for(numero of relacaoNumeros)
  console.log(numero);
  console.log('');

for (letra of relacaoLetras)
  console.log(letra);
  console.log('');

// Outra forma mais simples
relacaoNumeros.forEach(function(numero) {

  console.log(numero);

})
console.log('');

relacaoLetras.forEach(function(letra) {

  console.log(letra);

})
console.log('');

//  Mais Outra forma mais simples
relacaoNumeros.forEach((numero) => console.log(numero));
console.log('');

// Da mesma forma acima, mais simples, porém com índice e letra
relacaoLetras.forEach((letra, indice) => console.log(letra, indice));
console.log('');

// Invertendo a posição
relacaoLetras.forEach((letra, indice) => console.log(indice, letra));