import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { column, editTeacherColumn, teachers } from "../../data/teacher";
import Table from "../../components/Table";

const TeachersDetails = () => {
  const { id } = useParams();

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h5" sx={{ my: 3 }}>
        Teacher Profile
      </Typography>
      <Table
        data={teachers}
        fields={column}
        numberOfRows={teachers.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={false}
        enableRowSelection={false}
        enableColumnFilters={false}
        enableEditing={false}
        enableColumnDragging={false}
      />
      <Typography variant="h6" sx={{ my: 3 }}>
        Assigned/Assign Subjects
      </Typography>
      <Table
        data={teachers}
        fields={column}
        numberOfRows={teachers.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={false}
        enableRowSelection={false}
        enableColumnFilters={false}
        enableEditing={false}
        enableColumnDragging={false}
      />
      <Typography variant="h6" sx={{ my: 3 }}>
        Assigned/Assign ClassRoom
      </Typography>
      <Table
        data={teachers}
        fields={column}
        numberOfRows={teachers.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={false}
        enableRowSelection={false}
        enableColumnFilters={false}
        enableEditing={false}
        enableColumnDragging={false}
      />
    </Box>
  );
};

export default TeachersDetails;
