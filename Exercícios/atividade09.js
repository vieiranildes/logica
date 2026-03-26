let saldo = 322;
let valorCompra = 22;
let temLimite = true;
let limite = 500;

if (saldo >= valorCompra) {
  console.log('Situacao: Aprovado');
} else if(temLimite && saldo + limite >= valorCompra) {
  console.log('Situação: Aprovado Usando Limite');
} else {
  console.log('Situação: Negado');
}

let saldoFinal = (saldo - valorCompra);
let limiteatual = (limite - saldoFinal);

console.log("Saldo Final:", saldoFinal);
console.log("Limite Atual:", limiteatual);