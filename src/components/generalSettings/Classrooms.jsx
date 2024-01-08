import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Toolbar } from "@mui/material";
import TableEditable from "../TableEditable";
import { editClassroomColumn } from "../../data/classrooms";
import { successToast, errorToast } from "../utils/toastUtils";
import {
  getFetchedData,
  postRequest,
  patchRequest,
  deleteRequest,
} from "../../apiCalls/authApi";
import { CORE } from "../../apiCalls/endpoints";

const Classrooms = () => {
  const [classroomData, setClassroomData] = useState();

  useEffect(() => {
    const classroomDataFromApi = async () => {
      try {
        const fetchedData = await getFetchedData(CORE.CLASSROOM);
        // setClassroomData((prevData) => [...prevData, ...fetchedData]);
        setClassroomData(fetchedData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    classroomDataFromApi();
    // eslint-disable-next-line
  }, []);

  const handleNewRowSave = async (newClassroom) => {
    if (newClassroom.isNew) {
      // handle new row
      try {
        const successful = await postRequest(CORE.CLASSROOM, newClassroom);
        if (successful) {
          successToast("New row added!");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      // handle update row
      try {
        if (Object.keys(newClassroom.updatedFields).length !== 0) {
          const successful = await patchRequest(
            CORE.GET_CLASSROOM(newClassroom.id),
            newClassroom.updatedFields
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
  const handleDeleteRow = async (classroomId) => {
    try {
      const successful = await deleteRequest(CORE.GET_CLASSROOM(classroomId));
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
            Add/Edit Classroom
          </Typography>
        </Toolbar>
      </Paper>
      {classroomData ? (
        <TableEditable
          myData={classroomData}
          myColumns={editClassroomColumn}
          enableSubmitButton={false}
          enableAddNewRow={true}
          onNewRowSave={handleNewRowSave}
          onDeleteRow={handleDeleteRow}
          Decision={false}
        />
      ) : (
        <Typography variant="h6">Loading classroom data...</Typography>
      )}
    </Box>
  );
};

export default Classrooms;
