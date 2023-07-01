import { AppBar,Toolbar ,Grid, Stack, } from '@mui/material';
import UserIcon from '../HeaderIcons/UserIcon';
import LogoIcon from '../HeaderIcons/LogoIcon';
import ShoppingIcons from '../HeaderIcons/ShoppingIcons';
import "./Header.css"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SousHeader from './SousHeader';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { getIdofUser } from '../util/auth';
import { Link } from 'react-router-dom';

//import { useRouteLoaderData } from 'react-router-dom';
function Header() {
    const id = getIdofUser()
    const theme = useTheme();
    const mediumScreen = useMediaQuery(theme.breakpoints.up('md'))
    const smallScreen = useMediaQuery(theme.breakpoints.between('xs','md'))
    //const token =useRouteLoaderData('root');

  return (
   <AppBar position='static' sx={{bgcolor:"#318CE7",p:'15px 0px' }}>
    <Toolbar >
        {mediumScreen && 
        <Grid container sx={{alignItems:'center'}}>
        <Grid item md={2}>
            <LogoIcon />
        </Grid>
        <Grid item md={9}>
           <SousHeader />
        </Grid>
        <Grid item md={1}>
            <Stack direction={'row'} sx={{float:'right'}}>
                <UserIcon />
                {id === '647cf3686eb6b5de7c9df14d' && <Stack mr={1}><Link to="/post" style={{color:'white'}}><PostAddIcon /></Link></Stack>}
                <ShoppingIcons  /> 
            </Stack>
        </Grid>
    </Grid>} 
    {smallScreen && 
    <Grid container sx={{alignItems:'center'}}>
    <Grid item xs={1}>
       <SousHeader />
    </Grid>
    <Grid item xs={10}>
        <Stack sx={{alignItems:'center'}}><LogoIcon /></Stack>
    </Grid>
    <Grid item xs={1}>
        <Stack direction={'row'} sx={{float:'right'}}>
            <UserIcon />
            {id === '647cf3686eb6b5de7c9df14d' && <PostAddIcon />}
            <ShoppingIcons  />
        </Stack>
    </Grid>
    </Grid>}
    </Toolbar>
   </AppBar>
  )
}

export default Header