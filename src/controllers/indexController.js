const {Produto, Categoria, Marca} = require('../models');
const {Op} = require('sequelize');

module.exports = {
    index: async (req, res) => {
        let productBatom = await Produto.findAll({ include: [{model: Marca, as: 'marcas'}], where: {titulo: {[Op.like]:'%Batom%'}}, limit: 3});
        let productPoFacial = await Produto.findAll({include: [{model: Marca, as: 'marcas'}], where: {titulo: {[Op.like]: '%Pó Facial%'}}, limit: 3})
        return res.render('index', {usuarios: {}, productBatom, productPoFacial, css: ['style.css', 'index.css'], js: 'home.js' });
    },

    order: (req, res) => {
        res.render('order', {css: ['style.css', 'order.css'], js: '' });
    }, 

    onderFinished: (req, res) => {
        res.render('order-finished', {css: ['style.css', 'order-finished.css'], js: '' })
    }, 

    privacyPolicy: (req, res) => {
        res.render('privacy-policy', {css: ['style.css', 'privacy-policy.css'], js: '' })
    }
}