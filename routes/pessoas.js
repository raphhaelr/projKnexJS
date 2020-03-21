const express = require('express')
const pessoasController = require('../controllers/pessoas')

const pessoasRouter = db => {
    const router = express.Router()

    router.get('/', pessoasController.getAll.bind(null, db))
    
    router.get('/delete/:id', pessoasController.deleteOne.bind(null, db))

    router.get('/create', pessoasController.create)
    router.post('/create', pessoasController.createOne.bind(null, db))

    router.get('/update/:id', pessoasController.updateForm.bind(null, db))
    router.post('/update/:id', pessoasController.updateOne.bind(null, db))

    return router
}




module.exports = pessoasRouter





