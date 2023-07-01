import React, { useEffect } from 'react'
import { useLoaderData,useNavigate, useNavigation } from 'react-router-dom'
import UiCart from "./UiCart"
import { Button, Grid, Stack, Snackbar, Typography,SnackbarContent,Box } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import { CartAction } from '../store'
import CheckIcon from '@mui/icons-material/Check';
import { SnackerAction } from '../store';
import EmptyCart from './EmptyCart'
function Cart(props) {
  const openSnacker = useSelector(state => state.Snacker.open)
  const navigation = useNavigation()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const data = useLoaderData()
 const totalPrice = data.cartContent
  .map(item => parseFloat(item.price)*parseFloat(item.quantity))
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  useEffect(() => {
    dispatch(CartAction.setLength(data.cartContent.length));
    
      navigate('/cart/content');
    
  }, [data, dispatch,navigate]);
  const PurchaseHandler =async e =>{
    e.preventDefault();
    return await navigate('/payment')
  }
  const submit = navigation.state === 'submitting'
  return (
    <>
     {data.cartContent.length === 0 && <EmptyCart/>}
    <Grid container >
      {data.cartContent.map(data =><Grid item key={data._id} sm={4} xs={6} md={3} sx={{padding:'10px'}}><UiCart data={data}/></Grid>)}
    </Grid>
    {data.cartContent.length >0 &&  
    <Stack sx={{float:'right',padding:'30px'}} spacing={2}>
    <Typography component={'div'} fontWeight={'bold'} fontSize={{md:'22px',xs:'18px'}}>Total Price:<span style={{color:'gray',fontStyle:'italic'}}>{totalPrice} $</span> </Typography>
    <Button  variant='contained' onClick={PurchaseHandler} disabled={submit}>{submit ?'submitting':'Purchase'}</Button>
    </Stack>}
    <Snackbar autoHideDuration={2000} open={openSnacker} onClose={()=>dispatch(SnackerAction.toggle())}>
      <SnackbarContent  sx={{bgcolor:'green'}} message={
          <Box display={'flex'} >
              <CheckIcon />
              <Typography>Item added to the Cart</Typography>
          </Box>
      }/>
    </Snackbar>
    </>
  )
}




export default Cart