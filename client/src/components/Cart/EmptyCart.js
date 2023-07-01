import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const EmptyCart = () => {
  return ( 
    <>
    <Stack  spacing={2} style={{display:'flex',alignItems:'center',justifyContent:'center',height:'400px'}} >
        <ShoppingCartCheckoutIcon style={{fontSize:'100px'}}/>
        <Typography variant='h6' fontWeight={'bold'}>You're Shopping Cart is Empty</Typography>
        <Link to={"/"}><Typography variant='h6' fontWeight={'bold'}>Go Shop</Typography></Link>
    </Stack>
    
    </>
  )
}

export default EmptyCart
