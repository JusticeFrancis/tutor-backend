const mongoose = require('mongoose')

/* const role = {
    admin : 1,
    agent : 2,
    tutor : 3,
    student : 4,
} */


const userSchema = new mongoose.Schema({
    full_name : {
        type : String, 
        required : true,
    },
    user_name:  {
        type : String, 
        required : true,
        unique : true,
        
    },
    email: {
        type : String,
    },
    phone: {
        type : String,
    },
    password: String,
    ref_code: String,
    role: {
        type : Number,
    }
   
    
    
})







module.exports = mongoose.model("user", userSchema)