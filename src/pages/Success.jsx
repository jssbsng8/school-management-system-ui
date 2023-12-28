import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          textAlign: "center",
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        {/* Add boxShadow for a subtle shadow effect */}
        <Typography variant="h4" color="green" gutterBottom>
          Registration Successful
        </Typography>
        <Typography variant="body1" paragraph>
          We appreciate your registration.
        </Typography>
        <Typography variant="body2" color="green" paragraph>
          An email with further instructions has been sent to your email
          address.
        </Typography>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
        >
          Go to Login
        </Button>
      </Paper>
    </Box>
  );
};

export default SuccessPage;
