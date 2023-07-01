import React from 'react'
import { json } from 'react-router-dom'
import SousCategory from '../components/SousCategory/SousCategory'
import Footer from '../components/footer/Footer'

function SousCategoryPage() {
  return (
    <>
    <SousCategory />
    <Footer/>
    </>
  )
}

export default SousCategoryPage

export async function loader({request,params}){
    const category = params.category;
    const sousCategorie =params.sousCategorie;
    const response = await fetch(`http://localhost:8000/posts/${category}/${sousCategorie}`)
    const responseData =  response.json();
    if(response.status === 404)
    {
      throw json({data:{message:"Page not Found",title:"Not Founded"}},{status:404})
    }
   return responseData
  }