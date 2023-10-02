const express = require('express');
// const globalMiddleWare = require('./../utils/global_middleware')
const { signUp, logIn} = require('./../controllers/user_controller')

const router = express.Router();

// router.use()
router.post('/sign_up', signUp)
router.post('/logIn', logIn)
module.exports = { router }