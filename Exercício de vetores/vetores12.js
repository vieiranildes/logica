// Valores Maiores que 10

// -Objetivo: Utilizar .filter() para extrair valores maiores que 10.
// Entrada: Um vetor: [5, 12, 8, 20, 3].
// Saída: Um novo vetor com os valores maiores que 10.

let numeros = [5,12,8,20,3];

let numerosMaiores10 = numeros.filter((numeros) => numeros > 10);

console.log('Retornar somente números maiores que dez:' + numerosMaiores10);