export class Atualizacao {
    IdEspecialidade!: string
    NomeDado!: string
    DadoNovo!: string
    constructor(
        IdEspecialidade: string,
        NomeDado: string,
        DadoNovo: string
    ) {
        this.IdEspecialidade = IdEspecialidade
        this.NomeDado = NomeDado
        this.DadoNovo = DadoNovo
    }
}