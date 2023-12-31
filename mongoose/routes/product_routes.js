const express = require('express')
const productController = require('./../controllers/product_controller')
const authController = require('./../controllers/authController')
const router = express.Router()



router.get('/products', productController.getProduct)
router.get('/products/:id', productController.getProductById)

router.use(authController.isAuthenticated)
router.post('/create_product', authController.restrictedTo('admin'), productController.createProduct)
router.patch('/update_product/:id', authController.restrictedTo('admin'), productController.updateProduct)
router.delete('/delete_product/:id', authController.restrictedTo('admin'), productController.deleteProduct)

module.exports = { router }