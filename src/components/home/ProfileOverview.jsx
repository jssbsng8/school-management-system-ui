import { Paper, Typography, Grid, Avatar } from "@mui/material";
import { useUser } from "../utils/userContext";

const ProfileOverview = ({ fullName, attendancePercentage, userName }) => {
  const { role } = useUser();
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Avatar
            src={localStorage.getItem("userImage")}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="h4" gutterBottom>
            {role === "Student"
              ? `Welcome, ${fullName}! Keep Going.`
              : `Welcome, Mr. ${userName.toUpperCase()}! Ready to Inspire.`}
          </Typography>
          <Typography paragraph>
            {role === "Student"
              ? `Your current attendance is ${attendancePercentage.toFixed(
                  2
                )}%, which is ${
                  attendancePercentage > 75 ? "above" : "below or equal to"
                } 75.00% of the minimum attendance mark.`
              : `You are currently assigned to teach 
            ${
              role === "Teacher" && (
                <span style={{ color: "green" }}>Mathematics</span>
              )
            } and 
            ${
              role === "Teacher" && (
                <span style={{ color: "green" }}>Biology.</span>
              )
            } Keep track of your class schedules, manage student performance, and mark attendance to ensure a productive learning environment. Your dedication makes a difference!`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ProfileOverview;
