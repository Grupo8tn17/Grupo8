var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const enderecoController = require('../controllers/enderecoController');


router.get('/painel', usuarioController.mostraPainelUsuario);

router.get('/meus-pedidos:id', usuarioController.mostrarHistorico);

router.get('/endereco', enderecoController.listarEnderecos);
router.post('/endereco', enderecoController.criarEndereco);
router.get('/endereco/:id?', enderecoController.atualizarEndereco);
router.delete('/endereco/:id?', enderecoController.deletarEndereco);

module.exports = router;
