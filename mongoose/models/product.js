const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,

    },
    price: {
        type: Number,
        required: true,
        min: [0, 'price should  be at least be 0']
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'big'],
        required: [true, 'A product size can only have a size of small or medium or big'],
        trim: true
    },
    quantity: {
        type: Number,
        required: [true, 'A product must have a quantity'],
        default: 0
    },
    description: {
        type: String,
        required: [true, 'A product must have a discription']
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    }
})
const productModel = mongoose.model("PRODUCTS", productSchema)
module.exports = {productModel}