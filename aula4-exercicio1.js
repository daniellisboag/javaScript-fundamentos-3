// Importa conteúdo do arquivo dados.json
const dados = require('./dados1.json');

// Imprime conteúdo do arquivo dados.json
console.log(dados);

// Imprime diferentes propriedades do objeto importado
console.log('Produtos:', ...dados.produtos);
console.log('Usuários:', ...dados.usuarios);