const express= require('express')
const userController= require('./../controller/userController')

const router= express.Router()

router.post('/sign_up' , userController.signUp)

module.exports=router