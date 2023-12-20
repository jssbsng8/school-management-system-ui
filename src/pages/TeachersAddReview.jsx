import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { teachersReviewData } from "../data/teachersReviewsData";

const TeachersAddReview = () => {

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
              id="name"
              name="name"
              autoComplete=""
              label="Teacher Name"
              required
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
            >
              <MenuItem value="Admin">Class A</MenuItem>
              <MenuItem value="Student">Class B</MenuItem>
              <MenuItem value="Teacher">Class C</MenuItem>
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
            />
        </Box>

        <Box sx={{ mt: 4 }}>
          <TextField
            label="Product Description"
            variant="outlined"
            rows={4}
            fullWidth
            multiline
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
          <Button variant="contained" sx={{ borderRadius: "20px" }}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default TeachersAddReview;
