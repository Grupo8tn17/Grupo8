var express = require('express');
var router = express.Router();
const produtoController = require('../controllers/produtoController');


router.get('/', produtoController.mostrarProdutos);

router.get('/descricao-produto/:id', produtoController.mostraDescricaoProduto);



module.exports = router;