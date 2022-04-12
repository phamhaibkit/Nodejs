const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()

const products_routes = require('./routes/products.js')
const users_routes = require('./routes/users')

require('dotenv').config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
  origin: true
}))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
    .then((result) => {console.log('Ajijijij');app.listen(process.env.PORT || 5000)})
    .catch((err) => console.log(Error))

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to My Project',
  });
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/products', products_routes)
app.use('/api/users', users_routes)