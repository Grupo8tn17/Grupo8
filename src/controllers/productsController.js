<<<<<<< HEAD
const productsModel = require('../models/productsModel')

module.exports = {
    listProducts: (req, res) => {
        const products = productsModel.products();
        return res.render('list-products', {  products: products,css: ['style.css', 'list-products.css'], js: '' });
    }, 

    descriptionProduct: (req, res) => {
        const listProducts = productsModel.products();
        let products =  productsModel.findByParams(req)
        res.render('product-description', {products: products, listporduct: listProducts, css: ['style.css', 'product-description.css'], js: 'product-description.js' })
    } 
=======


module.exports = {
    listProducts: (req, res) => {
        return res.render('list-products');
    }
>>>>>>> 815320044c41239ed604b605f56f564f1938137a
}