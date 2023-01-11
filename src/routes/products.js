var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.listProducts);

<<<<<<< HEAD


=======
router.get('/description/:id', productsController.descriptionProduct)
>>>>>>> dev-danieli

module.exports = router;