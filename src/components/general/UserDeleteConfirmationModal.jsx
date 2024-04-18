import React,  { useContext }  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserForm from '../users/UserForm';
import { UserContext } from './UserProvider';

export default function UserDeleteConfirmationModal ({open, setOpen, handleOpen, handleClose, userId, setUsersData, usersData}) {
  const handleDelete = (id) =>{
    setUsersData(usersData.filter(user=>user.id !== id))
    handleClose()
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30%',
            backgroundColor: '#ffffff',
            borderRadius: '16px'
            }}
        >
          <Button type="button" onClick={handleClose} style={{position: 'absolute', right: '0', top: '12px'}}>X</Button>
          <Box style={{padding: '50px'}}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign: 'center'}}>
                  Are you sure to delete the user?
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{display: 'flex', justifyContent: 'center'}}>
                  <Button onClick={()=>handleDelete(userId)} variant="contained" style={{marginRight: '16px'}}>Yes</Button>
                  <Button variant="outlined" onClick={handleClose}>No</Button>
              </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}