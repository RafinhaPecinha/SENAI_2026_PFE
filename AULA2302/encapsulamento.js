class Pessoa{
    nome; //atributo publico
    #cpf = 10100200304; //atributo privado 

    //metodos getter e setter
    //metodos cubicos de acesso aos atributos
    setCpf(valor){
        this.#cpf = valor
    }
    getCpf(){
        return this.#cpf
    }
}

const zeroZero = new Pessoa()
zeroZero.nome = 'Rafudo zero zero naquele piquezudo'
zeroZero.setCpf(2313132321313)
console.log("O cpf é: " + zeroZero.getCpf())
console.log(zeroZero.nome)