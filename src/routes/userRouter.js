const express = require("express");
const router = express.Router();
const user_controller = require('../controllers/userController');
const bodyParser = require('body-parser');
const userModel = require("../models/userModel");
const url_encoded = bodyParser.urlencoded({extended: false});
  



router.post('/users',url_encoded, user_controller.createUser)
router.get('/users',user_controller.getAllUsers)
router.get('/users/:id',user_controller.getUser,(req,res) =>{
  res.send(res.json(res.user))
})
/* router.post('/users/:id',user_controller.getUser,user_controller.updateUser) */





module.exports = router;