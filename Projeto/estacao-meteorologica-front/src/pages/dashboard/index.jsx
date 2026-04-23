import Header from '../../components/header'
import "./dashboard.css"

export default function DashBoard(){
    return(
    <>
    <Header />
    <section className='cards'>
        <div className="card">
            <h6>Temperatura</h6>
            <h2>32°C</h2>
        </div>
        <div className="card">
            <h6>Umidade</h6>
            <h2>67%</h2>
        </div>
        <div className="card">
            <h6>Pressão</h6>
            <h2>1013 hPa</h2>
        </div>
        <div className="card">
            <h6>Vento</h6>
            <h2>12km</h2>
        </div>
    </section>

    <section className="graficos">
        <h6>Gráficos</h6>
        <div>
            {/* colocar gráficos */}
        </div>
    </section>

    <section className="tabela">
        <h6>Leituras recentes</h6>
        <table>
            <thead>
                <tr>
                    <th>Horário</th>
                    <th>Tem.</th>
                    <th>Umidade</th>
                    <th>Vento</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12:00</td>
                    <td>45°C</td>
                    <td>50%</td>
                    <td>13km</td>
                </tr>
                <tr>
                    <td>13:00</td>
                    <td>67°C</td>
                    <td>24%</td>
                    <td>6km</td>
                </tr>
                <tr>
                    <td>14:00</td>
                    <td>76°C</td>
                    <td>41%</td>
                    <td>7km</td>
                </tr>
            </tbody>
        </table>
    </section>
    </> 
    )
}