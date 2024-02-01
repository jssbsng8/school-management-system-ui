import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { successToast, errorToast } from "../utils/toastUtils";
import { isEmailValid } from "../utils/dataValidator";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import requestHandler from "../../apiCalls/requestHandler";
import { USER_ENDPOINTS } from "../../apiCalls/endpoints";

const ResetPasswordForm = ({ onSubmit, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleResetPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Add logic for handling login data
    const email = event.target.elements.registerEmail.value;
    const validated = isEmailValid(email);
    if (validated[1] === "error") {
      errorToast(validated[0]);
      setLoading(false);
    } else {
      const response = await requestHandler(
        "post",
        USER_ENDPOINTS.RESET_PASSWORD,
        { email }
      );

      if (response[0] === null) {
        errorToast("Error Sending Mail");
        setLoading(false);
        return;
      }

      navigate("/reset_password");
      successToast("Reset link has been sent to your email address!");
      setLoading(false);
    }
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleResetPassword}
      sx={{ mt: 5 }}
    >
      {/* Reset Password form fields */}
      <TextField
        margin="normal"
        required
        fullWidth
        id="registerEmail"
        label="Email Address"
        name="registerEmail"
        autoComplete="email"
      />
      <LoadingButton
        type="submit"
        fullWidth
        loading={loading}
        loadingPosition="start"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {loading ? "Please Wait..." : "Send Reset Link"}
      </LoadingButton>
      <Link component="button" variant="body2" onClick={onCancel}>
        Back to Login
      </Link>
    </Box>
  );
};

export default ResetPasswordForm;
