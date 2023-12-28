import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { classrooms, classroomColumns } from "../data/classrooms";

const Classrooms = () => {
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
        <Typography variant="h6">Classes</Typography>
      </Box>
      {classrooms ? (
        <Table
          data={classrooms}
          fields={classroomColumns}
          numberOfRows={classrooms.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={false}
          enableColumnFilters={true}
          enableEditing={false}
          enableColumnDragging={true}
          showPreview={false}
          routeLink="classrooms"
        />
      ) : (
        "No Classroom Assigned Yet!"
      )}
    </Box>
  );
};

export default Classrooms;
