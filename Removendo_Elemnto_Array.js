 const numeros = [1, 2, 3, 4, 5, 6, 7];

//  Removendo um número no final da Array
console.log('Todos os números da lista ', numeros);
const ultimo = numeros.pop();
console.log('Removendo o último número da lista ', ultimo);
console.log('Lista atualizada', numeros);
console.log('')

//  Removendo um númeor no início da Array
const primeiro = numeros.shift();
console.log('Removendo o primeiro número da lista ',primeiro);
console.log('Lista atualizada', numeros);
console.log('')

// Removendo um numero de uma posição definida (posicão inicial começa em zero). N[umero 1 comando para deletar a elemento dentro da Array
const posicaoDefinida = numeros.splice(2, 1);
console.log('Removendo um item de posição definida ', posicaoDefinida);
console.log('Lista atualizada', numeros);
console.log('')

// Lembrando que para inserir um elemento usamos Zero e depois o elemento que queremos inserir 
const inserirPosicaoDefinida = numeros.splice(2, 0, 10);
console.log('Inserido o valor 10 em uma posição definida, na mesma posição do 4. Na terceira posição da lista')
console.log('Lista atualizada', numeros);