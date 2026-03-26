let distanciaKm = 15;
let orçamento = 350;

if (distanciaKm <= 2) {
  console.log('Vai a Pé');
} else if (distanciaKm <= 8 && orçamento >= 10) {
  console.log('Vai de Ônibus');
} else if (distanciaKm <= 15 && orçamento >= 25) {
  console.log('Moto');
} else {
  console.log(' Não é possivel com esse orçamento');
}