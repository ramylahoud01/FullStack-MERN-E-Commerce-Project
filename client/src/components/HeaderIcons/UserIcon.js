import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Form, Link } from 'react-router-dom';
import {  Tooltip,Button } from '@mui/material';
import { useRouteLoaderData } from 'react-router-dom';
function UserIcon() {
  const token =useRouteLoaderData('root');
  return (
    <>
      {!token && <Tooltip title='Loggin' arrow>
         <Link to={'/account/signin'}><PersonIcon sx={{color:'white',fontSize:{sm:'25px'},marginRight:{xs:'10px'}}} /></Link>
      </Tooltip>}
      {token && 
      <Form action='/logout' method='Post' >
      <Button type='submit'><LogoutIcon sx={{color:'white',fontSize:{sm:'25px'},position:{xs:'absolute'},right:{xs:'8px'}}}/></Button>
      </Form>
      }
    </>
  )
    }
export default UserIcon