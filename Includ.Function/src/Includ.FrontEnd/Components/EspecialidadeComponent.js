export class EspecialidadeComponent{

    async buscarEspecialidade(IdEspecialidade){
        const URL = `http://localhost:4000/Especialidade/buscarEspecialidade?idEspecialidade=${IdEspecialidade}`
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

    async buscarTodosEspecialidades(){
        const URL = `http://localhost:4000/Especialidade/buscarTodosEspecialidades`
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
}