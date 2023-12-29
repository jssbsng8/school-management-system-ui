import React from "react";
import { Box, Typography, Paper, Toolbar } from "@mui/material";
import TableEditable from "../TableEditable";
import { classrooms, editClassroomColumn } from "../../data/classrooms";

const Classrooms = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", pb: "20px" }}
    >
      <Paper sx={{mb:1}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add/Edit Classroom
          </Typography>
        </Toolbar>
      </Paper>
      {classrooms ? (
        <TableEditable
          myData={classrooms}
          myColumns={editClassroomColumn}
          enableSubmitButton={true}
          enableAddNewRow={true}
          Decision={"John Cena"}
        />
      ) : (
        <Typography variant="h6">No Leave Request(s)</Typography>
      )}
    </Box>
  );
};

export default Classrooms;
