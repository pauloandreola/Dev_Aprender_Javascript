// Metodo camelCase - Exemplo umDoisTresQuatro
// Vou utilizar o Metodo Pascal Case  - Exemplo UmDoisTresQuatto

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {

  this.marcaCelular =  marcaCelular,
  this.tamanhoTela = tamanhoTela,
  this.capacidadeBateria = capacidadeBateria,
  this.ligar = function() {
  
        console.log('Fazendo ligação...');
     
  }

}

// Estanciando um objeto passando todas as propriedades para os
// parametros definidos acima
 
const celular = new Celular('ASUS', 5.5, 5000)
console.log(celular);