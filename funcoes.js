const estudante = {
   nome: 'José Silva',
   idade: 32,
   cpf: '12312312300',
   turma: 'JavaScript',
   bolsista: true,
   telefone: ['5511999999998', '5511999999993'],
   media: 7.5,
   estaAprovado: function(mediaBase) {
      return this.media >= mediaBase ? true : false;
   }
};

console.log(estudante.estaAprovado(7));