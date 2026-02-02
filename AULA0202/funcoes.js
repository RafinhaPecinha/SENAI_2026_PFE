
//função padrão
function saudacao(nome){
    console.log('Seja bem vindo(a)! ' + nome)
}

saudacao('Rafudo');

//função anônima
const somar = function(numero,numero2){
    console.log("A soma dos números é " + (numero + numero2))
}

somar(15,15)

const subtrair = (numero,numero2) => {
    console.log("A subtração dos numeros é " + (numero - numero2))
}

subtrair(30,20)

