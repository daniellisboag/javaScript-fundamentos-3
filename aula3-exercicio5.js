/* 5. Crie um novo objeto chamado `carroNovo` para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
   `marca` (string): marca do novo carro.
   `modelo` (string): modelo do novo carro.
   `ano` (number): ano de fabricação do novo carro.
   `cor` (string): cor do novo carro.
    
Utilize o operador de espalhamento (`...`) para criar um novo objeto chamado `carroComNovosDetalhes` que herde todas as propriedades do objeto `carro` e adicione as propriedades do objeto `carroNovo`.

Imprima no console o objeto `carroComNovosDetalhes` para verificar as informações do carro com os novos detalhes.

Modifique o valor de uma propriedade no objeto `carroComNovosDetalhes` e imprima novamente o objeto no console para confirmar as alterações. */

const carro = {
   marca: 'Chevrolet',
   modelo: 'Astra Hatch Advantage 8v',
   ano: 2008,
   cor: 'Vermelho',
   ligado: false,
   placa: 'ABC-1D23'
};

const carroNovo = {
   marca: 'Volkswagen',
   modelo: 'Golf',
   ano: 2003,
   cor: 'Preto'
};

const carroComNovosDetalhes = {...carro, ...carroNovo};

console.log(carroComNovosDetalhes);

carroComNovosDetalhes.ano = 2005;

console.log(carroComNovosDetalhes);