const express = require('express')
const productController = require('./../controller/productController')
const auth = require('./../controller/authController')

const router = express.Router()
router.use(auth.isAuthenticated)

router.post('/createProduct', productController.createProduct)
router.get('/products', productController.getAllProduct)
router.get('/product/:id', productController.getOneProduct)
router.patch('/updateProduct/:id', productController.updateProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)




module.exports = router