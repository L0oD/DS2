const connection = require('../mysql-connection')

const query = 'SELECT p.id as pedido_id, p.codigo as codigo_pedido, p.dtpedido as dt_pedido, '+
              'c.id as cliente_id, c.codigo as cod_cliente, c.nome as nome_cliente, c.email as email_cliente,'+
              'v.id as vendedor_id, v.codigo as cod_vendedor, v.nome as nome_vendedor, v.email as email_vendedor'+
              ' FROM pedido p ' + 
              ' JOIN cliente c ON c.id = p.cliente_id '+
              ' JOIN vendedor v ON v.id = p.vendedor_id';

              
module.exports = {
    find: (callback) => {
        connection.query(query , callback);     
    },
    findById: (params, callback) => {
        connection.query(query +' WHERE p.id = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('INSERT INTO pedido (cliente_id,cod_cliente,nome_cliente, email_cliente, vendedor_id,cod_vendedor,nome_vendedor,email_vendedor) VALUES (?,?,?,?,?,?,?,?)', [params.cid,params.ccodigo ,params.cnome,params.cemail,params.vid,params.vcodigo ,params.vnome,params.vemail ], callback);
    },
    update: (params, callback) => {
        connection.query('UPDATE pedido SET cliente_id = ?, cliente_id = ?, nome_cliente =?,email_cliente = ?,vendedor_id = ?,cod_vendedor = ?, nome_vendedor =? ,email_vendedor = ?   WHERE id = ?', [params.cid,params.ccodigo ,params.cnome,params.cemail,params.vid,params.vcodigo ,params.vnome,params.vemail,params.id], callback);
    },
    delete: (params, callback) => {
        connection.query('DELETE FROM pedido WHERE id = ?', [params.id], callback);
    }
}