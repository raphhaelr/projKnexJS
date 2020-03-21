const getAll = async db => {
    return await db('pessoas').select('*')
}

const getOne = async (db, id) => {
    return await db('pessoas').select('*').where('id', id)
}

const deleteOne = async (db, id) => {
    return await db('pessoas').select().where('id', id).del()
}


const create = async (db, data) => {
    return await db('pessoas').insert(data)
}

const update = async (db, id, data) => {
    return await db('pessoas').where('id', id).update({
        nome: data.nome,
        dataNascimento: data.dataNascimento,
        cargo: data.cargo
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}