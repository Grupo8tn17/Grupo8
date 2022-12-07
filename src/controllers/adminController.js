const productsModel = require('../models/productsModel');

module.exports = {
    indexAdmin: (req, res) => {
        res.render('panelAdmin-home');
    }, 

    adminProducts: (req, res) => {
        const products = productsModel.products();
        res.render('panelAdmin-addProducts', {products});
    }, 

    addProducts: (req, res) => {
        res.render('panelAdmin-add');
    },

    createProducts: (req, res) => {
        productsModel.productsCreate(req);
        res.redirect('/admin/products');
    } 
}