const User = require('../models/user');

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
                        res.status(200).cookie('auth', person.token).json({
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


