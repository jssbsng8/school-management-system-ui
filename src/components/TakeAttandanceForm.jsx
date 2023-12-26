import React, { useState } from "react";
import { Typography, Paper, FormControl, InputLabel, MenuItem, Select, Box, Grid, TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

const TakeAttendanceForm = ({ onSubmit, loading }) => {
    // const [loading, setLoading] = useState(false);
    const [selectedClassroom, setSelectedClassroom] = useState("");
    const [selectedStream, setSelectedStream] = useState("");
    
    const  getTodayDate = () => {
        return new Date().toISOString().split('T')[0];
    }
    const [dob, setDob] = useState(getTodayDate());
    
    const handleClassroomChange = (event) => {
        setSelectedClassroom(event.target.value);
    };

    const handleStreamChange = (event) => {
        setSelectedStream(event.target.value);
    };

    const handleSearchResult = () => {

        // Call the parent component's function with selectedSession and selectedClassroom
        onSubmit( selectedClassroom, selectedStream, loading);
    };
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Typography variant="h6" gutterBottom>
        Query Result
      </Typography>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="session-label">Classroom</InputLabel>
              <Select
                labelId="session-label"
                id="session-select"
                value={selectedClassroom}
                label="Session"
                onChange={handleClassroomChange}
              >
                <MenuItem value="2022/2023">JUNIOR SECONDARY SCHOOL 1</MenuItem>
                <MenuItem value="2023/2024">JUNIOR SECONDARY SCHOOL 3</MenuItem>
                {/* Add more session options as needed */}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="classroom-label">Stream</InputLabel>
              <Select
                labelId="classroom-label"
                id="classroom-select"
                value={selectedStream}
                label="Classroom"
                onChange={handleStreamChange}
              >
                <MenuItem value="Class A">Class A</MenuItem>
                <MenuItem value="Class B">Class B</MenuItem>
                {/* Add more classroom options as needed */}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="dob"
              type="date"
              id="dob"
              autoComplete="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Grid>
        </Grid>

        <LoadingButton
          variant="contained"
          type="submit"
          onClick={handleSearchResult}
          loading={loading}
          loadingPosition="start"
          sx={{ mt: 3, mb: 2, width: "15%" }}
        >
          {loading ? "Searching..." : "Search"}
        </LoadingButton>
      </Box>
    </Paper>
  );
};
export default TakeAttendanceForm;
