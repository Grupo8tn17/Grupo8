const { Produto, Categoria, Marca, Usuario } = require("../models");
const { validationResult } = require("express-validator");
const { json } = require("sequelize");

module.exports = {
    mostarMarca: async (req, res) => {
        const marcas = await Marca.findAll();
        return res.render('painelAdmin-marca', {
          marcas, css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ["painelAdmin-validacao.js"]
        })
      },
    
      formularioMarca: (req, res) => {
        res.render('painelAdmin-adicionaMarcas', {
          erros: {}, marcas: false, css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ["painelAdmin-validacao.js"]
        })
      },
    
      adicionaMarca: async (req, res) => {
        const { nome, cnpj, endereco } = req.body;
    
        await Marca.create({ nome, cnpj, endereco });
    
        return res.redirect('/admin/marcas');
      },
    
      formularioEditaMarca: async (req, res) => {
        const { id } = req.params;
        let marcas = await Marca.findByPk(id);
    
        res.render('painelAdmin-adicionaMarcas', {
          marcas, css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ["painelAdmin-validacao.js"]
        })
      },
    
      editarMarca: async (req, res) => {
        const { id } = req.params;
        const { nome, cnpj, endereco } = req.body;
    
        await Marca.update({ nome, cnpj, endereco }, { where: { idmarcas: id } });
        return res.redirect('/admin/marcas');
      },
    
      excluirMarca: async (req, res) => {
        const { id } = req.params;
    
        await Marca.destroy({ where: { idmarcas: id } })
    
        res.redirect('/admin/marcas');
      }
}