import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { teachersReviewData } from "../data/teachersReviewsData";
import LoadingButton from '@mui/lab/LoadingButton';
import { successToast, errorToast } from "../components/utils/toastUtils";
import React, { useState } from "react";

const TeachersAddReview = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    teacherName: "",
    classroom: "",
    rating: 1,
    review: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (event) => {
    const rating = parseFloat(event.target.value);
    setFormData({ ...formData, rating });
  };

  const handleFormSubmit = async() => {
    setLoading(true)
    // Handle logic for checking exam results based on selectedSession and selectedClassroom
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const response = {"ok": true, "status_code": 200};
    if (response.ok){
        console.log(formData);
        setLoading(false)
        successToast('Submitted!')
    }
    else{
        errorToast('Error Submitting Form')
        setLoading(false)
    }
};
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Review Teacher
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
        <Box sx={{ mt: 4 }}>
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="role-label">Teacher Name</InputLabel>
            <Select
              labelId="role-label"
              id="teacherName"
              name="teacherName"
              autoComplete="teacherName"
              label="Teacher Name"
              required
              value={formData.teacherName}
              onChange={handleInputChange}
            >
              {teachersReviewData?.map(({ id, name }) => (
                <MenuItem value={name} key={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mt: 4 }}>
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="role-label">Class Room</InputLabel>
          <Select
            labelId="role-label"
            id="classroom"
            name="classroom"
            autoComplete="classroom"
            label="Class Room"
            required
            value={formData.classroom}
            onChange={handleInputChange}
          >
            <MenuItem value="Class A">Class A</MenuItem>
            <MenuItem value="Class B">Class B</MenuItem>
            <MenuItem value="Class C">Class C</MenuItem>
          </Select>
        </FormControl>
        </Box>

        <Box sx={{ mt: 4 }}>
            <TextField
                label="Rating"
                variant="outlined"
                type="number" // Set the type to "number"
                size="small"
                fullWidth
                inputProps={{
                min: 1, 
                max: 5,
                step: 0.1,
                }}
                name="rating"
                value={formData.rating}
                onChange={handleRatingChange}
            />
        </Box>

        <Box sx={{ mt: 4 }}>
          <TextField
            label="Review"
            variant="outlined"
            rows={4}
            fullWidth
            multiline
            name="review"
            value={formData.review}
            onChange={handleInputChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "30px",
          }}
        >
          <LoadingButton 
                variant="contained" 
                onClick={handleFormSubmit} 
                loading={loading}
                loadingPosition="start"
                sx={{ mt: 3, mb: 2, width: "25%" }}
                >
                {loading ? 'Submitting...' : 'Submit'}
          </LoadingButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default TeachersAddReview;
