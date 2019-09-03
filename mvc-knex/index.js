const exepress = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = exepress();

app.use(bodyParser.json());

//Adiciona o arquivo de mapeamento de rota
app.use(routes);

//Tenta conectar com o bd

const appServer = app.listen(3000, () => {
    console.log('App ON, port: %s', appServer.address().port);
});


