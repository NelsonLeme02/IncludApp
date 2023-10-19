import { Comunnity } from "../../Includ.Application/Entity/ComunnityEntity";
import { Atualizacao } from "../../Includ.Application/Models/AtualizacaoComunnityModel";

export interface IComunnityService {
    createComunnity(Comunnity:Comunnity): Promise<any>
    readAllComunnity(): Promise<any>
    readComunnity(nomeComunidade: string): Promise<any>
    updateComunnity(atualizacao: Atualizacao): Promise<any>
    deleteComunnity(idComunnity:string): Promise<any>
}