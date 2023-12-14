import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { successToast, errorToast, warningToast } from './utils/toastUtils';


const LoginForm = ({ onSubmit, onToggleForm }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add logic for handling login data
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    onSubmit({username, password});
    successToast('inputs has been logged to console')
  };

  return (
    <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 5 }}>
      {/* Login form fields */}
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      
    </Box>
  );
};

export default LoginForm;
