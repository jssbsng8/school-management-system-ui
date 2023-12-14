import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import { registrationValidator } from './utils/dataValidator';
import { successToast, errorToast, warningToast } from './utils/toastUtils';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';


const RegisterForm = ({ onSubmit, onToggleForm }) => {
  const [loading, setLoading] = useState(false);
  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      firstName: event.target.elements.firstName.value,
      lastName: event.target.elements.lastName.value,
      email: event.target.elements.registerEmail.value,
      username: event.target.elements.username.value,
      password: event.target.elements.registerPassword.value,
      confirmPassword: event.target.elements.confirmPassword.value,
      dob: event.target.elements.dob.value,
      role: event.target.elements.registerRole.value,
      phone: event.target.elements.phone.value,
      gender: event.target.elements.registerGender.value,
    }
    const validated = registrationValidator(data)
    if (validated[1] === 'error'){
      errorToast(validated[0])
      setLoading(false);
    }
    else if (validated[1] === 'warning'){
      warningToast(validated[0])
      setLoading(false);
    }
    else{
      try {
        // Simulating an asynchronous registration process with a timeout
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (validated) {
          successToast('Successful registration, check your email for activation');
        }
      } catch (error) {
        errorToast('Error during registration')
        console.error('Error during registration:', error);
      } finally {
        setLoading(false);
      }
    }
  };
 
  return (
    <Box component="form" noValidate onSubmit={handleRegister} sx={{ mt: 5, width: '100%' }}>
    {/* First Name and Last Name fields */}
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField
            autoComplete="fname"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            autoComplete="lname"
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Last Name"
        />
        </Grid>
    </Grid>
    
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                margin="normal"
                required
                fullWidth
                name="dob"
                type="date"
                id="dob"
                autoComplete="dob"
            />
        </Grid>
      </Grid>
    {/* Password and Confirm Password fields */}
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="registerEmail"
                label="Email Address"
                name="registerEmail"
                autoComplete="email"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                label="Username"
                type="text"
                id="username"
                autoComplete="username"
            />
        </Grid>
    </Grid>

    {/* Role and Gender selection fields */}
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="registerRole"
              name="registerRole"
              autoComplete="role"
              label="Role"
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Teacher">Teacher</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="registerGender"
              name="registerGender"
              autoComplete="gender"
              label="Gender"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
    </Grid>
    {/* Password and Confirm Password fields */}
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="registerPassword"
            label="Password"
            type="password"
            id="registerPassword"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
        </Grid>
      </Grid>
      <LoadingButton
        type="submit"
        fullWidth
        loading={loading}
        loadingPosition="start"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {loading ? 'Registering...' : 'Register'}
      </LoadingButton>
</Box>

  );
};

export default RegisterForm;
