module.exports = app => {


    app.get('/tarefa04', (req, res) => {

        var param1 = req.query.a;


        if( param1 >= 0){
            res.send(`O numero ${param1} e POSITIVO`);
        } else {
            res.send(`O numero ${param1} e NEGATIVO`);
        }


    });

};