import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'
import { IPatologiaService } from '../Interfaces/IPatologiaService'

export class PatologiaService implements IPatologiaService {

    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async readAllPatologia() {
        let query: string = `select * from dbo.Patologia for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readPatologia(IdPatologia:string) {
        let query: string = `select * from dbo.Patologia where Id = '${IdPatologia}' for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }
}