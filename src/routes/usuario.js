var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const enderecoController = require('../controllers/enderecoController');



router.get('/meus-pedidos:id', usuarioController.mostrarHistorico);

router.get('/formUsuario/:id', usuarioController.formUsuario);
router.put('/editarUsuario/:id', usuarioController.editarUsuario);

router.get('/formEndereco/:id', enderecoController.formEndereco);
router.post('/adicionaEndereco/:id', enderecoController.adicionarEndereco);
router.put('/editarEndereco/:id', enderecoController.editarEndereco);
router.delete('/deletarEndereco/:id', enderecoController.deletarEndereco);

module.exports = router;
