import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Toolbar } from "@mui/material";
import TableEditable from "../TableEditable";
import { editSubjectColumn } from "../../data/subjects";
import { successToast, errorToast, infoToast } from "../utils/toastUtils";
import requestHandler from "../../apiCalls/requestHandler";
import { CORE } from "../../apiCalls/endpoints";

const Subjects = () => {
  const [subjectData, setSubjectData] = useState();
  const [classrooms, setClassroomData] = useState();

  useEffect(() => {
    const fetchSubjectData = async () => {
      try {
        const fetchedData = await requestHandler("get", CORE.SUBJECT);
        // setClassroomData((prevData) => [...prevData, ...fetchedData]);
        setSubjectData(fetchedData[0]);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchSubjectData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchClassroomData = async () => {
      try {
        const fetchedData = await requestHandler("get", CORE.CLASSROOM);
        setClassroomData(fetchedData[0]);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchClassroomData();
    // eslint-disable-next-line
  }, []);

  const handleNewRowSave = async (newSubjects) => {
    if (newSubjects.isNew) {
      // handle new row
      try {
        const fetchedData = await requestHandler(
          "post",
          CORE.SUBJECT,
          newSubjects
        );

        if (fetchedData[0]) {
          successToast("New row added!");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      // handle update row
      try {
        if (Object.keys(newSubjects.updatedFields).length !== 0) {
          const fetchedData = await requestHandler(
            "patch",
            CORE.GET_SUBJECT(newSubjects.id),
            newSubjects.updatedFields
          );

          if (fetchedData[0]) {
            successToast("Data Updated!");
          }
        } else {
          infoToast("No changes detected!");
        }
      } catch (error) {
        console.error("Error saving/updating classroom data:", error.message);
      }
    }
  };
  const handleDeleteRow = async (subjectId) => {
    try {
      const fetchedData = await requestHandler(
        "delete",
        CORE.GET_SUBJECT(subjectId)
      );

      if (fetchedData[0] === "") {
        successToast("Classroom deleted!");
      }
    } catch (error) {
      console.error("Error deleting classroom:", error.message);
      errorToast("Error deleting classroom");
    }
  };
  const columns = [
    ...editSubjectColumn,
    {
      field: "class_room",
      headerName: "ClassRoom",
      width: 350,
      align: "left",
      editable: true,
      type: "singleSelect",
      valueOptions: classrooms
        ? classrooms.map((classroom) => ({
            value: classroom.id,
            label: classroom.title,
          }))
        : [],
    },
  ];

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", pb: "20px" }}
    >
      <Paper sx={{ mb: 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add/Edit Subjects
          </Typography>
        </Toolbar>
      </Paper>
      {subjectData ? (
        <TableEditable
          myData={subjectData}
          myColumns={columns}
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

export default Subjects;
