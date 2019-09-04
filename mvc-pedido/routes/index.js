const express = require('express');
const clienteRoute = require('./cliente.router');
const vendedorRoute = require('./vendedor.router');
const produtoRoute = require('./produto.router');


const routes = new express.Router();

routes.use('/cliente', clienteRoute);
routes.use('/vendedor', vendedorRoute);
routes.use('/produto', produtoRoute);


module.exports = routes;