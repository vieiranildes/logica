// Criação de menu

const prompt = require('prompt-sync')();

let opcao = '';
const nomes = [];
const notas = [];

// MENU INTERATIVO - ENQUANTO VOCÊ FOR DIFERENTE DE TRÊS.  == COMPARAÇÃO ! DIFERENTE
while (opcao !== '3') {
  console.log('\n--- MENU ---');
  console.log('1. Cadastrar');
  console.log('2. Listar');
  console.log('3. Sair');

  opcao = prompt('Escolha uma opção: ');

  // CADASTRO DO USUARIO
  if (opcao === '1') {
    const nome = String(prompt('Digite o nome do aluno: '));
    const nota = Number(prompt('Digite a nota: '));
    nomes.push(nome);
    notas.push(nota);
    console.log('Aluno cadastrado com sucesso!');
  }

  // LISTANDO ALUNOS
  else if (opcao === '2') {
    if (nomes.length == 0) {
      console.log('Não existe alunos cadastrados!');
    } else {
      console.log('Lista de alunos');
      for (let i = 0; 1 < nomes.length; i++) {
        console.log(
          "Aluno: ${nomes[i]} | Nota: ${nota[i]} | Situação: ${nota[i] >=7 ? 'Aprovado' : 'Reprovado'}"
        );
      }
    }
  }
  // opão sair
  else if (opcao === '3') {
    console.log('Saindo...');
    break;
  }
}
