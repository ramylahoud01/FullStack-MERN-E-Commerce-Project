import React from 'react'
import {Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SmallDeviceIcon from '../HeaderIcons/SmallDeviceIcon';


function SousHeader() {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up('md'))
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
    {mediumScreen && 
    <Stack direction={'row'} spacing={2} justifyContent={'center'} >          
    <Typography component={'span'}  className='span1' fontFamily={'"Open Sans", "Helvetica", "Arial", sans-serif'} fontSize={'17px'} fontWeight={'700'}> Shoes
       <ul className='sous-span1'>
        <Link to="/shoes/FootballShoes" style={{ textDecoration: 'none',color:'black'}}> <Typography component={'li'} >Football Shoes</Typography></Link>
        <Link to="/shoes/RunningShoes" style={{ textDecoration: 'none',color:'black'}}><Typography component={'li'} >Running Shoes</Typography></Link>
        <Link to="/shoes/HickingShoes" style={{ textDecoration: 'none',color:'black'}}><Typography component={'li'} >Hicking Shoes</Typography></Link>
        <Link to="/shoes/TrainingShoes" style={{ textDecoration: 'none',color:'black'}}><Typography component={'li'} >Training Shoes</Typography></Link>
       </ul>
    </Typography>
    <Typography component={'span'}  className='span1' fontFamily={'"Open Sans", "Helvetica", "Arial", sans-serif'} fontSize={'17px'} fontWeight={'700'}>Clothing
        <ul className='sous-span1'>
        <Link to="/clothing/GymClothing" style={{ textDecoration: 'none',color:'black'}}><Typography component={'li'} >Gym Clothing</Typography></Link>
        <Link to="/clothing/RunningClothing" style={{ textDecoration: 'none',color:'black'}}><Typography component={'li'} >Running Clothing</Typography> </Link>
        <Link to="/clothing/HickingClothing" style={{ textDecoration: 'none',color:'black'}}><Typography component={'li'} >Hicking Clothing</Typography> </Link>
        <Link to="/clothing/TrainingClothing" style={{ textDecoration: 'none',color:'black'}}><Typography component={'li'} >Training Clothing</Typography></Link>
        </ul>
    </Typography>
   
    <Typography component={'span'}  className='span1' fontFamily={'"Open Sans", "Helvetica", "Arial", sans-serif'} fontSize={'17px'} fontWeight={'700'}>Accessories
        <ul className='sous-span1'>
          <Typography component={'li'} >Football Accessories</Typography>
          <Typography component={'li'} >Running Accessories</Typography>
          <Typography component={'li'} >Hicking Accessories</Typography>
          <Typography component={'li'} >Training Accessories</Typography>
        </ul>
      </Typography>
  
    <Typography component={'span'}  className='span1' fontFamily={'"Open Sans", "Helvetica", "Arial", sans-serif'} fontSize={'17px'} fontWeight={'700'}>Fitness
        <ul className='sous-span1'>
          <Typography component={'li'} >Fitness Equipments</Typography>
          <Typography component={'li'} >Fitness Machines</Typography>
          <Typography component={'li'} >Weight & Dumbbells</Typography>
        </ul>
      </Typography>
  
    <Typography component={'span'}  className='span1' fontFamily={'"Open Sans", "Helvetica", "Arial", sans-serif'} fontSize={'17px'} fontWeight={'700'}>New Arrival
        <ul className='sous-span1'>
          <Link to="/newArrival/Collection" style={{ textDecoration: 'none',color:'black'}}> <Typography component={'li'} >Collection</Typography></Link>
        </ul>
      </Typography>
  
    <Typography component={'span'}  className='span1' fontFamily={'"Open Sans", "Helvetica", "Arial", sans-serif'} fontSize={'17px'} fontWeight={'700'}>  Brands
      <ul className='sous-span1'>
        <Link to="/pages/Brands" style={{ textDecoration: 'none',color:'black'}}> <Typography component={'li'} >Brands Available</Typography></Link>
      </ul>
    </Typography>
    </Stack>
    }
    {smallScreen && <SmallDeviceIcon />}
    </>
  )
}

export default SousHeader
