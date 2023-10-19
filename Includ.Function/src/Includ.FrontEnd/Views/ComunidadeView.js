import React, { useState } from 'react';
import './ComunidadeView.css';
import { Link } from 'react-router-dom';
//import { ComunidadeComponent } from '../Components/ComunidadeComponent';
import CabecalhoView from './CabecalhoView'

export default function ComunidadeView() {
    return (
        <div>
            <CabecalhoView />
            <div className="page">
                <section className="info_perfil">
                    <div className="bloco"></div>
                    <div className="foto_perfil_comunidade">
                        <img src="Static/Perfil.jpg" alt="perfil comunidade" />
                    </div>
                    <h2>Nome da comunidade</h2>
                    <i>
                        <p>Nome do criador | 00/00/0000</p>
                    </i>
                    <br /><br /><br /><br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
                        cupiditate eos voluptate vel pariatur assumenda ipsa, placeat perspiciatis
                        deserunt sequi voluptates sit tempore dolorum exercitationem dolor ratione
                        totam. Natus, nobis.
      </p>
                </section>

                <div className="feed">
                    <section className="box">
                        <div className="post">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
                                dolorum, at in tempore accusantium nihil fugiat dignissimos nemo hic
                                possimus sed vel quam. Consequuntur fugiat et ratione? Earum, ab
                                perferendis.
          </p>
                        </div>
                        <div className="post-bar">Up Down</div>
                    </section>
                </div>

                <div className="feed">
                    <section className="box">
                        <div className="post">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
                                dolorum, at in tempore accusantium nihil fugiat dignissimos nemo hic
                                possimus sed vel quam. Consequuntur fugiat et ratione? Earum, ab
                                perferendis.
          </p>
                        </div>
                        <div className="post-bar"> </div>
                    </section>
                </div>

                <div className="feed">
                    <section className="box">
                        <div className="post">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
                                dolorum, at in tempore accusantium nihil fugiat dignissimos nemo hic
                                possimus sed vel quam. Consequuntur fugiat et ratione? Earum, ab
                                perferendis.
          </p>
                        </div>
                        <div className="post-bar"></div>
                    </section>
                </div>
            </div>
        </div>

    )
}