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

function exibirTelefones(telefone1, telefone2) {
   console.log(`Ligar para ${telefone1}`);
   console.log(`Ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
   destinatario: estudante.nome,
   ...estudante.enderecos[0]
};

console.log(dadosEnvio);