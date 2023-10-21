export class Patologia {
    Id? : string 
    DescPatologia! : string
    constructor(
        Id:string, 
        DescPatologia:string    
    ) {
        this.Id = Id
        this.DescPatologia = DescPatologia
    }
}
