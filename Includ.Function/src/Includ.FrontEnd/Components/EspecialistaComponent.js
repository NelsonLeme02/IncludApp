export class EspecialistaComponent{

    async buscarEspecialista(IdEspecialista){
        const URL = `http://localhost:4000/Especialista/buscarEspecialista?idEspecialista=${IdEspecialista}`
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

    async buscarTodosEspecialistas(){
        const URL = `http://localhost:4000/Especialista/buscarTodosEspecialistas`
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

    async criarEspecialista(TipoRegistroEspecialista,RegistroEspecialista,IdEspecialidade){
        const URL = `http://localhost:4000/Especialista/criarEspecialista`
        const data = {
            Id : "",
            TipoRegistroEspecialista : TipoRegistroEspecialista,
            RegistroEspecialista : RegistroEspecialista,
            IdEspecialidade : IdEspecialidade
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

    async atualizaEspecialista(IdEspecialista,NomeDado,DadoNovo){
        const URL = `http://localhost:4000/Especialista/atualizaEspecialista`
        const data = {
            IdEspecialista : IdEspecialista,
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

    async deletarEspecialista(idEspecialista){
        const URL = `http://localhost:4000/Especialista/deletarEspecialista?idEspecialista=${idEspecialista}`
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