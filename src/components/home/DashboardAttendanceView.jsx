import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { subjects } from "../../data/subjects";
import { useUser } from "../utils/userContext";
import AttendanceOverview from "../AttendanceOverview";
import { dashboardAttendanceData } from "../../data/attendanceData";
const DashboardAttendanceView = () => {
  const { role } = useUser()
  const attendance = dashboardAttendanceData()
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper
          sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",

            padding: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {role === "Student" && (
              <Typography variant="h5" sx={{ pb: 1 }}>
                Enrolled Subject
              </Typography>
            )}
            {role === "Teacher" && (
              <Typography variant="h5" sx={{ pb: 1 }}>
                Subject Offered
              </Typography>
            )}

            <FaEllipsisH />
          </Box>
          <Divider />
          <Box sx={{ marginTop: 1 }}>
            {subjects
              .slice(0, 4)
              .map(({ id, title, code, img }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "10px 0",
                  }}
                  key={id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    {/* <Avatar src={img} sx={{ width: 30, height: 30 }} /> */}
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: "18px" }}>
                        {title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                        {code}
                      </Typography>
                    </Box>
                  </Box>
                  <FaEllipsisH />
                </Box>
              ))}
          </Box>
          <Divider />
          <Typography variant="subtitle1" sx={{ textAlign: "center", mt: 1 }}>
            <Link to="/subjects" className="link">
              View more
            </Link>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",

          padding: "16px",
        }}
      
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">Student Today's Attendance</Typography>
            <Divider />
            <Typography variant="subtitle1" sx={{ textAlign: "right", mt: .3 }}>
              <Link to="/take_attendance" className="link">
                Take Attendance
              </Link>
            </Typography>
          </Box>
          <Box sx={{ mt: 1 }}>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <AttendanceOverview
                title="Students Present Today"
                data = {attendance.present_ratio}
                progress={attendance.percentage_total_present}
              />
            </div>
          </Box>
        </Paper>
        <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          paddingX: "16px",
          marginTop: "10px",}}
  
        >     
          <Box>
              <AttendanceOverview
                title={`${attendance.present} PRESENT`}
                data={`${attendance.percentage_present}%`}
                progress={attendance.percentage_present}
              />
              <AttendanceOverview
                title={`${attendance.late} LATE`}
                data={`${attendance.percentage_late}%`}
                progress={attendance.percentage_late}
              />
              <AttendanceOverview
                title={`${attendance.absent} ABSENT`}
                data={`${attendance.percentage_absent}%`}
                progress={attendance.percentage_absent}
              />
              <AttendanceOverview
                title={`${attendance.half_day} HALF DAT`}
                data={`${attendance.percentage_half_day}%`}
                progress={attendance.percentage_half_day}
              />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardAttendanceView;
