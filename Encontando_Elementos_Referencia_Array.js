// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// Para in

const nomes = [
    {id: 1, nome: 'Paulo'},
    {id: 2, nome: 'João'},
    {id: 3, nome: 'Carlos'},
    {id: 4, nome: 'Jorge'},
    {id: 5, nome: 'Arthur'},
    {id: 6, nome: 'Flávio'},

];

// Neste caso retorna false pois são objetos que tem referências (EM MEMÓRIA NO PC) diferentes,
console.log(nomes.includes({id: 1, nome: 'Paulo'}));

// encontrar o elemento pela prirpiedade nome
const encontrado01 = nomes.find(achado => achado.nome === 'Carlos');
console.log(encontrado01);

// encontrar o elemento pela propriedade id
const encontrado02 = nomes.find(achado => achado.id === 5);
console.log(encontrado02)

// Outra forma de encontrar o elemento
const encontrado03 = nomes.find(function(localizado) {

    return localizado.nome === 'Jorge';

})
console.log(encontrado03);

// Outra forma de encontrar o elemento com retorno undefined
const encontrado04 = nomes.find(function(localizado01) {

    return localizado01.nome === 'Claudio';

})
console.log(encontrado04);

