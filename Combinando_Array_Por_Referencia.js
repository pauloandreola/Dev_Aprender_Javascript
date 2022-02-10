let primeiro = [{id: 1}];
let segundo = [3, 4, 5];
primeiro[0].id = 10;

//  Combinando duas Arrays
const concatenado = primeiro.concat(segundo);
console.log(concatenado);

// Opção 1 passadno o índice inicial e o final que ele sempre vai dividir na posição informada -1
const dividido01 = concatenado.slice(0,2);
console.log(dividido01);

//  Foi alterado em todos as Arrays