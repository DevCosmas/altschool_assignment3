const express = require('express')
const productController = require('./../controllers/product_controller')
const authController = require('./../controllers/authController')
const router = express.Router()

router.post('/create_product', authController.isAuthenticated, authController.restrictedTo('admin'), productController.createProduct)
router.get('/products', productController.getProduct)
module.exports = { router }