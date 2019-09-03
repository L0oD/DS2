module.exports = app => {


    app.post('/tarefa01', (req, res) => {

        /*  //corpo da requisição um JSON com o custo de fabricação, percentual de distribuição 
          //e percentual de impostos. A aplicação deverá retornar os custos discriminados, bem como o custo final de produção, obedecendo a fórmula:
  
          res.json({custofabri : Number(req.body.custo),
                  persentualdistri : Number(req.body.persentdistri),      
                  persentualimpost :  Number(req.body.persentimpost)
  
          })
  
          //custo final = custo de fábrica + 
          //(custo de fábrica * percentual do distribuidor) + 
          //(custo de fábrica * percentual de impostos)
  
  
          var custofinal =  req.body.custo + (req.body.custo * (req.body.persentdistri / 100)) + 
          (req.body.custo * (req.body.persentimpost / 100));
  
          console.log('Custo de Fabrica = ' + req.body.custo);
          console.log('%Distribuidor = ' + req.body.persentdistri + '%');
          console.log('%impostos = ' + req.body.persentimpost + '%');
          console.log('Custo Final = ' + custofinal);
          
          */

        var cf = req.body.custofabrica;
        var pd = req.body.persentdistri;
        var pi = req.body.persentimpost;

        var custofinal = cf + (cf * (pd / 100)) + cf * (pi / 100);

        res.send(`
                custo de fabrica : ${cf}
                %Distribuidor : ${pd}
                %Impostos : ${pi}
                Custo Final : ${custofinal}`
        )

        res.send({
            custofabrica : cf,
            persentdistri : pd,
            persentimpost: pi,
            custofinal: custofinal

        })
    });

};