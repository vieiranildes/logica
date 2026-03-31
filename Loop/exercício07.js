const prompt = require('prompt-sync')();
const nome = prompt('Digite 5 nomes: ');
const nomes = [];


for (let i = 0; i < 5; i++) {
  const nome = prompt('Digite o nome: ');
  nomes.push(nome);

console.log('Nomes digitados:');
console.log(nomes);
}