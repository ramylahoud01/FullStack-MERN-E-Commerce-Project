import React from 'react'
import image from "../../Assets/new1.jpg"
import {  Stack, } from '@mui/material'
import { Link } from 'react-router-dom'
import "./SmallDeviceOverLay.css"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const SmallDeviceOverLay = (props) => {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.between('sm','md'))
    const width = smallScreen ? '500px' : '300px'  
    const height = smallScreen ? '300px' : '200px' 
  return (
    <>
    <Stack width={'100%'} >
        <Link to={"/newArrival/Collection"} style={{display:'flex',justifyContent:'center'}}><img src={image} alt='button-img' width={width} height={height}/></Link>
    </Stack>
    </>
  )
}

export default SmallDeviceOverLay
