var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const usuarioController = require('../controllers/usuarioController');
const carrinhoController = require('../controllers/carrinhoController');
const produtoController = require('../controllers/produtoController');
const validacaoCadastroUsuario = require('../middleware/validacao-cadastro-usuario');

//Home
router.get('/', indexController.index);

router.get('/carrinho', carrinhoController.mostraCarrinho);
router.get('/frete', carrinhoController.calcularFrete);


router.get('/login', usuarioController.mostraLogin);
router.post('/painel', usuarioController.logarUsuario);
router.get('/painel', usuarioController.mostraPainelUsuario);

//Cadastro Usuário
router.get('/cadastro', usuarioController.mostraCadastro);
router.post('/cadastro/adiciona', validacaoCadastroUsuario, usuarioController.adicionaUsuario);

router.get('/checkout/order', indexController.compra);

router.get('/checkout/order-finished', indexController.finalizacaoCompra);

router.get('/politica-privacidade', indexController.mostraPoliticaPrivacidade);

router.get('/cabelos', produtoController.mostraCabelos);

router.get('/tratamentos', produtoController.mostraTratamentos);

router.get('/maquiagem', produtoController.mostraMaquiagem);

router.get('/corpoebanho', produtoController.mostrarCorpoeBanho);

router.get('/aromaterapia', produtoController.mostarAromaterapia);

router.get('/sair', usuarioController.deslogarUsuario);

module.exports = router;




