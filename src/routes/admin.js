const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//importando arquivo middleware de validação de form
const adminFormValidation = require('../middlewares/admin-form-validation');


router.get('/', adminController.indexAdmin);

router.get('/products', adminController.adminProducts);

router.get('/add', adminController.addProducts);

//inserindo o arquivo middleware entre a rota e o controlador:
router.post('/create', adminFormValidation, adminController.createProducts);

module.exports = router;