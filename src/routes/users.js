var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/user-panel', userController.userPanel);


module.exports = router;
