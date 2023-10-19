import {ILoginService} from '../Interfaces/ILoginService'
import {IUsuarioService} from '../Interfaces/IUsuarioService'
import {Usuario} from '../../Includ.Application/Models/UsuarioModel'

export class LoginService implements ILoginService{

    private readonly _usuarioService: IUsuarioService

    constructor(usuarioService: IUsuarioService){
        this._usuarioService = usuarioService
    }

    fazerLogin(email: string, senha: string){
        let buscarUsuario: any = this._usuarioService.readUsuario(email, senha);

        if(buscarUsuario !== null && buscarUsuario !== '') {
            
            let objetoUsuario: any = JSON.parse(buscarUsuario);

            let usuario: Usuario = new Usuario(
                objetoUsuario["Id"],
                objetoUsuario["NomeUsuario"],
                objetoUsuario["CPFUsuario"],
                objetoUsuario["DataNascUsuario"],
                objetoUsuario["EmailUsuario"],
                objetoUsuario["TelefoneUsuario"],
                objetoUsuario["EnderecoUsuario"],
                objetoUsuario["CEPUsuario"],
                objetoUsuario["SenhaUsuario"],
                objetoUsuario["IdEspecialista"],
                objetoUsuario["IdPatologia"],
                objetoUsuario["IdTipo"]
            );
            return usuario;
        }
        return null; 
    }
    
    
}