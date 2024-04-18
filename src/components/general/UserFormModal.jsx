import React,  { useContext }  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserForm from '../users/UserForm';
import { UserContext } from './UserProvider';

export default function UserFormModal ({open, setOpen, handleOpen, handleClose}) {
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
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            backgroundColor: '#ffffff',
            borderRadius: '16px'
            }}
        >
        <Button type="button" onClick={handleClose} style={{position: 'absolute', right: '0', top: '12px'}}>X</Button>
        <UserForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
