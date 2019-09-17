const express = require('express');
const dotenv = require('dotenv');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user');

dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/product', (req, res)=>{
    res.status(200).json({
        name:'Ambika'
    })
});
app.use('/api/user', userRouter);
app.use((error, req, res, next)=>{
    res.status(error.statusCode).json({
        status:error.success,
        message:error.message
    })
})
mongoose.connect(encodeURI(process.env.MONGODB_URI)).then(result=>{
    app.listen(PORT, ()=>{
        console.log(`Server start at ${PORT}`);
    })
}).catch(err=> console.log(err))
