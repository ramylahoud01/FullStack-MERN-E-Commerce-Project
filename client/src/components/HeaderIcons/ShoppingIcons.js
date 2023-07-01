import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRouteLoaderData } from 'react-router-dom';
function ShoppingIcons() {
  const token =useRouteLoaderData('root');
  const length = useSelector(state => state.Cart.length)
  return (
    <>
    <Badge badgeContent={(length && token)  ? length : 0}  sx={{ "& .MuiBadge-badge": { fontSize: 15}}}><Link to="/cart/content">
      <ShoppingBagIcon style={{color:'white'}} sx={{fontSize:{sm:'25px'}}}/>
      </Link>
    </Badge>
    </>
  )
}

export default ShoppingIcons