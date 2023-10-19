import { IDbConfigService } from '../../Includ.Database/Config/Interface/IDbConfigService'
import { Especialista } from '../../Includ.Application/Entity/EspecialistaEntity'
import { Atualizacao } from '../../Includ.Application/Models/AtualizacaoEspecialistaModel'
import { IEspecialistaService } from '../Interfaces/IEspecialistaService'

export class EspecialistaService implements IEspecialistaService {

    private readonly _dbConfig: IDbConfigService

    constructor(dbConfig: IDbConfigService){
        this._dbConfig = dbConfig
    }

    async createEspecialista(Especialista:Especialista) {
        let query:string = `insert into dbo.Especialista values (newid(),'${Especialista.TipoRegistroEspecialista}', '${Especialista.RegistroEspecialista}', '${Especialista.IdEspecialidade}')`
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readAllEspecialista() {
        let query: string = `select * from dbo.Especialista for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async readEspecialista(IdEspecialista:string) {
        let query: string = `select * from dbo.Especialista where Id = '${IdEspecialista}' for json auto `
        let retorno = await this._dbConfig.executarQuery(query)
        return retorno
    }

    async updateEspecialista(atualizacao: Atualizacao) {
        let query:string = `update from dbo.Especialista set ${atualizacao.NomeDado} = '${atualizacao.DadoNovo}' where Id = '${atualizacao.IdEspecialista}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Especialista atualizado'
    }

    async deleteEspecialista(IdEspecialista:string) {
        let query:string = `delete from dbo.Especialista where Id = '${IdEspecialista}' for json auto`
        await this._dbConfig.executarQuery(query)
        return 'Especialista deletado'
    }
}