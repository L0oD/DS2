module.exports = app => {


    app.get('/tarefa03', (req, res) => {

        var param1 = req.query.param1;

        var div2 = param1 % 2;

        /* --POR OPERADOR TERNARIO-- MELHOR FORMA PARA ATRIBUIR VALOR
        var resultado = param1 % 2 == 0 ? 'PAR' : 'IMPAR';
        */

        if( div2 == 0){
            res.send(`O numero ${param1} e PAR`);
        } else {
            res.send(`O numero ${param1} e IMPAR`);
        }


    });

};