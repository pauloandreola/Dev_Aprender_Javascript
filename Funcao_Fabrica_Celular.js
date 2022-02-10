// Factory Function

// Forma completa e demorada - Hard coded

function criarCelular () {

  const celular = {

      marcaCelular : 'SAMSUNG',
      tamanhoTela : {
        vertical : 155,
        horizontal : 75

      },
      capacidadeBateria : 5000,

      ligar : function() {

        console.log('Fazendo ligação...');

      }

  }

  return celular;

}

console.log(criarCelular);

// Forma resumida e ãgil

function criarCelularNovo (marcaCelular,tamanhoTela,capacidadeBateria) {

  return {
      marcaCelular,
      tamanhoTela,
      capacidadeBateria,

      ligar() {

        console.log('Fazendo ligação...');

      }

  }

}

const celular01 = criarCelularNovo('ASUS',5.5,5000);
console.log(celular01);