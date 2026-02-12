const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite a sua idade: "));


function idadeLivros() {
    if (idade >=18){
        console.log("Você pode pegar livro e você também é maior de idade")
    }else if (idade >=16){
        console.log("Você pode pegar livro mas não é maior de idade ")
    }else{
        console.log("Você não tem idade necessaria para pegar livro")
    }
}

idadeLivros()