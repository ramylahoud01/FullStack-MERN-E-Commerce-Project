import { Button } from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import React from 'react'
import { Link } from 'react-router-dom';
function LogoIcon() {
  return (
    <Link to="/">
        <Button startIcon={<ShoppingCartCheckoutIcon fontSize='25px'/>} sx={{color:"white",fontSize:'25px',fontWeight:"bold" ,fontFamily:'proxima-nova,sans-serif'}}>
            YallaShop
        </Button>
    </Link>
  )
}

export default LogoIcon