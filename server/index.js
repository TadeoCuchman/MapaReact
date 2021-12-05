const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 5000
const places = require('./api/routes/places')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/places', places)

app.use('*', (req, res) => {
    res.send('No Accepted URL.')
})


app.listen(PORT, (req, res) => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})


module.exports = app