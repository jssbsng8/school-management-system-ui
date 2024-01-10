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
      username: event.target.elements.username.value,
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
        console.log(validated);

        // Sending login request using requestHandler
        const response = await requestHandler("post", apiUrl, validated);
        console.log(response);

        if (!response) {
          // Handle the case where response is undefined or null
          errorToast("An error occurred during login");
          setLoading(false);
          return;
        }
        // Check the status code
        if (response.status === 400) {
          // Handle the case of a 400 status code (Bad Request)
          errorToast("Incorrect Username or password");
          setLoading(false);
          return;
        }

        // Successful login
        // Storing the token or user information in local storage or state
        localStorage.setItem("token", response.auth_token);

        // Fetching authenticated user data
        const loggedInUserData = await requestHandler(
          "get",
          USER_ENDPOINTS.AUTHENTICATED_USER
        );
        localStorage.setItem(
          "userData",
          JSON.stringify({
            auth: true,
            role: loggedInUserData.role,
          })
        );
        // Setting user context
        setUserContext(loggedInUserData, true, loggedInUserData.role);

        // Fetching subjects

        // await fetchSubjects(setSubject);

        await new Promise((resolve) => setTimeout(resolve, 300));
        // Navigating to the home page

        const message = "Login successful";
        successToast(message.toUpperCase());
        setLoading(false);
        navigate("/");
      } catch (error) {
        const message = `${error.message}`;
        errorToast(message);
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
        defaultValue={"david"}
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
        defaultValue={"string@1234"}
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
