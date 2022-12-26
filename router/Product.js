
const express = require('express')
//const router = express()
const router = express.Router()

   var controller = require('../controller/product.js')

router.get('/product',controller.product);

   module.exports = router;