let consumoKwh = 200;
let valor;

if(consumoKwh <=100){
valor = 0.60;
}else if(consumoKwh >=101 && consumoKwh <=200){
    valor =  0.75;
}else
    {
        valor =  0.90;
    }

let valorTotal = valor * consumoKwh;

console.log("Valor Total:", valorTotal);