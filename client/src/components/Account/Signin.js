import React from 'react'
import { Stack,Typography,Button,TextField} from '@mui/material'
import { Form ,Link,useNavigation,useActionData} from 'react-router-dom';

function Signin() {
    const navigation = useNavigation();
    const submitting = navigation.state === 'submitting'
    const data = useActionData()
  return (
    <>
    <Form method='Post' style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'40px 0px'}}> 
    <Stack spacing={2}  sx={{ borderRadius:'5px',border:'1.5px solid #318CE7',paddingLeft:'60px',paddingRight:'60px',paddingTop:'20px' ,paddingBottom:'30px'}}>
    <Typography color='#318CE7' textAlign={'center'} fontWeight={'700'} fontSize={{xs:'18px',sm:'22px'}}>Logging In:</Typography>
    {data && <Typography variant='span' color='error'>{data.message}</Typography>}
    <Stack direction={'row'}><TextField sx={{width:{xs:'180px',sm:'240px'}}} name='email' label='Email' variant='standard'  color='' type='email'/></Stack>
    <Stack direction={'row'}><TextField sx={{width:{xs:'180px',sm:'240px'}}} name='password' label='Password' variant='standard'  type='password'  color='primary'/></Stack>
    <Stack ><Button disabled={submitting} type='submit' variant='contained' color='primary'>{submitting ? 'Submitting...' :'Submit'}</Button></Stack>
    <Stack><Typography variant='span' color={'primary'}><Link to="/account/signup">Signup</Link></Typography></Stack>
    </Stack>
    </Form>
    </>
  )
}

export default Signin