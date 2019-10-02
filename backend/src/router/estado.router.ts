import { Router } from "express";
import  estadoController  from '../controller/estado.controller';

class EstadoRouter{
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }
    private init(){
        this.router.get('/', estadoController.find);
        this.router.post('/', estadoController.creat);

    }
}

export default new EstadoRouter().router;