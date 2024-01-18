import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { successToast, errorToast } from "../utils/toastUtils";
import { loginDataValidator } from "../utils/dataValidator";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import { AUTH_ENDPOINTS, USER_ENDPOINTS } from "../../apiCalls/endpoints";
import { useUser } from "../utils/userContext";
import requestHandler from "../../apiCalls/requestHandler";

const LoginForm = ({ onSubmit, onToggleForm }) => {
  const { setUserContext } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Extracting login data from the form
    const data = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    // Validating login data
    const validated = loginDataValidator(data);
    if (validated[1] === "error") {
      errorToast(validated[0]);
      setLoading(false);
    } else {
      const apiUrl = AUTH_ENDPOINTS.LOGIN;

      try {
        // Sending login request using requestHandler
        const response = await requestHandler("post", apiUrl, validated);
        if (response[0] === null) {
          // Handle the case where response is undefined or null
          const message = response[1].data.non_field_errors[0];
          errorToast(message);
          setLoading(false);
          return;
        }

        // Successful login
        // Storing the token or user information in local storage or state
        localStorage.setItem("token", response[0].auth_token);

        // Fetching authenticated user data
        const loggedInUserData = await requestHandler(
          "get",
          USER_ENDPOINTS.AUTHENTICATED_USER
        );
        localStorage.setItem(
          "userData",
          JSON.stringify({
            auth: true,
            role: loggedInUserData[0].role,
          })
        );
        // Setting user context
        setUserContext(loggedInUserData[0], true, loggedInUserData[0].role);

        await new Promise((resolve) => setTimeout(resolve, 300));
        // Navigating to the home page
        const message = "Login successful";
        successToast(message.toUpperCase());
        setLoading(false);
        navigate("/");
      } catch (error) {
        const message = `${error.message}`;
        console.log(message);
        errorToast("Temporary Server Issue");
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
        id="email"
        label="email"
        name="email"
        autoComplete="email"
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
        {loading ? "Please Wait..." : "Sign In"}
      </LoadingButton>
    </Box>
  );
};

export default LoginForm;
