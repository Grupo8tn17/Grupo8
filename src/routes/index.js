var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');
<<<<<<< HEAD
const cartConctroller = require('../controllers/cartController');
=======
>>>>>>> 815320044c41239ed604b605f56f564f1938137a


router.get('/', indexController.index);

<<<<<<< HEAD
router.get('/cart', cartConctroller.mostraCarrinho);

router.get('/login', userController.login);

router.get('/registrate', userController.registrate)

router.get('/checkout/order', indexController.order);

router.get('/checkout/order-finished', indexController.onderFinished);

router.get('/privacy-policy', indexController.privacyPolicy);

=======
router.get('/login', userController.login);

>>>>>>> 815320044c41239ed604b605f56f564f1938137a
module.exports = router;




