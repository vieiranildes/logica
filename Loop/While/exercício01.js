// Criação de menu


const prompt = require('prompt-sync')();

let opcao = '';
const nomes = [];
const notas = [];

while (opcao !== '3') {
  console.log('\n--- MENU ---');
  console.log('1. Cadastrar');
  console.log('2. Listar');
  console.log('3. Sair');

  opcao = prompt('Escolha uma opção: ');

  if (opcao === '1') {
    const nome = prompt("Digite o nome do aluno: ");
    const nota = Number(prompt("Digite a nota: "));

    nomes.push(nome);
    notas.push(nota);

    if (nota >= 7) {
      console.log("Aluno Aprovado(a)!");
    } else {
      console.log("Aluno Reprovado(a).");
    }

  } else if (opcao === '2') {
    console.log('\n--- Lista de Alunos ---');

    for (let i = 0; i < nomes.length; i++) {
      console.log(`${nomes[i]} - Nota: ${notas[i]}`);
    }

  } else if (opcao === '3') {
    console.log('Saindo...');

  } else {
    console.log('Opção inválida!');
  }
}