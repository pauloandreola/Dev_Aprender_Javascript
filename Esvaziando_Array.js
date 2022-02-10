let numeros = [0, 1, 2, 3, 4];
let relacaoNumeros = numeros;

console.log(numeros);
console.log(relacaoNumeros);

//  Solução 01
numeros = [];
console.log(numeros);
console.log(relacaoNumeros);

// Com o comando acima apagamos o conteúdo dentro da Array, porém se ela está atribuida em outra variável como neste exemplo relacaoNumeros os valroes permancem dentro desta segunda variável.

//  Solução 02
numeros.length = 0;
console.log(numeros);
console.log(relacaoNumeros);

// Solução 03
numeros.splice (0, numeros.length);
console.log(numeros);
console.log(relacaoNumeros);

//  Solução 04
// Solução com baixa performance, se a Array for muito grande não vale a pena
while (numeros.lenght > 0)
numeros.pop();
console.log(numeros)