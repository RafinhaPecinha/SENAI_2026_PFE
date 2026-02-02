const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

if(num1 == 0 || num2 == 0){
    console.log("Um dos números é igual a zero")
}else if(num2>num1){
    console.log("O segundo número é maior que o primeiro")
}else if(num1 >num2 ){
    console.log("O primeiro número é maior q o segundo")
}else{
    console.log("Um dos números é menor q zero")
}