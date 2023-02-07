const { products, findProducts } = require('../models/productsModel');
const productsModel = require('../models/productsModel');
const { validationResult } = require('express-validator');

module.exports = {
    indexAdmin: (req, res) => {
        res.render('panelAdmin-home');
    }, 

    adminProducts: (req, res) => {
        const products = productsModel.products();
        return res.render('panelAdmin-addProducts', {products, errors: {}});
    }, 

    addProducts: (req, res) => {
       return res.render('panelAdmin-add', {errors: {}});
    },

    createProducts: (req, res) => {
        /*let { errors } = validationResult(req);

        if (errors.length) {
        const errosFormatados = {};
        errors.forEach(erro => errosFormatados[erro.param] = erro.msg);
        console.log(errosFormatados)
        return res.render('panelAdmin-add', { errors: errosFormatados, servico: null });
        } */
            productsModel.productsCreate(req);
            return res.redirect('/admin/products');

        
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