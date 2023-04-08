var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const enderecoController = require('../controllers/enderecoController');


router.get('/painel', usuarioController.mostraPainelUsuario);

router.get('/meus-pedidos:id', usuarioController.mostrarHistorico);

router.get('/painel', enderecoController.listarEnderecos);
router.get('/formEndereco/:id?', enderecoController.formEndereco);
router.post('/adicionarEndereco', enderecoController.adicionarEndereco);
router.put('/editarEndereco/:id', enderecoController.editarEndereco);
router.delete('/deletarEndereco/:id', enderecoController.deletarEndereco);

module.exports = router;
