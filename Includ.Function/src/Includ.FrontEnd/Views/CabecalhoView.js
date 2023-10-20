import './CabecalhoView.css'
import Logo from './Static/Logo 3.png'
import Perfil from './Static/Perfil.jpg'
import { Link } from 'react-router-dom'

export default function CabecalhoView(){
    return(
    <div className="bodyCadastro">
        <header className="cabecalho">
                <div className="logo">
                    <a href="#inicio">
                        { <img src={Logo} className="Logo" /> }
                    </a>
                </div>

                <nav className="menu">
                    <ul>
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                        <li>
                            <Link href="./comunidade.html">Comunidades</Link>
                        </li>
                        <li>
                            <Link href="#perfil">Perfil</Link>
                        </li>
                    </ul>
                </nav>
                <aside className="infos">
                    <a href="#perfil">
                        <img src={Perfil} className="foto_perfil" alt="Perfil" />
                    </a>
                   {/* <a href="./cadastro.html" className="botao red">Registrar</a> */}
                </aside>
            </header>

    </div>
                    
    )
}