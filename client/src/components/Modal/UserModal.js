import { Dialog, DialogContent, DialogContentText,Typography} from '@mui/material'
import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { UserAction } from '../store';
function UserModal() {
    const open = useSelector(state => state.User.open);
    const dispatch = useDispatch()
  return (
    <Dialog open={open} onClose={()=>dispatch(UserAction.toggle())}>
        <DialogContent>
          <DialogContentText sx={{color:'rgb(43 43 43)'}}>Log in or become a member</DialogContentText>
          <Typography sx={{fontSize:'12px',marginTop:'20px' }}>Unlock your member benefits. Enter your email below to log in <br />or become a member.</Typography>
        </DialogContent>
      </Dialog>
  )
}

export default UserModal