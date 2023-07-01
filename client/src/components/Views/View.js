import React, { useState } from 'react'
import {  useNavigate, useLoaderData ,useRouteLoaderData, useNavigation,} from 'react-router-dom'
import {Typography, Stack, ToggleButtonGroup, ToggleButton, Radio, FormControlLabel, Button, Badge,  } from '@mui/material'
import {useDispatch, useSelector} from "react-redux"
import { checkedGiftAction } from '../store';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { SnackerAction } from '../store';
import Footer from '../footer/Footer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function View() {
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'))
    const navigate = useNavigate()
    const navigation = useNavigation();
    const submit =navigation.state === 'submitting'
    const token = useRouteLoaderData('root');
    const dispatch = useDispatch()
    const checked = useSelector(state => state.Checked.open)
    const[quantity,setQuantity] =useState(1);
    const [format,setFormat]=useState();
    const [error,setError]=useState("")
    const datas = useLoaderData();
    const data = datas.post
    const valuesArray = data.values; 
    const values = valuesArray[0].split(",");
    const removeHandler = ()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    const AddHandler = () =>{
        if(quantity<10){
            setQuantity(quantity+1)
        }
    }
    const changeHandler= (event,updatedFormat) =>{
        setFormat(updatedFormat)
    }
    const  addHandler = async (event) =>{
        event.preventDefault();
        if(token){
       const response = await fetch('http://localhost:8000/cart',{method:'Post' ,
        headers:{
            "Authorization":"Bearer "+token,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            title:data.title,
            content:data.content,
            category:data.category,
            price:(!data.onSale ? data.price :((100 - data.onSale) * data.price) / 100),
            sousCategorie:data.sousCategorie,
            values:format,
            onSale:data.onSale,
            imageUrl:data.imageUrl,
            quantity:quantity
        })
    })
        const responseData = await response.json();
        if (response.status === 404) {
            setError(responseData.message)
            return ;
          }
        dispatch(SnackerAction.toggle())
        return await navigate('/cart/content')
        }else{
            navigate('/account/signin')
        }
    }
    
  return (
   <>
    <Stack direction={{xs:'column',md:'row',sm:'column'}} padding={'40px 40px'} spacing={5} >
        <Badge badgeContent={data.onSale ? data.onSale+'%' : ''} sx={{ "& .MuiBadge-badge": { fontSize: 20 ,padding:2,borderRadius:30 ,opacity:data.onSale ? 1 : 0}}} color='error' >
              <img
                src={`http://localhost:8000/${data.imageUrl}`}
                alt={`${data.title}`}
                style={{
                  width: mediumScreen ?'100%' :'100%',
                  height:  mediumScreen ?'500px' :'100%',
                  objectFit: 'contain',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
        </Badge>
        <Stack spacing={2}>   
        <Typography  variant='div' fontWeight={'bold'} fontSize={'17px'}>
            {data.title}
        </Typography>
        <Typography  variant='div'color={'gray'}>
            {data.content}
        </Typography>
        <Stack>
            <Typography variant='p' fontWeight='bold'fontStyle={'italic'}>Price :<span style={{fontWeight:'normal'}}>{data.onSale ? (data.price * (100 -data.onSale))/(100) : data.price}$</span></Typography>
        </Stack>

        <Stack direction={'column'}>
            <Typography variant='p' color='error' fontWeight={'bold'}>{error}</Typography>
            <Typography fontWeight={'bold'} > Size :</Typography>
            <ToggleButtonGroup sx={{marginTop:'20px'}} onChange={changeHandler} value={format} exclusive>
                {values.map((data,Index) =><ToggleButton key={Index} value={data}>{data} {data.category === 'clothing' ? 'Eu' :''}</ToggleButton>)}
            </ToggleButtonGroup>
        </Stack>

        <Stack>
            <FormControlLabel  control={<Radio checked={checked} onClick={()=> dispatch(checkedGiftAction.toggle())}/> } label="Wrap as a Gift"/>
        </Stack>

        <Stack direction="row">
            <span style={{fontWeight:'bold',padding:'2px'}}>Quantity :</span>
            <Typography variant='div' marginLeft={'3px'}>
                <span style={{border:'1px solid black' ,padding:'2px',borderRadius:'20px' ,display:'inline-flex'}}>
                <span style={{cursor:'pointer'}} onClick={removeHandler}><RemoveIcon /></span>
                <span style={{padding:'0px 6px'}}>{quantity}</span>
                <span style={{cursor:'pointer'}} onClick={AddHandler}><AddIcon /></span>
                </span>
            </Typography>
        </Stack>
        <Stack direction={'row'} >
            <Button sx={{padding:'10px',marginTop:'5px'}} onClick={addHandler} variant='contained' type='submit'>{submit ?'submitting': 'Add To Cart'}</Button>
        </Stack>
        </Stack>
    </Stack>
    <Footer />
    </>
  )
}

export default View