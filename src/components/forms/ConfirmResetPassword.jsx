import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Grid, Typography, Avatar, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const ConfirmPasswordReset = ({ onSubmit, loading }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirm_password.value;
    onSubmit(password, confirmPassword);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding="20px"
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          {/* Login form fields */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="New Password"
            name="password"
            autoComplete="password"
            type="password"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Confirm New Password"
            type="password"
            id="confirm_password"
            autoComplete="current-password"
          />
          <LoadingButton
            type="submit"
            fullWidth
            loading={loading}
            loadingPosition="start"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? "Please Wait..." : "Change Password"}
          </LoadingButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConfirmPasswordReset;
