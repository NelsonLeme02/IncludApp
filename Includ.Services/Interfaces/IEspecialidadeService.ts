export interface IEspecialidadeService{
    readAllEspecialidade(): Promise<any>
    readEspecialidade(IdEspecialidade:string): Promise<any>
}