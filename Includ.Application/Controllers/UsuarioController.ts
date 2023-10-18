import express, { Request, Response, Router } from 'express';
import {ILoginService} from '../../Includ.Services/Interfaces/ILoginService'
import {IUsuarioService} from '../../Includ.Services/Interfaces/IUsuarioService'
import {Login} from '../Models/LoginModel'
import { Usuario } from '../Models/UsuarioModel';
import { Atualizacao } from '../Models/AtualizacaoUsuarioModel';

export class UsuarioController{
    private readonly _loginService: ILoginService
    private readonly _usuarioService: IUsuarioService
    public router: Router

    constructor(loginService: ILoginService, usuarioService: IUsuarioService) {
        this._loginService = loginService
        this._usuarioService = usuarioService
        this.router = express.Router()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get('/fazerLogin', this.fazerLogin.bind(this));
        this.router.get('/buscarUsuario', this.buscarUsuario.bind(this));
        this.router.get('/buscarTodosUsuarios', this.buscarTodosUsuarios.bind(this));
        this.router.post('/criarUsuario', this.criarUsuario.bind(this));
        this.router.put('/atualizaUsuario', this.atualizarUsuario.bind(this));
        this.router.delete('/deletarUsuario', this.deletarUsuario.bind(this));
    }

    public async fazerLogin(req: Request, res: Response): Promise<any> {
        const email: string = req.query.email as string;
        const password: string = req.query.password as string;
        const login: Login = new Login(email,password)

        if (login.Email !== undefined && login.Senha !== undefined){
            
            let tryLogin = await this._loginService.fazerLogin(login.Email, login.Senha)

            switch(tryLogin){
                case null:
                    res.status(400)
                    res.json('Acesso negado')

                default:
                    res.status(200)
                    res.json({"Acesso autorizado": `${this._usuarioService.readUsuario(email,password)}`})
            }
            
        }

        res.status(500)
    }

    public async buscarUsuario(req: Request, res: Response): Promise<any> {
        const email: string = req.query.username as string;
        const password: string = req.query.password as string;

        if (req !== null){
            
            let findUser = await this._usuarioService.readUsuario(email,password)

            switch(findUser){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao encontrar o Usuario')

                default:
                    res.status(200)
                    res.json(findUser)
            }
            
        }

        res.status(500)
    }

    public async buscarTodosUsuarios(req: Request, res: Response): Promise<any> {

        if (req !== null){
            
            let findUsers = await this._usuarioService.readAllUsuario()

            switch(findUsers){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao buscar os Usuarios')

                default:
                    res.status(200)
                    res.json(findUsers)
            }
            
        }

        res.status(500)
    }

    public async criarUsuario(req: Request, res: Response): Promise<any>{
        const usuario: Usuario = new(req.body)

        if(usuario !== null){
             let tryCreate = await this._usuarioService.createUsuario(usuario)

             switch(tryCreate){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao criar Usuario')

                default:
                    res.status(200)
                    res.json(this._usuarioService.readUsuario(usuario.EmailUsuario,usuario.SenhaUsuario))
             }
        }
        else{
            res.status(500)
            res.json("Não foram informados parametros")
        }
    }

    public async deletarUsuario(req: Request, res: Response): Promise<any> {
            const idUser: string = req.query.username as string;

        if (req !== null){
            
            let deleteUser = await this._usuarioService.deleteUsuario(idUser)

            switch(deleteUser){
                case null:
                    res.status(400)
                    res.json('Ocorreu um erro ao deletar o usuario')

                default:
                    res.status(200)
                    res.json(deleteUser)
            }
            
        }

        res.status(500)
    }

    public async atualizarUsuario(req: Request, res: Response): Promise<any>{
        const atualizacao: Atualizacao = new(req.body)

        if(req !== null){
             let atualizar = await this._usuarioService.updateUsuario(atualizacao)

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