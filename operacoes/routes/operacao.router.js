module.exports = app => {
    
    app.get('/operacao/:tipooperacao', (req,res) => {

        var tipo = req.params.tipooperacao;
    
        var param1 = Number(req.query.a);
        var param2 = Number(req.query.b);
    
        console.log(param1);
        console.log(param2);
    
       var resultado = 0;
    
        switch (tipo){
            case 'somar':
            resultado = param1 + param2;
            break;
    
            case 'diminuir':
            resultado = param1 - param2;
            break;
            
            case 'dividir':
            resultado = param1 / param2;
            break;

            case 'multiplicar':
            resultado = param1 * param2;
            break;

            case 'regra3':
            resultado = (param2 * 100) / param1;
            break;

            default:
            res.status(404).send('Operacao Invalida');
        }
    
        res.send('-> '+ resultado);
        console.log(param1);
        console.log(param2);
    
    });

    } 