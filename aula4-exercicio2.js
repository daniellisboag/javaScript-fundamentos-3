/* 2. Crie um arquivo chamado `dados2.json` contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.

**Exemplo**
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

Em seguida, crie um arquivo chamado `lerArquivoJson.js`. Dentro dele, utilize o método `require` para importar o conteúdo do arquivo `dados.json`.
Imprima no console o objeto JavaScript resultante da leitura do arquivo. */

const dados = require('./dados2.json');

console.log(dados);