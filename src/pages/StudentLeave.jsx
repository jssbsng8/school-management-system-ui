import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { leaveData, leaveColumn } from "../data/leaveData";

const StudentLeave = () => {
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
        <Typography variant="h6">Leave of Absent</Typography>
        <Link to="/leave/apply" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FiPlus />}
            sx={{ borderRadius: "20px" }}
          >
            Apply Here
          </Button>
        </Link>
      </Box>
      <Table
        data={leaveData}
        fields={leaveColumn}
        numberOfRows={leaveData.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={false}
        enableColumnFilters={true}
        enableEditing={false}
        enableColumnDragging={true}
        showPreview={false}
        routeLink="leave"
      />
    </Box>
  );
};

export default StudentLeave;
