import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { useUser } from "../components/utils/userContext";
import { subjectColumns } from "../data/subjects";

const Subjects = () => {
  const { subjects, role } = useUser()
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
        <Typography variant="h6">
          {role === 'Student' ? 'Enrolled Subjects' : 'Assigned Subjects'}
        </Typography>
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
        enableEditing={false}
        enableColumnDragging={true}
        showPreview={false}
        routeLink="subjects"
      />
    </Box>
  );
};

export default Subjects;
