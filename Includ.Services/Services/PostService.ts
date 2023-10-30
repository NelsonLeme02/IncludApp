import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'
import { Post } from '../../Includ.Application/Entity/PostEntity'
import { Atualizacao } from '../../Includ.Application/Models/AtualizacaoPostModel'
import { IPostService } from '../Interfaces/IPostService'

export class PostService implements IPostService {

    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async createPost(Post:Post) {
        let query:string = `insert into dbo.Post values (newid(), '${Post.IdComunidade}','${Post.CorpoPost}', '${Post.AvaliacaoPost}', '${Post.IdImagemPost}', '${Post.Titulo}')`
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readAllPost() {
        let query: string = `select * from dbo.Post for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readAllPostToFeed(count: number) {
        let query: string = `select top 50 * from dbo.Post offset ${count} for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }


    async readPost(IdPost:string) {
        let query: string = `select * from dbo.Post where Id = '${IdPost}' for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async updatePost(atualizacao: Atualizacao) {
        let query:string = `update from dbo.Post set ${atualizacao.NomeDado} = '${atualizacao.DadoNovo}' where Id = '${atualizacao.IdPost}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Post atualizado'
    }

    async deletePost(IdPost:string) {
        let query:string = `delete from dbo.Post where Id = '${IdPost}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Post deletado'
    }
}