//  Histórico de Ações: Remoção do Último Registro
// Objetivo: Utilizar .pop() para remover a ação mais recente.
// Entrada: Um vetor com ações: ["Login", "Visualizar", "Logout"].
// Saída: Ação removida ("Logout") e vetor com as ações restantes.

let acoes = ['Login', ' Visualizar', ' Logout'];
console.log('Ações: ' + acoes);

let acoesPop = acoes.pop();

console.log('Ações Restantes: ' + acoes);
console.log('Ação Removida:' + acoesPop);
