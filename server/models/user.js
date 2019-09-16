const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Schema = mongoose.Schema;
dotenv.config();
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
    if(user.isModified('password')){
        bcrypt.hash(user.password, 10, function(err, hash) {
            if(err){
                    next(err);
            }
            user.password = hash;
            next();
        });
    }else{
        next();
    }    
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
userSchema.methods.generateToken = function(callback){
    const user = this;
    const token = jwt.sign({password:user.password, userId:user._id}, process.env.SECRETTOKEN);
    user.token = token;
    user.save().then((person)=>{
        callback(null, person);
    }).catch((err)=>{
        callback(err);
    })
}
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);