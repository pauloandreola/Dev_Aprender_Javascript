let primeiro = [0, 1, 2];
let segundo = [3, 4, 5];

//  Combinando duas Arrays
const concatenado = primeiro.concat(segundo);
console.log(concatenado);

//  Dividindo duas Arrays
// Com o metodo slice temos 3 opções

// Opção 1 passadno o índice inicial e o final que ele sempre vai dividir na posição informada -1
const dividido01 = concatenado.slice(2,4);
console.log(dividido01);

// Opção 2 extrai todos os valores inciando do índice informado até o final da Array
const dividido02 = concatenado.slice(3);
console.log(dividido02);

// Opção 3 extrai todos os valores para a nova Array 
const dividido03 = concatenado.slice();
console.log(dividido03);