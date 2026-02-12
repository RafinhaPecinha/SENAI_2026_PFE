let hoje = new Date()
let anoAtual = hoje.getFullYear()

let fimdoano = new Date(anoAtual, 11, 31)
let diferencaMs = fimdoano - hoje 

let diasFaltando = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));

console.log("Faltam " + diasFaltando + " dias para o fim do ano.");
