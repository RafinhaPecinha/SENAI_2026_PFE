const prompt = require('prompt-sync')();

let peso = Number(prompt("Digite o primeiro número: "));
let altura = Number(prompt("Digite o segundo número: "));

let imc = peso / (altura **2)

if(imc>=30){
    console.log("Obeso")
}else if(nota>=25){
    console.log("Sobrepeso")
}else if(nota>=18.5){
    console.log("normal")
}else{
    console.log("Abaixo do peso")
}