import { Avatar, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useUser } from "../utils/userContext";

const Profile = () => {
  const { user, auth } = useUser();

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
            label="Phone"
            variant="outlined"
            size="small"
            fullWidth
            defaultValue={user.phone}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
