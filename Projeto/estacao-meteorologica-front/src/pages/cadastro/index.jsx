import { useState } from 'react';
import Header from "../../components/header";

export default function cadastro(){
    const{nome, setNome} = useState('')
    const{endereco, setEndereco} = useState('')
    const{email, setEmail} = useState('')
    const{celular, setCelular} = useState('')
    const{documento, setDocumento} = useState('')

    return (
        <section className="container">
            <header>
                <h2>Cadastro de dados pessoais</h2>

                <form action="">
                    <label htmlFor='nome'>Nome</label>
                    <input type="text" id='nome' placeholder='Nome completo' value={nome} onChange={(e) => setNome(e.target.value)} />
                    <label htmlFor='endereco'>Endereço</label>
                    <input type="text" id='endereco' placeholder='Digite seu endereço' value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' placeholder='Digite seu Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor='celular'>Celular</label>
                    <input type="number" id='celular' placeholder='Digite seu celular' value={celular} onChange={(e) => setCelular(e.target.value)} />
                    <label htmlFor='Documento'>Documento</label>
                    <input type="text" id='documento' placeholder='Digite seu documento' value={documento} onChange={(e) => setDocumento(e.target.value)} />
                    <button>
                        Salvar
                    </button>
                </form>
            </header>
        </section>
    )



}