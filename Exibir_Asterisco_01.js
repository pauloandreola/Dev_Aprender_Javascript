// Criar uma função para exibir a quantidade de asterisco definido
// na campo

exibirAsteriscos(10);

function exibirAsteriscos(asteriscos) {

  let asteriscoNaTela = '';

    for (let i = 1; i <= asteriscos; i++) {

        asteriscoNaTela += '*';

     console.log(asteriscoNaTela);

    }
   
}