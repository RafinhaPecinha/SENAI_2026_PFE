const prompt = require('prompt-sync')();

let nota = Number(prompt("Digite o valor da nota do estudante: "));

if(nota>=90){
    console.log("A nota do estudante é A ")
}else if(nota>=80){
    console.log("A nota do estudante é B")
}else if(nota>=70){
    console.log("A nota do estudante é C")
}else if(nota>=60){
    console.log("A nota do estudante é D")
}else{
    console.log("Nota F")
}