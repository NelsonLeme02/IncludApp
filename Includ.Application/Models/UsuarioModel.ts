import {IdentityType} from '../../Includ.Application/Identity/IdentityType'

export class Usuario{
    Id?: string
    Nome!: string
    DataNascimento!: string
    Email!: string
    Senha!: string
    Cep!: string
    Telefone!: string
    IdTipo?: IdentityType

    constructor(Id: string,
        Nome: string,
        DataNascimento: string,
        Email: string,
        Senha: string,
        Cep: string,
        Telefone: string,
        IdTipo: IdentityType){
            this.Id,
            this.Nome,
            this.DataNascimento,
            this.Email,
            this.Senha,
            this.Cep,
            this.Telefone,
            this.IdTipo
        }
}