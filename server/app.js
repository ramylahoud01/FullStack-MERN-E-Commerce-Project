import express from "express";
import bodyParser from "body-parser";
import  UserRoute from "./routes/User.js";
import mongoose from "mongoose";
import Postroute  from "./routes/Post.js";
import CartRoute from "./routes/Cart.js";
import StripeRoute from "./routes/Stripe.js";
const app = express();
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-type , Authorization')
    next();
})

//app.use('/image',express.static(path.join(__dirname,'image')))
app.use(UserRoute);
app.use(Postroute);
app.use(CartRoute);
app.use(StripeRoute);
app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message:message})
})
mongoose.connect('').then(()=>{
    console.log('Connected...')
    app.listen(8000)
}).catch(err =>{
    console.log(err)
})
