const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const marcaController = require('../controllers/marcaController');
const categoriaController = require('../controllers/categoriaController');
const produtoController = require('../controllers/produtoController');
const usuarioController = require('../controllers/usuarioController');
const upload = require('../middleware/upload-img');
const validacaoFormularioAdmin = require('../middleware/validacao-formulario-admin');


router.get('/', adminController.mostraAdmin);
router.post('/', adminController.logarAdmin);

router.get('/login', adminController.loginAdmin);


router.get('/produtos', produtoController.mostraProdutosAdmin);

router.get('/adiciona', produtoController.adicionaProduto);

router.get('/excluir/:id', produtoController.mostraExcluirProduto);

router.post('/adiciona', upload.array("imagem", 3), validacaoFormularioAdmin, produtoController.criaProdutos);
router.get('/editar/:id', produtoController.mostraeditarProduto);
router.put('/editar/:id', upload.array("imagem", 3), produtoController.editarProduto);
router.get('/excluir/:id', produtoController.mostraExcluirProduto);
router.delete('/excluir/:id', produtoController.excluirProduto);


//router.get('/editar/:id', produtoController.mostraeditarProduto);
//router.put('/editar/:id', produtoController.editarProduto);

router.get('/categorias', categoriaController.mostraCategoria);
router.get('/categorias/formulario', categoriaController.formularioCategoria);
router.post('/categorias/adiciona', categoriaController.adicionaCategoria);
router.get('/categorias/editar/:id', categoriaController.formularioEditarCategoria);
router.put('/categorias/editar/:id', categoriaController.editarCategoria);
router.delete('/categorias/excluir/:id', categoriaController.excluirCategoria);

router.get('/marcas', marcaController.mostarMarca);
router.get('/marcas/formulario', marcaController.formularioMarca);
router.post('/marcas/adiciona', marcaController.adicionaMarca);
router.get('/marcas/editar/:id', marcaController.formularioEditaMarca);
router.put('/marcas/editar/:id', marcaController.editarMarca);
router.delete('/marcas/excluir/:id', marcaController.excluirMarca);

router.get('/usuarios', usuarioController.mostraUsuarioAdmin);
router.get('/usuarios/formulario', usuarioController.formularioUsuarioAdmin);
router.post('/usuarios/adiciona', usuarioController.adicionaUsuarioAdmin);
router.get('/usuarios/editar/:id', usuarioController.formularioEditarUsuarioAdmin);
router.put('/usuarios/editar/:id', usuarioController.editarUsuarioAdmin);
router.delete('/usuarios/excluir/:id', usuarioController.excluirUsuarioAdmin);

module.exports = router;
