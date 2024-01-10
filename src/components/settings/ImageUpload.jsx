import React, { useState } from "react";
import { useUser } from "../utils/userContext";
import { Avatar, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LoadingButton from "@mui/lab/LoadingButton";
import { successToast, errorToast } from "../utils/toastUtils";
import { USER_ENDPOINTS } from "../../apiCalls/endpoints";
import requestHandler from "../../apiCalls/requestHandler";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ImageUpload = ({ onImageUpload }) => {
  const [open, setOpen] = React.useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setProfileImage(null);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = async (e) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("user", user.id);
      formData.append("image", profileImage);

      const response = await requestHandler(
        "post",
        USER_ENDPOINTS.UPLOAD_IMAGE,
        formData
      );
      console.log(response);
      if (response) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        successToast("Image Uploaded!");
        onImageUpload(profileImage);
      } else {
        errorToast("Image Upload failed!");
      }
    } catch (error) {
      console.error("Error updating profile image:", error.message);
      errorToast("Failed to update image");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        Upload Image
      </Button>
      <BootstrapDialog
        fullWidth={false} // Set your desired fullWidth value
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Select Image to Uplaod
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Avatar
              src={profileImage ? URL.createObjectURL(profileImage) : user.img}
              sx={{ width: 300, height: 300 }}
            />
            <Avatar
              src={profileImage ? URL.createObjectURL(profileImage) : user.img}
              sx={{ width: 200, height: 200 }}
            />
            <Avatar
              src={profileImage ? URL.createObjectURL(profileImage) : user.img}
              sx={{ width: 80, height: 80 }}
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <input
                accept="image/*"
                type="file"
                id="profile-image-input"
                style={{ display: "none" }}
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
              <label htmlFor="profile-image-input">
                <Button variant="outlined" component="span">
                  Choose Image
                </Button>
              </label>
            </Box>
            <LoadingButton
              autoFocus
              loadingPosition="start"
              variant="outlined"
              onClick={handleImageChange}
              loading={loading}
              sx={{ width: "180px" }}
            >
              {loading ? "Please Wait..." : "Save Changes"}
            </LoadingButton>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
};
export default ImageUpload;
