const axios = require('axios');
const User = require('../models/user');
const dotenv = require('dotenv');
dotenv.config();

exports.postRegister = (req, res, next)=>{
    const user = new User(req.body);
    user.save().then(result =>{        
        res.status(201).json({           
            success:true,
            message:'User Registered Successfully',
            user:result
        })
    }).catch(err=>{        
        if(!err.statusCode){
            if(err.name) return res.status(422).json({
                                success:false,
                                message:'Email Already Exists',
                                error:err
                            })
            err.success = false,
            err.message = 'Internal Server Error',            
            err.statusCode = 500
        }
        next(err);
    })

}


exports.postLogin = (req, res, next) =>{
    User.findOne({email:req.body.email}).then(user=>{
            if(!user){
                const error = new Error('Invalid User!!!');
                error.success = false;
                error.statusCode = 401;
                next(error);
            }
            user.comparePassword(req.body.password, (err, isMatch)=>{ 
                if(!isMatch){
                    const error = new Error('Invalid Password!!!');
                    error.success = false;
                    error.statusCode = 401;
                    return next(error);
                }
                user.generateToken((err, person)=>{
                       if(!person){
                            const error = new Error('Failed to Gererate Token');
                            error.success = false;
                            error.status = 401;
                            return next(error);
                        } 
                                             
                        res.status(200).cookie('auth', person.token).cookie('userId', person._id).json({
                            success : true,
                            message:'Logged Successfully!!!',
                            user:person
                        })
                })
                
            });
            
            
    }).catch(err=>{
        if(!err.statusCode){
            err.message = 'Internal Server Error';
            err.success = false;
            err.statusCode = 500;            
        }
        next(err);
    })
}


exports.getLogout = (req, res, next) => {
    User.findById({_id:req.user._id}).then(user=>{
        if(!user){
            const error = new Error('No user Found');
            error.success = false;
            error.statusCode = 401;
            return next(error);
        }
        user.token = '';
        user.save().then(()=>{
            res.clearCookie('auth').clearCookie('userId').status(200).json({
                success:true,
                message:'Successfully Logout!!!'
            })
        })
    })

    

}

exports.postFaceBookLogin = (req, res, next) => {
    axios.get(`https://graph.facebook.com/me?access_token=${req.body.accessToken}&fields=email%2Cname%2Cid%2Cfirst_name%2Clast_name%2Cpicture&method=get&pretty=0&sdk=joey&suppress_http_code=1`).then(response=>{
        if(response.data.id === req.body.userId){
            User.findOne({email:response.data.email}).then(user=>{
            if(!user){
                    //register new user
                    const newuser = new User({firstname:response.data.first_name, lastname:response.data.last_name, email:response.data.email, password:response.data.id});
                    newuser.save().then(result =>{        
                        result.generateToken((err, person)=>{
                        if(!person){
                                const error = new Error('Failed to Gererate Token');
                                error.success = false;
                                error.status = 401;
                                return next(error);
                            }                                              
                            res.status(200).cookie('auth', person.token).cookie('userId', person._id).json({
                                success : true,
                                message:'Successfully Logged In using Facebook!!!',
                                user:person
                            })
                        })
                    }).catch(err=>{
                        console.log(err)
                    })
                }
                user.generateToken((err, person)=>{
                    if(!person){
                        const error = new Error('Failed to Gererate Token');
                        error.success = false;
                        error.status = 401;
                        return next(error);
                    }                                              
                    res.status(200).cookie('auth', person.token).cookie('userId', person._id).json({
                        success : true,
                        message:'Successfully Logged In using Facebook!!!',
                        user:person
                    })
                })
            })           
        }
    }).catch(err=>{
        if(!err.statusCode){
            err.message = 'Internal Server Error';
            err.success = false;
            err.statusCode = 500;            
        }
        next(err);
    })

    
}

exports.postGoogleLogin = (req, res, next) => {
    axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.idToken}`).then(response=>{
        if(response.data.sub === req.body.userId && process.env.GOOGLE_CLIENT_ID === response.data.aud){
            User.findOne({email:response.data.email}).then(user=>{
                if(!user){
                    //register new user
                    const newuser = new User({firstname:response.data.given_name, lastname:response.data.family_name, email:response.data.email, password:response.data.sub});
                    newuser.save().then(result =>{        
                        result.generateToken((err, person)=>{
                        if(!person){
                                const error = new Error('Failed to Gererate Token');
                                error.success = false;
                                error.status = 401;
                                return next(error);
                            }                                              
                            res.status(200).cookie('auth', person.token).cookie('userId', person._id).json({
                                success : true,
                                message:'Successfully Logged In using Facebook!!!',
                                user:person
                            })
                        })
                    }).catch(err=>{
                        console.log(err)
                    })
                }
                user.generateToken((err, person)=>{
                    if(!person){
                        const error = new Error('Failed to Gererate Token');
                        error.success = false;
                        error.status = 401;
                        return next(error);
                    }                                              
                    res.status(200).cookie('auth', person.token).cookie('userId', person._id).json({
                        success : true,
                        message:'Successfully Logged In using Google!!!',
                        user:person
                    })
                })
            }) 
        }
    }).catch(err=>{
        if(!err.statusCode){
            err.message = 'Internal Server Error';
            err.success = false;
            err.statusCode = 500;            
        }
        next(err);
    })
}