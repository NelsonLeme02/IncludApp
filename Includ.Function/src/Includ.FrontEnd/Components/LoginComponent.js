import $ from 'jquery'

export class LoginComponent {
    async TryLogin() {
        const $Email = $('#user')
        const $Senha = $('#pass')
        const URL = 'http://localhost:4000/Usuario/fazerLogin'
        const Data = {
            Email: $Email,
            Senha: $Senha
        }
        try {
            const response = await fetch(URL,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Data)
            }).then(response => response.json())

            var responseBody = await response

            switch(responseBody){
                case 'Usuario não Encontrado':
                    console.log('Acesso Liberado')
                case 'Acesso autorizado':
                    console.log('Acesso Negado')
                default:
                    break
            }
        }
        catch(err){
            console.log(err)
        }
    }
}
