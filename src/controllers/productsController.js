const productsModel = require('../models/productsModel')

module.exports = {
    listProducts: (req, res) => {
        const products = productsModel.products();
        return res.render('list-products', {  products });
<<<<<<< HEAD
    },
=======
    }, 

    descriptionProduct: (req, res) => {
        res.render('product-description')
    } 
>>>>>>> dev-kaique
}