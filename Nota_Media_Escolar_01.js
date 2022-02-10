// Exercicio de nota escolar, obter média apartir de uma array

// 0 - 59 = E
// 60 - 69 = D
// 70 - 79 = C
// 80 - 89 = B
// 90 - 100 = A

const notas = [70, 100 ,80];

console.log(notaFinal(notas))

function notaFinal(valores) {

  let soma = 0;

  for (let nota  of valores) {

      soma += nota;

  }

  let media = soma/(valores.length);
  console.log('A sua nota média foi de: ',Math.round(media));

  if (media < 59) return 'Você tirou E';
  if (media < 69) return 'Você tirou D';
  if (media < 79) return 'Você tirou C';
  if (media < 89) return 'Você tirou B';
  return 'Você tirou A';
}