import React from 'react'
import './Global.css'
import { Routes, Route } from 'react-router-dom'
import LoginView from '../../Includ.FrontEnd/Views/LoginView'
import HomeView from '../../Includ.FrontEnd/Views/HomeView'
import CadastroView from '../../Includ.FrontEnd/Views/CadastroView'

export default function DomainRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeView />} /> 
                <Route path="/Login" element={<LoginView />} />
                <Route path="/Cadastro" element={<CadastroView />} />
            </Routes>
        </div>
    )
}