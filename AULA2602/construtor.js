class Estudante{
    nome;
    #ra;
    #cpf;

    constructor(nome, ra, cpf){
        this.nome = nome;
        this.#ra = ra;
        this.#cpf = cpf
    }
}

const Rafudo = new Estudante('Rafael Lima', 676767676767, 67676767676)
console.log(Rafudo)