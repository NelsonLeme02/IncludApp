import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { UsuarioController } from './Controllers/UsuarioController';
import { UsuarioService } from '../Includ.Services/Services/UsuarioService';
import { LoginService } from '../Includ.Services/Services/LoginService';
import { DbConfigService } from '../Includ.Database/Config/Service/DbConfigService';


export const startup = express()
export const port = 4000

startup.use(cors({
    origin: 'http://localhost:3000'
}))
  

const dbConfig = new DbConfigService()
const usuarioService = new UsuarioService(dbConfig)
const loginService = new LoginService(usuarioService)
const usuarioController = new UsuarioController(loginService,usuarioService);

startup.use(express.json())
startup.use(bodyParser.json());

startup.use('/Usuario', usuarioController.router);

startup.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})