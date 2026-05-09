let matriz = [];
let linhas = 3;
let coluna = 3;
 let contador = 1;

for (let i = 0; i < linhas; i++){
    matriz[i] = [];

    for (let j = 0; j < coluna; j++){
    matriz[i][j] = contador;
    contador++;
}
}
console.log(matriz);