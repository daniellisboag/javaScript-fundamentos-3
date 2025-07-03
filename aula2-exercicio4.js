/* 4. Crie um objeto chamado calculadora que terá os seguintes métodos:

   soma: uma função que aceita dois parâmetros e retorna a soma deles.
   subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
   multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
   divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.

a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido. */

const calculadora = {
   soma: function(a, b) {
      return a + b;
   },
   subtracao: function(a, b) {
      return a - b;
   },
   multiplicacao: function(a, b) {
      return a * b;
   },
   divisao: function(a, b) {
      if (b !== 0) {
         return a / b;
      } else {
         console.log('Divisão por 0 não é permitido.');
      }
   },
   calcularMedia: function(array) {
      const somaValores = array.reduce((acumulador, valorInicial) => acumulador + valorInicial, 0);
      return somaValores / array.length;
   }
};

const mediaValores = [2, 4, 6, 8, 10];

console.log('Soma:', calculadora.soma(2, 4));
console.log('Subtração:', calculadora.subtracao(2, 4));
console.log('Multiplicação:', calculadora.multiplicacao(2, 4));
console.log('Divisão:', calculadora.divisao(2, 4));
console.log('Média dos valores:', calculadora.calcularMedia(mediaValores));