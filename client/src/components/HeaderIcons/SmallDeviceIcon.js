import { Accordion, AccordionDetails, AccordionSummary, Box, Drawer, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink  } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./NavLink.css"
function SmallDeviceIcon() {
    const [isOpen,setOpen]=useState(false)
    
  return (
    <>  
     <IconButton sx={{color:'white',fontSize:'20px'}} onClick={()=>setOpen(true) }>
        <MenuIcon />
     </IconButton>
     <Drawer anchor='left' open={isOpen} onClose={()=>setOpen(false)}>
        <Box width={'300px'}>
            <Accordion style={{ margin: 0, border: 'none', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{fontWeight:'bold',fontSize:'19px'}} >
                   Shoes
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={3}>
                    <NavLink to="/shoes/FootballShoes" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Football Shoes</NavLink>
                    <NavLink  to="/shoes/RunningShoes" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Running Shoes</NavLink >
                    <NavLink  to="/shoes/HickingShoes" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Hicking Shoes</NavLink >
                    <NavLink  to="/shoes/TrainingShoes"className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"} >Training Shoes</NavLink >
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ margin: 0, border: 'none', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{fontWeight:'bold',fontSize:'19px'}}>
                Clothing
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={2}>
                        <NavLink  to="/clothing/GymClothing" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Gym Clothing</NavLink >
                        <NavLink  to="/clothing/RunningClothing" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Running Clothing</NavLink >
                        <NavLink  to="/clothing/HickingClothing" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Hicking Clothing</NavLink >
                        <NavLink  to="/clothing/TrainingClothing" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Training Clothing</NavLink >
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ margin: 0, border: 'none', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{fontWeight:'bold',fontSize:'19px'}}>
                Accessories
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={2}>
                    <NavLink to="/accessories/FootballAccessories" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Football Accessories</NavLink>
                    <NavLink  to="/accessories/RunningAccessories" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Running Accessories</NavLink >
                    <NavLink  to="/accessories/HickingAccessories" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Hicking Accessories</NavLink >
                    <NavLink  to="/accessories/TrainingAccessories"className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"} >Training Accessories</NavLink >
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ margin: 0, border: 'none', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{fontWeight:'bold',fontSize:'19px'}}>
                New Arrival
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={2}>
                    <NavLink to="/newArrival/Collection" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Collection</NavLink>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ margin: 0, border: 'none', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{fontWeight:'bold',fontSize:'19px'}}> 
                Brands
                </AccordionSummary>
                <AccordionDetails>
                    <Stack spacing={2}>
                    <NavLink to="/pages/Brands" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : "inactive"}>Brands Available</NavLink>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </Box>
     </Drawer>
     </>

     
  )
}

export default SmallDeviceIcon