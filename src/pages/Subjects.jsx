import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { useUser } from "../components/utils/userContext";
import { subjectColumns } from "../data/subjects";
import { fetchSubjects } from "../apiCalls/requestHandler";
const Subjects = () => {
  const { role } = useUser;
  const [subjects, setSubjects] = useState();

  useEffect(() => {
    /*
      useEffect triggers the provided function (fetchDatas(setSubject))
      when the component mounts. The dependency array ([]) ensures it runs only once on mount.
      This effect set the user(teacher/student) subject they are assigned or enrolled.
    */
    fetchSubjects(setSubjects);
  }, []);
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
          {role === "Student" ? "Enrolled Subjects" : "Assigned Subjects"}
        </Typography>
      </Box>
      {subjects ? (
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
      ) : (
        <p>
          {role === "Teacher"
            ? "No Subject Assigned Yet!"
            : "No Subjects Enrolled Yet"}
        </p>
      )}
    </Box>
  );
};

export default Subjects;
