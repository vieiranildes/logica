let temperatura = [80, 90, 100];
let temperaturaAcimaDaMedia = 0;
let soma = 0;

for (let i = 0; i < temperatura.length; i++) {
  soma += temperatura[i];
  console.log('Total:' + soma);
  let media = soma / 3;
  console.log(media.toFixed([2]));

  if (temperatura[i] > 80) {
    temperaturaAcimaDaMedia++;
    console.log(
      'Dias em que os valores foram acima de 80:' + temperaturaAcimaDaMedia
    );
  } else {
    temperatura[i] > 90;
  }
  console.log('Alerta critico');
}
