// 6. Crie um objeto `livro` com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade `avaliacao` do objeto `livro`. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
const anoAtual = new Date().getFullYear();

const livro = {
   titulo: 'JavaScript: O guia definitivo',
   autor: 'David Flanagan',
   anoPublicacao: 2012,
   genero: 'Técnico / Programação / Desenvolvimento web',
   idadePublicacao: anoAtual - 2012,
   avaliacao: 9.5
};

delete livro.avaliacao;

console.log(`Detalhes do livro: ${livro['titulo']}
Autor: ${livro['autor']}
Ano de publicação: ${livro['anoPublicacao']}
Gênero: ${livro['genero']}
Publicado há ${livro['idadePublicacao']} anos
Avaliação: ${livro['avaliacao']}`);