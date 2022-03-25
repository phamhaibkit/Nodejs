const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    birth_day: Date
})

const Product = mongoose.model('User', ProductSchema)

module.exports = Product