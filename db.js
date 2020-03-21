const db_settings = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'cadastro'
    }
}

const knex = require('knex')(db_settings)

const initDB = async () =>{

    const pessoasExists = await knex.schema.hasTable('pessoas')
    if(!pessoasExists){
        await knex.schema.createTable('pessoas', table => {
            table.increments('id').primary()
            table.string('nome').notNullable()
            table.date('dataNascimento').notNullable()
            table.string('cargo').notNullable()
        })
    }
}

initDB()

module.exports = knex

