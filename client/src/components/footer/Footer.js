import { Grid, Stack, Typography ,Box} from '@mui/material'
import React from 'react'
import LogoIcon from '../HeaderIcons/LogoIcon'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const Footer = () => {
  const theme = useTheme();
  const ExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    
  return (
    <Box sx={{bgcolor:'#318CE7',width:'100%' , height:'180px',paddingTop:'10px'}} direction={'row'} > 
      <Grid container>
        {!ExtraSmallScreen && 
        <Grid item  sm={4} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <LogoIcon />
        </Grid>}
        <Grid item xs={6} sm={4}>
          <Stack direction={'column'} spacing={1} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Typography variant='p' color={'white'} fontSize={'20px'} fontWeight={'800'}>Yalla Shop Info :</Typography>
          <Typography variant='p' color={'white'} fontSize={'15px'} fontWeight={'600'}>Location :Jdeideh</Typography>
          <Typography variant='p' color={'white'} fontSize={'15px'} fontWeight={'600'}>Call :+961 71/734/793</Typography>
          <Typography variant='p' color={'white'} fontSize={'15px'} fontWeight={'600'}>YallaShop.com</Typography>
          <Typography variant='div'><InstagramIcon /><FacebookIcon /><WhatsAppIcon/></Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Stack direction={'column'} spacing={1} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Typography variant='p' color={'white'} fontSize={'20px'} fontWeight={'800'}>Lets Us Help You!</Typography>
          <Typography variant='p' color={'white'} fontSize={'15px'} fontWeight={'600'}>About Us</Typography>
          <Typography variant='p' color={'white'} fontSize={'15px'} fontWeight={'600'}>Contact Us</Typography>
          <Typography variant='p' color={'white'} fontSize={'15px'} fontWeight={'600'}>Careers</Typography>
          </Stack>
      </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
