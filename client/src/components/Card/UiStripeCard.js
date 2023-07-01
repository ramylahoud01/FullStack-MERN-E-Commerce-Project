import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import {  useRouteLoaderData,useNavigate } from 'react-router-dom';
const UiStripeCard = (props) => {
    const token = useRouteLoaderData('root')
    const navigate = useNavigate()
    const RemoveHandler = event =>{
        event.preventDefault();
        fetch(`http://localhost:8000/cart/delete/${props.cartitem._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":"Bearer "+token
      },
    }).then(response => {
        if (response.ok) {
         return navigate('/cart/content')
        } else {
          console.error('Failed to delete item.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  return (
    <Box  height={'70px'}>
      <Stack direction='row' spacing={{xs:1,sm:2,md:3}}>
      <Stack>
          <img src={`http://localhost:8000/${props.cartitem.imageUrl}`} alt={props.cartitem.title} width={'70px'} height={'80px'}/>
      </Stack>
      <Stack>
        <Typography variant='p' fontSize={{md:'12px',sm:'11px',xs:'8px'}} fontWeight={'bold'} width={{md:'200px',sm:'100px',xs:'60px'}}>{props.cartitem.title}</Typography>
      </Stack>
      <Stack>
        <Typography variant='p' fontSize={{md:'12px',sm:'11px',xs:'9px'}} width={{md:'100px',sm:'60px',xs:'40px'}}><span style={{fontWeight:'bold'}}>Qty :</span>{props.cartitem.quantity}</Typography>
      </Stack>
      <Stack>
        <Typography variant='p' fontSize={{md:'12px',sm:'11px',xs:'9px'}} width={{md:'100px',sm:'60px',xs:'40px'}}><span style={{fontWeight:'bold'}}>Price :</span> {props.cartitem.price * props.cartitem.quantity}$</Typography>
      </Stack>
      <Stack>
        <Button color='error' sx={{fontSize:{sm:'11px',xs:'9px'}}} variant={'contained'} onClick={RemoveHandler}>Remove</Button>
      </Stack>
      </Stack>
    </Box>
  )
}

export default UiStripeCard
