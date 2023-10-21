export interface IPatologiaService{
    readAllPatologia():Promise<any>
    readPatologia(nomePatologia:string):Promise<any>
}