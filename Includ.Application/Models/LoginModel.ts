export class Login {
    Email!: string
    Senha!: string
    constructor(
        Email: string,
        Senha: string
    ) {
        this.Email = Email
        this.Senha = Senha
    }
}