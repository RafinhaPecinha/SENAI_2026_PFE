const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite sua idade: "));

if(idade>=60){
    console.log("Você é idoso ")
}else if(idade>=18){
    console.log("Você é adulto")
}else if(idade>=12){
    console.log("Você é adolecente")
}else{
    console.log("Você é criança")
}