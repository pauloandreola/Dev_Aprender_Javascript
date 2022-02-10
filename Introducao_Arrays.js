//  Adicionar novos elementos
//  Encontrar elementos
// Remover elementos
// Dividir elementos
// Dividir Arrays
// Combinar Arrays

const numeros = [1, 2, 3];

// Inserindo um número no início da Array
numeros.unshift(0);
console.log(numeros);
console.log('')

// Inserindo um número no meio da Array.
// Inserindo o caracter 'a' após a item que está após o índice 2, lembrando que o índice começa com zero
numeros.splice(1,0,'a');
console.log(numeros);
console.log('')

// Inserindo o caracter após o item de índice 4. O segundo valor 'zero' quer dizer que não queremos deletar nenhum elemento e por fim o elemento que desejo inserir... nesse caso o valor 3 
numeros.splice(4,0,3);
console.log(numeros);
console.log('')

// Inserindo um número no final da Array
numeros.push(4);
console.log(numeros);
console.log('')

// Procurar um  índice do elemento dentro da Array, se não achar retorna -1, lembrando que a contagem do índice começa por zero
console.log(numeros.indexOf(2));
console.log(numeros.indexOf(7));
console.log('')

// Procura e informa o índice da string 1. Neste caso não vai achar pois na Array só temos número 1 e não string 1. 
console.log(numeros.indexOf('1'));
console.log('')

// Informr a posição onde está o último elemento informado na Array, se existe.
console.log(numeros.lastIndexOf(3));
console.log('')

//  Verificar se existe o elemento dentro da Array
console.log(numeros.indexOf(2) !== -1);
console.log(numeros.indexOf('c') !== -1);
console.log('')

// Verificar se existe o elemento na Array de uma forma mais fácil   
console.log(numeros.includes(1));
console.log(numeros.includes('a'));
console.log(numeros.includes('b'));