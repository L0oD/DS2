const connection = require('../mysql-connection')

module.exports = {
    find: (callback) => {
        connection.query('SELECT * FROM estado', callback);
    },
    findbyId: (params, callback) => {
        connection.query('SELECT * FROM estado WHERE id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO estado (nome,sigla) VALUES(?,?)', [params.nome, params.sigla], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE person SET nome=? ,sigla = ? WHERE ID = ?', [params.nome, params.sigla, params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM estado WHERE id = ?', [params.id], callback);
    }
}
