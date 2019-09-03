module.exports = app => {


    app.post('/tarefa02', (req, res) => {

        //var {salario,reajuste} = req.body

        var sl = req.body.salario;
        var rj = req.body.reajuste;

        var salreajustado = (sl * (rj / 100)) + sl;

        res.send(`
        Salario Atual : ${sl}
        Reajuste : ${rj}
        Salario Ajustado : ${salreajustado}
        `
        )

        res.send({
        SalarioAtual : sl,
        Reajuste : rj,
        SalarioAjustado : salreajustado
        })

    });

};