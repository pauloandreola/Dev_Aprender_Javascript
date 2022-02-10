const numeros = [1, 2, 3, 4, 5, 6];

// Inserindo caracter entre os valores
const novaSaida01 = numeros.join('*');
console.log(novaSaida01);

// Inserindo caracter entre os valores
const novaSaida02 = numeros.join(' * ');
console.log(novaSaida02);

// Inserindo caracter entre os valores
const novaSaida03 = numeros.join('-');
console.log(novaSaida03);

// Separando uma frase em uma Array
const frase = 'Hoje o dia está ensolarado e quente';
const retorno = frase.split (' ');
console.log(retorno);

// Fazendo um slug (colocando um traso enrte cada palavra exemplo atuar dos links de acesso web)
console.log(retorno.join('-'));