const { Usuario, Endereco } = require("../models");
const session = require("express-session");

module.exports = {  

  formEndereco: async (req, res) => {
    const { id } = req.params;
   
      const usuarios = await Usuario.findAll({
        where: { idusuarios: id },
      });

      const enderecos = await Endereco.findAll({
        where: { usuarios_idusuarios: id },
      });
      console.log(enderecos)

    /* const idUsuario = req.session.login; 
    let enderecos;
    const { id } = req.params;
    if(id) { enderecos = await Endereco.findByPk(id);
    console.log("consolelog do id do formendereco:", id)   
         
      res.render("painel-adicionaEndereco", {
        enderecos,
        css: ["style.css", "painel-formEndereco.css"],
        js: [],
      }); */
      return res.render("painel-adicionaEndereco", {
        enderecos,
        usuarios,
        css: ["style.css", "painel-formEndereco.css"],
        js: [],
      });
  },
    
 

  adicionarEndereco: async (req, res) => {
    const idUsuario = req.session.login;
      console.log('idUsuario:', idUsuario)
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
     console.log('logo apos o req body do adicionar endereco', logradouro)
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

      res.redirect('/painel');     
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
      res.redirect('/painel');   
  },

  deletarEndereco: async (req, res) => {   
   const { id } = req.params;

      await Endereco.destroy({
        where: { idenderecos: id },
      });

      res.redirect('/painel');    
  },
};
