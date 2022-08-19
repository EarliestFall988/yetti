
const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv/config');

// mongoose.connect(process.env.DBCONNECTION, { useNewUrlParser: true }, () => {
//     console.log("connected to db!")
// })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', function (req, res) {
    res.send('Test successful')
})

export default {
    path: '/api',
    handler: app
}