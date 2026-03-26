// Filtragem: Números Pares

// Objetivo: Utilizar .filter() para selecionar apenas números pares.
// Entrada: Um vetor: [1, 2, 3, 4, 5, 6].
// Saída: Um novo vetor contendo apenas os números pares.

let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter((numeros) => numeros % 2 === 0);

console.log('Retornar somente números pares:' + numerosPares);
