const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')


router.get('/', adminController.indexAdmin);

router.get('/products', adminController.adminProducts);

router.get('/add', adminController.addProducts);

router.post('/create', adminController.createProducts);

module.exports = router;