import React, { useState } from 'react';
import './PerfilView.css';
import { Link } from 'react-router-dom';
import CabecalhoView from './CabecalhoView'
import Perfil from './Static/Perfil.jpg'

export default function PerfilView() {
    return (
        <div className="bodyPerfil">
            <CabecalhoView />
            <div className="page">
                    <section className="info_perfil">
                    <div className="bloco"></div>
                    <div className="foto_perfil_Perfil
                    ">
                        {/* <img src={Perfil} alt="perfil Perfil
                        " /> */}
                    </div>
                    <h2>Nome

                    </h2>
                    <i>
                        <p>Nome do criador | 00/00/0000</p>
                    </i>
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
                        cupiditate eos voluptate vel pariatur assumenda ipsa, placeat perspiciatis
      </p>
                </section>
                 <div className='feed'></div>           
        </div>
    </div>
    )
}