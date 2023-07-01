import Cart from "../model/Cart.js";
import User from "../model/User.js";
import { validationResult } from "express-validator";
export const AddToCart = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const price = req.body.price;
    const sousCategorie = req.body.sousCategorie;
    const values = req.body.values;
    const onSale = req.body.onSale;
    const imageUrl = req.body.imageUrl;
    const quantity = req.body.quantity;
    const creator = req.Userid;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      const validationErrors = errors.array().map(error => error.msg); 
      const error = new Error(`${validationErrors}`);
      error.statusCode = 422
      res.status(404).json({ message: error.message });
      throw error;
    }
    Cart.findOne({
      title: title,
      values:values,
      creator: creator
    })
      .then((cart) => {
        if (cart) {
          cart.quantity += quantity;
          return cart.save();
        } else {
          const newCart = new Cart({
            title: title,
            content: content,
            category: category,
            price: price,
            sousCategorie: sousCategorie,
            values: values,
            onSale: onSale,
            imageUrl: imageUrl,
            quantity: quantity,
            creator: creator
          });
          return newCart.save();
        }
      })
      .then((cartcontent) => {
        res.status(201).json({ cartcontent: cartcontent });
      })
      .catch((err) => {
        next(err);
      });
  };
  

export const getUserCart = (req, res, next) => {
    const userId = req.Userid
    Cart.find({ creator: userId })
      .then(cartContent => {
        res.status(200).json({ cartContent: cartContent });
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  };
  
  export const deleteItemFromCart = (req,res,next) =>{
    const id = req.params.Cartid;
    const userId = req.Userid;

    User.findById(userId).then(user =>{
        if(!user){
            const error = new Error('Cannot find user');
            error.statusCode = 404;
            throw error;
        }
        return Cart.findById(id)
    }).then(cart =>{
        if(!cart){
            const error = new Error("not find the id");
            error.statusCode = 422;
            throw error
        }
        return Cart.findByIdAndRemove(id)
    }).then(()=>{
        res.status(200).json({message:"Deleted"})
    }).catch(err =>{
        next(err)
    })
  }

export const deleteAllItemFromCart =(req,res,next)=>{
  const userId = req.Userid;
  User.findById(userId).then(user =>{
    if(!user){
      const error = new Error('Cannot find user');
      error.statusCode = 404;
      throw error;
    }
  })
  return Cart.find({creator:userId})
  .then(cart =>{
    if(!cart){
      const error = new Error('Cannot find cart');
      error.statusCode = 404;
      throw error;
    }
    return Cart.deleteMany({creator:userId})
  }).then(()=>{
    res.json({message:"All CartItem deleted"})
  })
  .catch(err =>{
    next(err)
  })
}