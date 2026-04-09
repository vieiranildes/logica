// Escrever um programa que leia uma quantidade desconhecida de números inteiros e conte quantos deles
//  estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo. 

const prompt = require("prompt-sync")();

let inter1 = 0, inter2 = 0, inter3 = 0,inter4 = 0;



while(true){
let num = parseInt(prompt("Digite um nº (negativo para sair):"));
if(num<0){
    break;
}
if(num <= 25){
    inter1++;
}else if (num <=50){
    inter2++
}else if (num <=75){
    inter3++
}else if (num <=100){
    inter4++
}
}

console.log("Intervalo 1  - qtdd", inter1);
console.log("Intervalo 2  - qtdd", inter2);
console.log("Intervalo 3  - qtdd", inter3);
console.log("Intervalo 4  - qtdd", inter4);