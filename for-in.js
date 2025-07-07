const estudante = {
   nome: 'José Silva',
   idade: 32,
   cpf: '12312312300',
   turma: 'JavaScript',
   bolsista: true,
   telefones: ['5511999999998', '5511999999993'],
   enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'Apto 43'
   },
   {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null
   }]
};

for (let chave in estudante) {
   const tipo = typeof estudante[chave];
   if (tipo !== 'object' && tipo !== 'function') {
      const texto = `A chave ${chave} tem o valor ${estudante[chave]}`;
      console.log(texto);
   }
}
