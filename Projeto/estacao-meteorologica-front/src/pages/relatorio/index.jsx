import Header from "../../components/header";
import "./Relatorio.css";

export default function Relatorio(){

    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 67, temperatura: '26°C', umidade:"67%"},
        {horario: "16:07", qualidadeAr: "Moderada", iqa: 76, temperatura: '30°C', umidade:"50%"},
        {horario: "06:07", qualidadeAr: "Muito boa", iqa: 41, temperatura: '23°C', umidade:"80%"},
        {horario: "18:07", qualidadeAr: "Moderada", iqa: 69, temperatura: '33°C', umidade:"47%"}
    ]

    return(
        <div className="relatorio-container">

            <Header />

            <h3 className="titulo">Relatório Estação Meteorológica</h3>
            <p className="subtitulo">
                Monitoramento da temperatura e umidade em tempo real
            </p>

            <section className="graficos">
                {/* Futuro gráfico */}
            </section>

            <section className="tabela-leituras">
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            leituras.map((item, index) =>(
                                <tr key={index}>
                                    <td>{item.horario}</td>

                                    <td className={
                                        item.qualidadeAr === "Boa" ? "boa" :
                                        item.qualidadeAr === "Muito boa" ? "muito-boa" :
                                        "moderada"
                                    }>
                                        {item.qualidadeAr}
                                    </td>

                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

        </div>
    )
}