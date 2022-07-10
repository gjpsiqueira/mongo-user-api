const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const app = express()
const PORT = 3000

var jsonParser = bodyParser.json()

var db = mongoose.connect('mongodb://db/mydb')

var users = require('./routes/user.routes')

app.use(cors('*'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use('/api/user',users)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
