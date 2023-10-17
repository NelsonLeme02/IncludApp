import { IPostService } from '../Interfaces/IPostService'
import {Post} from '../../Includ.Application/Entity/PostEntity'
import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'

export class PostService implements IPostService{
    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async criarPost(Dados:Post){
        let query = `insert into dbo.Post values(newid(),'${Dados.Titulo}', '${Dados.Corpo}', '${Dados.Avaliacao}', '${Dados.Id}')`
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }
}