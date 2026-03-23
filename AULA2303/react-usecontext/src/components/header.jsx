import {useContext} from "react";
import { ContextoTema } from "../contexts/TemaContexto";

export default function Header(){
    const {tema, mudarTema} = useContext(ContextoTema);

    return(
        <>
            <header className={`header-${tema}`} >
                <h1>Meu primeiro site com Tema de Contexto</h1>
                <button onClick={mudarTema}>
                    Mudar Tema para {tema === 'light' ? 'escuro' : 'claro'}
                </button>
            </header>
            
            <section className={`noticias-${tema}`}>
                <h2>Últimas Notícias</h2>

                <div className="cards">
                    <div className="card">
                        <img src="https://media.licdn.com/dms/image/v2/D4D12AQGLywi5Z8gELw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1684173239206?e=2147483647&v=beta&t=rmRDiiIJuuswwq4Cg9kE0F-fAJ2PWCykPJv2nL0adPo" alt="Notícia 1" />
                        <h3>Tecnologia avança em 2026</h3>
                        <p>Novas inovações em inteligência artificial estão mudando o mundo rapidamente.</p>
                    </div>

                    <div className="card">
                        <img src="https://s2-techtudo.glbimg.com/0QTMcdWbso_G-J8Bwe3xPanXg7s=/0x0:947x527/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/F/2/GaXQIZSgWd4Kh8eZi9eA/ewgewgwege.png" alt="Notícia 2" />
                        <h3>Mercado de games cresce</h3>
                        <p>O setor de jogos continua em expansão com novos lançamentos e consoles.</p>
                    </div>

                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHehZz-2MOMwsdCzO7HLCsqiNKRC8sayQBw&s" alt="Notícia 3" />
                        <h3>Sustentabilidade em alta</h3>
                        <p>Empresas investem mais em soluções ecológicas para reduzir impactos ambientais.</p>
                    </div>
                </div>
            </section>
        </>
    )
}