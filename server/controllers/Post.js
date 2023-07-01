import { validationResult } from "express-validator";
import Post from "../model/Post.js";
import User from "../model/User.js";


export const createnewPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const price = req.body.price;
    const sousCategorie = req.body.sousCategorie;
    const values = req.body.values; // Assuming values is an array in the request body
    const onSale = req.body.onSale; // Assuming onSale is a string in the request body
  
    if (req.Userid !== '647cf3686eb6b5de7c9df14d') {
      const error = new Error('Only admin can post');
      error.statusCode = 404;
      throw error;
    }
  
    const post = new Post({
      title: title,
      content: content,
      category: category,
      imageUrl: req.file.path,
      price: price,
      sousCategorie: sousCategorie,
      values: values, // Assign the array of values to the post object
      onSale: onSale, // Assign the onSale value to the post object
      creator: req.Userid,
    });
  
    post
      .save()
      .then((post) => {
        if (!post) {
          const error = new Error('Error creating the post');
          error.statusCode = 404;
          throw error;
        }
        res.status(201).json({ post: post });
      })
      .catch((err) => {
        next(err);
      });
  };
  
  
export const getPostByCategory = (req, res, next) => {
    const category = req.params.category;
    const sousCategorie = req.params.sousCategorie;
  
     Post.find({ category: category, sousCategorie: sousCategorie })
      .then(data => {
        if (data.length === 0) {
          const error = new Error(`Cannot find posts with category '${category}' and sousCategory '${sousCategorie}'`);
          error.statusCode = 404;
          throw error;
        }
        res.json({ data: data });
      })
      .catch(error => {
        next(error);
      });
  };

export const getPostbById =(req,res,next)=>{
    const id = req.params.id;
    Post.findById(id).then(post =>{
        if(!post){
            const error = new Error('Cannot find posts');
            error.statusCode = 404;
            throw error;
        }
        res.status(201).json({post:post})
    }).catch(err =>{
        next(err)
    })
}

  
  /*
export const getAllpost =(req,res,next)=>{
    Post.find().then(posts =>{
        if(!posts){
            const error = new Error('Could not find posts');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({posts:posts})
    }).catch(err =>{
        next(err)
    })
}

export const createPost = (req,res,next) =>{
    console.log(req.file)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      const error = new Error('Validation failedd');
      error.statusCode =422;
      throw error
    }
    const title = req.body.title;
    const content = req.body.content;
    let postLoded;
    const post = new Post ({
        title:title,
        content:content,
        creator:req.Userid,
        imageUrl:req.file.path
    })

    post.save()
    .then((post)=>{
        postLoded=post
        return User.findById(req.Userid)
    })
    .then(user =>{
        if(!user){
            const error = new Error('Could not find user');
            error.statusCode = 404;
            throw error;
        }
         user.posts.push(postLoded._id);
         return user.save()
    }).then(() =>{
        res.status(200).json({posts:postLoded})
    })
    .catch((err)=>{
        next(err)
    })
}

export const getSinglePost = (req,res,next)=>{
    const id = req.params.postId;

    Post.findById(id).then((post)=>{
        if(!post){
            const error = new Error('Could not find post');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({post:post})
    }).catch(err =>{
        if(!err.statusCode){
            statusCode = 500 
        }
        next(err)
    })
}

export const updatePost = (req,res,next)=>{
    const id = req.params.postId;
    const title = req.body.title;
    const content = req.body.content;
    const imageUrl = req.body.imageUrl;
    const errors =  validationResult(req);

    if(!errors.isEmpty()){
        const error = new Error('Validation error');
        error.statusCode = 422;
        throw error
    }
    Post.findById(id)
    .then(post =>{
        if(!post){
            const error = new Error('Could not find post');
            error.statusCode = 404;
            throw error
        }
        post.title = title;
        post.content= content;
        post.imageUrl = imageUrl;
        return post.save()
    }).then(postupdated =>{
        res.status(200).json({message:"PostUpdated",post:postupdated})
    })
    .catch(err =>{
        if(!err.statusCode){
            statusCode = 500
        }
        next(err)
    })
}

export const deletePost = (req,res,next) =>{
    const id = req.params.postId;
    Post.findById(id).then(post =>{
        if(!post){
            const error = new Error('Cannot find post');
            error.statusCode = 404;
            throw error
        }
        return Post.findByIdAndRemove(id)
    }).then((res) =>{
        return User.findById(req.Userid)
    }).then(user =>{
        user.posts.pull(id);
        return user.save()
    }).then(()=>{
        res.status(200).json({message:"Deleted"})
    })
}
*/
//647b000b73dd87e349729f05