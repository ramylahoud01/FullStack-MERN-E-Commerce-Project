import React from 'react'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from '@stripe/react-stripe-js'
import StripeForm from "./StripeForm"
import { useLoaderData } from 'react-router-dom'
import UiStripeCard from '../Card/UiStripeCard'
import { Box, Paper, Stack, Typography } from '@mui/material'
import EmptyCart from '../Cart/EmptyCart'

const Public_Key = "pk_test_51Mg2FDInghZGvP2vJ5xcSOg7kzsdem1ZaWi3cscTUq2yx3zvkPajRU2AxBI782QMPXbEVWemJsNFGjsZjuX8DtBv003OfgPM85"
const StripePromise = loadStripe(Public_Key)
const StripeContainer = () => {
    const data = useLoaderData()
    const totalPrice = data.cartContent
    .map(item => parseFloat(item.price)*parseFloat(item.quantity))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <Stack sx={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'20px',paddingBottom:'20px'}}>
    {data.cartContent.length >0  ? 
    <Paper elevation={4} >
        <Paper elevation={2}>
          {data.cartContent.map(cartitem => <Box padding={'15px 5px'} key={cartitem._id}><UiStripeCard cartitem={cartitem} /></Box>)}
        </Paper>
        <Typography sx={{float:'right'}} fontWeight={'bold'} marginRight={'10px'} marginTop='10px'>Total Price :{totalPrice}$</Typography>
        <Elements stripe={StripePromise}>
        <StripeForm totalPrice={totalPrice} />
        </Elements>
    </Paper>
    :<EmptyCart />
    }
   
    </Stack>
  )
}

export default StripeContainer
