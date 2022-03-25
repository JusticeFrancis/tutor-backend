const User = require('../models/userModel')
const express = require('express');  
const { db } = require('../models/userModel');
const res = require('express/lib/response');





exports.createUser = async  function createUser(req, res){

   
    const user = new User({
            full_name : req.body.full_name,
            user_name : req.body.user_name,
            email : req.body.email || "",
            phone : req.body.phone || "",
            password : req.body.password,
            ref_code : req.body.ref_code || null,
            role : req.body.ref_code,
    
        
    })
    
    if (user.email  == '' &&  user.phone == '') {
        res.status(500).json({
            'message' : 'user email and phone number cannot be empty'
        })
    }
    try{
        const newUser = await user.save()
        res.status(201).json({newUser})
        console.log(newUser)
    } catch(err){
        res.status(400).json({message : err.message})
        console.log(req.body)
    }
    
}


exports.getAllUsers = async function getAllUsers(req,res) {
    const users = await User.find()
    if(users.length < 1){
        res.send('no registered user yet')
        return
    }
    try{
      res.status(201).json({users})
      console.log(users)
    }catch(err){
      res.status(500).json({message : err.message})
      console.log(users)
    }
}

exports.getUser = async function getUser(req,res,next){
    let user 
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({
                message : 'user not found'
            })
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({message : err.message})
    }

    res.user = user
    next()
}


/* exports.updateUser = async function updateUser(req, res) {
   res.json(req)
    
} */




