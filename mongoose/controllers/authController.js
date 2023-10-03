const jwt = require('jsonwebtoken')
const { userModel } = require('./../models/user')

const isAuthenticated = async (req, res, next) => {
    try {
        const auth = req.headers.authorization
        if (!auth) {
            res.status(401).json({ message: 'user is not authenticated, kindly login/ sign up' })
        }
        const token = auth.split(' ')[1];
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        const date = new Date
        const time = parseInt(date.getTime() / 1000)
        const user = await userModel.findById(decodedToken.id)

        if (user && decodedToken.iat < time)
            req.user = user
         return next()
    } catch (error) {
        res.status(401).json({message:"authentication fails. kindly login or sign up", error})
    }
}

const restrictedTo = (role) => {
    return (req, res, next) => {
        if (!role.includes(req.user.role)) {
            res.status(401).json({ message: 'access denied. you are not authorised to use this resources' })
        }
        next()
    }

}



module.exports = { isAuthenticated, restrictedTo }