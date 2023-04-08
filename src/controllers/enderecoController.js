const { Usuario, Endereco } = require("../models");

module.exports = {
  listarEnderecos: async (req, res) => {
    const idUsuario = req.session.login;
   
      const usuarios = await Usuario.findAll({
        where: { idusuarios: idUsuario },
      });

      const enderecos = await Endereco.findAll({
        where: { usuarios_idusuarios: idUsuario },
      });

      res.render("painel", {
        usuarios,
        enderecos,
        css: ["style.css", "painel-usuario.css"],
        js: ["painel-usuario.js"],
      });    
  },

  formEndereco: async (req, res) => { 
    let enderecos;
    const { id } = req.params;
    if(id) enderecos = await Endereco.findByPk(id);
    console.log(id)   
         
      res.render("painel-adicionaEndereco", {
        enderecos: [],
        css: ["style.css", "painel-formEndereco.css"],
        js: [],
      }); 
   },

  adicionarEndereco: async (req, res) => {
    const idUsuario = req.session.login;
      console.log('idUsuario', idUsuario)
        const {
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
        pais,
      } = req.body;    
     
      await Endereco.create({
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
        pais,
        usuarios_idusuarios: idUsuario,
      });

      res.redirect('/usuarios/painel');     
  },

 
  editarEndereco: async (req, res) => {    
    const { id } = req.params;
      const {
        logradouro,
        endereco_numero,
        complemento,
        cep,
        bairro,
        cidade,
        estado,
        pais,
      } = req.body;

      await Endereco.update(
        {
          logradouro,
          endereco_numero,
          complemento,
          cep,
          bairro,
          cidade,
          estado,
          pais,
        },
        {
          where: { idenderecos: id },
        }
      );
      res.redirect('/usuarios/painel');   
  },

  deletarEndereco: async (req, res) => {   
   const { id } = req.params;

      await Endereco.destroy({
        where: { idenderecos: id },
      });

      res.redirect('/usuarios/painel');    
  },
};
