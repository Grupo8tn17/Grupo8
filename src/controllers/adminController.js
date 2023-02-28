const { Produto } = require('../models');
const { validationResult } = require('express-validator');
const { json } = require('sequelize');

module.exports = {
  indexAdmin: (req, res) => {
    res.render("panelAdmin-home");
  },

  adminProducts: async (req, res) => {
    const products = await Produto.findAll();
    res.render("panelAdmin-addProducts", { products });
  },

  addProducts: (req, res) => {
    //inlcui array de erros
    res.render("panelAdmin-add", { errors: {}, product: {} });
  },

  createProducts: async (req, res) => {
    const { titulo, marca, descricao, quantidade, valor, ativo} = req.body;

    let imagem = [];

    

    console.log(imagem);
    //inclusão middleware de validacao:
    /*let { errors } = validationResult(req);
    console.log(errors)
   
    if (errors.length) {
      const errorsFormated = {};
      errors.forEach((error) => (errorsFormated[error.param] = error.msg));
      
      return res.render('panelAdmin-add', {
        errors: errorsFormated,
        product: req.body,
      });
    }
    await Produto.create({ titulo, marca, descricao, quantidade, valor, imagem, ativo});*/
    res.redirect('/admin/products');
  },

  deleteView: async (req, res) => {
    const { id } = req.params;
    let product = null;

    if (id) {
      product = await Produto.findByPk(id);
    }

    return res.render("panelAdmin-delete", { product });
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
    return res.render("panelAdmin-updateProduct", { product });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { titulo, marca, descricao, quantidade, valor, imagem} = req.body;

    await Produto.update({ titulo, marca, descricao, quantidade, valor, imagem}, {
      where : {id}
    })
    return res.redirect("/admin/products");
  },
};