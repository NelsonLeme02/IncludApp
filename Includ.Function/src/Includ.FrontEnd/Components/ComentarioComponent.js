export class ComentarioComponent{

    async buscarComentario(email,password){
        const URL = `http://localhost:4000/Comentario/buscarComentario?email=${email}&senha=${password}`
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

    async buscarTodosComentarios(){
        const URL = `http://localhost:4000/Comentario/buscarTodosComentarios`
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

    async criarComentario(NomeComunidade,AdmComunidade){
        const URL = `http://localhost:4000/Comentario/criarComentario`
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

    async atualizaComentario(IdComentario,NomeDado,DadoNovo){
        const URL = `http://localhost:4000/Comentario/atualizaComentario`
        const data = {
            IdComentario : IdComentario,
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

    async deletarComentario(idComentario){
        const URL = `http://localhost:4000/Comentario/deletarComentario?IdComentario=${idComentario}`
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