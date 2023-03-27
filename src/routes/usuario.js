var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/painel', usuarioController.mostraPainelUsuario);


module.exports = router;
