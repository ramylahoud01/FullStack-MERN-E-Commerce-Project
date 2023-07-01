import express from "express";
const Postroute = express.Router();
import {body} from 'express-validator'
import {isAuth} from "../middleware/is-auth.js";
import multer from "multer";
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const filterFile = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
const upload = multer({storage:storage,fileFilter:filterFile})
import { /*createPost,getSinglePost ,updatePost,deletePost,getAllpost,*/createnewPost,getPostByCategory,getPostbById} from "../controllers/Post.js";
/*
Postroute.get('/post',isAuth,getAllpost);

Postroute.post('/posts',isAuth,[
    body('title').trim().isLength({min:5}).not().isEmpty().withMessage('Name must have more than 5 characters'),
    body('content').trim().isLength({min:5}).not().isEmpty().withMessage('Name must have more than 5 characters'),
],upload.single('productImage'),createPost);

Postroute.get('/post/:postId',isAuth,getSinglePost)
Postroute.put('/update/:postId',isAuth,[
    body('title').trim().isLength({min:5}).not().isEmpty().withMessage('Name must have more than 5 characters'),
    body('content').trim().isLength({min:5}).not().isEmpty().withMessage('Name must have more than 5 characters'),
],updatePost);

Postroute.delete('/delete/:postId',isAuth,deletePost)
*/

Postroute.post('/posts',isAuth,upload.single('productImage'),createnewPost)
Postroute.get('/posts/:category/:sousCategorie',getPostByCategory)
Postroute.get('/post/:id',getPostbById)
export default Postroute