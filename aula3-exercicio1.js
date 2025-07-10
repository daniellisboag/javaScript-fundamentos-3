/* 1. Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

   Desempenho excelente: média >= 9
   Bom desempenho: 7.5 <= média entre 7.6 e 8.9
   Desempenho regular: 6 <= média entre 6 e 7.5
   Desempenho insuficiente: média < 6

Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa. */

const pessoa = {
   nome: 'Daniel',
   notas: [8.3, 7.5, 9, 8],
   calcularMediaNotas: function() {
      const somarNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
      return (somarNotas / this.notas.length).toFixed(2);
   },
   classificarDesempenho: function() {
      const media = this.calcularMediaNotas();
      if (media >= 9) {
         console.log('Classificação: desempenho excelente.');
      } else if (media >= 7.5 && media <= 9) {
         console.log('Classificação: bom desempenho.');
      } else if (media >= 6 && media <= 7.5) {
         console.log('Classificação: desempenho regular.');
      } else if (media < 6) {
         console.log('Classificação: desempenho insuficiente.');
      }
   }
};

console.log(`${pessoa.nome} tem uma média de notas de ${pessoa.calcularMediaNotas()}`);
pessoa.classificarDesempenho();