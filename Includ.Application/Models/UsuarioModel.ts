import {IdentityType} from '../../Includ.Application/Identity/IdentityType'

export class Usuario{
    Id?: string
    NomeUsuario!: string
    CPFUsuario!: string
    DataNascUsuario!: string
    EmailUsuario!: string
    TelefoneUsuario!: string
    EnderecoUsuario!: string
    CEPUsuario!: string
    SenhaUsuario!: string
    IdEspecialista?: string
    IdPatologia?: string
    IdTipo?: IdentityType

    constructor(
        Id: string,
        NomeUsuario: string,
        CPFUsuario: string,
        DataNascUsuario: string,
        EmailUsuario: string,
        TelefoneUsuario: string,
        EnderecoUsuario: string,
        CEPUsuario: string,
        SenhaUsuario: string,
        IdEspecialista: string,
        IdPatologia: string,
        IdTipo: IdentityType
        ){
            this.Id
            this.NomeUsuario
            this.CPFUsuario
            this.DataNascUsuario
            this.EmailUsuario
            this.TelefoneUsuario
            this.EnderecoUsuario
            this.CEPUsuario
            this.SenhaUsuario
            this.IdEspecialista
            this.IdPatologia
            this.IdTipo
        }
}