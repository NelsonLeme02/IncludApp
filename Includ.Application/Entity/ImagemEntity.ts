export class Imagem {
    Id? : string 
    URLImagem! : string
    constructor(
        Id:string, 
        URLImagem:string    
    ) {
        this.Id = Id
        this.URLImagem = URLImagem
    }
}
