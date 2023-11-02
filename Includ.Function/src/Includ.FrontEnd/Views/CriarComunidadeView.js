import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CriarComunidade.css';
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
    function mascara(e) {
        var v = e.target.value;
    
        if (isNaN(v[v.length - 1])) {
          e.target.value = v.substring(0, v.length - 1);
          return;
        }
    
        e.target.setAttribute('maxlength', '14');
        if (v.length === 3 || v.length === 7) e.target.value += '.';
        if (v.length === 11) e.target.value += '-';
      }

      function nanCPF(i) {
        var value = i.target.value;
    
        if (isNaN(value[value.length - 1])) {
          i.target.value = value.substring(0, value.length - 1);
          return;}

          i.target.setAttribute('maxlength', '14');
        if (value.length === 8 ) i.target.value += '-';
        if (value.length === 2) i.target.value += ' ';
        }

        function nanCEP(i) {
            var value = i.target.value;
        
            if (isNaN(value[value.length - 1])) {
              i.target.value = value.substring(0, value.length - 1);
              return;}
    
              i.target.setAttribute('maxlength', '9');
            if (value.length === 5) i.target.value += '-';
            }

    return (
        <div className='bodyCadastro'>
            <CabecalhoView />
            <div className='principal'>
                <div className='textoBranco'>Perfil</div>
                <table className='modalCadastro'>
                    <tbody>
                        <tr>
                            <td rowspan="1" className='w30 textoBranco textoBranco'>Foto de Perfil</td>
                            <td className='w70 textoBranco'>Dados</td>
                        </tr>
                        <tr>                                <td rowspan="8" className='w30 textoBranco'>imagem</td>
                            <td className='w70'><input className='input' id='NomeUsuario' onChange={handleNomeChange}
                                type='text'
                                placeholder='Nome...' /></td></tr>
                        <tr><td className='w70'><input className='input' id='CPFUsuario' maxlength="11" onChange={handleCPFUsuarioChange}
                            type='text'
                            placeholder='CPF...' onInput= {mascara} /></td></tr>
                        <tr><td className='w70'><input className='input'
                            type='date'
                            id='DataNascUsuario' onChange={handleDataNascUsuarioChange} placeholder='Data de Nascimento...' /></td></tr>
                        <tr><td className='w70'><input className='input'
                            id='EmailUsuario' onChange={handleEmailUsuarioChange}
                            type='text'
                            placeholder='E-mail...' /></td></tr>
                        <tr><td className='w70'><input className='input' id='TelefoneUsuario'
                            type='text'
                            onChange={handleTelefoneUsuarioChange} placeholder='Telefone...' onInput= {nanCPF} maxlength="10"/></td></tr>
                        <tr><td className='w70'><input className='input' id='EnderecoUsuario'
                            type='text'
                            onChange={handleEnderecoUsuarioChange} placeholder='Endereço...' /></td></tr>
                        <tr><td className='w70'><input className='input' id='CEPUsuario' onChange={handleCEPUsuarioChange}
                            type='text'
                            placeholder='CEP...' maxlength="8" onInput={nanCEP} /></td></tr>
                        <tr><td className='w70'>
                            <div className='gridFlag textoBranco'>                                                              <span className='flag'>
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
                                <span className='flag textoBranco'>PCD</span></div>
                        </td></tr>
                    </tbody>
                </table>
                <button className="realizarCadastro" onClick={fazerCadastro}>Fazer Cadastro</button>
            </div>
        </div>
    );
}
