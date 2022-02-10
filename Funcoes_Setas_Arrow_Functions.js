// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const relacaoNomes = [
    {id: 1, nome: 'Paulo'},
    {id: 2, nome: 'João'},
    {id: 3, nome: 'Carlos'},
    {id: 4, nome: 'Jorge'},
    {id: 5, nome: 'Arthur'},
    {id: 6, nome: 'Flávio'},

];

// Uma forma resumida de localizar com function
console.log(relacaoNomes.find(function(localizar) {

    return localizar.nome === 'Jorge';

}));

// Com arrow function forma mais simples por usar somente um parâmetro

console.log(relacaoNomes.find(encontra => encontra.nome === 'Flávio'));