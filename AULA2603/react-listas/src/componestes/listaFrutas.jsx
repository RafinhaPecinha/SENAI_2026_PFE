const frutas = ["Maça", "Banana", "Uva", "Melancia", "Kiwi", "Abacaxi"]

export default function ListaFrutas() {

    const listaFrutas = frutas.map((fruta) => {
        return (
            <li key={fruta}>
                <h2>{fruta}</h2>
            </li>
        )
    })

    return (
        <>
            <h1>titulo</h1>
            <ul>
                {listaFrutas}
            </ul>
        </>
    )
}