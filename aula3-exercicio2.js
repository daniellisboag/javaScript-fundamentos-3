/* 2. Crie um objeto chamado `carro` que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:
   `marca` (string): marca do carro.
   `modelo` (string): modelo do carro.
   `ano` (number): ano de fabricação do carro.
   `cor` (string): cor do carro.
    
Utilize o loop `for...in` para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
    
Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
    
Utilize novamente o loop `for...in` para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor. */

const carro = {
   marca: 'Chevrolet',
   modelo: 'Astra Hatch Advantage 8v',
   ano: 2008,
   cor: 'Vermelho'
};

console.log('Propriedades do carro:');
for (let propriedade in carro) {
   console.log(`${propriedade}: ${carro[propriedade]}`);
}

carro.cambio = 'Manual';
carro.combustivel = 'Flex';

console.log('Propriedades atualizadas do carro:');
for (let propriedade in carro) {
   console.log(`${propriedade}: ${carro[propriedade]}`);
}