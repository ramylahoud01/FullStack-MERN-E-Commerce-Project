import React from 'react'
import Cart from '../components/Cart/Cart'
import { json, redirect } from 'react-router-dom'

import { tokenLoader } from '../components/util/auth'
function CartPage() {
  return (
  <Cart />
  )
}

export default CartPage

export async function loader ({request,params}){
   const token = await tokenLoader()
   if(!token){
    return redirect('/account/signin')
   }
    const response = await fetch('http://localhost:8000/cart/content',{
        headers: {
          'Authorization': `Bearer `+token,
          'Content-Type': 'application/json',
        }})
    const responseData =  response.json();
    if(response.status === 404)
    {
      throw json({data:{message:"Page not Found",title:"Not Founded"}},{status:404})
    }
   return responseData
} 