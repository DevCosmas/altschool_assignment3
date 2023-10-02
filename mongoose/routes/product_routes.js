const express= require('express')
const productController= require('./../controllers/product_controller')
const authController= require('./../controllers/authController')
const router= express.Router()

router.post('/create_product',authController.isAdmin,productController.createProduct)
module.exports= {router}