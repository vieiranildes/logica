/* Faça um programa que recebe um valor inteiro e verifica se o valor é positivo ou negativo, para essa verificação deve se usar uma função.
 A função deve retornar um valor booleano (true/false).
*/ 

const prompt = require('prompt-sync')();

function verificacaoDeValor(valor){
   if (valor > 0){
    console.log("Positivo")
   }else{
    console.log("Negativo")
   }
    
}

let valor = Number(prompt("Digite um número: "));

let ValorInt = verificacaoDeValor(valor);


