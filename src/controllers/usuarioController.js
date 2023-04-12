const { Usuario } = require("../models");
const { Pedido } = require("../models");
const { HistoricoPedido } = require("../models");
const { Produto, Endereco } = require("../models");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const session = require("express-session");

module.exports = {
  mostraLogin: (req, res) => {
    return res.render("login", {
      erro: {},
      errors: {},
      css: ["style.css", "login.css"],
      js: "",
    });
  },

  mostraLoginCarrinho: (req, res) => {
    return res.render("login-carrinho", {
      erro: {},
      errors: {},
      css: ["style.css", "login.css"],
      js: "",
    });
  },

  logarCarrinho: async (req, res) => {
    const { email, senha } = req.body;
    let usuario = await Usuario.findAll({ where: { email: email } });

    console.log(usuario);
    console.log(usuario[0].email, email);

    if (email == usuario[0].email) {
      bcrypt.compare(senha, usuario[0].senha, async (erro, result) => {
        if (result) {
          req.session.login = usuario[0].idusuarios;

          let enderecos = await Endereco.findAll({
            where: { usuarios_idusuarios: usuario[0].idusuarios },
          });

          res.render("carrinho", {
            css: ["style.css", "carrinho.css", "cabecalho-alternativo.css"],
            js: ["carrinho.js"],
            valorFrete: null,
            prazo: null,
            erro: [],
          });
        } else {
          let erro = {
            msg: "Não foi possível realizar o login!",
          };
          return res.render("login", {
            erro,
            errors: {},
            css: ["style.css", "login.css"],
            js: "",
          });
        }
      });
    } else {
    }
  },

  logarUsuario: async (req, res) => {
    const { email, senha } = req.body;
    let usuario = await Usuario.findAll({ where: { email: email } });

    console.log(usuario);
    console.log(usuario[0].email, email);

    if (email == usuario[0].email) {
      bcrypt.compare(senha, usuario[0].senha, async (erro, result) => {
        if (result) {
          req.session.login = usuario[0].idusuarios;

          let enderecos = await Endereco.findAll({
            where: { usuarios_idusuarios: usuario[0].idusuarios },
          });

          res.render("painel", {
            usuarios: usuario,
            enderecos,
            css: ["style.css", "painel-usuario.css"],
            js: ["painel-usuario.js", "formata-data.js", "formata-cep.js"],
          });
        } else {
          let erro = {
            msg: "Não foi possível realizar o login!",
          };
          return res.render("login", {
            erro,
            errors: {},
            css: ["style.css", "login.css"],
            js: "",
          });
        }
      });
    } else {
    }
  },

  deslogarUsuario: (req, res) => {
    if (req.session.login) {
      req.session.destroy();
      res.redirect("/");
    }
  },

  mostraPainelUsuario: async (req, res) => {
    if (req.session.login) {
      let idLogin = req.session.login;
      let usuarios = await Usuario.findAll({ where: { idusuarios: idLogin } });
      let enderecos = await Endereco.findAll({
        where: { usuarios_idusuarios: usuarios[0].idusuarios },
      });
      console.log(usuarios);
      res.render("painel", {
        usuarios,
        enderecos,
        css: ["style.css", "painel-usuario.css"],
        js: ["painel-usuario.js", "formata-data.js"],
      });
    } else {
      res.redirect("/login");
    }
  },

  mostraCadastro: (req, res) => {
    res.render("cadastro", {
      erro: {},
      errors: {},
      css: ["style.css", "cadastro.css"],
      js: ["cadastro.js"],
    });
  },

  adicionaUsuario: async (req, res) => {
    const {
      nome,
      sobrenome,
      email,
      documento_usuario,
      telefone,
      senha,
      senha2,
    } = req.body;
    const usuario = await Usuario.findAll({ where: { email: email } });
    console.log(usuario);

    let { errors } = validationResult(req);

    if (errors.length) {
      const errorsFormated = {};
      errors.forEach((error) => (errorsFormated[error.param] = error.msg));

      return res.render("cadastro", {
        errors: errorsFormated,
        css: ["style.css", "cadastro.css"],
        js: "",
      });
    }

    if (!usuario.length) {
      console.log("entrou no if do usuario");
      if (senha == senha2) {
        const hashSenha = await bcrypt.hash(senha, 10);
        await Usuario.create({
          nome,
          sobrenome,
          email,
          documento_usuario,
          telefone,
          senha: hashSenha,
          idadmin: 0,
        });
        res.redirect("/login");
      }
    } else {
      const erro = { msg: "esse e-mail já foi cadastrado" };
      res.render("cadastro", {
        errors: {},
        erro,
        css: ["style.css", "cadastro.css"],
        js: ["cadastro.js"],
      });
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
    res.render("painelAdmin-adicionaUsuarios", {
      usuario: {},
      erro: {},
      errors: {},
      css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
      js: ["painelAdmin-validacao.js"],
    });
  },

  adicionaUsuarioAdmin: async (req, res) => {
    const { nome, sobrenome, email, documento_usuario, telefone, senha } =
      req.body;
    const emailAuth = await Usuario.findAll({ where: { email: email } });
    console.log(emailAuth);

    let erro = {
      msg: "Email já cadastrado!",
    };

    if (emailAuth == "") {
      const hashSenha = await bcrypt.hash(senha, 10);
      await Usuario.create({
        nome,
        sobrenome,
        email,
        documento_usuario,
        telefone,
        senha: hashSenha,
        idadmin: 1,
      });
      res.redirect("/admin/usuarios");
    } else {
      return res.render("painelAdmin-adicionaUsuarios", {
        usuario: [],
        erro,
        errors: {},
        css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
        js: ["painelAdmin-validacao.js"],
      });
    }
  },

  formularioEditarUsuarioAdmin: async (req, res) => {
    const { id } = req.params;

    let usuario = await Usuario.findAll({where:{idusuarios: id}});
    console.log(usuario);

    res.render("painelAdmin-adicionaUsuarios", {
      erro: {},
      usuario,
      errors: {},
      css: ["painelAdmin-adiciona.css", "painelAdmin-adiciona-produto.css"],
      js: ["painelAdmin-validacao.js"],
    });
  },

  editarUsuarioAdmin: async (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, email, documento_usuario, telefone, senha } =
      req.body;

    await Usuario.update(
      { nome, sobrenome, email, documento_usuario, telefone, senha },
      { where: { idusuarios: id } }
    );

    res.redirect("/admin/usuarios");
  },

  excluirUsuarioAdmin: async (req, res) => {
    const { id } = req.params;

    await Usuario.destroy({ where: { idusuarios: id } });

    return res.redirect("/admin/usuarios");
  },
  //contollers dos Pedidos
  mostrarHistorico: async (req, res) => {
    try {
      const { id } = req.params;
      const usuarios = await Usuario.findAll({ where: { idusuarios: id } });
      const pedidos = await Pedido.findAll({
        where: {
          usuarios_idusuarios: id,
        },
      });
      console.log(pedidos);

      return res.render("meus-pedidos", {
        usuarios,
        pedidos,
        css: ["style.css", "painel-usuario.css", "meus-pedidos.css"],
        js: ["formata-data.js"],
      });
    } catch (erro) {
      console.log("aqui", erro);
    }
  },

  formUsuario: async (req, res) => {
    const { id } = req.params;
    let usuarios = await Usuario.findAll({ where: { idusuarios: id } });
    res.render("painel-edita-usuario", {
      usuarios,
      css: ["style.css", "painel-formUsuario.css", "painel-usuario.css"],
      js: "",
    });
  },

  editarUsuario: async (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, email, documento_usuario, telefone } = req.body;

    await Usuario.update(
      { nome, sobrenome, email, documento_usuario, telefone },
      { where: { idusuarios: id } }
    );

    res.redirect("/painel");
  },
};
