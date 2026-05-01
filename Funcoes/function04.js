/*Faça um programa que pergunte o nome, as horas trabalhadas e o valor da hora ao usuário.
 Calcule o salário bruto dentro de uma função, recebendo como parâmetro horas e valor da hora. 
 Outra função se o salário bruto for menor do que R$ 2.000,00 acrescente um bônus de 200 reais no valor total. 
 O valor retornado final será = salário + adicional (se aplicável).
*/ 

const prompt = require('prompt-sync')();

function salarioBruto( horasTrabalhadas , valorHora){
    let total = (valorHora * horasTrabalhadas);
    return total;
}
function bonus(total){
    if(total < 2000.00){
        novoTotal = total + 200;
        return novoTotal;
    } else {
       return total;
    }
}






let nome = String(prompt('Qual seu nome?: '));
let horasTrabalhadas = Number(prompt('Quantas horas trabalhadas?: '));
let valorHora = Number(prompt('Qual valor da Hora?: '));


let salario = salarioBruto(horasTrabalhadas,valorHora);
let salarioBonus = bonus(salario)
console.log("Total: ", salarioBonus);


