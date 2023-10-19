export class Atualizacao {
    IdEspecialista!: string
    NomeDado!: string
    DadoNovo!: string
    constructor(
        IdEspecialista: string,
        NomeDado: string,
        DadoNovo: string
    ) {
        this.IdEspecialista = IdEspecialista
        this.NomeDado = NomeDado
        this.DadoNovo = DadoNovo
    }
}