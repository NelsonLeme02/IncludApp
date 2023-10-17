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
                objetoUsuario["Nome"],
                objetoUsuario["DataNascimento"],
                objetoUsuario["Email"],
                objetoUsuario["Senha"],
                objetoUsuario["Cep"],
                objetoUsuario["Telefone"],
                objetoUsuario["IdTipo"]
            );
            return usuario;
        }
        return null; 
    }
    
    
}