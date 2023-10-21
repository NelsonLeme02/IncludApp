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
            this.Id = Id
            this.IdPost = IdPost
            this.AvaliacaoComentario = AvaliacaoComentario
            this.VerificacaoComentario = VerificacaoComentario
            this.CorpoComentario = CorpoComentario
            this.IdImagemComentario = IdImagemComentario
            this.IdComunidade = IdComunidade
        }
}