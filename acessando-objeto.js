const estudante = {
   nome: 'José Silva',
   idade: 32,
   cpf: '38472637281',
   turma: 'JavaScript'
};

function exibeInfoEstudante(objEstudante, infoEstudante) {
   return objEstudante[infoEstudante];
}

//console.log(estudante['nome']);
console.log(exibeInfoEstudante(estudante, 'nome'));

//console.log(estudante['cpf']);
console.log(exibeInfoEstudante(estudante, 'cpf'));

console.log(estudante.pet);
console.log(estudante['pet']);