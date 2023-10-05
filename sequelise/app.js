const express = require('express');
const { sequelize } = require('./config')
require('dotenv').config()
const port = process.PORT;

const app = express()
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.listen(port, () => {
    console.log('server is up and running')
})