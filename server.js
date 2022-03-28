const express = require('express')
const mongoose = require('mongoose')
const app = express()

const products_routes = require('./routes/products.js')
const users_routes = require('./routes/users')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(process.env.PORT || 5000))
    .catch((err) => console.log(Error))

app.use(express.json())
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to My Project',
  });
})

app.use('/api/products', products_routes)
app.use('/api/users', users_routes)