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
        const {id} = req.params;
        const listproducts = await Produto.findAll({where: {idprodutos: id}});     
        res.render('product-description', {listproducts: listproducts, css: ['style.css', 'product-description.css'], js: ['product-description.js', 'addCart.js'] })
    },

    indexCabelos: async (req, res) => {
        let products = await Produto.findAll({
            include: [{
                model: Categoria, as: 'categorias',
                attributes: ['nome'], where: {nome: 'Cabelo'}
            }], 
        });
        res.render('list-products', {products, css: ['style.css', 'list-products.css'], js: ['parcelamento.js'] });
    }, 

    indexTratamentos: async (req, res) => {
        let products = await Produto.findAll({
            include: [{
                model: Categoria, as: 'categorias',
                attributes: ['nome'], where: {nome: 'Tratamentos'}
            }], 
        });
        res.render('list-products', {products, css: ['style.css', 'list-products.css'], js: '' });
    }
}