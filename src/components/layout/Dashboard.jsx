import React, { useContext, useState } from 'react'
import { UserContext } from '../general/UserProvider';
import { AppBar, Badge, Button, Grid, IconButton, Modal, Toolbar, Typography } from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ListIcon from '@mui/icons-material/List';
import Box from '@mui/material/Box';
import UserForm from '../users/UserForm';
import UserFormModal from '../general/UserFormModal';
import Users from '../users/Users';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
    <AppBar position='static'>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm={6}>
            <Button variant='text' color='inherit' startIcon={<CreateNewFolderIcon />} onClick={handleOpen}>Create a New User</Button>
          </Grid>
          <Grid item sm={6} container justifyContent="flex-end" alignItems="center">
            <ListIcon />
            <Typography variant='body1' color="inherit">Users List</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <Users />
    <UserFormModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} />
   </>
  )
}

export default Dashboard
