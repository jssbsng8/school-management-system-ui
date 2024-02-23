import React, { useReducer } from "react";
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
import ACTIONS from "../Reducer/actions";
import { LoginReducer } from "../Reducer/loginReducer";

const initialState = {
  auth: false,
  loading: false,
  token: "",
  user: {},
  role: "",
};

const LoginForm = ({ onSubmit, onToggleForm }) => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const { setUserContext } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });

    // Extracting login data from the form
    const data = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    // Validating login data
    const validated = loginDataValidator(data);
    if (validated[1] === "error") {
      errorToast(validated[0]);
      dispatch({ type: ACTIONS.LOGIN_ERROR, payload: false });
    } else {
      const apiUrl = AUTH_ENDPOINTS.LOGIN;

      try {
        // Sending login request using requestHandler
        const response = await requestHandler("post", apiUrl, validated);
        if (response[0] === null) {
          // Handle the case where response is undefined or null
          const message = response[1].data.non_field_errors[0];
          errorToast(message);
          dispatch({ type: ACTIONS.LOGIN_ERROR, payload: false });
          return;
        }

        // Successful login
        // Storing the token or user information in local storage or state
        dispatch({ type: ACTIONS.SET_TOKEN, payload: response[0].auth_token });

        await new Promise((resolve) => setTimeout(resolve, 100));

        // Fetching authenticated user data
        const loggedInUserData = await requestHandler(
          "get",
          USER_ENDPOINTS.AUTHENTICATED_USER
        );
        if (loggedInUserData[0]) {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              auth: true,
              role: loggedInUserData[0].role,
            })
          );
          
          dispatch({
            type: ACTIONS.SUCCESSFUL_LOGIN,
            payload: {
              userData: loggedInUserData[0],
              token: response[0].auth_token,
              setUserContext: setUserContext
            },
          });
          await new Promise((resolve) => setTimeout(resolve, 100));
          const message = "Login successful";
          successToast(message.toUpperCase());
          navigate("/");
        }
      } catch (error) {
        const message = `${error.message}`;
        console.log(message);
        errorToast("Temporary Server Issue");
        dispatch({ type: ACTIONS.LOGIN_ERROR, payload: false });
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
        defaultValue={"example2@gmail.com"}
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
        defaultValue={"string@1234"}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <LoadingButton
        type="submit"
        fullWidth
        loading={state.loading}
        loadingPosition="start"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {state.loading ? "Please Wait..." : "Sign In"}
      </LoadingButton>
    </Box>
  );
};

export default LoginForm;
