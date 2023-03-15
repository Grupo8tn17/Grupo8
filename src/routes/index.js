var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');
const cartConctroller = require('../controllers/cartController');
const productsController = require('../controllers/productsController');
const cadastroUserValidation = require('../middleware/cadastro-user-validation');

//Home
router.get('/', indexController.index);

router.get('/cart', cartConctroller.mostraCarrinho);

router.get('/login', userController.indexLogin);
router.post('/user-panel', userController.logarUsuario);
router.get('/user-panel', userController.userPanel);

//Cadastro Usuário
router.get('/registrate', userController.registrate);
router.post('/registrate/create', cadastroUserValidation, userController.createUser);

router.get('/checkout/order', indexController.order);

router.get('/checkout/order-finished', indexController.onderFinished);

router.get('/privacy-policy', indexController.privacyPolicy);

router.get('/cabelos', productsController.indexCabelos);

router.get('/tratamentos', productsController.indexTratamentos);

router.get('/sair', userController.deslogarUsuario);

module.exports = router;




