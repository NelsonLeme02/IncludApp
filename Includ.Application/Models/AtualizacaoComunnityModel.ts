export class Atualizacao {
    IdComunnity!: string
    NomeDado!: string
    DadoNovo!: string
    constructor(
        IdComunnity: string,
        NomeDado: string,
        DadoNovo: string
    ) {
        this.IdComunnity = IdComunnity
        this.NomeDado = NomeDado
        this.DadoNovo = DadoNovo
    }
}