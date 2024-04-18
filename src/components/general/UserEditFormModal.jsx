import React,  { useContext }  from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { UserContext } from './UserProvider';
import UserEditForm from '../users/UserEditForm';
import { Button } from '@mui/material';

export default function UserEditFormModal ({openEditModal, setOpenEditModal, handleEditClose, handleEditOpen, user={user} }) {
  return (
    <div>
      <Modal
        open={openEditModal}
        onClose={handleEditClose}
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
         <Button type="button" onClick={handleEditClose} style={{position: 'absolute', right: '0', top: '16px'}}>X</Button>
         <UserEditForm handleEditClose={handleEditClose} user={user} />
        </Box>
      </Modal>
    </div>
  );
}
