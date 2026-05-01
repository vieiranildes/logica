/*Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. 
Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, 
faça um programa para ler os dados necessários e calcular a altura do prédio, 
colocando o cálculo dentro de uma função.
*/

const prompt = require('prompt-sync')();

function calculeAlturaPredio(alturaPredio, suaSombra , altura){
    let calculo = alturaPredio * suaSombra / altura
    return calculo;
}





let altura = Number(prompt('Digite a sua altura: '));
let alturaPredio = Number(prompt('Digite a altura do prédio: '));
let suaSombra = Number(prompt('Qual a sua altura sombra?: '));

console.log(calculeAlturaPredio(alturaPredio, suaSombra , altura));
