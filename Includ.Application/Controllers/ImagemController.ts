import express, { Request, Response, Router } from 'express';
import {IImagemService} from '../../Includ.Services/Interfaces/IImagemService'

export class ImagemController{
    private readonly _ImagemService: IImagemService
    public router: Router

    constructor(ImagemService: IImagemService) {
        this._ImagemService = ImagemService
        this.router = express.Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/buscarImagem', this.buscarImagem.bind(this));
        this.router.get('/buscarTodosImagens', this.buscarTodosImagens.bind(this));
        this.router.post('/criarImagem', this.criarImagem.bind(this));
        this.router.delete('/deletarImagem', this.deletarImagem.bind(this));
    }

    public async buscarImagem(req: Request, res: Response): Promise<any> {
        const nomeImagem: string = req.query.NomeImagem as string;

        if (req !== null){
            
            let findImage = await this._ImagemService.readImagem(nomeImagem)

            switch(findImage){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Imagem')

                default:
                    res.status(200)
                    res.json(findImage)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosImagens(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findImages = await this._ImagemService.readAllImagem()

            switch(findImages){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Imagems')

                default:
                    res.status(200)
                    res.json(findImages)
            }
            
        }

        res.status(500)
    }

    public async criarImagem(req: Request, res: Response): Promise<any>{
        const Imagem: Imagem = new(req.body)

        if(Imagem !== null){
             let tryCreate = await this._ImagemService.createImagem(Imagem)

             switch(tryCreate){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao criar Imagem')

                default:
                    res.status(200)
                    res.json(this._ImagemService.readImagem(Imagem.Id ? Imagem.Id : ''))
             }
        }
        else{
            res.status(500)
            res.json("Não foram informados parametros")
        }
    }

    public async deletarImagem(req: Request, res: Response): Promise<any> {
            const idImage: string = req.query.Imagename as string;

        if (req !== null){
            
            let deleteImage = await this._ImagemService.deleteImagem(idImage)

            switch(deleteImage){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao deletar o Imagem')

                default:
                    res.status(200)
                    res.json(deleteImage)
            }
            
        }

        res.status(500)
    }

}