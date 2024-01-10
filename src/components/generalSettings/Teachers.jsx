import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Toolbar } from "@mui/material";
import { column } from "../../data/teacher";
import Table from "../../components/Table";
import { CORE } from "../../apiCalls/endpoints";
import requestHandler from "../../apiCalls/requestHandler";

const Teachers = () => {
  const [teacherData, setTeacherData] = useState();

  useEffect(() => {
    const fetchClassroomData = async () => {
      try {
        const fetchedData = await requestHandler("get", CORE.TEACHER);
        const arrayOfUsers = fetchedData.map((obj) => ({
          ...obj.user,
          id: obj.id,
        }));
        setTeacherData(arrayOfUsers);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchClassroomData();
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", pb: "20px" }}
    >
      <Paper sx={{ mb: 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add/Edit Teachers
          </Typography>
        </Toolbar>
      </Paper>

      <Box sx={{ mt: 2 }}>
        {teacherData ? (
          <Table
            data={teacherData}
            fields={column}
            numberOfRows={teacherData.length}
            enableTopToolBar={true}
            enableBottomToolBar={true}
            enablePagination={true}
            enableRowSelection={false}
            enableColumnFilters={true}
            enableEditing={true}
            enableColumnDragging={true}
            showPreview={true}
            routeLink="teacher"
          />
        ) : (
          <Typography variant="h6">Loading teachers data...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Teachers;
