import {IComunnityService} from '../Interfaces/IComunnityService'
import {Comunnity} from '../../Includ.Application/Entity/ComunnityEntity'
import {IDbConfigService} from '../../Includ.Database/Config/Interface/IDbConfigService'



export class ComunnityServices implements IComunnityService{
    
    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async criarComunidade(Comunidade : Comunnity){
        let query: string = `insert into dbo.Comunnity values (newid(), '${Comunidade.Nome}', '${Comunidade.IdAdm}' )`
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

}