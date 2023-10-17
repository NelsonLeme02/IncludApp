import { Post } from "../../Includ.Application/Entity/PostEntity";

export interface IPostService{
    
    criarPost(Dados:Post): Promise <void>

}