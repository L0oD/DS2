const connection = require('../mysql-connection')

const query = 'SELECT pi.id as pedidoitem_id, pi.qtdade as quantidade, pi.vlrunit as valor_unidade,'+
              'pr.id as produto_id, pr.codigo as cod_produto, pr.nome as nome_produto, pr.descricao as descricao_produto, pr.preco as preco,'+
              'v.id as vendedor_id, v.codigo as cod_vendedor, v.nome as nome_vendedor, v.email as email_vendedor'+
              ' FROM pedidoitem pi ' + 
              ' JOIN produto pr ON pr.id = pr.produto_id '+
              ' JOIN pedido  pe ON pe.id = p.pedido_id';


              module.exports = {
                find: (callback) => {
                    connection.query('SELECT * FROM pedidoitem', callback);
                },
            
                findbyId: (params, callback) => {
                    connection.query('SELECT * FROM pedidoitem WHERE id = ?', [params.id], callback);
                },
                create: (params, callback) => {
                    connection.query('INSERT INTO pedidoitem (codigo,nome,descricao,preco) VALUES(?,?,?,?)', [params.codigo, params.nome, params.descricao,params.preco], callback);
            
                },
                update: (params, callback) => {
                    connection.query('UPDATE pedidoitem SET codigo=? ,nome = ?, email= ? WHERE id = ?', [params.codigo, params.nome, params.descricao,params.preco, params.id], callback);
                },
                delete: (params, callback) => {
                    connection.query('DELETE FROM pedidoitem WHERE id = ?', [params.id], callback);
            
                }
            }