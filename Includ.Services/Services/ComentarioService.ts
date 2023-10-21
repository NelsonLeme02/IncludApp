import { IComentarioService } from '../Interfaces/IComentarioService'
import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'
import { Comentario } from '../../Includ.Application/Entity/ComentarioEntity'
import { Atualizacao } from '../../Includ.Application/Models/AtualizacaoComentarioModel'

export class ComentarioService implements IComentarioService {

    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async createComentario(Comentario:Comentario) {
        let query:string = `insert into dbo.Comentario values (newid(), '${Comentario.IdPost}','${Comentario.AvaliacaoComentario}','${Comentario.AvaliacaoComentario}','${Comentario.VerificacaoComentario}','${Comentario.CorpoComentario}','${Comentario.IdImagemComentario}','${Comentario.IdComunidade}')`
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readAllComentario() {
        let query: string = `select * from dbo.Comentario for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readComentario(idComentario:string) {
        let query: string = `select * from dbo.Comentario where NomeComunidade ='${idComentario}' for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async updateComentario(atualizacao: Atualizacao) {
        let query:string = `update from dbo.Comentario set ${atualizacao.NomeDado} = '${atualizacao.DadoNovo}' where Id = '${atualizacao.IdComentario}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Comentario atualizado'
    }

    async deleteComentario(idComentario:string) {
        let query:string = `delete from dbo.Comentario where Id = '${idComentario}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Comentario deletado'
    }
}