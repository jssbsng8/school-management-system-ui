import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { successToast, errorToast, warningToast } from './utils/toastUtils';
import { loginDataValidator } from './utils/dataValidator';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSubmit, onToggleForm }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Add logic for handling login data
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const data = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value
    }
    const validated = loginDataValidator(data)
    if (validated[1] === 'error'){
      errorToast(validated[0])
      setLoading(false);
    }
    else{
      try {
        // Simulating an asynchronous registration process with a timeout
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (validated) {
          const hardcodedUsername = 'ademic'
          const hardcodedPassword = '12345678'
          
          console.log(data);
          if (data['username'] === hardcodedUsername && data['password'] === hardcodedPassword){
            localStorage.setItem("user", JSON.stringify(data));
            const message = `Welcome ${data['username']}!`
            successToast(message.toUpperCase());
            navigate("/");
          }
          else{
            warningToast('Incorrect username or password')
          }
        }
      } catch (error) {
        errorToast('Error during logging in')
        console.error('Error during registration:', error);
      } finally {
        setLoading(false);
      }
    }
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
      <LoadingButton
        type="submit"
        fullWidth
        loading={loading}
        loadingPosition="start"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {loading ? 'Please Wait...' : 'Sign In'}
      </LoadingButton>
      
    </Box>
  );
};

export default LoginForm;
