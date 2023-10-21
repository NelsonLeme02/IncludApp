export class PostComponent{

    async buscarPost(IdPost){
        const URL = `http://localhost:4000/Post/buscarPost?idPost=${IdPost}`
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

    async buscarTodosPosts(){
        const URL = `http://localhost:4000/Post/buscarTodosPosts`
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

    async criarPost(IdComunidade,CorpoPost,AvaliacaoPost,IdImagemPost,Titulo){
        const URL = `http://localhost:4000/Post/criarPost`
        const data = {
            Id : "",
            IdComunidade : IdComunidade,
            CorpoPost : CorpoPost,
            AvaliacaoPost : AvaliacaoPost,
            IdImagemPost : IdImagemPost,
            Titulo : Titulo
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

    async atualizaPost(IdPost,NomeDado,DadoNovo){
        const URL = `http://localhost:4000/Post/atualizaPost`
        const data = {
            IdPost : IdPost,
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

    async deletarPost(idPost){
        const URL = `http://localhost:4000/Post/deletarPost?idPost=${idPost}`
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