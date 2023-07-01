import express  from "express";
const CartRoute = express.Router()
import {isAuth} from "../middleware/is-auth.js";
import { AddToCart ,getUserCart,deleteItemFromCart,deleteAllItemFromCart} from "../controllers/Cart.js";
import {body} from 'express-validator'
CartRoute.post('/cart',[
    body('values').not().isEmpty().withMessage("You must enter a size")
],isAuth,AddToCart)
CartRoute.get('/cart/content',isAuth,getUserCart);
CartRoute.delete('/cart/delete/:Cartid',isAuth,deleteItemFromCart)
CartRoute.delete('/cart/deleteAll',isAuth,deleteAllItemFromCart)
export default CartRoute