import { Paper, Typography, Grid } from "@mui/material";

const BarChart = ({ userName, attendancePercentage }) => {
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left column for the student image */}
        <Grid item xs={12} sm={4}>
          {/* Add your student image component or placeholder here */}
          <img
            src="/images/avatars/profile-avatar.png" // Replace with the actual image source
            alt="Student"
            style={{ width: '100%', borderRadius: '50%' }}
          />
        </Grid>

        {/* Right column for the welcome message */}
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom>
            Welcome, {userName}! Keep Going.
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
export default BarChart;
