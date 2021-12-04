const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 5000

const app = express()
app.use(bodyParser.json())
app.use(cors())


app.use('*', (req, res) => {
    res.send('ketapaasaaandaaaaa')
})

app.listen(PORT, (req, res) => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})


module.exports = app