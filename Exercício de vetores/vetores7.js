// 4. Gerenciamento de Lista: Compras
// Objetivo: Aprender a utilizar métodos dinâmicos para inserir (push) e remover (shift) elementos.
// Entrada: Um vetor vazio [] e comandos para adicionar "Arroz", "Feijão" e "Leite".
// Saída: O item removido ("Arroz") e a lista final contendo apenas os dois itens restantes.

let alimentos = [];

alimentos.push('Arroz');
alimentos.push('Feijão');
alimentos.push('Leite');

console.log("Lista Preenchida:" +  alimentos);

alimentos.shift('Arroz');
console.log("Lista atualizada:" + alimentos);
