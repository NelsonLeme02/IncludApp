export class Post {
    Id?: string
    IdComunidade!: string
    CorpoPost!: string
    AvaliacaoPost!: string
    IdImagemPost?: string
    Titulo!: string
    constructor(
        Id: string,
        IdComunidade: string,
        CorpoPost: string,
        AvaliacaoPost: string,
        IdImagemPost: string,
        Titulo: string
    ) {
        this.Id = Id
        this.IdComunidade = IdComunidade
        this.CorpoPost = CorpoPost
        this.AvaliacaoPost = AvaliacaoPost
        this.IdImagemPost = IdImagemPost
        this.Titulo = Titulo
    }
}