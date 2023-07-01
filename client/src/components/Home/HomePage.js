import React, { useEffect, } from 'react'
import Layout from '../layout/layout'
import { Outlet ,useLoaderData,useSubmit} from 'react-router-dom'
import { getTokenDuration } from '../util/auth'

function HomePage(props) {
  const submit = useSubmit()
  const token = useLoaderData()
  useEffect(()=>{
    if(!token){
      return
    }
    if(token === 'Expired'){
      submit(null,{action:'/logout',method:"POST"})
      return ;
    }
    const tokenduration = getTokenDuration()
    setTimeout(()=>{
      submit(null,{action:'/logout',method:"POST"})
    },tokenduration)
  },[token,submit])

  return (
    <Layout > 
     <Outlet /> 
    </Layout>
  )
}

export default HomePage