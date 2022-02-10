// Criar uma função para exibir a quantidade de asterisco definido
// na campo
//  Aqui foi feito um loop nested, ou seja um loop dentro de outro

exibirAsteriscos(10);

function exibirAsteriscos(asteriscos) {
 
    for (let i = 1; i <= asteriscos; i++) {

      let asteriscoNaTela = '';

      for (let loop = 0; loop < i; loop++) {  // loop nested

        asteriscoNaTela += '*';

      }
      
    console.log(asteriscoNaTela);

  }  
   
}