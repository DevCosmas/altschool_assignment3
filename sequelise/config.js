const mysql2 = require('mysql2');
const { Sequelize, Datatypes } = require("sequelize");
require('dotenv').config()

const database= process.env.MYSQL_DB_NAME;
const username=process.env.MYSQL_Db_USER;
const password= process.env.MYSQL_DB_PASSWORD;
const host=process.env.MYSQL_DB_HOST

const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql'
  });

  // try {
  //   await sequelize.authenticate();
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }

  module.exports= {sequelize}