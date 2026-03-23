let num1= 50.00;
let num2 = 40.00;
let operacao = "-";

if(operacao == "+"){
    resultado = num1 + num2;
    console.log("Operação:", operacao, resultado);

}else if (operacao == "-"){
    resultado = num1 - num2;
    console.log("Operação:", operacao, resultado);

}else if(operacao == "*"){
    resultado = num1 * num2;
    console.log("Operação:", operacao, resultado);
}else{
    operacao =  "/"
}
console.log("Expressão:", operacao);

