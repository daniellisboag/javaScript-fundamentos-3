/* 1. Crie um arquivo chamado `dados.json` contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.

**Exemplo:**
{
   "produtos": [
      {
         "id": 1,
         "nome": "Camiseta",
         "preco": 25.99
      },
      {
         "id": 2,
         "nome": "Calça Jeans",
         "preco": 49.99
      }
   ],
   "usuarios": [
      {
         "id": 101,
         "nome": "João",
         "email": "joao@example.com"
      },
      {
         "id": 102,
         "nome": "Maria",
         "email": "maria@example.com"
      }
   ]
}

Crie um arquivo chamado`utilizarRequire.js` e, dentro dele, utilize a função `require()` para importar o conteúdo do arquivo `dados.json`.
Imprima no console o conteúdo importado utilizando a função `console.log()`.
Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados. */

// Importa conteúdo do arquivo dados.json
const dados = require('./dados1.json');

// Imprime conteúdo do arquivo dados.json
console.log(dados);

// Imprime diferentes propriedades do objeto importado
console.log('Produtos:', ...dados.produtos);
console.log('Usuários:', ...dados.usuarios);