const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const upload = require('../middleware/upload-img');
const adminFormValidation = require('../middleware/admin-form-validation');


router.get('/', adminController.indexAdmin);//home admin

router.get('/products', adminController.adminProducts);//listar produtos
router.get('/add', adminController.addProducts);//view adicionar novo produto
router.post('/create', upload.array("imagem", 3), adminFormValidation, adminController.createProducts);//cria novo protudo
router.get('/update/:id', adminController.updateProducts);
router.put('/update/:id', adminController.update)
router.get('/delete/:id', adminController.deleteView);
router.delete('/delete/:id', adminController.deleteProducts);

router.get('/categorias', adminController.adminCategorias);
router.get('/categorias/add', adminController.addCategoria);
router.post('/categorias/create', adminController.createCategoria);
router.get('/categorias/update/:id', adminController.updateCategoriaView);
router.put('/categorias/update/:id', adminController.updateCategoria);
router.delete('/categorias/delete/:id', adminController.deleteCategoria);

router.get('/marcas', adminController.adminMarcas);
router.get('/marcas/add', adminController.addMarcas);
router.post('/marcas/create', adminController.createMarcas);
router.get('/marcas/update/:id', adminController.updateMarcasView);
router.put('/marcas/update/:id', adminController.updateMarcas);
router.delete('/marcas/delete/:id', adminController.deleteMarcas);


module.exports = router;