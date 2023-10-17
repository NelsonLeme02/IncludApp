import { Comunnity } from "../../Includ.Application/Entity/ComunnityEntity";

export interface IComunnityService {
    criarComunidade(Comunidade:Comunnity): Promise <void>

}