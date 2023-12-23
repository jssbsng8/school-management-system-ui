import React, { useState } from "react";
import { Typography, Paper, FormControl, InputLabel, MenuItem, Select, Box, Grid, Avatar } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { users } from "../data/studentsTeachers";
const RecordResultForm = ({ onSubmit }) => {
    const [loading, setLoading] = useState(false);
    const [selectedSession, setSelectedSession] = useState("");
    const [selectedClassroom, setSelectedClassroom] = useState("");
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedExamType, setExamType] = useState('');

    const handleSessionChange = (event) => {
        setSelectedSession(event.target.value);
    };

    const handleClassroomChange = (event) => {
        setSelectedClassroom(event.target.value);
    };

    const handleExamTypeChange = (event) => {
        setExamType(event.target.value);
        // Additional logic if needed
    };
    const handleUserChange = (event) => {
        setSelectedUserId(event.target.value);
        // Additional logic if needed
    };
    const handleCheckResult = () => {
        // Call the parent component's function with selectedSession and selectedClassroom
        onSubmit(selectedSession, selectedClassroom, selectedUserId, selectedExamType, setLoading);
    };
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h6" gutterBottom>
            Record Result
        </Typography>
        <Box sx={{ width: "100%", margin: "auto" }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" required>
                <InputLabel id="session-label" >Session</InputLabel>
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
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" required>
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
            </Grid>
        </Grid>

        {/* Role and Gender selection fields */}
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" required>
                <InputLabel id="examType-label">Exam Type</InputLabel>
                <Select
                labelId="examType-label"
                id="examType"
                name="examType"
                autoComplete="examType"
                label="Exam Type"
                value={selectedExamType}
                onChange={handleExamTypeChange}
                >
                <MenuItem value="CA-Test">CA-Test</MenuItem>
                <MenuItem value="Examination">Examination</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal" required>
                <InputLabel id="student-label">Student</InputLabel>
                <Select
                labelId="student-label"
                id="student"
                name="student"
                autoComplete="student"
                label="Student"
                value={selectedUserId} // Assuming you have a state to track the selected user ID
                onChange={handleUserChange} // Assuming you have a function to handle user selection
                renderValue={(selected) => {
                const selectedUser = users.find((user) => user.id === selected);
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={selectedUser?.profileImage} alt={selectedUser?.name} sx={{ marginRight: 1 }} />
                    {selectedUser?.name}
                    </div>
                );
                }}
                >
                <MenuItem value=""></MenuItem>
                {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={user.profileImage} alt={user.name} sx={{ marginRight: 1 }} />
                    {user.name}
                    </div>
                </MenuItem>
                ))}
                </Select>
            </FormControl>
            </Grid>
        </Grid>

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
export default RecordResultForm;
