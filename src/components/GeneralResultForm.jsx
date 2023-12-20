import React, { useState } from "react";
import { Typography, Paper, FormControl, InputLabel, MenuItem, Select, Button, Box } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

const GeneralResultForm = ({ onSubmit }) => {
    const [loading, setLoading] = useState(false);
    const [selectedSession, setSelectedSession] = useState("");
    const [selectedClassroom, setSelectedClassroom] = useState("");

    const handleSessionChange = (event) => {
        setSelectedSession(event.target.value);
    };

    const handleClassroomChange = (event) => {
        setSelectedClassroom(event.target.value);
    };

    const handleCheckResult = () => {
        // Call the parent component's function with selectedSession and selectedClassroom
        onSubmit(selectedSession, selectedClassroom, setLoading);
    };
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h6" gutterBottom>
            Check Result
        </Typography>
        <Box sx={{ width: "100%", margin: "auto" }}>
        <FormControl sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="session-label">Session</InputLabel>
            <Select
            labelId="session-label"
            id="session-select"
            value={selectedSession}
            label="Session"
            onChange={handleSessionChange}
            >
            <MenuItem value="2022/2023">2022/2023</MenuItem>
            <MenuItem value="2023/2024">2023/2024</MenuItem>
            {/* Add more session options as needed */}
            </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: "100%" }}>
            <InputLabel id="classroom-label">Classroom</InputLabel>
            <Select
            labelId="classroom-label"
            id="classroom-select"
            value={selectedClassroom}
            label="Classroom"
            onChange={handleClassroomChange}
            >
            <MenuItem value="Class A">Class A</MenuItem>
            <MenuItem value="Class B">Class B</MenuItem>
            {/* Add more classroom options as needed */}
            </Select>
        </FormControl>

        <LoadingButton 
            variant="contained" 
            type="submit"
            onClick={handleCheckResult} 
            loading={loading}
            loadingPosition="start"
            sx={{ mt: 3, mb: 2, width: "20%" }}
            >
            {loading ? 'Checking...' : 'Check Result'}
        </LoadingButton>
        </Box>
    </Paper>
  );
};
export default GeneralResultForm;
