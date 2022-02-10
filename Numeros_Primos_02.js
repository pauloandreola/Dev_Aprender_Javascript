// Criar função que mostra os numeros primos dele na tela 

//  Ex. 10 e 11

//  Numeros primos são divisivesis por 1 e por ele mesmo

// Após aplicar o princípio de responsabilidade, criei duas funções

// Na função abaixo enviar por parametro o valor para outra função

exibirNumerosPrimos(249);

function exibirNumerosPrimos(numero) {
  
  for (let valor = 2; valor <= numero; valor++) {

    if (calculoPrimo(valor)) 
  
    console.log(valor);

  }

}

console.log('')

// Na função abaixo ele calcula se o valor é primos
// se for primo passa o valor por parametro para exibirNumerosPrimos


function calculoPrimo(valor) {

  for (let divisor = 2; divisor < valor; divisor++) {
   
    if (valor % divisor === 0) {
  
     return false;
  
    }

  }

  return true;

}