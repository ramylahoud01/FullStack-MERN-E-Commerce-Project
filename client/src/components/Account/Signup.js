import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Form,useActionData,useNavigation} from 'react-router-dom'
function Signup() {
    const navigation = useNavigation();
    const submitting = navigation.state === 'submitting'
    const data = useActionData()
    
  return (
    <>  
    <Form method='Post'  style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'40px 0px'}}> 
        <Stack spacing={2}  sx={{borderRadius:'5px',border:'1.5px solid #318CE7',paddingLeft:'60px',paddingRight:'60px',paddingTop:'20px' ,paddingBottom:'30px'}}>
        <Typography color='#318CE7' textAlign={'center'} fontWeight={'700'} fontSize={{xs:'17px',sm:'22px'}}>Create An Account :</Typography>
        {data && data.message.split(',').map((error,index) => <Typography key={index} variant='p' lineHeight={'8px'} color='error'>{error}</Typography>)}
        <Stack direction={'row'}><TextField sx={{width:{xs:'180px',sm:'240px'}}}  name='email' label='Email' variant='standard' size='medium' color='primary' type='email'/></Stack>
        <Stack direction={'row'}><TextField sx={{width:{xs:'180px',sm:'240px'}}}  name='password' label='Password' variant='standard' size='medium' type='password'  color='primary'/></Stack>
        <Stack direction={'row'}><TextField sx={{width:{xs:'180px',sm:'240px'}}}  name='confirmPassword' label='ConfirmPassword'  variant='standard' size='medium' type='password'color='primary'/></Stack>
        <Stack direction={'row'}><TextField sx={{width:{xs:'180px',sm:'240px'}}} name='name' label='Name' variant='standard' size='medium'color='primary'/></Stack>
        <Stack ><Button type='submit' variant='contained' color='primary'>{submitting ?'Submitting...' :'Submit'}</Button></Stack>
        </Stack>
    </Form>
    </>
  )
}
export default Signup
