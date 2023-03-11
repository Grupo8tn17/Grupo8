const { Produto, Categoria } = require('../models');
const { validationResult } = require('express-validator');
const { json } = require('sequelize');

module.exports = {
  indexAdmin: (req, res) => {
    res.render("panelAdmin-home", {css: ['panelAdmin-add.css', 'panelAdmin-addProducts.css'], js: []});
  },

  adminProducts: async (req, res) => {
    const products = await Produto.findAll();
    res.render("panelAdmin-addProducts", { products, css: ['panelAdmin-addProducts.css'], js:['panelAdmin-delete.js'] });
  },

  addProducts: (req, res) => {
    //inlcui array de erros
    res.render("panelAdmin-add", { errors: {}, product: {}, css: ['panelAdmin-add.css', 'panelAdmin-addProducts.css'], js: ['panelAdmin-validation.js'] });
  },

  createProducts: async (req, res) => {
    const { titulo, marca, descricao, quantidade, valor, ativo} = req.body;
    const imagem = req.files[0] ? req.files[0].filename : '';
    const  imagem2 =  req.files[1] ? req.files[1].filename : '';
    const  imagem3 = req.files[2] ? req.files[2].filename : '';
    
    //inclusão middleware de validacao:
    let { errors } = validationResult(req);
    console.log(errors)
   
    if (errors.length) {
      const errorsFormated = {};
      errors.forEach((error) => (errorsFormated[error.param] = error.msg));
      
      return res.render('panelAdmin-add', {
        errors: errorsFormated,
        product: req.body,
      });
    }
    await Produto.create({ titulo, marca, descricao, quantidade, valor, imagem, ativo, imagem2, imagem3});
    res.redirect('/admin/products');
  },

  deleteView: async (req, res) => {
    const { id } = req.params;
    let product = null;

    if (id) {
      product = await Produto.findByPk(id);
    }

    return res.render("panelAdmin-delete", { product: {}, css: ['panelAdmin-delete.css', 'panelAdmin-add.css'], js: ['panelAdmin-delete.js'] });
  },

  deleteProducts: async (req, res) => {
    const { id } = req.params;
    
    await Produto.destroy({
      where : {id},
    })
    return res.redirect("/admin/products");
  },

  updateProducts: async (req, res) => {
    const { id } = req.params;
    let product = null;

    if (id) {
      product = await Produto.findByPk(id);
    }
    return res.render("panelAdmin-updateProduct", { product: {}, css: ['panelAdmin-add.css', 'panelAdmin-addProducts.css'], js: ['panelAdmin-validation.js'] });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { titulo, marca, descricao, quantidade, valor, imagem} = req.body;

    await Produto.update({ titulo, marca, descricao, quantidade, valor, imagem}, {
      where : {id}
    })
    return res.redirect("/admin/products");
  },

  adminCategorias: async (req, res) => {
      const categorias = await Categoria.findAll();
      return res.render("panelAdmin-Categoria", { categorias, css: ['panelAdmin-add.css', 'panelAdmin-addProducts.css'], js: ['panelAdmin-validation.js'] });
    },

  addCategoria: (req, res) => {
    res.render('panelAdmin-addCategoria', { erros: {}, categorias: {}, css: ['panelAdmin-add.css', 'panelAdmin-addProducts.css'], js: ['panelAdmin-validation.js']});
  }, 

  createCategoria: async (req, res) => {
    const {teste} = req.body;
    console.log(teste);

    await Categoria.create({nome});

    res.redirect('/admin/categorias');
  }
};