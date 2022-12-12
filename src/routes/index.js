var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');


router.get('/', indexController.index);

router.get('/login', userController.login);

router.get('/registrate', userController.registrate)

router.get('/checkout/order', indexController.order);

router.get('/checkout/order-finished', indexController.onderFinished);

router.get('/privacy-policy', indexController.privacyPolicy);

module.exports = router;




