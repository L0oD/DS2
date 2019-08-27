const repository = require('../repository/cidade.repository')


module.exports = {

    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            const cidades = [];

            for(item of result){

                let cidade ={

                    id: item.cidade_id,
                    nome: item.cidade_nome,
                    estado : {
                        id: item.estado_id,
                        nome: item.estado_nome,
                        sigla: item.estado_sigla
                    }

                }

                cidades.push(cidade);
            }
            res.send(cidades);
        });

    },

    create: (req, res) => {
        
        const cidade = {
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }
        
        repository.create(cidade, (error, result) => {

            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        })
    },

    findByID: (req, res) => {

        repository.findbyId(req.params, (error, result) => {


           if (!result[0]) {
            res.status(404).send("NOT FOUND");
            } 
         

        
            res.send(result[0]);
        })

    },

    update: (req, res) => {

        req.body.id = req.params.id;
        repository.update(req.body, (result) => {

            if (result.affectedRows == 0) {
                res.status(404).send("NOT FOUND");
                } 
             
            res.send(result); 
        })
    },

    delete: (req, res) => {

        repository.delete(req.params, (error, result) => {


            if (error) {
                res.status(500).send(error);
            }
 
         
             res.send(result[0]);
         })
    }
}