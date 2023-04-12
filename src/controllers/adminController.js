const { Produto, Categoria, Marca, Usuario } = require("../models");
const { validationResult } = require("express-validator");
const { json } = require("sequelize");
const bcrypt = require("bcrypt");



module.exports = {

  loginAdmin: (req, res) => {
    res.render('painelAdmin-login', {erro:{}});
  },

  logarAdmin: async (req, res)=> {
    const { email, senha} = req.body;
    let usuariosAdmin = await Usuario.findAll({where: {email: email}});

    usuariosAdmin.forEach(usuarioAdmin => {
      if(email == usuarioAdmin.email && usuarioAdmin.idadmin == 1) {
        bcrypt.compare(senha, usuarioAdmin.senha, (erro, result) => {
          if(result) {
            req.session.loginAdmin = usuarioAdmin.idusuarios;
            return res.render("painelAdm-home", {
              product: {},
              css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
              js: [],
            });
          } else {
            let erro = {
              msg: "Não foi possível realizar o Login!"
            };
            res.render('painelAdmin-login', {erro});
          }
        })
      } else {
        let erro = {
          msg: "Não foi possível realizar o Login!"
        };
        res.render('painelAdmin-login', {erro});
      }
    })
  },

  mostraAdmin: async (req, res) => {
    if(req.session.loginAdmin) {
      return res.render("painelAdm-home", {
        product: {},
        css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
        js: [],
      });
    } else {
      return res.redirect('/admin/login');
    }

    
  },  

  deslogarUsuarioAdmin: (req, res) => {
    if (req.session.loginAdmin) {
      req.session.destroy();
      res.redirect("/");
    }
  }

  


};
