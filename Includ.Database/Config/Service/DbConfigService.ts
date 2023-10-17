import { IDbConfigService } from '../Interface/IDbConfigService'
import Config from '../dbConfig.json'
import { ConnectionPool } from 'mssql';

 
export class DbConfigService implements IDbConfigService {

    async connectToDb() {
        try {
            const pool = new ConnectionPool(Config);
            const connection = await pool.connect();
            console.log('Connected to database');
            return connection;
        } catch (err) {
            console.error('Database connection error', err);
        }
    }

    async executarQuery(query: string) {
        const connection = await this.connectToDb();
        try {
            const result = await connection!.request().query(query);
            console.log(result);
            return result.recordset;
        } catch (err) {
            console.error('Error fetching users', err);
        } finally {
            connection!.close();
        }
    }
}
