// Exercicio de nota escolar, obter média apartir de uma array

// 0 - 59 = E
// 60 - 69 = D
// 70 - 79 = C
// 80 - 89 = B
// 90 - 100 = A


//  Melhorando o código aplicando o príncipio de responsabilidade única
// Para isso criando uma função para cálculo da média
// E outro para apresentar a nota é a classificação

const notas = [85, 85 , 85];

console.log(notaFinal(notas))

function notaFinal(valores) {

  const media = calcularMedia(valores);

  console.log('A sua nota média foi de: ',Math.round(media));
 
  if (media < 59) return 'Você tirou E';
  if (media < 69) return 'Você tirou D';
  if (media < 79) return 'Você tirou C';
  if (media < 89) return 'Você tirou B';
  return 'Você tirou A';

} 

function calcularMedia(notas) {

  let soma = 0;

  for (let nota  of notas) {

      soma += nota;

  }

  return soma/(notas.length);

}