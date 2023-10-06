const { userModel } = require('./../model/userModel')

async function signUp(req, res) {
    try {
        const body = req.body;
        const newUser = await userModel.create(body)
        if (newUser) res.status(201).json({ result: "success", message: 'you have succefully signed up', userProfile: newUser })
    } catch (err) {
        res.status(400).json({ result: 'fail', message: 'something went wrong', err })
    }
}

module.exports= {
    signUp
}