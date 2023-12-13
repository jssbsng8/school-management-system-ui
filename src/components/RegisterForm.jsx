import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';


const RegisterForm = ({ onSubmit, onToggleForm }) => {
  const handleRegister = (event) => {
    event.preventDefault();
    // Add logic for handling registration data
    onSubmit(event.target.elements);
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
    
  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    Register
  </Button>
</Box>

  );
};

export default RegisterForm;
