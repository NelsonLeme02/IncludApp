import { IComunnityService } from '../Interfaces/IComunnityService'
import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'
import { Comunnity } from '../../Includ.Application/Entity/ComunnityEntity'
import { Atualizacao } from '../../Includ.Application/Models/AtualizacaoComunnityModel'

export class ComunnityService implements IComunnityService {

    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async createComunnity(Comunnity:Comunnity) {
        let query:string = `insert into dbo.Comunnity values (newid(), '${Comunnity.AdmComunidade}','${Comunnity.NomeComunidade}')`
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readAllComunnity() {
        let query: string = `select * from dbo.Comunnity for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readComunnity(nomeComunidade: string) {
        let query: string = `select * from dbo.Comunnity where NomeComunidade ='${nomeComunidade}' for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async updateComunnity(atualizacao: Atualizacao) {
        let query:string = `update from dbo.Comunnity set ${atualizacao.NomeDado} = '${atualizacao.DadoNovo}' where Id = '${atualizacao.IdComunnity}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Comunnity atualizado'
    }

    async deleteComunnity(idComunnity:string) {
        let query:string = `delete from dbo.Comunnity where Id = '${idComunnity}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Comunnity deletado'
    }
}