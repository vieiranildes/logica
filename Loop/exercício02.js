//  um vendedor registrou o valor de suas vendas nos últimos 7 dias.
// calcular valor vendido
// calcular média diária
// contar dias > R$ 100
// identificar maior valor


let quantidadeVendasDia = 7;
let valorVendas = [70, 90, 200, 140];
let totalVendido = 0;
let diasAcima100 = 0;


// Total do Valor vendido
for (let i = 0; i < valorVendas.length; i++) {
  totalVendido += valorVendas[i];
}
console.log('Total:' + totalVendido);

// Média diária
let totalDia = totalVendido / quantidadeVendasDia;
console.log("Total vendido por dia:" + totalDia);

// Quantidade de dias que as vendas foram acima de R$ 100.00
for (let i = 0; i < valorVendas.length; i++) {
  if(valorVendas[i] > 100) {
diasAcima100++;
  }
} 
console.log("Dias em que os valores foram acima de 100:" + diasAcima100);

// Maior valor entre as vendas
let maiorValor = Math.max(...valorVendas);
console.log(" Maior valor: R$ "+ maiorValor);