/* 4. No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido. */

const carro = {
   marca: 'Chevrolet',
   modelo: 'Astra Hatch Advantage 8v',
   ano: 2008,
   cor: 'Vermelho',
   ligado: false
};

Object.defineProperty(carro, 'placa', {
   value: 'ABC-1D23',
   enumerable: false
});

for (let propriedade in carro) {
   console.log(`${propriedade}: ${carro[propriedade]}`);
}

console.log(Object.keys(carro));
console.log(carro.placa);