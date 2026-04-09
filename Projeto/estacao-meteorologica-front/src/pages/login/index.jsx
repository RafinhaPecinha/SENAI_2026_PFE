import { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"
import imgEstacao from '../../assets/estacao.png'

export default function Login(){
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <section>
            <div>

                <div>
                    {/* <img src={imgEstacao} alt="Estação meteorológica" /> */}
                </div>

                <div>
                    <h2>Login</h2>
                    <form action="">
                        <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        <label htmlFor="usuario">Usuário</label>

                        <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <label htmlFor="senha">Senha</label>

                        

                        <Link to= "/dashboard">Login</Link>
                        <p><Link to="/register" className="link-secondary" link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover>Não tem conta? Cadastre-se</Link></p>
                    </form>
                </div>

            </div>
        </section>
    )
}