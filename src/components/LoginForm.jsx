import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { successToast, errorToast } from './utils/toastUtils';
import { loginDataValidator } from './utils/dataValidator';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom";
import { AUTH_ENDPOINTS, USER_ENDPOINTS } from '../apiCalls/endpoints';
import { useUser } from './utils/userContext';
import { athenticatedUser } from '../apiCalls/authApi';


const LoginForm = ({ onSubmit, onToggleForm }) => {
  const { setUserContext } = useUser();
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
      const apiUrl = AUTH_ENDPOINTS.LOGIN;
      try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password, username }),
          mode: 'cors',
      });

      if (!response.ok) {
          const errorMessage = await response.text();
          console.log(errorMessage);
          if (response.status === 400){
          const message = 'Incorrect Username or password'
          errorToast(message);
          setLoading(false);
          return;
          }          
      }
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Successful login
      const responseData = await response.json();
      // Store the token or user information in local storage or state
      localStorage.setItem('token', responseData.auth_token);
      const loggedInUserData = await athenticatedUser(USER_ENDPOINTS.AUTHENTICATED_USER)
      
      setUserContext(JSON.parse(loggedInUserData), true);

      const message = 'Login successful'
      successToast(message.toUpperCase());
      setLoading(false);
      navigate("/");
      } catch (error) {
      // const message = `Login error ${error.message}!`
      const message = `Login error Server is Down!`
      errorToast(message);
      setLoading(false);
      console.log('Login successful:', error);
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
        // value={"string@1234"}
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
