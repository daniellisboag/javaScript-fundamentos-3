const estudante = {
   nome: 'José Silva',
   idade: 32,
   cpf: '12312312300',
   turma: 'JavaScript',
   bolsista: true,
   telefones: ['5511999999998', '5511999999993'],
   /* enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'Apto 43'
   },
   {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null
   }] */
};

const chavesObjetos = Object.keys(estudante);
console.log(chavesObjetos)

if (!chavesObjetos.includes('enderecos')) {
   console.error('É necessário ter um endereço cadastrado.')
}