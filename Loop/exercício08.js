const prompt = require('prompt-sync')();
const valores = [];
let soma = 0;


for (let i = 0; i < 5; i++) {
  const numero  = Number(prompt('Digite o  numero: '));
  valores.push(numero);  
}
for (let i = 0; i < 5; i++) {
    soma += valores[i];
}

console.log('Numeros digitados:', valores);
console.log('A soma total é:', soma);