export class Atualizacao {
    IdUsuario!: string
    NomeDado!: string
    DadoNovo!: string
    constructor(
        IdUsuario: string,
        NomeDado: string,
        DadoNovo: string
    ) {
        this.IdUsuario = IdUsuario
        this.NomeDado = NomeDado
        this.DadoNovo = DadoNovo
    }
}