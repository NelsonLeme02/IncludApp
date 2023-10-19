export class Comunnity {
    Id? : string 
    NomeComunidade! : string
    AdmComunidade! : string
    constructor(
        Id:string, 
        NomeComunidade:string, 
        AdmComunidade:string        
    ) {
        this.Id = Id
        this.NomeComunidade = NomeComunidade
        this.AdmComunidade = AdmComunidade
    }
}
