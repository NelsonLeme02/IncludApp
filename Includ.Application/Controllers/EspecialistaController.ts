import express, { Request, Response, Router } from 'express';
import {IEspecialistaService} from '../../Includ.Services/Interfaces/IEspecialistaService'
import { Especialista } from '../Entity/EspecialistaEntity';
import { Atualizacao } from '../Models/AtualizacaoEspecialistaModel';

export class EspecialistaController{
    private readonly _EspecialistaService: IEspecialistaService
    public router: Router

    constructor(EspecialistaService: IEspecialistaService) {
        this._EspecialistaService = EspecialistaService
        this.router = express.Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/buscarEspecialista', this.buscarEspecialista.bind(this));
        this.router.get('/buscarTodosEspecialistas', this.buscarTodosEspecialistas.bind(this));
        this.router.post('/criarEspecialista', this.criarEspecialista.bind(this));
        this.router.put('/atualizaEspecialista', this.atualizarEspecialista.bind(this));
        this.router.delete('/deletarEspecialista', this.deletarEspecialista.bind(this));
    }

    public async buscarEspecialista(req: Request, res: Response): Promise<any> {
        const idEspecialista: string = req.query.idEspecialista as string;

        if (req !== null){
            
            let findEspecialista = await this._EspecialistaService.readEspecialista(idEspecialista)

            switch(findEspecialista){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Especialista')

                default:
                    res.status(200)
                    res.json(findEspecialista)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosEspecialistas(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findEspecialista = await this._EspecialistaService.readAllEspecialista()

            switch(findEspecialista){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Especialistas')

                default:
                    res.status(200)
                    res.json(findEspecialista)
            }
            
        }

        res.status(500)
    }

    public async criarEspecialista(req: Request, res: Response): Promise<any>{
        const Especialista: Especialista = new(req.body)

        if(Especialista !== null){
             let tryCreate = await this._EspecialistaService.createEspecialista(Especialista)

             switch(tryCreate){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao criar Especialista')

                default:
                    res.status(200)
                    res.json(this._EspecialistaService.readEspecialista(Especialista.Id ? Especialista.Id : ''))
             }
        }
        else{
            res.status(500)
            res.json("Não foram informados parametros")
        }
    }

    public async deletarEspecialista(req: Request, res: Response): Promise<any> {
            const idEspecialista: string = req.query.idEspecialista as string;

        if (req !== null){
            
            let deleteEspecialista = await this._EspecialistaService.deleteEspecialista(idEspecialista)

            switch(deleteEspecialista){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao deletar o Especialista')

                default:
                    res.status(200)
                    res.json(deleteEspecialista)
            }
            
        }

        res.status(500)
    }

    public async atualizarEspecialista(req: Request, res: Response): Promise<any>{
        const atualizacao: Atualizacao = new(req.body)

        if(req !== null){
             let atualizar = await this._EspecialistaService.updateEspecialista(atualizacao)

             switch(atualizar){
                case null:
                    res.status(400)
                    res.json(atualizar)
                default:
                    res.status(200)
                    res.json(atualizar)
             }
        }
        else{
            res.status(500)
            res.json("Não foram informados parametros")
        }
    }
}