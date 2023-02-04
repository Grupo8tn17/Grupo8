var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.listProducts);

router.get('/description/:id', productsController.descriptionProduct)

module.exports = router;