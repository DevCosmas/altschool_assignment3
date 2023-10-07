const { userModel } = require('./../model/userModel')
const jwt = require('jsonwebtoken')

const jwtToken = (payload) => {
    return jwt.sign({ id: payload }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION })
}

async function signUp(req, res) {
    try {
        const body = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address,
            gender: req.body.gender,
            phone: req.body.phone
        };
        const newUser = await userModel.create(body);
        const token = await jwtToken(newUser.id);
        if (newUser && token) res.status(201).json({ result: "success", message: 'you have succefully signed up', token, userProfile: newUser })
    } catch (err) {
        res.status(400).json({ result: 'fail', message: 'something went wrong', err })
    }
}

async function getUser(req, res) {
    const user = await userModel.findAll()
    if (user) res.status(201).json({ result: "success", message: 'you have succefully signed up', user })
}

module.exports = {
    signUp,
    getUser
}