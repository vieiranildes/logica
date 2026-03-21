let tipoCliente = 'Pessoa Física';
let faturamento = 7856.00;
let planoFixo = 29.90;

if(faturamento <10000){
    planoFixo = 99.00;
}else if(faturamento >=10000 && faturamento <=50000){
    planoFixo = 199.00;
}else {
     planoFixo = 399.00;
    
}

console.log(`Cliente: ${tipoCliente}`);
console.log(`O valor do plano fixo é: R$ ${planoFixo.toFixed(2)}`);