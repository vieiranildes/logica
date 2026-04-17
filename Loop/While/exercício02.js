const prompt = require('prompt-sync')();
let zonaVermelha = 'Urgente',
  zonaLaranja = 'Alta',
  zonaAmarela = 'Média',
  zonaVerde = 'Baixa';
const quantidadePedido = [];
const setor = [];
const produto = [];
let opcao = '';
const resumoGerencial = [];

while (opcao !== '5') {
  console.log('\n--- MENU ---');
  console.log('1. Cadastrar Pedido');
  console.log('2. Listar Pedidos');
  console.log('3. Resumo Gerencial');
  console.log('4. Buscar Pedido');
  console.log('5. Sair');

  opcao = prompt('Escolha uma opção: ');

  // CADASTRO DO USUARIO
  if (opcao === '1') {
    const produtos = String(prompt('Digite o nome do produto: '));
    const quantidade = Number(prompt('Digite a quantidade do pedido'));
    console.log('Produto Cadastrado');
    console.log(`PED${produto.length}`);
    console.log(`QTD${quantidade}`);

    produto.push(produtos);
    quantidadePedido.push(quantidade);

    // LISTAR PEDIDOS
  }
  if (opcao === '2') {
    console.log(' Lista de pedido');

    if (produto.length === 0) {
      console.log('Nenhum produto foi cadastrado');
    } else {
      for (let i = 0; i < produto.length; i++) {
        console.log(
          `Ped${i} | produto: ${produto[i]} | quantidade: ${quantidadePedido[i]}`
        );
      }

      // RESUMO GERENCIAL
    }
  }
  if (opcao === '3') {
    console.log('\n--Resumo gerencial--');

    while (true) {
      let diasPrioridade = parseInt(prompt('Prazo(Dias): '));
      if (diasPrioridade < 0) {
        break;
      }
      if (diasPrioridade <= 2) {
        console.log('Prioridade: ', zonaVermelha);
      } else if (diasPrioridade <= 5) {
        console.log('Prioridade: ', zonaLaranja);
      } else if (diasPrioridade <= 10) {
        console.log('Prioridade: ', zonaAmarela);
      } else {
        console.log('Prioridade: ', zonaVerde);
      }
      break;
    }
  } else if (opcao === '4') {
    console.log('\n--Buscar Pedido--');
    let busca = String(prompt('Qual produto deseja buscar? '));
    for (let i = 0; i < produto.length; i++) {
      if (produto[i] === busca) {
        console.log(`Ped${i} | produto: ${produto[i]}`);
      }
    }
  }
  if (opcao == '5') {
    console.log('Saindo');
  }
}
