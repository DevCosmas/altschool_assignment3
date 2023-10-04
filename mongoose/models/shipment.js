const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shipmentSchema= new Schema({
    payment_id:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'order'
    }
})

const shipment= mongoose.model('shipmeent', shipmentSchema)
module.exports={shipment}