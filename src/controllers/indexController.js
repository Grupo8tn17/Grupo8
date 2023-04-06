const {Produto, Categoria, Marca, Usuario, Endereco} = require('../models');
const {Op} = require('sequelize');

module.exports = {
    index: async (req, res) => {
        let productBatom = await Produto.findAll({ include: [{model: Marca, as: 'marcas'}], where: {titulo: {[Op.like]:'%Batom%'}}, limit: 3});
        let productPoFacial = await Produto.findAll({include: [{model: Marca, as: 'marcas'}], where: {titulo: {[Op.like]: '%Pó Facial%'}}, limit: 3})
        return res.render('index', {usuarios: {}, productBatom, productPoFacial, css: ['style.css', 'index.css'], js: ['home.js'] });
    },

    compra: async (req, res) => {
        let {produtos, frete, prazo} = req.body;
        
        if(frete) {
            let parsedProdutos = JSON.parse(produtos);
            if(req.session.login) {
                let idUsuario = req.session.login;
                let enderecos = await Endereco.findAll({include: [{model: Usuario, as: 'usuarios'}], where: {usuarios_idusuarios: idUsuario}})
                return res.render('compra', {enderecos, produtos: parsedProdutos, frete, prazo, css: ['style.css', 'compra.css'], js: ['compra.js'] });
            } else {
                return res.render('login', {erro: {}, errors: {}, css: ['style.css', 'login.css'], js: ''})
            }
        } else {
            let erro = {
                msg: 'Favor preencher o campo de Frete'
            }
            return res.render("carrinho", {
                css: ["style.css", "carrinho.css", "cabecalho-alternativo.css"],
                js: ["carrinho.js"],
                valorFrete: null,
                prazo: null, 
                erro      
              });
        }

        
        
    }, 

    finalizacaoCompra: (req, res) => {
        res.render('finalizacao-compra', {css: ['style.css', 'finaliza-compra.css'], js: '' })
    }, 

    mostraPoliticaPrivacidade: (req, res) => {
        res.render('politica-privacidade', {css: ['style.css', 'politica-privacidade.css'], js: '' })
    }
}