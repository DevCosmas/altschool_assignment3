const {db} = require('./../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes
const userModel = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        // defaultValue:'johndoe@example.co
        allowNull:false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        unique: true,
        // // defaultValue:'test1234',
        // allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        unique: true,

    },
    gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    }

})

module.exports = { userModel }