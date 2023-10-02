const jwt = require('jsonwebtoken')
const { userModel } = require('./../models/user')

const isAdmin = async (req, res, next) => {
    const auth = req.headers.authorization
    if (!auth) {
        res.status(401).json({ message: 'user is not authenticated, kindly login/ sign up' })
    }
    const token = auth.split(' ')[1];
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decodedToken.id)
    if (!user && !user.role === "admin") {
        res.status(401).json({ message: 'access denied. you are not authorised to use this resources' })
    }

    return next()
}

module.exports = { isAdmin }