import './CadastroView.css';
import CabecalhoView from './CabecalhoView'
import Perfil from './Static/Perfil.jpg'

export default function CadastroView() {
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
                        <form className="formlario">
                            <input type="text" placeholder="Nome" className="entrada nome" />
                            <input type="date" className="entrada data" />

                            <input type="password" placeholder="Senha" className="entrada senha" />
                            <input type="password" placeholder="Confirmar Senha" className="entrada confirmacaoSenha" />

                            <input type="text" placeholder="E-mail" className="entrada email" />

                            <input type="text" placeholder="Codigo E-mail" className="entrada codigoEmail" />
                            <button className=" botaoEmail botao_verify">Verificar</button>

                            <input type="text" placeholder="Telefone" className="entrada telefone" />
                            <input type="text" placeholder="Telefone" className="entrada IDProfisional" />

                            <input type="text" placeholder="Codigo Telefone" className="entrada codigoTelefone" />
                            <button className="botaoTelefone botao_verify">Verificar</button>

                            <textarea type="text" placeholder="Descrição do Perfil" className="entrada descricao"></textarea>
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
}
