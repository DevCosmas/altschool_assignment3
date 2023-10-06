const db = require('./../config')
const sequelize = db.sequelize
const Datatypes = db.Datatypes
const userModel = sequelize.define('users', {
    id: {
        type: Datatypes.INTEGER,
        primayKey: true,
        unique: true,
        allowNull: false
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Datatypes.STRING,
        unique: true,
        allowNull: false
    },
    phone: {
        type: Datatypes.STRING,
        unique: true,
        allowNull: false
    },
    gender: {
        type: Datatypes.ENUM['male', 'female'],
        allowNull: false
    },
    address: {
        type: Datatypes.STRING,
        allowNull: false
    },
    role: {
        type: Datatypes.STRING,
        defaultValue: 'user'
    }

})

module.exports = { userModel }