const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const upload = require('../middleware/upload-img')

router.get('/', adminController.indexAdmin);

router.get('/products', adminController.adminProducts);

router.get('/add', adminController.addProducts);

router.post('/create',upload.array("images", 3),  adminController.createProducts);

module.exports = router;