const estudante = {
   nome: 'José Silva',
   idade: 32,
   cpf: '12312312300',
   turma: 'JavaScript',
   bolsista: true,
   telefone: ['5511999999998', '5511999999993'],
   endereco: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'Apto 43'
   }]
};

estudante.endereco.push({
   rua: 'Rua Dona Clotilde',
   numero: '71',
   complemento: null
});

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);