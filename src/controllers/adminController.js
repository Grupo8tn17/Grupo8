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
              css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
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

  indexAdmin: async (req, res) => {
    if(req.session.loginAdmin) {
      return res.render("painelAdm-home", {
        product: {},
        css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
        js: [],
      });
    } else {
      return res.redirect('/admin/login');
    }

    
  },

  adminProducts: async (req, res) => {
    const products = await Produto.findAll();
    res.render("panelAdmin-addProducts", {
      products,
      css: ["panelAdmin-addProducts.css"],
      js: ["panelAdmin-delete.js"],
    });
  },

  addProducts: async (req, res) => {
    //inlcui array de erros
    const categorias = await Categoria.findAll();
    const marcas = await Marca.findAll();

    res.render("panelAdmin-add", {
      categorias,
      marcas,
      errors: {},
      product: {},
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  createProducts: async (req, res) => {
    const { titulo, marca, categoria, descricao, quantidade, valor, ativo } = req.body;
    const imagem = req.files[0] ? req.files[0].filename : "";
    const imagem2 = req.files[1] ? req.files[1].filename : "";
    const imagem3 = req.files[2] ? req.files[2].filename : "";

    const categorias = await Categoria.findAll();
    const marcas = await Marca.findAll();

    //inclusão middleware de validacao:
    let { errors } = validationResult(req);

    if (errors.length) {
      const errorsFormated = {};
      errors.forEach((error) => (errorsFormated[error.param] = error.msg));

      return res.render('panelAdmin-add', {
        categorias,
        marcas,
        errors: errorsFormated,
        product: req.body,
        css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
        js: ['panelAdmin-validation.js']
      });
    }
    await Produto.create({
      titulo,
      marcas_idmarcas: marca,
      categorias_idcategorias: categoria,
      descricao,
      quantidade,
      valor,
      imagem,
      ativo,
      imagem2,
      imagem3,
    });
    res.redirect("/admin/products");
  },

  deleteView: async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, valor, quantidade } = req.body;


    const product = await Produto.findByPk(id);


    return res.render("panelAdmin-delete", {
      product,
      css: ["panelAdmin-delete.css", "panelAdmin-add.css"],
      js: ["panelAdmin-delete.js"]
    });
  },

  deleteProducts: async (req, res) => {
    const { id } = req.params;


    await Produto.destroy({
      where: { idprodutos: id },
    });

    return res.redirect("/admin/products");
  },

  updateProducts: async (req, res) => {
    const categorias = await Categoria.findAll();
    const marcas = await Marca.findAll();
    const { id } = req.params;
    let product = null;

    product = await Produto.findByPk(id);

    res.render("panelAdmin-updateProduct", {
      product,
      categorias,
      marcas,
      errors: {},
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    })
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { titulo, marca, categoria, descricao, quantidade, valor, ativo } = req.body;
    const imagem = req.files[0] ? req.files[0].filename : "";
    const imagem2 = req.files[1] ? req.files[1].filename : "";
    const imagem3 = req.files[2] ? req.files[2].filename : "";


    await Produto.update(
      {
        titulo,
        marcas_idmarcas: marca,
        categorias_idcategorias: categoria,
        descricao,
        quantidade,
        valor,
        imagem,
        ativo,
        imagem2,
        imagem3
      },
      {
        where: { idprodutos: id },
      }
    );
    return res.redirect("/admin/products");
  },

  adminCategorias: async (req, res) => {
    const categorias = await Categoria.findAll();

    return res.render("panelAdmin-Categoria", {
      categorias,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  addCategoria: (req, res) => {
    res.render("panelAdmin-addCategoria", {
      erros: {},
      categorias: false,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  createCategoria: async (req, res) => {
    const { nome } = req.body;

    await Categoria.create({ nome });

    res.redirect("/admin/categorias");
  },

  updateCategoriaView: async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    let categorias = await Categoria.findByPk(id);

    await Categoria.update({ nome }, { where: { idcategorias: id } })
    res.render('panelAdmin-addCategoria', { categorias, css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"], js: ["panelAdmin-validation.js"] })
  },

  updateCategoria: async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    await Categoria.update({
      nome
    },
      {
        where: { idcategorias: id }
      });

    return res.redirect("/admin/categorias");
  },

  deleteCategoria: async (req, res) => {
    const { id } = req.params;

    await Categoria.destroy({
      where: { idcategorias: id }
    });

    res.redirect('/admin/categorias');

  },

  adminMarcas: async (req, res) => {
    const marcas = await Marca.findAll();
    return res.render('panelAdmin-Marcas', {
      marcas, css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"]
    })
  },

  addMarcas: (req, res) => {
    res.render('panelAdmin-addMarcas', {
      erros: {}, marcas: false, css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"]
    })
  },

  createMarcas: async (req, res) => {
    const { nome, cnpj, endereco } = req.body;

    await Marca.create({ nome, cnpj, endereco });

    return res.redirect('/admin/marcas');
  },

  updateMarcasView: async (req, res) => {
    const { id } = req.params;
    let marcas = await Marca.findByPk(id);

    res.render('panelAdmin-addMarcas', {
      marcas, css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"]
    })
  },

  updateMarcas: async (req, res) => {
    const { id } = req.params;
    const { nome, cnpj, endereco } = req.body;

    await Marca.update({ nome, cnpj, endereco }, { where: { idmarcas: id } });
    return res.redirect('/admin/marcas');
  },

  deleteMarcas: async (req, res) => {
    const { id } = req.params;

    await Marca.destroy({ where: { idmarcas: id } })

    res.redirect('/admin/marcas');
  },

  adminUsuarios: async (req, res) => {
    const usuarios = await Usuario.findAll({ where: { idadmin: 1 } });

    return res.render("panelAdmin-usuarios", {
      usuarios,
      css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"],
    });
  },

  addUsuarios: (req, res) => {
    res.render('panelAdmin-addUsuarios', {usuario: {},
      erro: {}, errors: {}, css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"]
    })
  },

  createUsuarios: async (req, res) => {
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
      return res.render('panelAdmin-addUsuarios', {usuario: {},
        erro, errors: {}, css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
        js: ["panelAdmin-validation.js"]
      })
    }

  },

  updateUsuariosView: async (req, res) => {
    const {id} = req.params;

    let usuario = await Usuario.findByPk(id);

    res.render('panelAdmin-addUsuarios', {
      erro: {}, usuario, errors: {}, css: ["panelAdmin-add.css", "panelAdmin-addProducts.css"],
      js: ["panelAdmin-validation.js"]
    })
  },

  updateUsuarios: async (req, res) => {
    const {id} = req.params;
    const { nome, sobrenome, email, documento_usuario, telefone, senha } = req.body;

    await Usuario.update({ nome, sobrenome, email, documento_usuario, telefone, senha }, {where: {idusuarios: id}});

    res.redirect('/admin/usuarios');
  },

  deleteUsuarios: async (req, res) => {
    const {id} = req.params;

    await Usuario.destroy({where: {idusuarios: id}});

    return res.redirect('/admin/usuarios');
  }


};
