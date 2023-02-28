//const { products } = require('../models/productsModel');
//const productsModel = require('../models/productsModel')

module.exports = {
    listProducts: (req, res) => {
       // const products = productsModel.products();
        return res.render('list-products', {  products: products,css: ['style.css', 'list-products.css'], js: '' });
    }, 

    descriptionProduct: (req, res) => {
        //const listproducts = productsModel.products();
       // const productsId = productsModel.findByParams(req);
        res.render('product-description', {listproducts: listproducts, productsId: productsId, css: ['style.css', 'product-description.css'], js: ['product-description.js', 'addCart.js'] })
    },
}