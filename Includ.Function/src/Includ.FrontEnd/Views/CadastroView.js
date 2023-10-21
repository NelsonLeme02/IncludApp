import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CadastroView.css';
import CabecalhoView from './CabecalhoView'
import Perfil from './Static/Perfil.jpg'
import Switch from "react-switch";
import { UsuarioComponent } from '../Components/UsuarioComponent';

export default function CadastroView() {

    const [isEspecialista, setIsEspecialista] = useState(false);
    const [NomeUsuario, setNome] = useState('');
    const [CPFUsuario, setCPFUsuario] = useState('');
    const [DataNascUsuario, setDataNascUsuario] = useState('');
    const [EmailUsuario, setEmailUsuario] = useState('');
    const [TelefoneUsuario, setTelefoneUsuario] = useState('');
    const [EnderecoUsuario, setEnderecoUsuario] = useState('');
    const [CEPUsuario, setCEPUsuario] = useState('');
    const [SenhaUsuario, setSenhaUsuario] = useState('');

    function handleNomeChange(event) {
        setNome(event.target.value);
    }
    function handleCPFUsuarioChange(event) {
        setCPFUsuario(event.target.value);
    }
    function handleDataNascUsuarioChange(event) {
        setDataNascUsuario(event.target.value);
    }
    function handleEmailUsuarioChange(event) {
        setEmailUsuario(event.target.value);
    }
    function handleTelefoneUsuarioChange(event) {
        setTelefoneUsuario(event.target.value);
    }
    function handleEnderecoUsuarioChange(event) {
        setEnderecoUsuario(event.target.value);
    }
    function handleCEPUsuarioChange(event) {
        setCEPUsuario(event.target.value);
    }
    function handleSenhaUsuarioChange(event) {
        setSenhaUsuario(event.target.value);
    }
    function handleEspecialistaChange(checked) {
        setIsEspecialista(checked);
    }

    function fazerCadastro(){
        var Instance = new UsuarioComponent();
        Instance.TryCadastro(NomeUsuario,CPFUsuario,DataNascUsuario,EmailUsuario,TelefoneUsuario,EnderecoUsuario,CEPUsuario,SenhaUsuario,isEspecialista)
    }


    return (
        <div className='bodyCadastro'>
            <CabecalhoView />
            <div className='principal'>
                <div>Perfil</div>
                <table className='modalCadastro'>
                    <tbody>
                        <tr>
                            <td rowspan="1" className='w30'>Foto de Perfil</td>
                            <td className='w70'>Dados</td>
                        </tr>
                        <tr>                                <td rowspan="8" className='w30'>imagem</td>
                            <td className='w70'><input className='input' id='NomeUsuario' onChange={handleNomeChange}
                                type='text'
                                placeholder='Nome...' /></td></tr>
                        <tr><td className='w70'><input className='input' id='CPFUsuario' onChange={handleCPFUsuarioChange}
                            type='text'
                            placeholder='CPF...' /></td></tr>
                        <tr><td className='w70'><input className='input'
                            type='date'
                            id='DataNascUsuario' onChange={handleDataNascUsuarioChange} placeholder='Data de Nascimento...' /></td></tr>
                        <tr><td className='w70'><input className='input'
                            id='EmailUsuario' onChange={handleEmailUsuarioChange}
                            type='text'
                            placeholder='E-mail...' /></td></tr>
                        <tr><td className='w70'><input className='input' id='TelefoneUsuario'
                            type='text'
                            onChange={handleTelefoneUsuarioChange} placeholder='Telefone...' /></td></tr>
                        <tr><td className='w70'><input className='input' id='EnderecoUsuario'
                            type='text'
                            onChange={handleEnderecoUsuarioChange} placeholder='Endereço...' /></td></tr>
                        <tr><td className='w70'><input className='input' id='CEPUsuario' onChange={handleCEPUsuarioChange}
                            type='text'
                            placeholder='CEP...' /></td></tr>
                        <tr><td className='w70'>
                            <div className='gridFlag'>                                                              <span className='flag'>
                                Especialista</span>
                                <Switch
                                    onChange={handleEspecialistaChange}
                                    checked={isEspecialista}
                                    id="FlagEspecialista"
                                    offColor="#D3D3D3"
                                    onColor="#86d3ff"
                                    handleDiameter={20}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                    height={22}
                                    width={48}
                                    className="alignFlag react-switch"
                                />
                                <span className='flag'>PCD</span></div>
                        </td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
