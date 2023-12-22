import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ResetLinkSent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Paper elevation={6} sx={{ padding: 3, textAlign: 'center', boxShadow: 3, backgroundColor: '#fff' }}>
        {/* Add boxShadow for a subtle shadow effect */}
        <Typography variant="h4" color="green" gutterBottom>
            Link Successfully Sent
        </Typography>
        <Typography variant="body1" paragraph>
            Good Luck!
        </Typography>
        <Typography variant="body2" color="green" paragraph>
            An email with a link to reset your password has been sent to your email address. You will receive this email if user with that email exist
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

export default ResetLinkSent;
