const User = require('../models/userModel')
const express = require('express');  





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



