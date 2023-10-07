const { productModel } = require('./../model/productModel')

async function getAllProduct(req, res) {
    try {
        const products = await productModel.findAll({})
        if (products) res.status(200).json({ result: 'SUCCESS', size: products.length, products })
    } catch (err) {
        res.status(400).json({ result: 'fail', message: 'something went wrong', err })
    }
}

async function createProduct(req, res) {
    try {
        const body = req.body;
        const newProduct = await productModel.create(body)
        if (newProduct) res.status(200).json({ result: 'SUCCESS', size: newProduct.length, newProduct })

    } catch (err) {
        res.status(400).json({ result: 'fail', message: 'something went wrong', err })
    }
}

module.exports = {
    getAllProduct, createProduct
}