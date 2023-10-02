const express= require('express');
require('dotenv').config();
const { mongoDbConnection } = require('./config');
const PORT= process.env.PORT;

const app= express();
mongoDbConnection();

app.listen(PORT, ()=>{
    console.log('server is live and listening')
})
