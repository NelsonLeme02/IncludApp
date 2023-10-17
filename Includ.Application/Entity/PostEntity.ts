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
        this.Id
        this.IdComunidade
        this.CorpoPost
        this.AvaliacaoPost
        this.IdImagemPost
        this.Titulo
    }
}