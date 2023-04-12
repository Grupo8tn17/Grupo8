const {Produto, Categoria, Marca, Usuario, Endereco} = require('../models');
const {Op} = require('sequelize');

module.exports = {
    index: async (req, res) => {
        let productBatom = await Produto.findAll({ include: [{model: Marca, as: 'marcas'}], where: {titulo: {[Op.like]:'%Batom%'}}, limit: 3});
        let productPoFacial = await Produto.findAll({include: [{model: Marca, as: 'marcas'}], where: {titulo: {[Op.like]: '%Pó Facial%'}}, limit: 3})
        return res.render('index', {usuarios: {}, productBatom, productPoFacial, css: ['style.css', 'index.css'], js: ['home.js'] });
    },

    mostraPoliticaPrivacidade: (req, res) => {
        res.render('politica-privacidade', {css: ['style.css', 'politica-privacidade.css'], js: '' })
    }
}