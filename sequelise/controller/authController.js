const jwt = require('jsonwebtoken')
const { userModel } = require('./../model/userModel')
const { Model } = require('sequelize')
const isAuthenticated = async (req, res, next) => {
    try {
        const auth = req.headers.authorization
        if (!auth) {
            res.status(401).json({ message: 'kindly login/ sign up' })
        }
        const token = auth.split(' ')[1];
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        const date = new Date
        const time = parseInt(date.getTime() / 1000)
        const user = await userModel.findOne({ where: { id: decodedToken.id } })

        if (user && decodedToken.iat < time)
            req.user = user
        return next()
    } catch (error) {
        return error

    }
}

module.exports = { isAuthenticated }