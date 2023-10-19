import { Imagem } from '../../Includ.Application/Entity/ImagemEntity'

export interface IImagemService{
    createImagem(Imagem:Imagem):Promise<any>
    readAllImagem():Promise<any>
    readImagem(IdImagem:string):Promise<any>
    deleteImagem(IdImagem:string):Promise<any>
}