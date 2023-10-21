import { Especialista } from '../../Includ.Application/Entity/EspecialistaEntity'
import { Atualizacao } from '../../Includ.Application/Models/AtualizacaoEspecialistaModel'

export interface IEspecialistaService{
    createEspecialista(Especialista:Especialista):Promise<any>
    readAllEspecialista():Promise<any>
    readEspecialista(IdEspecialista:string):Promise<any>
    updateEspecialista(atualizacao: Atualizacao):Promise<any>
    deleteEspecialista(IdEspecialista:string):Promise<any>
}