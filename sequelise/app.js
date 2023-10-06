const express = require('express');
const { db } = require('./config')
const userRouter = require('./routes/userRoute')
require('dotenv').config()
const port = process.PORT;

const app = express()
db.sequelize
app.use('/api', userRouter)
app.listen(port, () => {
    console.log('server is up and running')
})