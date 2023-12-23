import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";
import { useUser } from "../components/utils/userContext";
import { teachers, students, studentColumns, teachersColumns } from "../data/studentsTeachers";


const StudentsTeachers = () => {
  const { role } = useUser()
  let tableData;
  if(role === "Student"){
    tableData = {"data": teachers, "column": teachersColumns}
  }
  else if(role === "Teacher"){
    tableData = {"data": students, "column": studentColumns}
  }
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
        {role === "Student" && (
          <Typography variant="h6">Assigned Teachers</Typography>
        )}
        {role === "Teacher" && (
          <Typography variant="h6">Students</Typography>
        )}
      </Box>
      {
      tableData ? (
        <Table
          data={tableData.data}
          fields={tableData.column}
          numberOfRows={tableData.data.length}
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
      ) : (
        <p>{role === 'Teacher' ? 'No Student(s) Assigned Yet!' : 'No Teacher(s) Enrolled Yet'}</p>
      )
      }
    </Box>
  );
};

export default StudentsTeachers;
