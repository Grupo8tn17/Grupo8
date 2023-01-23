const { products, findProducts } = require('../models/productsModel');
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
        productsModel.productsCreate(req.body);
        res.redirect('/admin/products');
    }, 

    deleteView: (req, res) => {
        const { id } = req.params;
        let product = null;

        if(id) {
            product = productsModel.findProducts(id);
        }

        return res.render('panelAdmin-delete', {product})
        
    },

    deleteProducts: (req, res) => {
        const {id}= req.params;
        productsModel.deleteProduct(id);
        return res.redirect('/admin/products');
    }, 
    
    updateProducts: (req, res) => {
        const { id } = req.params;
        let product = null;

        if(id) {
            product = productsModel.findProducts(id);
        }
        return res.render('panelAdmin-updateProduct', {product})
    },

    update: (req, res) => {
        const {id} = req.params;

        productsModel.updateProducts(id, req.body);
        return res.redirect('/admin/products');
    }

}