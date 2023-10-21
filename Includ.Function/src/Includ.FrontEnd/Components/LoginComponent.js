export class LoginComponent {
    async TryLogin(email,senha) {
        const URL = `http://localhost:4000/Usuario/fazerLogin?email=${email}&senha=${senha}`
        try {
            const response = await fetch(URL,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
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
