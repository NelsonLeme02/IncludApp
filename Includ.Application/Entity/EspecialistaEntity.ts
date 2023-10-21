export class Especialista {
    Id?: string
    TipoRegistroEspecialista!: string
    RegistroEspecialista!: string
    IdEspecialidade!: string
    constructor(
        Id: string,
        TipoRegistroEspecialista: string,
        RegistroEspecialista: string,
        IdEspecialidade: string
    ) {
        this.Id = Id
        this.TipoRegistroEspecialista = TipoRegistroEspecialista
        this.RegistroEspecialista = RegistroEspecialista
        this.IdEspecialidade = IdEspecialidade
    }
}