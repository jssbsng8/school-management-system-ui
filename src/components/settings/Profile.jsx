import { Avatar, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useUser } from "../utils/userContext";
import LoadingButton from '@mui/lab/LoadingButton';


const Profile = () => {
  const { user, auth } = useUser();
  const [loading, setLoading] = useState(false);

  if (!auth) {
    // User is not logged in, redirecting is handled in the custom hook
    return null;
  }

  return (
    <Box>
      <Typography variant="subtitle1">Profile</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.8, pb: 2 }}>
        Update your photo and profile here
      </Typography>
      <Divider />
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1">Profile image</Typography>
        <Avatar src={user.img} />
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <TextField
            label="First Name"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            defaultValue={user.first_name}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            defaultValue={user.last_name}
          />
        </Box>
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <TextField
            label="Username"
            variant="outlined"
            rows={4}
            size="small"
            fullWidth
            defaultValue={user.username}
          />
          <TextField
            label="Role"
            variant="outlined"
            rows={4}
            size="small"
            fullWidth
            defaultValue={user.role}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            defaultValue={user.email}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <TextField
            label="Address"
            variant="outlined"
            size="small"
            fullWidth
            defaultValue={user.address}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 3,
          }}
        >
          <LoadingButton
            type="submit"
            loading={loading}
            loadingPosition="start"
            variant="contained"
          >
            {loading ? 'Please Wait...' : 'Save Changes'}
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
