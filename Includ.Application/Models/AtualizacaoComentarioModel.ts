export class Atualizacao {
    IdComentario!: string
    NomeDado!: string
    DadoNovo!: string
    constructor(
        IdComentario: string,
        NomeDado: string,
        DadoNovo: string
    ) {
        this.IdComentario = IdComentario
        this.NomeDado = NomeDado
        this.DadoNovo = DadoNovo
    }
}