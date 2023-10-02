const express = require('express');
const { signUp, logIn} = require('./../controllers/user_controller')

const router = express.Router();


router.post('/sign_up', signUp)
router.post('/logIn', logIn)
module.exports = { router }