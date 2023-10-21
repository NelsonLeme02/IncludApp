import express, { Request, Response, Router } from 'express';
import {IPostService} from '../../Includ.Services/Interfaces/IPostService'
import { Post } from '../Entity/PostEntity';
import { Atualizacao } from '../Models/AtualizacaoPostModel';

export class PostController{
    private readonly _postService: IPostService
    public router: Router

    constructor(PostService: IPostService) {
        this._postService = PostService
        this.router = express.Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/buscarPost', this.buscarPost.bind(this));
        this.router.get('/buscarTodosPosts', this.buscarTodosPosts.bind(this));
        this.router.post('/criarPost', this.criarPost.bind(this));
        this.router.put('/atualizaPost', this.atualizarPost.bind(this));
        this.router.delete('/deletarPost', this.deletarPost.bind(this));
    }

    public async buscarPost(req: Request, res: Response): Promise<any> {
        const IdPost: string = req.query.idPost as string;

        if (req !== null){
            
            let findPost = await this._postService.readPost(IdPost)

            switch(findPost){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Post')

                default:
                    res.status(200)
                    res.json(findPost)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosPosts(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findPosts = await this._postService.readAllPost()

            switch(findPosts){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Posts')

                default:
                    res.status(200)
                    res.json(findPosts)
            }
            
        }

        res.status(500)
    }

    public async criarPost(req: Request, res: Response): Promise<any>{
        const body = req.body
        let post: Post = new Post(
            body["Id"],
            body["IdComunidade"],
            body["CorpoPost"],
            body["AvaliacaoPost"],
            body["IdImagemPost"],
            body["Titulo"]
        );
        if(post !== null){
             let tryCreate = await this._postService.createPost(post)

             switch(tryCreate){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao criar Post')

                default:
                    res.status(200)
                    res.json(this._postService.readPost(post.Id ? post.Id : ''))
             }
        }
        else{
            res.status(500)
            res.json("Não foram informados parametros")
        }
    }

    public async deletarPost(req: Request, res: Response): Promise<any> {
            const idPost: string = req.query.idPost as string;

        if (req !== null){
            
            let deletePost = await this._postService.deletePost(idPost)

            switch(deletePost){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao deletar o Post')

                default:
                    res.status(200)
                    res.json(deletePost)
            }
            
        }

        res.status(500)
    }

    public async atualizarPost(req: Request, res: Response): Promise<any>{
        const body = req.body
        const atualizacao: Atualizacao = new(body["IdPost"],body["NomeDado"],body["DadoNovo"])

        if(req !== null){
             let atualizar = await this._postService.updatePost(atualizacao)

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