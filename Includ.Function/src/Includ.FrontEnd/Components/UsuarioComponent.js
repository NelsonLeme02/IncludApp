export class UsuarioComponent{

    async buscarUsuario(email,password){
        const URL = `http://localhost:4000/Usuario/buscarUsuario?email=${email}&senha=${password}`
        try {
            const response = await fetch(URL,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())

            return response
        }
        catch(err){
            console.log(err)
        }
    }

    async buscarTodosUsuarios(){
        const URL = `http://localhost:4000/Usuario/buscarTodosUsuarios`
        try {
            const response = await fetch(URL,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())

            return response
        }
        catch(err){
            console.log(err)
        }
    }

    async criarUsuario(NomeUsuario,CPFUsuario,DataNascUsuario,EmailUsuario,TelefoneUsuario,EnderecoUsuario,CEPUsuario,SenhaUsuario,IdEspecialista,IdPatologia,IdTipo){
        const URL = `http://localhost:4000/Usuario/criarUsuario`
        const data = {
            Id : "",
            NomeUsuario : NomeUsuario,
            CPFUsuario : CPFUsuario,
            DataNascUsuario : DataNascUsuario,
            EmailUsuario : EmailUsuario,
            TelefoneUsuario : TelefoneUsuario,
            EnderecoUsuario : EnderecoUsuario,
            CEPUsuario : CEPUsuario,
            SenhaUsuario : SenhaUsuario,
            IdEspecialista : IdEspecialista,
            IdPatologia : IdPatologia,
            IdTipo : IdTipo
        }
        try {
            const response = await fetch(URL,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json())

            return response
        }
        catch(err){
            console.log(err)
        }
    }

    async atualizaUsuario(IdUsuario,NomeDado,DadoNovo){
        const URL = `http://localhost:4000/Usuario/atualizaUsuario`
        const data = {
            IdUsuario : IdUsuario,
            NomeDado : NomeDado,
            DadoNovo : DadoNovo
        }
        try {
            const response = await fetch(URL,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json())

            return response
        }
        catch(err){
            console.log(err)
        }
    }

    async deletarUsuario(idUser){
        const URL = `http://localhost:4000/Usuario/deletarUsuario?idUser=${idUser}`
        try {
            const response = await fetch(URL,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())

            return response
        }
        catch(err){
            console.log(err)
        }
    }
}