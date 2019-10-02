import { Router } from "express";
import  CidadeController  from '../controller/cliente.controller';

class CidadeRouter{
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    private init(){
        this.router.get('/', CidadeController.find);
        this.router.post('/', CidadeController.creat);

    }
}

export default new CidadeRouter().router;