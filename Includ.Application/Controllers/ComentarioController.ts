import express, { Request, Response, Router } from 'express';
import {IComentarioService} from '../../Includ.Services/Interfaces/IComentarioService'
import { Comentario } from '../Entity/ComentarioEntity';
import { Atualizacao } from '../Models/AtualizacaoComentarioModel';

export class ComentarioController{
    private readonly _ComentarioService: IComentarioService
    public router: Router

    constructor(ComentarioService: IComentarioService) {
        this._ComentarioService = ComentarioService
        this.router = express.Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/buscarComentario', this.buscarComentario.bind(this));
        this.router.get('/buscarTodosComentarios', this.buscarTodosComentarios.bind(this));
        this.router.post('/criarComentario', this.criarComentario.bind(this));
        this.router.put('/atualizaComentario', this.atualizarComentario.bind(this));
        this.router.delete('/deletarComentario', this.deletarComentario.bind(this));
    }

    public async buscarComentario(req: Request, res: Response): Promise<any> {
        const idComentario: string = req.query.IdComentario as string;

        if (req !== null){
            
            let findUser = await this._ComentarioService.readComentario(idComentario)

            switch(findUser){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Comentario')

                default:
                    res.status(200)
                    res.json(findUser)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosComentarios(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findUsers = await this._ComentarioService.readAllComentario()

            switch(findUsers){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Comentarios')

                default:
                    res.status(200)
                    res.json(findUsers)
            }
            
        }

        res.status(500)
    }

    public async criarComentario(req: Request, res: Response): Promise<any>{
        const body = req.body
        let comentario: Comentario = new Comentario(
            body["Id"],
            body["IdPost"],
            body["AvaliacaoComentario"],
            body["VerificacaoComentario"],
            body["CorpoComentario"],
            body["IdImagemComentario"],
            body["IdComunidade"]
        );

        if(comentario !== null){
             let tryCreate = await this._ComentarioService.createComentario(comentario)

             switch(tryCreate){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao criar Comentario')

                default:
                    res.status(200)
                    res.json(this._ComentarioService.readComentario(comentario.Id ? comentario.Id : ''))
             }
        }
        else{
            res.status(500)
            res.json("Não foram informados parametros")
        }
    }

    public async deletarComentario(req: Request, res: Response): Promise<any> {
            const idComentario: string = req.query.IdComentario as string;

        if (req !== null){
            
            let deleteUser = await this._ComentarioService.deleteComentario(idComentario)

            switch(deleteUser){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao deletar o Comentario')

                default:
                    res.status(200)
                    res.json(deleteUser)
            }
            
        }

        res.status(500)
    }

    public async atualizarComentario(req: Request, res: Response): Promise<any>{
        const body = req.body
        const atualizacao: Atualizacao = new(body["IdComentario"],body["NomeDado"],body["DadoNovo"])
        
        if(req !== null){
             let atualizar = await this._ComentarioService.updateComentario(atualizacao)

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