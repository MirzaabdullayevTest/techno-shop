const Product = require('../model/product')

module.exports.getProducts = async function (req, res) {
    const products = await Product.find()
    res.status(200).send(products)
}

module.exports.setProducts = async function (req, res) {
    // const products = req.body
    const product = new Product({
        name: req.body.name,
        price: +req.body.price,
        categoryId: req.body.categoryId
    })

    await product.save()

    res.redirect('/products/')
}