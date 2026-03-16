import { useState } from "react";

export default function Aluno() {

    const [nome, setNome] = useState('Mano Pekas')
    const [idade, setIdade] = useState(17)
    const [ra, setRa] = useState(676941)
    const [bolsa, setBolsa] = useState(670)

    return (
        <>
            <h1>Título:</h1>
            <h3>Nome do aluno: {nome}</h3>
            <h4>Idade: {idade}</h4>
            <h4>RA: {ra}</h4>
            <h4>Tem bolsa de: {bolsa} reais</h4>
        </>
    )
}