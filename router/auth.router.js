
const express = require('express')
//const router = express()
const router = express.Router()

   var controller = require('../controller/auth.controller')
 
router.get('/login', controller.login);

module.exports = router;
router.post('/login',controller.postLogin)