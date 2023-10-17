export class Comentario{
    Id?: string
    IdPost!: string
    AvaliacaoComentario!: number
    VerificacaoComentario!: boolean
    CorpoComentario!: string
    IdImagemComentario?: string
    IdComunidade?: string

    constructor(
        Id: string,
        IdPost: string,
        AvaliacaoComentario: number,
        VerificacaoComentario: boolean,
        CorpoComentario: string,
        IdImagemComentario: string,
        IdComunidade: string
        ){
            this.Id
            this.IdPost
            this.AvaliacaoComentario
            this.VerificacaoComentario
            this.CorpoComentario
            this.IdImagemComentario
            this.IdComunidade
        }
}