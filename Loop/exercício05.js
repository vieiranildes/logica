let notas = [5,7,8,9,10];
let aprovados = 0;
let reprovados = 0;
let soma = 0;

for(let i = 0; i < notas.length; i++){
soma += notas[i];
console.log('Total das notas:' + soma);
   let media = soma / notas[i];
   console.log(media);

  if(notas[i] >=7){
   aprovados++;
  console.log("Total de Aprovados:" + aprovados);
  }

if(notas[i] <7){
   reprovados++;
   console.log("Reprovados:" + reprovados);

let maiorNota = Math.max(...notas);
console.log(" Maior Nota: "+ maiorNota);

}
}