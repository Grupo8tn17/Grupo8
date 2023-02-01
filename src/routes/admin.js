const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

//importando arquivo middleware de validação de form
const adminFormValidation = require('../middlewares/admin-form-validation');

router.get('/', adminController.indexAdmin);
router.get('/products', adminController.adminProducts);

router.get('/add', adminController.addProducts);
router.post('/create', adminController.createProducts);

router.get('/delete/:id', adminController.deleteView);
router.delete('/delete/:id', adminController.deleteProducts);

router.get('/update/:id', adminController.updateProducts);
router.put('/update/:id', adminController.update)


module.exports = router;