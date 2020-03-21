const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

const bodyParser = require('body-parser')

const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'cadastro'
    }
})


const pessoas = require('./routes/pessoas')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/', (req, res) => {
    res.render('Home')
})

app.use('/pessoas', pessoas(db))

app.listen(port, () => {
    console.log('Servidor rodando...')
})





