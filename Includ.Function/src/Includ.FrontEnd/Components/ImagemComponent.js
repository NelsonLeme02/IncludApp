export class ImagemComponent{

    async buscarImagem(IdImagem){
        const URL = `http://localhost:4000/Imagem/buscarImagem?idImagem=${IdImagem}`
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

    async buscarTodosImagems(){
        const URL = `http://localhost:4000/Imagem/buscarTodosImagems`
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

    async criarImagem(UrlImagem){
        const URL = `http://localhost:4000/Imagem/criarImagem`
        const data = {
            Id : "",
            UrlImagem : UrlImagem,
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

    async deletarImagem(idImagem){
        const URL = `http://localhost:4000/Imagem/deletarImagem?idImagem=${idImagem}`
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