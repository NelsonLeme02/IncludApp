export class Atualizacao {
    IdPost!: string
    NomeDado!: string
    DadoNovo!: string
    constructor(
        IdPost: string,
        NomeDado: string,
        DadoNovo: string
    ) {
        this.IdPost = IdPost
        this.NomeDado = NomeDado
        this.DadoNovo = DadoNovo
    }
}