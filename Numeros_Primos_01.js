// Criar função que mostra os numeros primos dele na tela 

//  Ex. 10 e 11

//  Numeros primos são divisivesis por 1 e por ele mesmo

exibirNumerosPrimos(15);

function exibirNumerosPrimos(numero) {
  
  for (let i = 2; i <= numero; i++) {

    let ehPrimo = true;

    for (divisor = 2; divisor < i; divisor++) {

      if (i % divisor === 0) {
  
        ehPrimo = false;
        break;

      }

    }

 if (ehPrimo) console.log(i);

  }

}