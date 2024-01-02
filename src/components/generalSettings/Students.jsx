import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Toolbar } from "@mui/material";
import TableEditable from "../TableEditable";
import { column, editTeacherColumn, teachers } from "../../data/teacher";
import Table from "../../components/Table"
import { successToast, errorToast } from "../utils/toastUtils";
import {
  getFetchedData,
  postData,
  patchData,
  deleteData,
} from "../../apiCalls/authApi";
import { CORE } from "../../apiCalls/endpoints";

const Students = () => {
  const [teacherData, setTeacherData] = useState(teachers);
  //   const [classrooms, setClassroomData] = useState();
  const sub = teacherData[0];
  console.log(sub);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const fetchedData = await getFetchedData(CORE.TEACHER);
        // setClassroomData((prevData) => [...prevData, ...fetchedData]);
        // setTeacherData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchTeacherData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchClassroomData = async () => {
      try {
        const fetchedData = await getFetchedData(CORE.TEACHER);
        // setClassroomData(fetchedData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchClassroomData();
    // eslint-disable-next-line
  }, []);

  const handleNewRowSave = async (newTeachers) => {
    if (newTeachers.isNew) {
      // handle new row
      try {
        const successful = await postData(CORE.TEACHER, newTeachers);
        console.log(newTeachers);
        if (successful) {
          successToast("New row added!");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      // handle update row
      try {
        if (Object.keys(newTeachers.updatedFields).length !== 0) {
          const successful = await patchData(
            CORE.GET_TEACHER(newTeachers.id),
            newTeachers.updatedFields
          );
          if (successful) {
            successToast("Data Updated!");
          }
        } else {
          errorToast("No changes detected!");
        }
      } catch (error) {
        console.error("Error saving/updating classroom data:", error.message);
      }
    }
  };
  const handleDeleteRow = async (teacherId) => {
    try {
      const successful = await deleteData(CORE.GET_TEACHER(teacherId));
      if (successful) {
        successToast("Classroom deleted!");
      }
    } catch (error) {
      console.error("Error deleting classroom:", error.message);
      errorToast("Error deleting classroom");
    }
  };

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", pb: "20px" }}
    >
      <Paper sx={{ mb: 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Students
          </Typography>
        </Toolbar>
      </Paper>

      {/* First Box with TableEditable */}
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
            routeLink="student"
          />
        ) : (
          <Typography variant="h6">Loading teachers data...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Students;
