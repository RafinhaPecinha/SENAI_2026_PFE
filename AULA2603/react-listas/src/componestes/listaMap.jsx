const estudantes = [
    {id: 1, nome: 'Rafudo', ra:676767, idade: 17},
    {id: 2, nome: 'Davizola Mcc', ra:414141, idade: 67},
    {id: 3, nome: 'Monicius ', ra:255001, idade: 24}
]

export default function ListaMap(titulo){
    const listaEstudantes = estudantes.map((estudante) =>{
        return <li key={estudante.id}>
            <h2>{estudante.nome}</h2>
            <h3>{estudante.ra}</h3>
            <h3>{estudante.idade}</h3>
        </li>
    })
    return(
    <>
        <h1>titulo</h1>
        <ul>
            {listaEstudantes}
        </ul>
    </>
    )
}