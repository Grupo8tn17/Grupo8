const {Usuario} = require('../models');
const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");
const session = require('express-session');

module.exports = {
    mostraLogin: (req, res) => {
        return res.render('login', {erro: {}, errors: {}, css: ['style.css', 'login.css'], js: ''})
    }, 

    logarUsuario: async (req, res) => {
        const { email, senha} = req.body;
        let usuarios = await Usuario.findAll({ where: {email: email}});

        usuarios.forEach(usuario => {
            if(email == usuario.email) {
                bcrypt.compare(senha, usuario.senha, (erro, result) => {
                    if(result) {
                        req.session.login = usuario.idusuarios
                        res.render('painel', {usuarios, css: ['style.css', 'painel-usuario.css'], js: ''});
                    } else {
                        let erro = {
                            msg: "Não foi possível realizar o login!"
                        }
                        return res.render('login', {erro, errors: {}, css: ['style.css', 'login.css'], js: ''});
                    }
                })
                
            } else {
                
            }
        })

        

        
    },

    deslogarUsuario: (req, res) => {
        if(req.session.login){
            req.session.destroy();
            res.redirect('/');
        }
        

    },

    mostraPainelUsuario: async (req, res) => {
        if(req.session.login) {
            let idLogin = req.session.login;
            let usuarios = await Usuario.findAll({where: {idusuarios: idLogin}});
            console.log(usuarios);
            res.render('painel', {usuarios, css: ['style.css', 'painel-usuario.css'], js: ''});
        } else {
            res.redirect('/login');
        }
        
    }, 

    mostraCadastro: (req, res) => {
        res.render('cadastro', {errors: {}, css: ['style.css', 'cadastro.css'], js: ''});
    },

    adicionaUsuario: async (req, res) => {
        const {nome, sobrenome, email, documento_usuario, telefone, senha, senha2} = req.body;
  
        let { errors } = validationResult(req);

        if (errors.length) {
        const errorsFormated = {};
        errors.forEach((error) => (errorsFormated[error.param] = error.msg));
        
        return res.render('cadastro', {
            errors: errorsFormated,
            css: ['style.css', 'cadastro.css'], js: ''
        });
        }

        if(senha == senha2) {
            const hashSenha = await bcrypt.hash(senha, 10);
            await Usuario.create({nome, sobrenome, email, documento_usuario, telefone, senha: hashSenha, idadmin: 0});
            res.redirect("/login");
        }

    },

    mostraUsuarioAdmin: async (req, res) => {
        const usuarios = await Usuario.findAll({ where: { idadmin: 1 } });
    
        return res.render("painelAdmin-usuarios", {
          usuarios,
          css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ["painelAdmin-validacao.js"],
        });
      },
    
      formularioUsuarioAdmin: (req, res) => {
        res.render('painelAdmin-adicionaUsuarios', {usuario: {},
          erro: {}, errors: {}, css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ["painelAdmin-validacao.js"]
        })
      },
    
      adicionaUsuarioAdmin: async (req, res) => {
        const { nome, sobrenome, email, documento_usuario, telefone, senha } = req.body;
        const emailAuth = await Usuario.findAll({ where: { email: email } });
        console.log(emailAuth);
    
        let erro = {
          msg: "Email já cadastrado!"
        };
    
        if (emailAuth == "") {
          const hashSenha = await bcrypt.hash(senha, 10);
          await Usuario.create({ nome, sobrenome, email, documento_usuario, telefone, senha: hashSenha, idadmin: 1 });
          res.redirect("/admin/usuarios");
    
    
        } else {
          return res.render('painelAdmin-adicionaUsuarios', {usuario: {},
            erro, errors: {}, css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
            js: ["painelAdmin-validacao.js"]
          })
        }
    
      },
    
      formularioEditarUsuarioAdmin: async (req, res) => {
        const {id} = req.params;
    
        let usuario = await Usuario.findByPk(id);
    
        res.render('painelAdmin-adicionaUsuarios', {
          erro: {}, usuario, errors: {}, css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
          js: ["painelAdmin-validacao.js"]
        })
      },
    
      editarUsuarioAdmin: async (req, res) => {
        const {id} = req.params;
        const { nome, sobrenome, email, documento_usuario, telefone, senha } = req.body;
    
        await Usuario.update({ nome, sobrenome, email, documento_usuario, telefone, senha }, {where: {idusuarios: id}});
    
        res.redirect('/admin/usuarios');
      },
    
      excluirUsuarioAdmin: async (req, res) => {
        const {id} = req.params;
    
        await Usuario.destroy({where: {idusuarios: id}});
    
        return res.redirect('/admin/usuarios');
      }
}