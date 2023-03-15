const {Usuario} = require('../models');
const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");
const session = require('express-session');

module.exports = {
    indexLogin: (req, res) => {
        return res.render('login', {css: ['style.css', 'login.css'], js: ''})
    }, 

    logarUsuario: async (req, res) => {
        const { email, senha} = req.body;
        let usuario = await Usuario.findAll({ where: {email: email}});
        console.log(JSON.stringify(usuario, null, 2));

        /*if(email == usuario.email) {
            await bcrypt.compare(senha, usuario.senha, (erro, result) => {
                if(result) {
                    req.session.login = usuario.idusuarios
                    console.log("Deu certo!");
                    res.redirect('/user-panel');
                } else {
                    console.log(erro)
                }
            })
            
        }*/
    },

    userPanel: (req, res) => {
        res.render('user-panel', {css: ['style.css', 'user-panel.css'], js: ''});
    }, 

    registrate: (req, res) => {
        res.render('registration', {errors: {}, css: ['style.css', 'registration.css'], js: ''});
    },

    createUser: async (req, res) => {
        const {nome, sobrenome, email, documento_usuario, telefone, senha, senha2} = req.body;
  
        let { errors } = validationResult(req);

        if (errors.length) {
        const errorsFormated = {};
        errors.forEach((error) => (errorsFormated[error.param] = error.msg));
        
        return res.render('registration', {
            errors: errorsFormated,
            css: ['style.css', 'registration.css'], js: ''
        });
        }

        if(senha == senha2) {
            const hashSenha = await bcrypt.hash(senha, 10);
            await Usuario.create({nome, sobrenome, email, documento_usuario, telefone, senha: hashSenha, idadmin: 0});
            res.redirect("/login");
        }

    }
}