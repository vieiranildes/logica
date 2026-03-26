let valorBoleto = 1200.00;
let diasAtraso = 25;
let multa = 0.02;
let juros = 0.001;

if(diasAtraso === 0){
   console.log("Pagar valor normal: R$" + valorBoleto);
} else{
    let multaFixa = valorBoleto * multa;
    let jurosPorDia = (valorBoleto * juros) * diasAtraso;
    let totalgeral = valorBoleto + multa + juros;

        console.log("Valor com Atraso:  R$ " + totalgeral.toFixed(2));
    }