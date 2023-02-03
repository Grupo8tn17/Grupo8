var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.listProducts);

<<<<<<< HEAD
router.get('/description/:id', productsController.descriptionProduct)
=======


>>>>>>> 815320044c41239ed604b605f56f564f1938137a

module.exports = router;