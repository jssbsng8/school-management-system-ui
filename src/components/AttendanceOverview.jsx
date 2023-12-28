import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const AttendanceOverview = ({ title, data, progress }) => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
    }}>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "right"}}>{data}</Typography>
        </Box>
      <Box sx={{
        width: "100%",
      }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            borderRadius: "4px",
          }}
        />
      </Box>
    </Box>
  );
};

export default AttendanceOverview