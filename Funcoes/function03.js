/*Com funções:
Tipo de retorno BOOLEAN (processamento com saída para sabermos se é primo ou não)
Tipo VOID (exibição de mensagem)
Fazer um programa que solicite um número do usuário e verifique se é um número primo invocando as funções.
*/ 

const prompt = require('prompt-sync')();


function ehPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    const input = prompt("Digite um número:");
    const numero = parseInt(input);

    if (ehPrimo(numero)) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}

main();
