// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

const mensagem = 'Olá, minha\n primeira mensagem';

console.log(mensagem);

const mensagem01 = 'Olá, minha\n \'primeira\' mensagem';

console.log(mensagem01);

const mensagem02 = 'Olá, minha\n'+
' \'primeira\' mensagem';

console.log(mensagem02);

// Object {}
// Boolean true, false
// string '',""
// Template literal ``

const outra = `Essa é uma nova
mensagem sem precisar
poluir toda a frase`;

console.log(outra);

const email =
`Olá João,

Vamos seguir com o planejamento e aprimorar o conhecimento de Javascript com Node JS

Muito grato

Atenciosamente,

Paulo Andreola`

console.log(email);
console.log('')

// Inserindo os nomes a partir de variáveis

const nomeDestinatario = 'João';
const nomeAssinatura = 'Paulo Andreola'

const emailAprimorado = 

`Olá ${nomeDestinatario},

Temos ${2+4} peças em estoque

Vamos seguir com o planejamento e aprimorar o conhecimento de Javascript com Node JS

Muito grato

Atenciosamente,

${nomeAssinatura}.`

console.log(emailAprimorado);