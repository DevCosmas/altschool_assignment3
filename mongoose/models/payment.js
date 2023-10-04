const mongoose = require('mongoose')
const Schema = mongoose.Schema
const paymentSchema= new Schema({
   order_id:{
    type:mongoose.Schema.ObjectId,
    required:true,
    ref:'order'

   } ,
   user_id:{
    type:mongoose.Schema.ObjectId,
    ref:'USER'
   },
   paymentDate:{
    type:Date
   }
})