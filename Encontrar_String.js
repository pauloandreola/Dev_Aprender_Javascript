// Criar um método para ler propriedades de um objeto 
// Exibir somente as propriedades do tipo string que estão no objeto

const filme = {            // nome do objeto
    titulo : 'Vingadores', // propriedade/chave titulo conteúdo/valor da prop Vingadores
    ano : 2018,            // propriedade/chave ano conteúdo/valor de prop 2018
    diretor : 'Paulo',    // propriedade/chave diretor conteúdo/valor de prop Paulo
    duracao: 218,         // propriedade/chave duração conteúdo/valor de prop 218 minutos
    personagem : 'Thor'    // propriedade/chave personagem conteúdo/valor de prop Thor

}

exibirPropriedades(filme);

function exibirPropriedades(objeto) {

  for (propriedade in objeto) 

    if (typeof objeto[propriedade] === 'string') 

      console.log(propriedade,objeto[propriedade]);

}