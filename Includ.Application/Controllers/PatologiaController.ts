import express, { Request, Response, Router } from 'express';
import {IPatologiaService} from '../../Includ.Services/Interfaces/IPatologiaService'

export class PatologiaController{
    private readonly _PatologiaService: IPatologiaService
    public router: Router

    constructor(PatologiaService: IPatologiaService) {
        this._PatologiaService = PatologiaService
        this.router = express.Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/buscarPatologia', this.buscarPatologia.bind(this));
        this.router.get('/buscarTodosPatologias', this.buscarTodosPatologias.bind(this));
    }

    public async buscarPatologia(req: Request, res: Response): Promise<any> {
        const IdPatologia: string = req.query.IdPatologia as string;

        if (req !== null){
            
            let findPatologia = await this._PatologiaService.readPatologia(IdPatologia)

            switch(findPatologia){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Patologia')

                default:
                    res.status(200)
                    res.json(findPatologia)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosPatologias(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findPatologias = await this._PatologiaService.readAllPatologia()

            switch(findPatologias){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Patologias')

                default:
                    res.status(200)
                    res.json(findPatologias)
            }
            
        }

        res.status(500)
    }
}