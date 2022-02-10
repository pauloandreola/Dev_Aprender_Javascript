function carro (marca,nome,cor,valor) {

  return {
    marca,
    nome,
    cor,
    valor,

      retornar() {

        console.log();

      }

  }

}

// const propriedadesDoCarro = carro('GM', 'Onix', 'Vermelho',45000);
const propriedadesDoCarro = carro('VW', 'Passat', 'Branco',62000);
// const propriedadesDoCarro = carro('Fiat', 'Camaro', 'Amareloo',79000);
// const propriedadesDoCarro = carro('Hyundai', 'Twist', 'Pretoo',120000);

console.log(propriedadesDoCarro);