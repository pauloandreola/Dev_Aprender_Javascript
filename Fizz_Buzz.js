// Criar uma função que se:
// Divisível por 3 retorna Fizz - exemplo 3
// Divisível por 5 retorna Buzz - exemplo 5
// Divisível por 3 e 5 retorna FizzBuzz - exemplo 15
// Não Divisível por 3 e 5 retorna o mesmo valor inserido - exemplo 11
// Não é um número retorna 'Não é um número' - ex.'true, ou uma string'

const resultado = fizzBuzz(30);
console.log(resultado);

function fizzBuzz(entrada) {

  if (typeof entrada !== 'number')

  return 'Não é um número';

  if ((entrada % 3 !== 0) && (entrada %5 !== 0))

  return entrada;

  if ((entrada % 3 === 0) && (entrada % 5 === 0))

  return 'Fizz_Buzz';

  if (entrada % 3 === 0)

  return 'Fizz';

  if (entrada % 5 === 0)

  return 'Buzz';

}