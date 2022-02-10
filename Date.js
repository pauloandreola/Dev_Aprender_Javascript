//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

const data00 = new Date();   // Um método de extrair a ifnromação de data. Extraindo a data do servidor do Replit.

console.log('Primeira formato data -> ', data00);

console.log('Segundo formato data -> ', data00.toTimeString());  // Informa o local GMT da data e hora que está sendo extraido o valor da variável data00

const data01 = new Date ('December 10 2021 22:31'); // Atribuindo uma data para apresentar.

console.log('Terceiro formato data -> ', data01);

const data02 = new Date (2021, 11, 10, 22,35);  // Outra forma de atribuir valores, notar que o mês de Dezembro está como 11 pois Janeiro começa com 00

console.log('Quarto formato data -> ', data02);

data02.setFullYear(2030); // Alterando o ano da variaver data02 de 2021 para 2030

console.log('Quinto formato data -> ', data02);

data02.toDateString();

console.log('Sexto formato data -> ', data02);