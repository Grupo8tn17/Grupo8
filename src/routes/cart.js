const express = require('express')
const cartController = require('../controllers/cartController')
const router = express.Router()


router.get('/', cartController.mostraCarrinho)

module.exports = router