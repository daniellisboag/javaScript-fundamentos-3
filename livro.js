/* 1. Crie um arquivo chamado `livro.js`. Nesse arquivo, crie um objeto `livro` que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
   - `titulo` (string): título do livro.
   - `autor` (string): nome do autor do livro.
   - `anoPublicacao` (number): ano de publicação do livro.
   - `genero` (string): gênero do livro.
   No final do arquivo `livro.js`, instancie o objeto `livro` com dados de algum livro que você goste e imprima os detalhes do livro no console. */

const livro = {
   titulo: undefined,
   autor: undefined,
   anoPublicacao: undefined,
   genero: undefined
};

livro.titulo = 'JavaScript: O guia definitivo';
livro.autor = 'David Flanagan';
livro.anoPublicacao = 2012;
livro.genero = 'Técnico / Programação / Desenvolvimento web';

console.log(`Detalhes do livro ${livro.titulo}
Autor: ${livro.autor}
Ano de publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}`);