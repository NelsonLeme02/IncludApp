import { Post } from "../../Includ.Application/Entity/PostEntity";
import { Atualizacao } from '../../Includ.Application/Models/AtualizacaoPostModel'

export interface IPostService {
    createPost(Post:Post): Promise<any>
    readAllPost(): Promise<any>
    readAllPostToFeed(count: number): Promise<any>
    readPost(IdPost:string): Promise<any>
    updatePost(atualizacao: Atualizacao): Promise<any>
    deletePost(IdPost: string): Promise<any>
}