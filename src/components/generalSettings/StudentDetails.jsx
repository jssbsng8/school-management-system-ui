import { Box, Grid, Divider, TextField, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { successToast, errorToast } from "../utils/toastUtils";
import { CORE } from "../../apiCalls/endpoints";
import SubjectsSelectionComponent from "./SubjectSelection";
import requestHandler from "../../apiCalls/requestHandler";

const TeachersDetails = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [selectedClassrooms, setSelectedClassrooms] = useState([]);
  const [selectedSubjects, setSelectedsubjects] = useState([]);
  const [userSubjects, setUserSubjects] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSubjects, setLoadingSubjects] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const fetchedData = await requestHandler("get", CORE.GET_STUDENT(id));
        setStudentData(fetchedData[0].user);
        setSelectedClassrooms([fetchedData[0].classroom.id]);
        const usersubject = fetchedData[0].enrolled_subjects;
        // Extracting ids into an array
        const subjectIdsArray = usersubject.map((subject) => subject.id);
        setUserSubjects(subjectIdsArray);
        setSelectedsubjects(subjectIdsArray);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    return () => fetchStudentData();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const fetchClassroomData = async () => {
      try {
        const fetchedData = await requestHandler("get", CORE.CLASSROOM);

        setClassrooms(fetchedData[0]);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    return () => fetchClassroomData();
  }, []);

  useEffect(() => {
    const fetchSubjectsData = async (classroomId) => {
      try {
        // Set loading state to true when subjects are being fetched
        setLoadingSubjects(true);

        const fetchedData = await requestHandler(
          "get",
          CORE.GET_FILTERED_SUBJECT(classroomId)
        );

        setSubjects(fetchedData[0]);
      } catch (error) {
        // Handle errors appropriately
        console.error("Error fetching subjects:", error.message);
      } finally {
        // Set loading state to false regardless of success or error
        setLoadingSubjects(false);
      }
    };

    if (selectedClassrooms.length !== 0) {
      const classroomId = parseInt(selectedClassrooms.join(""));

      fetchSubjectsData(classroomId);
    }
  }, [selectedClassrooms]);

  if (!Object.keys(studentData).length) {
    return <div>Loading...</div>;
  }

  const handleClassroomToggle = (classroomId) => {
    const updatedSelection =
      selectedClassrooms[0] === classroomId ? [] : [classroomId];
    setSelectedClassrooms(updatedSelection);
    setSelectedsubjects([]);
    setUserSubjects([]);
  };
  const handleAssignSubjectSelection = (selectedSubjects, ...selectedIds) => {
    // new array that includes both old and new items
    const updatedSelectedSubjects = [...selectedSubjects, ...selectedIds];
    setSelectedsubjects(updatedSelectedSubjects);
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    const updatedFields = {
      classroom: selectedClassrooms[0],
      enrolled_subjects: selectedSubjects,
    };

    const fetchedData = await requestHandler(
      "patch",
      CORE.GET_STUDENT(id),
      updatedFields
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (fetchedData[0] === null) {
      errorToast(
        `Error Updating ${
          studentData.username.charAt(0).toUpperCase() +
          studentData.username.slice(1)
        }'s Profile`
      );
      setLoading(false);
    } else {
      successToast(
        `${
          studentData.username.charAt(0).toUpperCase() +
          studentData.username.slice(1)
        }'s Profile Updated!`
      );
      setLoading(false);
    }
  };

  if (!studentData) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box>
        <Typography variant="h6" sx={{ my: 3 }}>
          {`${studentData.username
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}'s Profile Information`}
        </Typography>
        <Divider />
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">Profile image</Typography>
          {/* <Avatar src={studentData.img} /> */}
          <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
            <TextField
              label="First Name"
              variant="outlined"
              rows={4}
              fullWidth
              defaultValue={studentData.first_name}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              rows={4}
              fullWidth
              defaultValue={studentData.last_name}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
            <TextField
              label="Username"
              variant="outlined"
              rows={4}
              fullWidth
              defaultValue={studentData.username}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              label="Role"
              variant="outlined"
              rows={4}
              fullWidth
              defaultValue={studentData.role}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              defaultValue={studentData.email}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              defaultValue={studentData.address}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Typography variant="h6" sx={{ my: 3 }}>
            Assigned/Assign ClassRoom
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Grid container spacing={2}>
              {[classrooms.slice(0, 3), classrooms.slice(3, 6)].map(
                (classroomSlice, index) => (
                  <Grid item xs={6} key={index}>
                    <RadioGroup
                      value={selectedClassrooms[0]}
                      onChange={() => {}}
                    >
                      {classroomSlice.map((classroom) => (
                        <FormControlLabel
                          key={classroom.id}
                          value={classroom.id.toString()}
                          control={<Radio />}
                          label={classroom.title}
                          onChange={() => handleClassroomToggle(classroom.id)}
                        />
                      ))}
                    </RadioGroup>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
          {selectedClassrooms ? (
            loadingSubjects ? ( // Check if subjects are being loaded
              <Typography variant="body1">Loading subjects...</Typography>
            ) : subjects ? (
              <SubjectsSelectionComponent
                options={subjects}
                label="Selected Subjects:"
                placeholder="select subjects"
                onSelectionChange={handleAssignSubjectSelection}
                assigned_subjects={userSubjects}
              />
            ) : (
              <Typography variant="body1">No subjects available.</Typography>
            )
          ) : (
            <Typography variant="body1">Please select classrooms...</Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 3,
            }}
          >
            <LoadingButton
              type="submit"
              loading={loading}
              loadingPosition="start"
              variant="contained"
              onClick={handleUpdateProfile}
              sx={{ width: "180px" }}
            >
              {loading ? "Please Wait..." : "Save Changes"}
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeachersDetails;
