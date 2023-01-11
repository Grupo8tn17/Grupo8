var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');
<<<<<<< HEAD
=======
const cartConctroller = require('../controllers/cartController');
>>>>>>> dev-danieli


router.get('/', indexController.index);

<<<<<<< HEAD
router.get('/login', userController.login);

=======
router.get('/cart', cartConctroller.mostraCarrinho);

router.get('/login', userController.login);

router.get('/registrate', userController.registrate)

router.get('/checkout/order', indexController.order);

router.get('/checkout/order-finished', indexController.onderFinished);

router.get('/privacy-policy', indexController.privacyPolicy);

>>>>>>> dev-danieli
module.exports = router;




