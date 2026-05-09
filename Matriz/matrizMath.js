// Math.floor((Math.random) * (MAX - MIN +1)) + min
// Gerar número inteiro entre min e max

let linha = 3;
let coluna = 3;
let min = 3;
let max = 20;



function gerarMatrizAleatoria(linha, coluna,min,max){
    let matriz = [];

    for(let i = 0; i < linha; i++){
        matriz[i] = [];

        for(let j = 0; j < coluna; j++){
            matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    return matriz;
}

console.log( gerarMatrizAleatoria(linha , coluna , min , max));