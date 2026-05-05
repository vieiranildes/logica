const PromptSync = require("prompt-sync");

/*Escreva um programa que peça para o usuário preencher um vetor de números inteiros de 5 posições. 
Elabore funções que recebam esse vetor como argumento e façam: (cada)

somaVetor: Recebe o vetor e retorna a soma de seus elementos. 
multiplicaVetor: Calcula o produto dos elementos do vetor. 
multiplicarPorCinco: Multiplica cada elemento do vetor por 5. 
mudarElemento: Nessa função o usuário dirá o índice do vetor que deseja alterar e o número para substituir na posição desejada.
ordenarVetor: Ordena o vetor em ordem crescente usando um algoritmo de ordenação simples (bubble sort). 
inverterVetor: Inverte os elementos do vetor. 
mostrarVetor: Exibe os elementos do vetor na tela. 

O menu permite ao usuário escolher qual função deseja executar. 
O programa continua até que o usuário escolha a opção de sair (0).
Você poderá utilizar funções nativas do Javascript para as lógicas das funções.

Exemplo de entrada inicial do programa (Menu):
Escolha:
1. Soma do vetor
2. Produto do vetor
3. Multiplicar todos os elementos por 5
4. Mudar elemento do vetor
5. Ordenar vetor (Bubble Sort)
6. Inverter vetor
7. Mostrar vetor
0. Sair

*/ 
const prompt = require("prompt-sync")();

let vetor = [];
console.log('Preencha o vetor com cinco números');

for(let i = 0; i < 5; i++){
    vetor[i] = Number(prompt(`Digite o ${i + 1}° número: `));
}

// Funções
// Somar vetor 
function somarVetor(vetor){
    let soma = 0;
    for (let i = 0;i< vetor.length; i++) {
        soma += vetor[i];
    }
    return soma;

}
// Produto do vetor

function multiplicaVetor(vetor){
    let multi = 1;
    for(let i = 0;i < vetor.length; i++){
        multi *= vetor[i];
    }
    return multi;
    
}
// Multiplicar por 5

function multiplicarPorCinco(vetor){
    for(let i = 0; vetor.length; i++){
      vetor[i] * 5; 
    }
}


do{

    
    console.log("\n-¨¨MENU¨¨-");
    console.log('1. Soma do vetor');
    console.log("2. Produto do vetor");
    console.log("3. Multiplicar todos os elementos por 5");
    console.log("4. Mudar elemento do vetor");
    console.log("5. Ordenar vetor (Bubble Sort)");
    console.log("6. Inverter vetor");
    console.log("7. Mostrar vetor");
    console.log("0. Sair");
    
    let opcao = Number(prompt('Escolha: '));

switch(opcao){
    case 1:
        console.log('Somar Vetor =' , somarVetor(vetor));
break;

}

}while(opcao !== 0);