const productsModel = require('../models/productsModel')

module.exports = {
    listProducts: (req, res) => {
        const products = productsModel.products;
        return res.render('list-products', {  products });
    }
}