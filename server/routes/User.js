import express  from "express";
import {body} from 'express-validator'
const route = express.Router();
import { SignupController,SigninController } from "../controllers/User.js";
import User from "../model/User.js";
//localhost:8000/Signup
route.post('/Signup',[
    body('email')
    .not().isEmpty().withMessage('Email cannot be Empty').bail().isEmail().withMessage('You must Enter a valid Email')
    .custom((value,{req})=>{
        return User.findOne({email:value})
        .then(userdoc =>{
            if(userdoc){
                const error = new Error('Email already Excist');
                error.statusCode = 422;
                throw error
            }
            return true;
        }).catch(err =>{
            next(err)
        })
    }).withMessage('Email already Excist')
    .normalizeEmail(),
    body('password').trim().not().isEmpty().withMessage('Password cannot be Empty').bail().isLength({min:5}).withMessage('Password Should be Greater than 5 letter'),
    body('confirmPassword').trim().not().isEmpty().withMessage('ConfirmPassword cannot be Empty').bail().isLength({min:5}).withMessage('ConfirmPassword Should be Greater than 5 letter')
    .custom((value,{req})=>{
        if(value !== req.body.password){
            throw new Error('Password confirmation does not match with password')
        }
        return true;
    }).withMessage("The passwords do not match"),
    body('name').trim().not().isEmpty().withMessage('Name cannot be empty')
],SignupController);


route.post('/Signin',[
    body('email').not().isEmpty().withMessage("You must Enter an email"),
],SigninController);

export default route