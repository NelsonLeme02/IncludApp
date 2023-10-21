import { Comentario } from "../../Includ.Application/Entity/ComentarioEntity";
import { Atualizacao } from "../../Includ.Application/Models/AtualizacaoComentarioModel";

export interface IComentarioService {
    createComentario(Comentario:Comentario): Promise<any>
    readAllComentario(): Promise<any>
    readComentario(idComentario:string): Promise<any>
    updateComentario(atualizacao: Atualizacao): Promise<any>
    deleteComentario(idComentario:string): Promise<any>
}