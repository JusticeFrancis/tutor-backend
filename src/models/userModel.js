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
        index :{
            unique : true,
        },
    },
    phone: {
        type : String,
        unique : true
    },
    password: String,
    ref_code: String,
    role: {
        type : Number,
    }
   
    
    
})

/* userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
 */




module.exports = mongoose.model("user", userSchema)