import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { timetableData, timetableColumns } from "../data/timetable";

const Timetable = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Timetable
      </Typography>
      <Table
        data={timetableData}
        fields={timetableColumns}
        numberOfRows={timetableData.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
        showPreview
        routeLink="timetable"
      />
    </Box>
  );
};

export default Timetable;
