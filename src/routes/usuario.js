var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')


router.get('/painel', usuarioController.mostraPainelUsuario);

router.get('/meus-pedidos:id', usuarioController.mostrarHistorico);

module.exports = router;
