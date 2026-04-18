const prompt = require('prompt-sync')();
let saldoInicial = 1000.0;
const extrato = [];
let opcao = '';
const deposito = [];
const soma = 0;

while (opcao !== '5') {
  console.log('\n--- MENU ---');
  console.log('1. Consultar Saldo');
  console.log('2. Depositar');
  console.log('3. Sacar');
  console.log('4. Ver Extrato');
  console.log('5. Sair');

  opcao = prompt('Escolha uma opção: ');

  // CONSULTAR SALDO
  if (opcao === '1') {
    const saldo = Number(prompt('Consulta de saldo'));
    saldoInicial += saldo;
    console.log('Saldo:', saldoInicial);
    
  } 
  else if (opcao === '2') {
    const depositar = Number(prompt('Digite o valor de depósito: R$ '));
    console.log('Valor Registrado');
    deposito.push(depositar);

  }if (depositar >0 ) {
    const valor = saldoInicial + depositar
    console.log(valor);
  }
  else if( opcao ==='3'){
    const valor = Number(prompt('Valor do saque: R$ '));
    if(valor > saldoInicial){
      console.log('Saldo insuficiente para saque';)
    }else{
      saldoInicial -= valor;
      extrato.push(`Depósito: +R$ ${valor.toFixed(2)}`);
    }
    }
  }


  
  



  if (opcao == '5') {
    console.log('Saindo');
  }


