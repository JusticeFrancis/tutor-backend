const express = require("express");
const router = express.Router();
const user_controller = require('../controllers/userController');
const bodyParser = require('body-parser');
const url_encoded = bodyParser.urlencoded({extended: false});
  



router.post('/users',url_encoded, user_controller.createUser)
router.get('/users',user_controller.getAllUsers)

module.exports = router;