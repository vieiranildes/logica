let num1= 50;
let num2 = 40;
let operacao = "-";

if(operacao == "+"){
    console.log(num1 + num2 );
    console.log("Operação:", operacao);

}else if (operacao == "-"){
    resultado = num1 - num2;
    console.log("Operação:", operacao, resultado);

}else if(operacao == "*"){
    console.log(num1 * num2);
    console.log("Operação:", operacao);
}else{

    operacao =  "/"
}

console.log("Expressão:", operacao);

