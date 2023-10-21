import React from 'react'
import './Global.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginView from '../../Includ.FrontEnd/Views/LoginView'
import PerfilView from '../../Includ.FrontEnd/Views/PerfilView'
import CadastroView from '../../Includ.FrontEnd/Views/CadastroView'
import ComunidadeView from '../../Includ.FrontEnd/Views/ComunidadeView'

export default function DomainRouter() {
    return (
        <div>
            <Routes>
                <Route path="/Login" element={<LoginView />} />
                <Route path="/Cadastro" element={<CadastroView />} />
                <Route path="/Comunidade" element={<ComunidadeView />} />
                <Route path="/Perfil" element={<PerfilView />} />
                <Route path="/" element={<Navigate to="/Login" />} />
            </Routes>
        </div>
    )
}

