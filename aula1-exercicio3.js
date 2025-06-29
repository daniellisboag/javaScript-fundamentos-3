// 3. Crie um objeto `livro` com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto `livro` e imprimir no console os detalhes do livro.
const anoAtual = new Date().getFullYear();

const livro = {
   titulo: 'JavaScript: O guia definitivo',
   autor: 'David Flanagan',
   anoPublicacao: 2012,
   genero: 'Técnico / Programação / Desenvolvimento web',
   idadePublicacao: anoAtual - 2012
};

console.log(`Detalhes do livro: ${livro['titulo']}
Autor: ${livro['autor']}
Ano de publicação: ${livro['anoPublicacao']}
Gênero: ${livro['genero']}
Publicado há ${livro['idadePublicacao']} anos`);