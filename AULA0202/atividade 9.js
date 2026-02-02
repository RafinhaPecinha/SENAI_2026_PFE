const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro número: "));
let desconto = prompt('Qual operação deseja realizar(+, -, *, / ): ');

const operacao = function (num1, desconto){
    if (desconto == "BRONZE"){
        let dsc1 = num1*0.05;
        console.log("O valor final é: ", dsc1);
    } else if (desconto == "PRATA"){
        let dsc2 = num1*0.10;
        console.log("O resultado é: ", dsc2);
    }else if (desconto == "OURO"){
        let dsc3 = num1*0.15;
        console.log("O resultado é: ", dsc3);
    }else{
        console.log("Nenhum desconto encontrado.")
    }
}
