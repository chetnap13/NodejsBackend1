var express = require('express')
const router = express.Router();

expressValidator = require('express-validator')
var noteController = require('../controller/user.controller')
router.use(expressValidator());

router.post('/create',noteController.createUser)
module.exports=router