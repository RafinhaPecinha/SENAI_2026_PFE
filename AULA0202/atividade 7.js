const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let caracter = prompt('Qual operação deseja realizar(+, -, *, / ): ');

const operacao = function (num1, num2, caracter){
    if (caracter == "+"){
        let soma = num1+num2;
        console.log("O resultado é: ", soma);
    } else if (caracter == "-"){
        let sub = num1-num2;
        console.log("O resultado é: ", sub);
    }else if (caracter == "*"){
        let mult = num1*num2;
        console.log("O resultado é: ", mult);
    } else if (caracter == "/"){
        let div = num1/num2;
        console.log("O resultado é: ", div);
    } else {
        console.log("Caracter não encontrado ou incorreto.");
    };
}
operacao(num1,num2, caracter);
