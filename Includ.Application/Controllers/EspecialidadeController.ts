import express, { Request, Response, Router } from 'express';
import {IEspecialidadeService} from '../../Includ.Services/Interfaces/IEspecialidadeService'

export class EspecialidadeController{
    private readonly _EspecialidadeService: IEspecialidadeService
    public router: Router

    constructor(EspecialidadeService: IEspecialidadeService) {
        this._EspecialidadeService = EspecialidadeService
        this.router = express.Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/buscarEspecialidade', this.buscarEspecialidade.bind(this));
        this.router.get('/buscarTodosEspecialidades', this.buscarTodosEspecialidades.bind(this));
    }

    public async buscarEspecialidade(req: Request, res: Response): Promise<any> {
        const nomeEspecialidade: string = req.query.NomeEspecialidade as string;

        if (req !== null){
            
            let findEspecialidade = await this._EspecialidadeService.readEspecialidade(nomeEspecialidade)

            switch(findEspecialidade){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Especialidade')

                default:
                    res.status(200)
                    res.json(findEspecialidade)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosEspecialidades(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findEspecialidades = await this._EspecialidadeService.readAllEspecialidade()

            switch(findEspecialidades){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Especialidades')

                default:
                    res.status(200)
                    res.json(findEspecialidades)
            }
            
        }

        res.status(500)
    }
}