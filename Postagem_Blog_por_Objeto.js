// Criar um objeto de postagemd e blog que vai conter as seguintes propriedades
// postagem
/*
título
mensagem
autor
visualizações
comentários
  (autor, mensagem)
estaAoVivo
*/

let postagem = {

    titulo: 'Primeiro livro',
    mensagem: 'Leia livros',
    autor: 'Paulo Andreola',
    visualizacoes: 900,
    comentarios : [
      { autor: 'João', mensagem: 'Ótimo livro'},
      { autor: 'Bruna', mensagem: 'Muito confuso'}
    ],
    estaAoVivo: true

}

console.log(postagem); 