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
            
            let findUser = await this._postService.readPost(IdPost)

            switch(findUser){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Post')

                default:
                    res.status(200)
                    res.json(findUser)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosPosts(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findUsers = await this._postService.readAllPost()

            switch(findUsers){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Posts')

                default:
                    res.status(200)
                    res.json(findUsers)
            }
            
        }

        res.status(500)
    }

    public async criarPost(req: Request, res: Response): Promise<any>{
        const Post: Post = new(req.body)

        if(Post !== null){
             let tryCreate = await this._postService.createPost(Post)

             switch(tryCreate){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao criar Post')

                default:
                    res.status(200)
                    res.json(this._postService.readPost(Post.Id ? Post.Id : ''))
             }
        }
        else{
            res.status(500)
            res.json("Não foram informados parametros")
        }
    }

    public async deletarPost(req: Request, res: Response): Promise<any> {
            const idUser: string = req.query.username as string;

        if (req !== null){
            
            let deleteUser = await this._postService.deletePost(idUser)

            switch(deleteUser){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao deletar o Post')

                default:
                    res.status(200)
                    res.json(deleteUser)
            }
            
        }

        res.status(500)
    }

    public async atualizarPost(req: Request, res: Response): Promise<any>{
        const atualizacao: Atualizacao = new(req.body)

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