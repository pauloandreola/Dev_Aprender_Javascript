const pessoa = {

  nome : 'Paulo',
  sobrenome: 'Andreola',
  idade : 46
  
};

// Apresentação das chaves.

for (let chave in pessoa){

  console.log(chave);
  
}
console.log('')
 
// Apresentação das chaves e somente do valor da chave nome.

for (let chave in pessoa) {

  console.log('Errado -> ', chave,pessoa.nome);
  console.log('Certo -> ', chave, pessoa[chave]);

}
console.log('')

// Utilizar conforme abaixo se não souber o nome da propriedade de uma Array

for (let chave in pessoa) {

  console.log(chave,pessoa['nome']);

}
console.log('')

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let  indice in cores) {

  console.log(indice, indice.cores);

}
console.log('')

for (let indice in cores) {

  console.log(indice, cores[indice]);

}
console.log('')

for (let cor of cores) {

  console.log(cor);

}