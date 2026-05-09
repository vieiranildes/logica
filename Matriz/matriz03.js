let matriz = [];

function gerarMatrizAleatoria(linha, coluna,min,max){
    

    for(let i = 0; i < linha; i++){
        matriz[i] = [];

        for(let j = 0; j < coluna; j++){
            matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    return matriz;
}

let retornarMatriz = gerarMatrizAleatoria(2, 3, 2, 150);
let somaDiagonal = 0;

for( let i = 0; i < matriz.length; i++){
    somaDiagonal += matriz [i][i];

    console.log(
        "Diagonal ["+i+"]["+i+"]:"
        +matriz [i][i]
    );
}

console.log( retornarMatriz);
console.log("Soma: " + somaDiagonal);






 


