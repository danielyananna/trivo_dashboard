import React, { useContext, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserContext } from '../general/UserProvider';
import { Button } from '@mui/material';
import UserDeleteConfirmationModal from '../general/UserDeleteConfirmationModal';
import UserEditFormModal from '../general/UserEditFormModal';

export default function Users () {
  const {usersData, setUsersData} = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState({});

  const handleOpen = (id) => {
    setUserId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
  }

  const handleEditOpen = (user) =>{
       setUser(user);
       setOpenEditModal(true)
  }

  const handleEditClose = () =>{
    setOpenEditModal(false)
}
 
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          { usersData && usersData.length > 0 &&
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone Number</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
          }
          <TableBody>
            {usersData && usersData.length > 0 ? usersData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">
                  <Button onClick={()=>handleOpen(row.id)}>Delete</Button>
                  <Button onClick={()=>handleEditOpen(row)}>Edit</Button>
                </TableCell>
              </TableRow>
            )) : 
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="center">No user Found</TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <UserDeleteConfirmationModal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} usersData={usersData} setUsersData={setUsersData} userId={userId} />
      <UserEditFormModal openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} handleEditOpen={handleEditOpen} handleEditClose={handleEditClose} usersData={usersData} setUsersData={setUsersData} user={user}  />
    </>
  );
}