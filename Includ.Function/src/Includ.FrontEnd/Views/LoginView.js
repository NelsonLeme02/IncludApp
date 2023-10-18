import React, { useState } from 'react';
import './LoginView.css';
import { Link } from 'react-router-dom';
import { LoginComponent } from '../Components/LoginComponent';

export default function LoginView() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    function handleUserChange(event) {
        setUser(event.target.value);
    }

    function handlePassChange(event) {
        setPass(event.target.value);
    }

    function fazerLogin() {
        var Instance = new LoginComponent();
        Instance.TryLogin(user,pass);
    }

    return (
        <div className="bodyLogin">
            <div className="corpoPagina">
                <div className="centered">
                    <div className="modalLogin">
                        <p className="titulo">Includ</p>
            <input
                placeholder="Login"
                type="text"
                className="input"
                id="user"
                value={user} // Passamos o valor do estado para o input
                onChange={handleUserChange} // Função para manipular mudanças no input
            />
                                    <br />
                        <br />
            <input
                placeholder="Senha"
                type="password"
                className="input"
                id="pass"
                value={pass} // Passamos o valor do estado para o input
                onChange={handlePassChange} // Função para manipular mudanças no input
            />
            <br />
                        <br />
                        <div className="divisor">&nbsp;</div>
                        <br />
                        <table className="centered-table">
                            <tbody>
                                <tr>
                                    <td className="half-width">
                                        <div className="autologin">
                                            <img
                                                src="https://img.freepik.com/icones-gratis/mac-os_318-10374.jpg"
                                                className="imgLogo"
                                                alt="mac logo"
                                            />
                                        </div>
                                    </td>
                                    <td className="half-width">
                                        <div className="autologin">
                                            <img
                                                src="https://www.stickersdevs.com.br/wp-content/uploads/2020/09/google-logo-sticker-adesivo.jpg"
                                                className="imgLogo"
                                                alt="google logo"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button className="realizarLogin" onClick={fazerLogin()}>LOGIN</button>
                                        <div className="cadastro">
                                            Ainda não tem uma conta? <Link className='LinkToCadastro' to='/Cadastro'>Cadastre-se</Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <svg
                    className="wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#166c7e"
                        fillOpacity="1"
                        d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,117.3C840,96,960,64,1080,80C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
