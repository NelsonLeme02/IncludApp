import express, { Request, Response, Router } from 'express';
import {IComunnityService} from '../../Includ.Services/Interfaces/IComunnityService'
import { Comunnity } from '../Entity/ComunnityEntity';
import { Atualizacao } from '../Models/AtualizacaoComunnityModel';

export class ComunnityController{
    private readonly _ComunnityService: IComunnityService
    public router: Router

    constructor(ComunnityService: IComunnityService) {
        this._ComunnityService = ComunnityService
        this.router = express.Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/buscarComunnity', this.buscarComunnity.bind(this));
        this.router.get('/buscarTodosComunnitys', this.buscarTodosComunnitys.bind(this));
        this.router.post('/criarComunnity', this.criarComunnity.bind(this));
        this.router.put('/atualizaComunnity', this.atualizarComunnity.bind(this));
        this.router.delete('/deletarComunnity', this.deletarComunnity.bind(this));
    }

    public async buscarComunnity(req: Request, res: Response): Promise<any> {
        const nomeComunnity: string = req.query.NomeComunnity as string;

        if (req !== null){
            
            let findUser = await this._ComunnityService.readComunnity(nomeComunnity)

            switch(findUser){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Comunnity')

                default:
                    res.status(200)
                    res.json(findUser)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosComunnitys(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findUsers = await this._ComunnityService.readAllComunnity()

            switch(findUsers){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Comunnitys')

                default:
                    res.status(200)
                    res.json(findUsers)
            }
            
        }

        res.status(500)
    }

    public async criarComunnity(req: Request, res: Response): Promise<any>{
        const body = req.body
        let comunnity: Comunnity = new Comunnity(
            body["Id"],
            body["NomeComunidade"],
            body["AdmComunidade"]
        );

        if(comunnity !== null){
             let tryCreate = await this._ComunnityService.createComunnity(comunnity)

             switch(tryCreate){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao criar Comunnity')

                default:
                    res.status(200)
                    res.json(this._ComunnityService.readComunnity(comunnity.Id ? comunnity.Id : ''))
             }
        }
        else{
            res.status(500)
            res.json("Não foram informados parametros")
        }
    }

    public async deletarComunnity(req: Request, res: Response): Promise<any> {
            const idUser: string = req.query.username as string;

        if (req !== null){
            
            let deleteUser = await this._ComunnityService.deleteComunnity(idUser)

            switch(deleteUser){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao deletar o Comunnity')

                default:
                    res.status(200)
                    res.json(deleteUser)
            }
            
        }

        res.status(500)
    }

    public async atualizarComunnity(req: Request, res: Response): Promise<any>{
        const body = req.body
        const atualizacao: Atualizacao = new(body["IdComunnity"],body["NomeDado"],body["DadoNovo"])

        if(req !== null){
             let atualizar = await this._ComunnityService.updateComunnity(atualizacao)

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