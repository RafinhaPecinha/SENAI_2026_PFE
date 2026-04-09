import { useState } from "react"
import { Link } from "react-router-dom"
import "../login/login.css"


export default function Register(){
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    return (
        <section>
            <div>

                <div>
                    {/* <img src={imgEstacao} alt="Estação meteorológica" /> */}
                </div>

                <div>
                    <h2>Cadastro de Usuário</h2>
                    <form action="">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />

                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        
                        <label htmlFor="confirmaSenha">Confirmar Senha</label>
                        <input type="password" id="confirmaSenha" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
                        
                        

                        <button>Cadastrar</button>
                    </form>
                </div>

            </div>
        </section>
    )
}