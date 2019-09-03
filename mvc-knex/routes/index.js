const express = require('express');
const estadoRoute = require('./estado.router');
const cidadeRoute = require('./cidade.router');

const routes = new express.Router();

routes.use('/cidade', cidadeRoute);
routes.use('/estado', estadoRoute);

module.exports = routes;