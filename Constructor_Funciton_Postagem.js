// Criar postagem usando construtor
// contendo título, mensagem, autor, visualizações, comentários, estaaovivo

// Criar no máximo 3 parâmetros

function Postagem(titulo, mensagem, autor) {

    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentario = [],
    this.estaoAoVivo = false
}

const postagem = new Postagem('Meu livro', 'Leia um livro', 'Paulo Andreola');

console.log(postagem);