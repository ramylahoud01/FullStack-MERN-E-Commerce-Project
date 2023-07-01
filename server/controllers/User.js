import User from "../model/User.js";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
export const SignupController = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      const validationErrors = errors.array().map(error => error.msg); 
      const error = new Error(`${validationErrors}`);
      error.statusCode = 422
      res.status(404).json({ message: error.message });
      throw error;
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const confirmPassword = req.body.confirmPassword;
    let passhashed;

    bcrypt.hash(password,12).then(passHashed =>{
        passhashed=passHashed;
        return bcrypt.hash(confirmPassword,12)
    }).then(confirmpasshashed =>{
        const user = new User({
            email:email,
            password:passhashed,
            confirmPassword:confirmpasshashed,
            name:name
        })
        return user.save()
    }).then(user =>{
        res.status(201).json({email:user.email,id:user._id,creator:user.name})
    }).catch(err =>{
        next(err)
    })
}

export const SigninController = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error('Validation Failed');
        error.statusCode = 404
        throw error
    }
    let loadedUser;
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          const error = new Error('Cannot find Email');
          error.statusCode = 422;
          res.status(422).json({ message: error.message });
          throw error;
        }
        loadedUser = user;
        return bcrypt.compare(password, user.password);
      })
      .then(equal => {
        if (!equal) {
          const error = new Error("Check you're password");
          error.statusCode = 404;
          res.status(404).json({ message: error.message });
          throw error;
        }
        const token = jwt.sign(
          {
            email: loadedUser.email,
            id: loadedUser._id.toString()
          },
          'Somesupersecret',
          { expiresIn: '1h' }
        );
  
        res.status(200).json({ token: token, id: loadedUser._id });
      })
      .catch(err => {
        next(err);
      });
  };
  