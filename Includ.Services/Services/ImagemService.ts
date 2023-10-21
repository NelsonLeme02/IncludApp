import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'
import { Imagem } from '../../Includ.Application/Entity/ImagemEntity'
import { IImagemService } from '../Interfaces/IImagemService'

export class ImagemService implements IImagemService {

    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async createImagem(Imagem:Imagem) {
        let query:string = `insert into dbo.Imagem values (newid(), '${Imagem.URLImagem}')`
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readAllImagem() {
        let query: string = `select * from dbo.Imagem for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readImagem(IdImagem:string) {
        let query: string = `select * from dbo.Imagem where Id = '${IdImagem}' for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async deleteImagem(IdImagem:string) {
        let query:string = `delete from dbo.Imagem where Id = '${IdImagem}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Imagem deletado'
    }
}