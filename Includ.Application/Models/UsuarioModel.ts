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
            this.Id = Id
            this.NomeUsuario = NomeUsuario
            this.CPFUsuario = CPFUsuario
            this.DataNascUsuario = DataNascUsuario
            this.EmailUsuario = EmailUsuario
            this.TelefoneUsuario = TelefoneUsuario
            this.EnderecoUsuario = EnderecoUsuario
            this.CEPUsuario = CEPUsuario
            this.SenhaUsuario = SenhaUsuario
            this.IdEspecialista = IdEspecialista
            this.IdPatologia = IdPatologia
            this.IdTipo = IdTipo
        }
}