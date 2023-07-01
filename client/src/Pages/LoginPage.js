import React from 'react'
import Signin from '../components/Account/Signin'
import { redirect } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { Stack } from '@mui/material'
function LoginPage() {
  return (
    <>
    <Signin />
    <Stack position={'absolute'} bottom={'0px'} width={'100%'}>
    <Footer/>
    </Stack>
    </>
  )
}

export default LoginPage
export async function Action({ request }) {
      const data = await request.formData();
      const AuthData = {
        email: data.get('email'),
        password: data.get('password')
      };
  
      const response = await fetch('http://localhost:8000/Signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: AuthData.email,
          password: AuthData.password,
        }),
      })
      const responseData = await response.json();
      

      localStorage.setItem('UserId',responseData.id)
       const token =responseData.token
       localStorage.setItem('token',token)
      const experation = new Date();
      experation.setHours(experation.getHours()+1);
      localStorage.setItem('experation',experation.toISOString())

      if (response.status === 422) {
        console.log(responseData)
        return responseData;
      }
      if(!response.ok){
        return responseData;
      }
      return redirect('/');
      
  }