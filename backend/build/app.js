"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const estado_router_1 = require("./router/estado.router");
const cidade_router_1 = require("./router/cidade.router");
const cliente_router_1 = require("./router/cliente.router");
const produto_router_1 = require("./router/produto.router");
const tabelapreco_router_1 = require("./router/tabelapreco.router");
const vendedor_router_1 = require("./router/vendedor.router");
const pedido_router_1 = require("./router/pedido.router");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routers();
    }
    //carrega os middle da aplicacao
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(cors());
    }
    routers() {
        this.express.use('/estados', estado_router_1.default);
        this.express.use('/cidades', cidade_router_1.default);
        this.express.use('/clientes', cliente_router_1.default);
        this.express.use('/produtos', produto_router_1.default);
        this.express.use('/tabelaprecos', tabelapreco_router_1.default);
        this.express.use('/vendedores', vendedor_router_1.default);
        this.express.use('/pedidos', pedido_router_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map