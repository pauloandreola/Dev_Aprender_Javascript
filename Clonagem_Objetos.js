  const celular = {

      marcaCelular : 'SAMSUNG',
      tamanhoTela : {
            vertical : 155,
            horizontal : 75

      },
      capacidadeBateria : 5000,

}

// Fazendo um clone do objeto celular e incluindo com a inclusão da chave bateria e o valor 5000

const novoObjeto = Object.assign({

  bateria : 5000,

}, celular);

console.log(novoObjeto);

// Outra forma de clonar o objeto de uma forma mais simples é o spread "..." três pontos

const objeto2 = {...celular}

console.log(objeto2);