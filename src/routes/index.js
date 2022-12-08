var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');


router.get('/', indexController.index);

router.get('/login', userController.login);

module.exports = router;




