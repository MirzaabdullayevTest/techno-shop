const Product = require('../model/product')

module.exports.getProducts = async function (req, res) {
    const products = await Product.find()
    res.status(200).send(products)
}

module.exports.setProducts = async function (req, res) {
    const products = await Product.find()
    res.status(200).send(products)
}