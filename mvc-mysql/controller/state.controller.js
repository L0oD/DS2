const states = [];

module.exports = {

    find: (req, res) => {

        res.send(states);

    },

    create: (req, res) => {
        const state = req.body;

        states.push(state);

        console.log(state);

        res.send(state);

    },

    findByID: (req, res) => {

        const { id } = req.params.id;

        res.send(states[id - 1]);

        console.log(id);

    },

    update: (req, res) => {

        const { id } = req.params.id;
        const state = req.body;
        const index = id - 1;

        states[index] = state;

        res.send(state);

    },

    delete: (req, res) => {


        const { id } = req.params;

        states.splice[id - 1, 1];

        res.status(204).send();


    }
}