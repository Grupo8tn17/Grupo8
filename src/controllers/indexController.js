const {Produto, Categoria, Marca, Usuario} = require('../models');
const {Op} = require('sequelize');

module.exports = {
    index: async (req, res) => {
        let productBatom = await Produto.findAll({ include: [{model: Marca, as: 'marcas'}], where: {titulo: {[Op.like]:'%Batom%'}}, limit: 3});
        let productPoFacial = await Produto.findAll({include: [{model: Marca, as: 'marcas'}], where: {titulo: {[Op.like]: '%Pó Facial%'}}, limit: 3})
        return res.render('index', {usuarios: {}, productBatom, productPoFacial, css: ['style.css', 'index.css'], js: ['home.js'] });
    },

    compra: async (req, res) => {
        if(req.session.login) {
            let {produtos} = req.body;
            let parsedProdutos = JSON.parse(produtos);
            let idUsuario = req.session.login;
            let usuario = await Usuario.findAll({where: {idusuarios: idUsuario}});
            console.log(usuario);
            
            res.render('compra', {usuario, produtos: parsedProdutos, css: ['style.css', 'compra.css'], js: [] });
        } else {
            return res.render('login', {erro: {}, errors: {}, css: ['style.css', 'login.css'], js: ''})
        }
        
    }, 

    finalizacaoCompra: (req, res) => {
        res.render('finalizacao-compra', {css: ['style.css', 'finaliza-compra.css'], js: '' })
    }, 

    mostraPoliticaPrivacidade: (req, res) => {
        res.render('politica-privacidade', {css: ['style.css', 'politica-privacidade.css'], js: '' })
    }
}