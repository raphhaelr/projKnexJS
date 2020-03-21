const pessoas = require('../models/pessoas')

const getAll = async (db, req, res) => {
    const findAll = await pessoas.getAll(db)
    res.render('pessoas/getAll', { pessoas: findAll })
}

const getOne = async (db, req, res) => {
    const { id } = req.params
    const pessoa = await pessoas.getOne(db, id)
    res.send(pessoa)
}

const deleteOne = async (db, req, res) => {
    const { id } = req.params

    console.log(id)
    const pessoa = await pessoas.getOne(db, id)
    if (pessoa.length === 0) {
        res.status(406)
    } else {
        await pessoas.deleteOne(db, id)
        res.status(200)
        res.redirect('/pessoas')
    }
}

const create = (req, res) => {

}

const createOne = async (db, req, res) => {
    await pessoas.create(db, req.body)
    res.redirect('/pessoas')
}

const updateForm = async (db, req, res) => {
    console.log(req.params)
    const { id } = req.params
    const pessoa = await pessoas.getOne(db, id)
    res.render('pessoas/update', { pessoa })
}

const updateOne = async (db, req, res) => {
    const { id } = req.params
    const data = req.body

    await pessoas.update(db, id, data)
    res.status(200)

}

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    createOne,
    updateForm,
    updateOne
}