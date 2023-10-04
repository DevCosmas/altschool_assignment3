const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderedProductSchema = new Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "PRODUCTS"
    },
    order: {
        type: mongoose.Schema.ObjectId,
        ref: 'order'
    }
})

const orderedProduct = mongoose.model('dProdordereuct', orderedProductSchema)
module.exports = { orderedProduct }