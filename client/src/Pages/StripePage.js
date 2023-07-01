import React from 'react'
import StripeContainer from '../components/Stripe/StripeContainer'
import { tokenLoader } from '../components/util/auth'
function StripePage() {
  return (
    <StripeContainer />
  )
}

export default StripePage

export async function loader({req}){
    const token = await tokenLoader()
    const response = await fetch('http://localhost:8000/cart/content',{
        headers:{
        'Authorization': `Bearer `+token,
        'Content-Type': 'application/json',
        }
    })
   const responsejson = await response.json()
   return responsejson
}