let primeiro = [0, 1, 2];
let segundo = [3, 4, 5];

//  Combinando duas Arrays com spread 
const concatenado01 = [...primeiro, ...segundo];
console.log(concatenado01);
console.log('');

const concatenado02 = [...primeiro,'a',...segundo,'b'];
console.log(concatenado02);
console.log('');

// Clonando com Operador spread
const clonado = [...concatenado01];
console.log(clonado);