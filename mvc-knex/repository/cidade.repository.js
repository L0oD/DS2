const knex = require('../mysql-connection')

module.exports = {
    find: () => {
        return knex.select().from('cidade').innerJoin('estado', 'estado.id', 'cidade.estado_id');
    },
    findById: (params) => {
        return knex.select().from('cidade').innerJoin('estado', 'estado.id', 'cidade.estado_id').where({})
          
    },
    create: (params) => {
        return knex('cidade').insert(params).innerJoin('estado', function() {
            this.on('estado.id', '=', 'cidade.estado_id').where({id: params.estado.id})
          })
    },
    update: (params) => {
        return knex('cidade').update().innerJoin('estado', function() {
            this.on('estado.id', '=', 'cidade.estado_id').where({id: params.id})
          })
    },
    delete: (params) => {
        return knex('cidade').del().innerJoin('estado', function() {
            this.on('estado.id', '=', 'cidade.estado_id').where({id: params.id})
          })
    }
}
