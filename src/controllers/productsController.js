const productsModel = require('../models/productsModel')

module.exports = {
    listProducts: (req, res) => {
        const products = productsModel.products();
        return res.render('list-products', {  products });
    }, 

    descriptionProduct: (req, res) => {
        const listProducts = productsModel.products();
        let products =  productsModel.findByParams(req)
        res.render('product-description', {products: products, listporduct: listProducts})
    } 
}