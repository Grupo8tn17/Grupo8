const Usuario = require('../models');
const Endereco = require('../models');

async function listarEnderecos(req, res) {
    const idUsuario = req.session.login; 
  
    try {
      const usuarios = await Usuario.findAll({
        where: {idusuarios: idUsuario}
      });

      const enderecos = await Endereco.findAll({
        where: { idusuarios: idUsuario }
      });

      res.render('painel', {usuarios, enderecos, css: ['style.css', 'painel-usuario.css'], js: ['painel-usuario.js']});

    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro ao listar endereços' });
    }
  }    

    async function criarEndereco(req, res) {
             
        try {
        const { logradouro, endereco_numero, complemento, cep, bairro, cidade, estado, pais, usuarios_idusuarios } = req.body;
        const { idUsuario } = req.session.login;
        
          await Endereco.create({
            logradouro,
            endereco_numero,
            complemento,
            cep,
            bairro,
            cidade,
            estado,
            pais,
            usuarios_idusuarios: idUsuario
          });
          res.redirect('/painel');
          
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensagem: 'Erro ao criar endereço' });
        }
    }

    async function atualizarEndereco(req, res) {
        const idEndereco = req.params.id;
        const { logradouro, endereco_numero, complemento, cep, bairro, cidade, estado, pais } = req.body;
      
        try {
          const enderecoAtualizado = await Endereco.update({
            logradouro,
            endereco_numero,
            complemento,
            cep,
            bairro,
            cidade,
            estado,
            pais
          }, {
            where: { idenderecos: idEndereco }
          });
          res.status(200).json({ mensagem: 'Endereço atualizado com sucesso' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensagem: 'Erro ao atualizar endereço' });
        }
      }

      async function deletarEndereco(req, res) {
        const idEndereco = req.params.id;
      
        try {
          await Endereco.destroy({
            where: { idenderecos: idEndereco }
          });
          res.status(200).json({ mensagem: 'Endereço deletado com sucesso' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensagem: 'Erro ao deletar endereço' });
        }
      }

      
    module.exports = { criarEndereco, listarEnderecos, atualizarEndereco, deletarEndereco };
    
    