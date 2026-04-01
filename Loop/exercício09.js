const prompt = require('prompt-sync')();
const nomes = [];
const notas = [];


// coleta de nomes
for (let i = 0; i < 3; i++) {
  const nomeAluno = prompt('Digite o  nome do aluno: ');
  nomes.push(nomeAluno);
}
for (let i = 0; i < 3; i++) {
  const notaInserida  = Number(prompt('Digite a nota: '));
  notas.push(notaInserida);  

if (notaInserida >= 7) {
    console.log(`${nomes[i]} está Aprovado(a)!`);
  } else {
    console.log(`${nomes[i]} está Reprovado(a).`);
  }
}

console.log('--- Resumo Final ---');
console.log('Nomes:', nomes.join(', '));
console.log('Notas:', notas.join(', '));

