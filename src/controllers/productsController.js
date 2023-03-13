//const { products } = require('../models/productsModel');
//const productsModel = require('../models/productsModel')
const { Produto, Categoria } = require('../models');

module.exports = {
    listProducts: async(req, res) => {
       // const products = productsModel.products();
       const products = await Produto.findAll()
        return res.render('list-products', {  products: products, css: ['style.css', 'list-products.css'], js: '' });
    }, 

    descriptionProduct: async (req, res) => {
           
        res.render('product-description', {listproducts: listproducts, productsId: productsId, css: ['style.css', 'product-description.css'], js: ['product-description.js', 'addCart.js'] })
    },
}