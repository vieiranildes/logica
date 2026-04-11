const prompt = require('prompt-sync')();
const prazoVariados = [];
const quantidadePerdida = [];
const setor = [];
const produto = [];
let opcao = '';

while (opcao !== 5) {
  console.log('\n--- MENU ---');
  console.log('1. Cadastrar Pedido');
  console.log('2. Listar Pedidos');
  console.log('3. Resumo Gerencial');
  console.log('4. Buscar Pedido');
  console.log('5. Sair');

  opcao = prompt('Escolha uma opção: ');

  // CADASTRO DO USUARIO
  if (opcao === '1') {
    const setor = String(prompt('Digite o nome do setor: '));
    const produto = String(prompt('Digite o nome do produto: '));
    const quantidadePerdida = Number(prompt('Digite a quantidade: '));
    const prazoVariados = Number(prompt('Digite o prazo: '));
    
    console.log('Busca efetuada com sucesso!');
  }


  if (opcao === '2') {
    const produto = String(prompt('Digite o nome do produto: '));
    console.log('Busca efetuada com sucesso!');
  } for (let i = 0; i < produto.length; i++) {
        console.log(i);
  }


  if(opcao === '3'){
 if(prazoVariados <=2){
  console.log('Prioridade Urgente');
  }else if( prazoVariados <=5 ){
    console.log('Prioridade Alta');
  }else if ( prazoVariados <=10 ){
    console.log('Prioridade Média');
  }else{
    console.log('Prioridade Baixa');
             
    }
  }


 // opão sair
  else if (opcao === '5') {
    console.log('Saindo...');
    break;
  }

}