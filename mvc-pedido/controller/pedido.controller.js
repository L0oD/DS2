const repository = require('../repository/pedido.repository')
const moment = require('moment')


module.exports = {

    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            const pedidos = [];

            for (item of result) {

                let pedido = {

                    id: item.pedido_id,
                    codigo: item.codigo_pedido,
                    pdata: moment(item.dt_pedido).format('YYYY-MM-DD'),
                    cliente: {
                        cid: item.cliente_id,
                        ccodigo: item.cod_cliente,
                        cnome: item.nome_cliente,
                        cemail: item.email_cliente
                    },
                    vendedor:{
                        vid: item.vendedor_id,
                        vcodigo: item.cod_vendedor,
                        vnome: item.nome_vendedor,
                        vemail: item.email_vendedor

                    }

                }

                pedidos.push(pedido);
            }
            res.send(pedidos);
        });

    },

    create: (req, res) => {

        const pedido = {
            codigo: req.body.codigo,
            cliente_id: req.body.cliente.id,
            vendedor_id: req.body.vendedor.id
        }

        repository.create(pedido, (error, result) => {

            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        });
    },



    findById: (req,res) => {
        
        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            //Valida se o id existe no banco
            if (! result[0]) {
                res.status(404).send('not found');
            }

            //Converte de RELACIONAL para OBJETO
            let pedido = {

                id: result[0].pedido_id,
                codigo: result[0].codigo_pedido,
                pdata: result[0].dt_pedido,
                cliente: {
                    cid: result[0].cliente_id,
                    ccodigo: result[0].cod_cliente,
                    cnome: result[0].nome_cliente,
                    cemail: result[0].email_cliente,
                    
                },
                vendedor:{
                    vid: result[0].vendedor_id,
                    vcodigo: result[0].cod_vendedor,
                    vnome: result[0].nome_vendedor,
                    vemail: result[0].email_vendedor

                }

            }

            res.send(pedido);
        });
},

    update: (req,res) => {
       
        const pedido = {
            id: req.params.id,
            codigo: req.body.codigo,
            cliente: req.body.cliente.id,
            vendedor:req.body.vendedor.id
        }
        
        repository.update(pedido, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result.affectedRows == 0) {
                res.status(404).send('not found');
            }
            
            res.send(result);
        });
},

    delete: (req, res) => {

        repository.delete(req.params, (error, result) => {


            if (error) {
                res.status(500).send(error);
            }


            res.status(204).send();
        });
    }
}