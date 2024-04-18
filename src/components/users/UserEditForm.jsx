import React, { useContext, useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { UserContext } from '../general/UserProvider';

const UserEditForm = ({ handleEditClose, user }) => {
  const { setUsersData, usersData, initialUserValue, setInitialUserValue } = useContext(UserContext);
  
  useEffect(() => {
    setInitialUserValue(user);
  }, [user]);

  const handleInputChange = (e, fieldName) => {
    setInitialUserValue(prevState => ({
      ...prevState,
      [fieldName]: e.target.value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
  
    const updatedUserData = usersData.map(userData => {
      if (userData.id === initialUserValue.id) {
        return {
          ...userData,
          name: initialUserValue.name,
          email: initialUserValue.email,
          age: initialUserValue.age,
          phone: initialUserValue.phone
        };
      }
      return userData;
    });
  
    setUsersData(updatedUserData);
  
    handleEditClose();
  };

  return (
    <form onSubmit={handleSave}>
      <Typography variant='h6' color="inherit" textAlign="center" paddingTop="20px">Updating User Details</Typography>
      <Grid>
        <Grid item style={{ padding: '20px' }}>
          <TextField
            style={{ width: '100%', margin: '20px 0' }}
            variant='outlined'
            label="Name"
            value={initialUserValue.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
          <TextField
            style={{ width: '100%', margin: '20px 0' }}
            variant='outlined'
            label="Email"
            value={initialUserValue.email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
          <TextField
            style={{ width: '100%', margin: '20px 0' }}
            variant='outlined'
            label="Age"
            value={initialUserValue.age}
            onChange={(e) => handleInputChange(e, 'age')}
          />
          <TextField
            style={{ width: '100%', margin: '20px 0' }}
            variant='outlined'
            label="Phone"
            value={initialUserValue.phone}
            onChange={(e) => handleInputChange(e, 'phone')}
          />
        </Grid>
        <Button style={{ margin: '20px auto', display: 'flex' }} type="submit" variant='contained'>Update User Details</Button>
      </Grid>

    </form>
  );
};

export default UserEditForm;
