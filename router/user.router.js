
const express = require('express')
//const router = express()
const router = express.Router()

   var controller = require('../controller/controller.js')
router.get('/', controller.index);

router.get('/search',controller.search)
router.get('/create',controller.create );
router.post('/create', controller.createUser);


module.exports = router;