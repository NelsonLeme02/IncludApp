export class PatologiaComponent{

    async buscarPatologia(IdPatologia){
        const URL = `http://localhost:4000/Patologia/buscarPatologia?idPatologia=${IdPatologia}`
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

    async buscarTodosPatologias(){
        const URL = `http://localhost:4000/Patologia/buscarTodosPatologias`
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