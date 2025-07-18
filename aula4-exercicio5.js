/* Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

   id (number): identificador da pessoa.
   nome (string): nome da pessoa.
   idade (number): idade da pessoa

Exemplo
const pessoaOriginal = {
   id: 1,
   nome: "Alice",
   idade: 30
}

Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.
Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.
Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original. */

const pessoa = {
   id: 1,
   nome: 'Alice',
   idade: 30
};

function criarCopia(obj) {
   return JSON.parse(JSON.stringify(obj));
}

const novaPessoa = criarCopia(pessoa);

novaPessoa.sexo = 'Feminino';

console.log(pessoa);
console.log(novaPessoa);