import React from "react";
import { Box, Typography, Paper, Toolbar } from "@mui/material";
import TableEditable from "../TableEditable";
import { addSubjects, editSubjectColumn } from "../../data/subjects";
const Subjects = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", pb: "20px" }}
    >
      <Paper sx={{mb:1}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add/Edit Subjects
          </Typography>
        </Toolbar>
      </Paper>
      {addSubjects ? (
        <TableEditable
          myData={addSubjects}
          myColumns={editSubjectColumn}
          enableSubmitButton={true}
          enableAddNewRow={true}
        />
      ) : (
        <Typography variant="h6">No Available Subject(s)</Typography>
      )}
    </Box>
  );
};

export default Subjects;
