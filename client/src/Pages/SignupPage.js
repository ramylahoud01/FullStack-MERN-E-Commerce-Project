import React from 'react'
import Signup from '../components/Account/Signup'
import { redirect } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { Stack,Box } from '@mui/material';

function SignupPage() {
  return (
  <>
    <Box height={'500px'} >
    <Signup />
    </Box>
    <Stack  bottom={'0px'} width={'100%'}>
     <Footer/>
    </Stack>
  </>
  )
}

export default SignupPage


export async function Action({ request }) {
  const data = await request.formData();
  const AuthData = {
    email: data.get('email'),
    password: data.get('password'),
    confirmPassword:data.get('confirmPassword'),
    name:data.get('name')
  };

  const response = await fetch('http://localhost:8000/Signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: AuthData.email,
      password: AuthData.password,
      confirmPassword:AuthData.confirmPassword,
      name:AuthData.name
    }),
  })
  const responseData = await response.json();
  
  if (response.status === 422) {
    return responseData;
  }
  if(!response.ok){
    return responseData;
  }
  return redirect('/');

  }
