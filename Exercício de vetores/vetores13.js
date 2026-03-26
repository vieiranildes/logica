// Nomes com Mais de 4 Letras

// Objetivo: Utilizar .filter() para selecionar strings com tamanho maior que 4.
// Entrada: Um vetor: ["Ana", "Bruno", "Carlos", "Eva"].
// Saída: Um vetor contendo apenas os nomes com mais de 4 letras.

let nomes = ['Ana', 'Bruno', 'Carlos', 'Eva'];

let nomesFiltrados = nomes.filter((nomes) => nomes.length > 4);

console.log('Nomes com mais de quatro letras:' + nomesFiltrados);
