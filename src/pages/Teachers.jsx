import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";

import { teachers, teachersColumns } from "../data/teachers";

const Teachers = () => {
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
        <Typography variant="h6">Assigned Teachers</Typography>
      </Box>
      <Table
        data={teachers}
        fields={teachersColumns}
        numberOfRows={teachers.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={false}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
        showPreview={true}
        routeLink="teachers"
      />
    </Box>
  );
};

export default Teachers;
