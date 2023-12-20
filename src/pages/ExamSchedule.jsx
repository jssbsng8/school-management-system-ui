import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { examScheduleData, examScheduleColumn } from "../data/examSchedule";

const ExamSchedule = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Timetable
      </Typography>
      <Table
        data={examScheduleData}
        fields={examScheduleColumn}
        numberOfRows={examScheduleData.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={false}
        enableColumnFilters={true}
        enableEditing={false}
        enableColumnDragging={true}
        showPreview={false}
        routeLink="timetable"
      />
    </Box>
  );
};

export default ExamSchedule;
