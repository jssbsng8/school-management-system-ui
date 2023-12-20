import { Paper, Typography, Grid } from "@mui/material";

const StudentResultCard = ({ userName, attendancePercentage }) => {
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
  <Grid container spacing={2} alignItems="center">

    <Grid item xs={12} sm={8}>
        {/* Student information */}
        <Typography variant="h6" gutterBottom>
            Student Information
        </Typography>
        <Typography>
            Registration Number: AGE/2019/002
        </Typography>
        <Typography>
            Name: {userName.toUpperCase()}
        </Typography>
        <Typography>
            Session/Semester: HARMATTAN SEMESTER 2022/2023 SESSION
        </Typography>
        <Typography>
            Current Class: Junior Secondary School 3
        </Typography>

        <Typography variant="h6" gutterBottom>
            Result Summary
        </Typography>
        <Typography paragraph>
            Your current attendance is {attendancePercentage.toFixed(2)}%, which is{' '}
            {attendancePercentage > 75 ? 'above' : 'below or equal to'} 75.00% of the minimum attendance mark.
        </Typography>
    </Grid>
  </Grid>
</Paper>

  );
};
export default StudentResultCard;
