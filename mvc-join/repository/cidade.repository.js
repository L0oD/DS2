const connection = require('../mysql-connection')

const query = 'SELECT c.id as cidade_id, c.nome as cidade_nome, '+
              'e.id as estado_id, e.nome as estado_nome, e.sigla as estado_sigla'+
              ' FROM cidade c ' + 
              ' JOIN estado e ON e.ID = c.estado_id';

module.exports = {
    find: (callback) => {
        connection.query(query, callback);
    },
    findbyId: (params, callback) => {
        connection.query('SELECT * FROM cidade WHERE id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO cidade (nome,estado_id) VALUES(?,?)', [params.nome, params.estado_id], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE cidade SET nome=? estado_id=? WHERE ID = ?', [params.nome,params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM cidade WHERE id = ?', [params.id], callback);
    }
}
