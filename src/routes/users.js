var express = require('express');
var router = express.Router();
<<<<<<< HEAD

=======
const userController = require('../controllers/userController')

router.get('/user-panel', userController.userPanel);
>>>>>>> dev-danieli

module.exports = router;
