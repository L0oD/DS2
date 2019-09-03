const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

// Adiciona o body-parser a aplicacao para poder receber JSON na body da requisicao
app.use( bodyParser.json());

//function pode ser substuido por =>
app.get('/', (req, res) => {

    res.send('Give me a bottle of rum!');

});

consign().include('routes')
        .into(app);

app.listen(3000);