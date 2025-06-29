/* 2. Crie uma nova variável chamada `anoAtual` e atribua a ela o ano atual (utilize `new Date().getFullYear()`). Crie um objeto chamado `livro` com as seguintes propriedades: título, autor, ano de publicação e gênero.
   Adicione a propriedade `idadePublicacao` diretamente ao objeto `livro`, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o `anoDePublicacao` do `anoAtual`.
   Crie uma string chamada `mostrarDetalhes` contendo os detalhes do livro, incluindo a informação da idade de publicação.
   Exiba a string `mostrarDetalhes` no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente. */
const anoAtual = new Date().getFullYear();

const livro = {
   titulo: 'JavaScript: O guia definitivo',
   autor: 'David Flanagan',
   anoPublicacao: 2012,
   genero: 'Técnico / Programação / Desenvolvimento web'
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `Detalhes do livro ${livro.titulo}
Autor: ${livro.autor}
Ano de publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Publicado há ${livro.idadePublicacao} anos`;

console.log(mostrarDetalhes);