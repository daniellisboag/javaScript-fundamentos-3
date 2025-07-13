/* 3. Crie um arquivo chamado `metodosObjeto.js` para realizar este exercício.

Utilize o objeto carro do exercício 2 com as propriedades iniciais (`marca`, `modelo`, `ano`, `cor`) e adicione:

   `ligado`: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
   `ligar`: um método que imprime no console uma mensagem indicando que o carro está ligado.
   `desligar`: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (`ligado = true`), não pode ser ligado novamente e vice-versa.
   `obterDetalhes`: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).

Em seguida, faça o seguinte:

   Chame os métodos `ligar` e `desligar` do objeto `carro` e imprima no console as mensagens resultantes.
   Chame o método `obterDetalhes` e imprima no console a string retornada. */

const carro = {
   marca: 'Chevrolet',
   modelo: 'Astra Hatch Advantage 8v',
   ano: 2008,
   cor: 'Vermelho',
   ligado: false,
   ligar: function() {
      if (!this.ligado) {
         console.log('O carro está ligado.');
         this.ligado = true;
      } else {
         console.log('O carro já está ligado.');
      }
   },
   desligar: function() {
      if (this.ligado) {
         console.log('O carro está desligado.');
         this.ligado = false;
      } else {
         console.log('O carro já está desligado.');
      }
   },
   obterDetalhes: function() {
      const estado = this.estado ? 'ligado' : 'desligado';
      return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nO veículo está ${estado}.`;
   }
};

carro.ligar();
carro.desligar();
carro.desligar();
carro.ligar();
console.log(carro.obterDetalhes());