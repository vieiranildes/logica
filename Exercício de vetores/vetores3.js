let numero = [20,30,40];
console.log(numero[0],numero[1],numero[2]);

if(numero[0] > numero[1] && numero[0] > numero[2]){
    console.log("Retornar maior número", numero[0]);
}else if(numero[1] > numero[2]){
    console.log("Retornar maior número", numero[1]);
}else{
    console.log("Retornar maior número", numero[2]);
}