/* Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

Exemplo de animais.json:
{
   "animais": [
      {
         "id": 1,
         "nome": "Leão",
         "tipo": "Mamífero",
         "habitat": "Savana"
      },
      {
         "id": 2,
         "nome": "Pinguim",
         "tipo": "Ave",
         "habitat": "Pólo Sul"
      },
      {
         "id": 3,
         "nome": "Cobra",
         "tipo": "Réptil",
         "habitat": "Floresta Tropical"
      }
   ]
}

Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:
a) Leia o conteúdo do arquivo animais.json.
b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
d) Modifique o habitat de um animal existente no array de animais.
e) Remova um animal do array de animais.
f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
g) Imprima no console o objeto JavaScript resultante das operações. */

const objetoAnimais = {
   "animais": [
      {"id": 1, "nome": "Leão", "tipo": "Mamífero", "habitat": "Savana"},
      {"id": 2, "nome": "Pinguim", "tipo": "Ave", "habitat": "Pólo Sul"},
      {"id": 3, "nome": "Cobra", "tipo": "Réptil", "habitat": "Floresta Tropical"}
   ]
};

const novoAnimal = {
   "id": 4, "nome": "Elefante", "tipo": "Mamífero", "habitat": "Savana"
};

objetoAnimais.animais.push(novoAnimal);

objetoAnimais.animais[1]['habitat'] = 'Oceano Antártico';

const removerAnimal = objetoAnimais.animais.findIndex(animal => animal.nome === 'Pinguim');
if (removerAnimal !== -1) {
   objetoAnimais.animais.splice(removerAnimal, 1);
}

const converterEmJSON = JSON.stringify(objetoAnimais);

console.log(objetoAnimais);
console.log(converterEmJSON);