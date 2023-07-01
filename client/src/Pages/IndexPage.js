import React from 'react'
import Index from '../components/Home/Index'

function IndexPage() {
  return (
    <Index />
  )
}

export default IndexPage

export async function loader({request,params}){
  
    const response1 = await fetch('http://localhost:8000/posts/newArrival/Collection');
    const data1 = await response1.json()
    const response2 = await fetch('http://localhost:8000/posts/pages/Brands')
    const data2 = await response2.json();
    const response3 = await fetch('http://localhost:8000/posts/summer/collection')
    const data3 = await response3.json();
    
    const data = {
      data1:data1,
      data2:data2,
      data3:data3
    }
    return data 
}