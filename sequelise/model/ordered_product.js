const { db } = require('./../config')
const sequelize = db.sequelize
const DataTypes = db.DataTypes

const orderedProductModel = sequelize.define('orderedproduct', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "products"
            },
            key: 'id'
        },
        allowNull: false
    },
    orderId: {
        type: DataTypes.INTEGER,
        references: {
            model: {
                tableName: "order"
            },
            key: 'id'
        },
        allowNull: false
    }

})
module.exports = { orderedProductModel }