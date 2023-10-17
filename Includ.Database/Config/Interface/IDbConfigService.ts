export interface IDbConfigService{
    connectToDb(): Promise<any>
    executarQuery(query: string): Promise<any>
}
