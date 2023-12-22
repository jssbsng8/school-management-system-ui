import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { successToast, errorToast } from './utils/toastUtils';
import { isEmailValid } from './utils/dataValidator';
import LoadingButton from '@mui/lab/LoadingButton';


const ResetPasswordForm = ({ onSubmit, onCancel }) => {
    const [loading, setLoading] = useState(false);
    const handleResetPassword = async (event) => {
        event.preventDefault();
        setLoading(true);
        // Add logic for handling login data
        const email = event.target.elements.registerEmail.value;
        const validated = isEmailValid(email)
        if (validated[1] === 'error'){
            errorToast(validated[0])
            setLoading(false);
            console.log('here');
        }
        else{
            await new Promise(resolve => setTimeout(resolve, 2000));
            successToast("reset link has been sent to your email address!")
            setLoading(false);
        }
    }
    return (
        <Box component="form" noValidate onSubmit={handleResetPassword} sx={{ mt: 5 }}>
        {/* Login form fields */}
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
            {loading ? 'Please Wait...' : 'Send Reset Link'}
        </LoadingButton>
        <Link component="button" variant="body2" onClick={onCancel}>
            Back to Login
        </Link>
        </Box>
    );
};

export default ResetPasswordForm;
