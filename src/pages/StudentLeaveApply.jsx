import styled from "@emotion/styled";
import Grid from '@mui/material/Grid';
import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";

const StudentLeaveApply = () => {
  const [category, setCategory] = useState("");
  const imageInput = useRef(null);
  const [image, setImage] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [tillDate, setTillDate] = useState(null);


  const handleChange = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleTillDateChange = (date) => {
    setTillDate(date);
  };


  const UploadBox = styled(Box)({
    marginTop: 30,
    height: 200,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "divider",
  });

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Apply For Leave of Absence
      </Typography>
      <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          p: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <Box sx={{ my: 2 }}>
          <TextField
            label="Student Name"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <TextField
            label="Reason"
            variant="outlined"
            rows={4}
            fullWidth
            multiline
          />
        </Box>
        <Box sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
                <TextField
                    margin="normal"
                    label="From"
                    required
                    fullWidth
                    name="dob"
                    type="date"
                    id="dob"
                    autoComplete="dob"
                />
            </Grid>
        </Box>
        <Box sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
                <TextField
                    margin="normal"
                    required
                    label="To"
                    fullWidth
                    name="dob"
                    type="date"
                    id="dob"
                    autoComplete="dob"
                />
            </Grid>
        </Box>
        <input
          type="file"
          hidden
          ref={imageInput}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <UploadBox onClick={() => imageInput.current.click()}>
          {image ? (
            <img
              src={image && URL.createObjectURL(image)}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <BiImageAdd style={{ fontSize: "50px", color: "#027edd" }} />
              <Typography>
                Drop Image Evidence here or{" "}
                <span style={{ color: "#027edd", cursor: "pointer" }}>
                  browse
                </span>
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                JPG, PNG and GIF images are allowed
              </Typography>
            </Box>
          )}
        </UploadBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "30px",
          }}
        >
          <Button variant="contained" sx={{ borderRadius: "20px" }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default StudentLeaveApply;
