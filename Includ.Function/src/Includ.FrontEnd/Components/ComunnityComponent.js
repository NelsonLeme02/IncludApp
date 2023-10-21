export class ComunnityComponent{

    async buscarComunnity(email,password){
        const URL = `http://localhost:4000/Comunnity/buscarComunnity?email=${email}&senha=${password}`
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

    async buscarTodosComunnitys(){
        const URL = `http://localhost:4000/Comunnity/buscarTodosComunnitys`
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

    async criarComunnity(NomeComunidade,AdmComunidade){
        const URL = `http://localhost:4000/Comunnity/criarComunnity`
        const data = {
            Id : "",
            NomeComunidade : NomeComunidade,
            AdmComunidade : AdmComunidade
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

    async atualizaComunnity(IdComunnity,NomeDado,DadoNovo){
        const URL = `http://localhost:4000/Comunnity/atualizaComunnity`
        const data = {
            IdComunnity : IdComunnity,
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

    async deletarComunnity(idUser){
        const URL = `http://localhost:4000/Comunnity/deletarComunnity?idUser=${idUser}`
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