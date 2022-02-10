function Endereco(rua, cidade, cep) {

    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep

}

const endereco01 = new Endereco('Rua A', 'Rua B', 'Rua C');
const endereco02 = new Endereco('Rua A', 'Rua B', 'Rua C');
const endereco03 = endereco01; // inserindo endereco01 no endereco03 

function saoIguais(endereco01, endereco02) {
    // fazendo a comparação entre os dados se iguais retornar true
    return endereco01.rua === endereco02.rua &&
            endereco01.cidade === endereco02.cidade &&
              endereco01.cep === endereco02.cep

}

console.log('Primera comparação -> ', saoIguais(endereco01,endereco02));

function temEnderecoMemoriaIguais(endereco01, endereco02) {
    //comparando se os enderecos estão na mesma posição em memória

    return endereco01 === endereco02;
    return endereco01 === endereco03;

}

console.log('Segunda comparação -> ', temEnderecoMemoriaIguais(endereco01, endereco02));
console.log('Terceira comparação -> ', temEnderecoMemoriaIguais(endereco01, endereco03));