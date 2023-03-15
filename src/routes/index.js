var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');
const cartConctroller = require('../controllers/cartController');
const productsController = require('../controllers/productsController');
const entregasRouter = require('./entregas');

router.use('/entregas', entregasRouter);

router.get('/', indexController.index);

router.get('/cart', cartConctroller.mostraCarrinho);

router.get('/login', userController.login);

router.get('/registrate', userController.registrate)

router.get('/checkout/order', indexController.order);

router.get('/checkout/order-finished', indexController.onderFinished);

router.get('/privacy-policy', indexController.privacyPolicy);

module.exports = router;




