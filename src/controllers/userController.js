const {Usuario} = require('../models');
const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");
const session = require('express-session');

module.exports = {
    indexLogin: (req, res) => {
        return res.render('login', {erroAuth: {}, errors: {}, css: ['style.css', 'login.css'], js: ''})
    }, 

    logarUsuario: async (req, res) => {
        const { email, senha} = req.body;
        let usuarios = await Usuario.findAll({ where: {email: email}});

        usuarios.forEach(usuario => {
            if(email == usuario.email) {
                bcrypt.compare(senha, usuario.senha, (erro, result) => {
                    if(result) {
                        req.session.login = usuario.idusuarios
                        console.log("Deu certo!", req.session.login);
                        console.log(usuarios);
                        res.render('user-panel', {usuarios, css: ['style.css', 'user-panel.css'], js: ''});
                    } else {
                        console.log('Deu erro aqui!')
                    }
                })
                
            } else {
                return res.render('/login', console.log("Email não encontrado"));
            }
        })

        

        
    },

    deslogarUsuario: (req, res) => {
        if(req.session.login){
            req.session.destroy();
            res.redirect('/');
        }
        

    },

    userPanel: async (req, res) => {
        console.log(req.session.login);
        if(req.session.login) {
            let idLogin = req.session.login;
            let usuarios = await Usuario.findByPk(idLogin);
            console.log(usuarios);
            res.render('user-panel', {usuarios, css: ['style.css', 'user-panel.css'], js: ''});
        } else {
            res.redirect('/login');
        }
        
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