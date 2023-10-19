import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'
import { IEspecialidadeService } from '../Interfaces/IEspecialidadeService'

export class EspecialidadeService implements IEspecialidadeService {

    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async readAllEspecialidade() {
        let query: string = `select * from dbo.Especialidade for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readEspecialidade(IdEspecialidade:string) {
        let query: string = `select * from dbo.Especialidade where Id = '${IdEspecialidade}' for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }
}