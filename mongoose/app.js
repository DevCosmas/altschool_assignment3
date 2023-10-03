const express = require('express');
require('dotenv').config();
const { mongoDbConnection } = require('./config');
const userRoutes = require('./routes/user_routes')
const productRoutes = require('./routes/product_routes')
const PORT = process.env.PORT;

const app = express();
mongoDbConnection();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoutes.router)
app.use('/api', productRoutes.router)

app.listen(PORT, () => {
    console.log('server is live and listening')
})
