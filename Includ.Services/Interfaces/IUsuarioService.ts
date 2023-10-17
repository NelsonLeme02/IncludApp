import { Usuario } from '../../Includ.Application/Models/UsuarioModel'
import { Atualizacao } from '../../Includ.Application/Models/AtualizacaoModel'

export interface IUsuarioService {
    createUsuario(usuario:Usuario): Promise<any>
    readAllUsuario(): Promise<any>
    readUsuario(email: string, senha: string): Promise<any>
    updateUsuario(atualizacao: Atualizacao): Promise<any>
    deleteUsuario(idUser: string): Promise<any>
}