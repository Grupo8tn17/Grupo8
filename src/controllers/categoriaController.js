
const { Produto, Categoria, Marca, Usuario } = require("../models");
const { validationResult } = require("express-validator");
const { json } = require("sequelize");

module.exports = {
    mostraCategoria: async (req, res) => {
        const categorias = await Categoria.findAll();
    
        return res.render("painelAdmin-Categoria", {
          categorias,
          css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ["painelAdmin-validacao.js"],
        });
      },
    
      formularioCategoria: (req, res) => {
        res.render("painelAdmin-adicionaCategoria", {
          erros: {},
          categorias: false,
          css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ["painelAdmin-validacao.js"],
        });
      },
    
      adicionaCategoria: async (req, res) => {
        const { nome } = req.body;
    
        await Categoria.create({ nome });
    
        res.redirect("/admin/categorias");
      },
    
      formularioEditarCategoria: async (req, res) => {
        const { id } = req.params;
        const { nome } = req.body;
        let categorias = await Categoria.findByPk(id);
    
        await Categoria.update({ nome }, { where: { idcategorias: id } })
        res.render('painelAdmin-adicionaCategoria', { categorias, css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"], js: ["painelAdmin-validacao.js"] })
      },
    
      editarCategoria: async (req, res) => {
        const { id } = req.params;
        const { nome } = req.body;
    
        await Categoria.update({
          nome
        },
          {
            where: { idcategorias: id }
          });
    
        return res.redirect("/admin/categorias");
      },
    
      excluirCategoria: async (req, res) => {
        const { id } = req.params;
    
        await Categoria.destroy({
          where: { idcategorias: id }
        });
    
        res.redirect('/admin/categorias');
    
      },
}