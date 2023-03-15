const express = require ('express');
const router = express.Router();
const entregasController = require('../controllers/EntregasController');

router.get('/endereco', entregasController.obterEnderecoPorCep);
router.get('/frete', entregasController.calcularFrete);

module.exports = router;