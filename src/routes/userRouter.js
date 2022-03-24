const express = require("express");
const router = express.Router();
const user_controller = require('../controllers/userController');
const bodyParser = require('body-parser');
const url_encoded = bodyParser.urlencoded({extended: false});
  



router.post('/user',url_encoded, user_controller.createUser)

  router.get('/', function (req, res) {
    res.send('GET request to homepage')
  })

module.exports = router;