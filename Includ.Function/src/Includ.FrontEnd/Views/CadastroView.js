import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CadastroView.css';
import CabecalhoView from './CabecalhoView'
import Perfil from './Static/Perfil.jpg'

export default function CadastroView() {
    const [nome, setNome] = useState ('');
    const [dataNasc, setDataNasc] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [bio, setBio] = useState('');
    const [registro, setRegistro] = useState('');
    
    function handleNomeChange(event){
        setNome(event.target.value);
    }
    function handleDataNascChange(event){
        setDataNasc(event.target.value);
    }
    function handlePassChange(event){
        setPass(event.target.value);
    }
    function handlePassConfirmChange(event){
        setPassConfirm(event.target.value);
    }
    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handleFoneChange(event){
        setFone(event.target.value);
    }
    function handleBioChange(event){
        setBio(event.target.value);
    }
    function handleRegistroChange(event){
        setRegistro(event.target.value);
    }

    /*function fazerCadastro(){
        var Instance = new CadastroComponent();
        Instance.TryCadastro(nome, dataNasc,pass, passConfirm, email,fone, bio, registro)
    }*/


    return (
        <div>
            <CabecalhoView />
            <main className='principal'>
                <div className="cadastro">
                    <section className="box_form">
                        <form className="fotoForm">
                            <h1 className='titulo'>Cadastro :</h1>
                            <div className="centerFormFoto">
                                <div className="foto_perfil_cadastro">
                                    <img src={Perfil} alt="perfil comunidade" />
                                </div>
                            </div>
                        </form>
                        <form className="formulario">

                            <input 
                            placeholder="Nome" 
                            type="text" 
                            className="entrada nome"
                            value={nome}
                            onChange={handleNomeChange}
                            />

                            <input 
                            type="date" 
                            className="entrada data" 
                            value={dataNasc}
                            onChange={handleDataNascChange}
                            />

                            <input 
                            type="password" 
                            placeholder="Senha" 
                            className="entrada senha" 
                            value={pass}
                            onChange={handlePassChange}
                            />

                            <input 
                            type="password" 
                            placeholder="Confirmar Senha" className="entrada confirmacaoSenha"
                            value={passConfirm} 
                            onChange={handlePassConfirmChange}
                            />

                            <input 
                            type="text" 
                            placeholder="E-mail" 
                            className="entrada email" 
                            value={email}
                            onChange={handleEmailChange}
                            />

                            <input 
                            type="text" 
                            placeholder="Telefone" 
                            className="entrada telefone" 
                            value={fone}
                            onChange={handleFoneChange}
                            />

                            <input
                            type="text"
                            placeholder="CRM / CROP"
                            className= "entrada registro"
                            value={registro}
                            onChange={handleRegistroChange}
                            />

                            <textarea 
                            type="text" 
                            placeholder="Descrição do Perfil" className="entrada descricao"
                            value={bio}
                            onChange={handleBioChange}
                            ></textarea>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
}
