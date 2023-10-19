export class Atualizacao {
    IdPatologia!: string
    NomeDado!: string
    DadoNovo!: string
    constructor(
        IdPatologia: string,
        NomeDado: string,
        DadoNovo: string
    ) {
        this.IdPatologia = IdPatologia
        this.NomeDado = NomeDado
        this.DadoNovo = DadoNovo
    }
}