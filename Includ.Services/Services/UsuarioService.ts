import { IUsuarioService } from '../Interfaces/IUsuarioService'
import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'
import { Usuario } from '../../Includ.Application/Models/UsuarioModel'
import { Atualizacao } from '../../Includ.Application/Models/AtualizacaoUsuarioModel'

export class UsuarioService implements IUsuarioService {

    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async createUsuario(usuario:Usuario) {
        let query:string = `insert into dbo.Usuario values (newid(), '${usuario.NomeUsuario}','${usuario.CPFUsuario}', '${usuario.DataNascUsuario}', '${usuario.EmailUsuario}', '${usuario.TelefoneUsuario}', '${usuario.EnderecoUsuario}', '${usuario.CEPUsuario}', '${usuario.SenhaUsuario}', '${usuario.IdEspecialista}', '${usuario.IdPatologia}', '${usuario.IdTipo}')`
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readAllUsuario() {
        let query: string = `select * from dbo.Usuario for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readUsuario(email:string, senha:string) {
        let query: string = `select * from dbo.Usuario where email ='${email}' and senha = '${senha}' for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async updateUsuario(atualizacao: Atualizacao) {
        let query:string = `update from dbo.Usuario set ${atualizacao.NomeDado} = '${atualizacao.DadoNovo}' where Id = '${atualizacao.IdUsuario}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Usuario atualizado'
    }

    async deleteUsuario(idUser:string) {
        let query:string = `delete from dbo.Usuario where Id = '${idUser}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Usuario deletado'
    }
}