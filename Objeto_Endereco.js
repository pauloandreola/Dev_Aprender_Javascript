// Criar um objeto enreço que contem: 
// Rua, Cidade, CEP
// exibirEndereco(endereco)

let endereco = {

  rua: 'João Simplicio Alves de Carvalho',
  cidade: 'Porto Alegre',
  cep: '91360-260'

};

function exibirEndereco(endereco) {

  for (let chave in endereco)
    console.log(chave, endereco[chave]);

}

exibirEndereco(endereco);