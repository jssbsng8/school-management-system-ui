import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";

import { subjects, subjectColumns } from "../data/subjects";

const Subjects = () => {
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
        <Typography variant="h6">Assigned Subjects</Typography>
      </Box>
      <Table
        data={subjects}
        fields={subjectColumns}
        numberOfRows={subjects.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={false}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
        showPreview={true}
        routeLink="subjects"
      />
    </Box>
  );
};

export default Subjects;
