let idade01 = 10;

console.log(idade01++); // esta apresentando o valor e incrementando
console.log(idade01); // apresentando o valor apos incrementar

let idade02 = 20;

console.log(++idade02); // está incrementando o valor jã incrementado
console.log(idade02); // apresentando o valor depois de incrementado

let idade03 = 30;

console.log(idade03--); // está apresentando o valor e decrementando
console.log(idade03); // apresentando valor após decrementar

let idade04 = 40;

console.log(--idade04); // está decrementando o valor já decrementado
console.log(idade04); // apresentando o valor depois de decrementado

let adicionando = 100;
adicionando += adicionando; // Somando valores/concatendando
console.log(adicionando);


let adicionando01 = 50;
adicionando01 -= adicionando01; // Subtraindo valores de forma simples
console.log(adicionando01);

// igualdade estrita

console.log (1 === 1); // comparando integer com integer
console.log('1' === 1); // comparando string com integer

// igualdade solta

console.log (1 == 1); // igualdade de integer
console.log ('1' == 1); // ***igualdade Não recomedado***

// operadores ternarios
//forma simples de fazer comparações do tipo (FOR e WHILE)

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

let pontos01 = 200;
let tipo01 = pontos01 > 100 ? 'premium' : 'comum';
console.log(tipo01);

let maiorIdade = true;
let temCnhTemporaria = true
let temCnh = true;
let atualizacaoCarteira = false;

let podeDirigir = maiorIdade && temCnhTemporaria;
console.log("Pode dirigir", podeDirigir);

let conseguirCnh = maiorIdade || temCnhtemporaria;
console.log("Pode ter CNH definitiva", conseguirCnh);

let renovarCnh = !atualizacaoCarteira && temCnh;
console.log("Precisa renovar CNH", renovarCnh);

// Valores Falsy
// undefined
// null
// 0
// false
// ''
// Nan - not  a number

// Valores Truthy
// todo o resto que não é falsy é Truthy

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

// No OR || ele precisa somente de um valor Truthy e para a comparação

let corPersonalizada01 = '';
let corPadrao01 = 'Azul';
let corPerfil01 = corPersonalizada01 || corPadrao01;
console.log(corPerfil01);

let corPersonalizada02 = null;
let corPadrao02 = NaN;
let corPerfil02 = corPersonalizada02 || corPadrao02;
console.log(corPerfil02);