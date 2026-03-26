//  Filtragem: Verificação de Maioridade
// Objetivo: Aplicar lógica condicional ou métodos de alta ordem (filter) para extrair subconjuntos de dados.
// Entrada: Um vetor de idades: [12, 18, 25, 10, 30, 15].
// Saída: Um novo vetor contendo apenas os valores >= 18.

let idades = [12, 18, 25, 10, 30, 15];

let maioresDeIdade = idades.filter(idade => idade >= 18);

console.log(maioresDeIdade);
