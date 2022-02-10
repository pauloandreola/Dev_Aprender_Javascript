function Carro (marca,modelo,cor,valor) {
    this.marca = marca,
    this.modelo = modelo,
    this.valor = valor,
    this.cor = cor,
    this.abrir = function() {

      console.log('');

    }

}

// Estanciando um objeto passando todas as propriedades para os
// parametros definidos acima

const carro = new Carro('Gm','Onix','vermelho',45000);
console.log(carro);