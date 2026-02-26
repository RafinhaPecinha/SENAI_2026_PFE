class Caneta {
    //atributos publicos
    cor = "Azul";
    marca = "Bic";
    ponta = "Fina";
    qtdTinta = 5;
    tampa = true;

    //metodo tem parenteses
    escrever(){
        return 'Começou a escrever'
    }
    sublinhar (valor){
        if(valor > this.qtdTinta){
            console.log("Não é possível escrever")
        }
        else {this.qtdTinta -= valor
        return 'Quantidade restante de tinta atual é ' + this.qtdTinta
        }
    }
}
const canetaFina = new Caneta
canetaFina.escrever();
console.log(canetaFina.escrever())
console.log(canetaFina.sublinhar(2))