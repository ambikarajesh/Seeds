const User = require('../models/user');
module.exports = (req, res, next) => {
   User.verifyToken(req.cookies['auth'], (err, user)=>{
       if(!user){       
           // no token, request to logout    
            const error = new Error("Unauthorized User");
            error.success = false;
            error.statusCode = 401;
            return next(error);
       }
        User.findById({_id:user.userId, token:req.cookies['auth']}).then(person=>{
            if(!person){
                const error = new Error("Unauthorized User");
                error.success = false;
                error.statusCode = 401;
                return next(error);
            }
            req.user = person;
            req.token = req.cookies['auth'];
            return next();
        })
    })  
}