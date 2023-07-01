import React, { useEffect } from 'react'
import { useLoaderData ,Link} from 'react-router-dom'
import "./Index.css"
import Overlay from '../overlay/Overlay';
import UiSwiper from '../Swiper/UiSwiper';
import {useSelector } from 'react-redux';
import { Stack,Typography,Grid } from '@mui/material';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import UiCard from '../Card/UiCard';
import Footer from '../footer/Footer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SmallDeviceOverLay from '../overlay/SmallDeviceOverLay';
import AOS from 'aos';
import 'aos/dist/aos.css';
function  Index() {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up('md'))
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const length = useSelector(state => state.Cart.length)
  const datas = useLoaderData();
  const data = datas.data1.data
  const SwiperData = datas.data2.data
  const SummerData = datas.data3.data
  useEffect(()=>{
    AOS.init();
  },[length])
  return (
    <>
    {mediumScreen && 
    <div className='wrapper'>
    {data.map((data,Index)=><Overlay key={Index} category={data.category} _id={data._id} sousCategorie={data.sousCategorie}  index={Index} title={data.title} imageUrl={data.imageUrl}/>) }
    </div>}
    
    {smallScreen && 
    <>
    <SmallDeviceOverLay data={data}/>
    </>}
    <Stack direction={'row'} marginTop={'100px'} position={'relative'}>
    <Typography fontSize={{xs:'15px',sm:'25px',md:'30px'}}  marginLeft={'20px'} fontWeight={'bold'} fontStyle={'italic'}>Top {SwiperData[0].sousCategorie} :</Typography>
    <Link className='linkBrands' to={`/${SwiperData[0].category}/${SwiperData[0].sousCategorie}`} style={{display:'flex',alignItems:'center'}} >
      <Typography className='paraBrands' sx={{fontWeight:'bold',fontSize:{xs:'15px',sm:'25px'}}}>See our Brands </Typography>
      <KeyboardTabIcon className='iconBrands' />
    </Link>
    </Stack>
     <UiSwiper data={SwiperData}/>
        <Typography variant='h4' marginTop={'30px'} marginBottom={'30px'} marginLeft={'20px'} fontWeight={'bold'} fontStyle={'italic'} sx={{fontSize:{xs:'15px',sm:'25px',md:'30px'}}}>Top {SummerData[0].sousCategorie} :</Typography>
        <Grid container  rowSpacing={5} columnSpacing={4}  paddingLeft={'10px'} paddingRight={'5px'} paddingBottom={'20px'}>
            {SummerData.map(item => 
              <Grid item key={item._id} sm={4} xs={6} md={3} data-aos="fade-down">
                <UiCard  imageUrl={item.imageUrl} title={item.title} price={item.price} category={item.category} sousCategorie={item.sousCategorie} id={item._id}/>
              </Grid>)}
        </Grid>
        <Footer />
     </>
  )
}

export default Index