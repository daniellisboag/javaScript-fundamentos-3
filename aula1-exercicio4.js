/* 4. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
   No final do arquivo livro.js, adicione uma avaliação ao objeto.
   Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
   Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação. */
const anoAtual = new Date().getFullYear();

const livro = {
   titulo: 'JavaScript: O guia definitivo',
   autor: 'David Flanagan',
   anoPublicacao: 2012,
   genero: 'Técnico / Programação / Desenvolvimento web',
   idadePublicacao: anoAtual - 2012
};

livro.avaliacao = null;

if (livro.avaliacao === null) {
   livro.avaliacao = 9.5;
} else {
   console.log('Livro já possui avaliação.');
}

console.log(`Detalhes do livro: ${livro['titulo']}
Autor: ${livro['autor']}
Ano de publicação: ${livro['anoPublicacao']}
Gênero: ${livro['genero']}
Publicado há ${livro['idadePublicacao']} anos
Avalição do livro: ${livro['avaliacao']}`);