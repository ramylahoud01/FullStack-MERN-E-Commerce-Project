import React from 'react'
import {Card, CardContent, CardMedia, Typography, CardActions, Button,} from "@mui/material"
import {  useRouteLoaderData,useNavigate } from 'react-router-dom';
function UiCart(props) {
    const token = useRouteLoaderData('root')
    const navigate = useNavigate()
    const RemoveHandler = event =>{
        event.preventDefault();
        fetch(`http://localhost:8000/cart/delete/${props.data._id}`, {
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
      <Card  sx={{width: '100%',objectFit: 'contain'}}>
          <CardMedia height={'100%'} component={'img'} image={`http://localhost:8000/${props.data.imageUrl}`}/>
          <CardContent sx={{display:'flex', justifyContent: 'space-between'}}>
            <Typography variant='p' fontStyle='oblique' fontSize={{md:'16px',xs:'12px'}} color={'gray'} fontWeight={'bold'}><Typography component={'span'} fontWeight={'bold'} fontSize={{md:'16px',xs:'12px'}} fontStyle='oblique'color='black'>Size :</Typography>{props.data.values}</Typography>
            <Typography variant='p' fontStyle='oblique' fontSize={{md:'16px',xs:'12px'}} color={'gray'} fontWeight={'bold'}><Typography component={'span'} fontWeight={'bold'} fontSize={{md:'16px',xs:'12px'}} fontStyle='oblique'color='black'>Qty :</Typography>{props.data.quantity}</Typography>
          </CardContent>
          <CardActions sx={{display:'flex', justifyContent: 'space-between'}} >
            <Typography variant='p' fontStyle='oblique' fontSize={{md:'17px',xs:'12px'}} color={'gray'} fontWeight={'bold'} >{parseFloat(props.data.price) * parseFloat(props.data.quantity)}$</Typography>
            <Button  color='error'  size='small' variant='contained' onClick={RemoveHandler}>Remove</Button>
          </CardActions>
      </Card>
  )
}

export default UiCart