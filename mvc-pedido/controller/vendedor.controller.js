const repository = require('../repository/vendedor.repository')


module.exports = {

    find: (req, res) => {

        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        });

    },

    create: (req, res) => {
    
        repository.create(req.body, (error, result) => {

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