const express = require('express');
const dotenv = require('dotenv');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
mongoose.connect(encodeURI(process.env.MONGODB_URI)).then(result=>{
    app.listen(PORT, ()=>{
        console.log(`Server start at ${PORT}`);
    })
}).catch(err=> console.log(err))
