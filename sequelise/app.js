const express = require('express');
const { db } = require('./config')
// const userRouter = require('./routes/userRoute')
const userController = require('./controller/userController')
const productController = require('./controller/productController')
require('dotenv').config()
const port = process.PORT || 3000;

const app = express()
app.use(express.json())
db.sequelize
// app.use('/api', userRouter)
app.post('/signUp', userController.signUp)
app.get('/users', userController.getUser)
app.post('/createProduct', productController.createProduct)
app.get('/products', productController.getAllProduct)
app.listen(port, () => {
    console.log('server is up and running')
})