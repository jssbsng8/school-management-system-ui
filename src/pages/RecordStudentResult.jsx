import { Box, Typography } from "@mui/material";
import React from "react";
import TableEditable from "../components/TableEditable";
import { myData, myColumns } from "../data/recordResult";
const LeaveRequests = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6">Record Student Results</Typography>
      </Box>
      {myData ? (
        <TableEditable
          myData={myData}
          myColumns={myColumns}
          enableSubmitButton={true}
          enableAddNewRow={true}
        />
      ) : (
        <Typography variant="h7" sx={{ marginTop: "20px" }}>
          No Student Assigned yet
        </Typography>
      )}
    </Box>
  );
};

export default LeaveRequests;
