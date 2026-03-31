let consumoDiarioKWH = [30, 25, 36, 45];
let dias = 0;
let consumoCritico = 0;
let soma = 0;

for (let i = 0; i < consumoDiarioKWH.length; i++) {
  soma += consumoDiarioKWH[i];

  if (consumoDiarioKWH[i] > 50) {
    dias++;
  }
  if (consumoDiarioKWH[i] > 58) {
    consumoCritico++;
  }
}
let media = soma / consumoDiarioKWH.length;

console.log('Total:' + soma);
console.log('Dias com consumo alto:' + dias);
console.log('Consumo crítico:' + consumoCritico);
console.log('Média: ' + media);
