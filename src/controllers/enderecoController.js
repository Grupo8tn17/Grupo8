const { Endereco, Usuario} = require('../models');
const {pesquisaPorCep} = require('../services/request/endereco');


module.exports = {

    adcionaEndereco: async (req, res) => {
        if(req.session.login) {
            const {cep, logradouro, endereco_numero, complemento, bairro, cidade, estado} = req.body;
        const enderecos = await Endereco.create({
            cep, logradouro, endereco_numero, complemento, bairro, cidade, estado, pais: 'Brasil', usuarios_idusuarios: req.session.login 
        });
        res.redirect('/checkout/order');
        }  
    }
}