const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')
const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    }

}, {timestamps:true});

userSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err){
                next(err);
        }
        user.password = hash;
        next();
      });   
})
userSchema.methods.comparePassword = function(password, callback){
    const user = this;
    bcrypt.compare(password, user.password, (err, isMatch)=>{
        if(err){
            return callback(err, isMatch)
        }
        callback(null, isMatch);
    })
}
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);