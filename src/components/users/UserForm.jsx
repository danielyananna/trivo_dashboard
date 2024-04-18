import React, { useContext } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { UserContext } from '../general/UserProvider';
import Typography from '@mui/material/Typography';

const UserForm = ({handleClose}) => {
  const { initialUserValue, setInitialUserValue, setUsersData, usersData } = useContext(UserContext);

  const handleInputChange = (e, fieldName) => {
    setInitialUserValue(prevState => ({
      ...prevState,
      [fieldName]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: initialUserValue.id,
      name: initialUserValue.name,
      email: initialUserValue.email,
      age: initialUserValue.age,
      phone: initialUserValue.phone,
    };

    setUsersData([...usersData, newData]);

    setInitialUserValue({
        name: '',
        email: '',
        age: '',
        phone: ''
    });
    
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
       <Typography variant='h6' color="inherit" textAlign="center" paddingTop="20px">Create a New User</Typography>
      <Grid >
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
        <Button style={{margin: '20px auto', display: 'flex'}} type="submit" variant='contained'>Create a New User</Button>
      </Grid>
    
    </form>
  );
};

export default UserForm;
