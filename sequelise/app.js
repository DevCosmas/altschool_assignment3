const express = require('express');
const { db } = require('./config')
const userRouter = require('./routes/userRoute')
const productRouter= require('./routes/productRoute')
// const productController = require('./controller/productController')
require('dotenv').config()
const port = process.PORT || 3000;

const app = express()
app.use(express.json())
db.sequelize

app.use('/api', userRouter)
app.use('/', productRouter)


app.listen(port, () => {
    console.log('server is up and running')
})