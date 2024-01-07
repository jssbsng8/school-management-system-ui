import { Box, Grid, Divider, TextField, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { successToast, errorToast } from "../utils/toastUtils";
import { CORE } from "../../apiCalls/endpoints";
import { getFetchedData } from "../../apiCalls/authApi";
// import { updateUserProfile } from "../../apiCalls/authApi";
// import { USER_ENDPOINTS } from "../../apiCalls/endpoints";
import SubjectsSelectionComponent from "./SubjectSelection";

const TeachersDetails = () => {
  const { id } = useParams();
  const [teacherData, setTeacherData] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [selectedClassrooms, setSelectedClassrooms] = useState([]);
  const [selectedSubjects, setSelectedsubjects] = useState([]);
  const [userSubjects, setUserSubjects] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSubjects, setLoadingSubjects] = useState(false);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const fetchedData = await getFetchedData(CORE.GET_TEACHER(id));
        setTeacherData(fetchedData.user);
        setSelectedClassrooms([fetchedData.classroom.id]);
        const usersubject = fetchedData.assigned_subjects;
        // Extracting ids into an array
        const subjectIdsArray = usersubject.map((subject) => subject.id);
        setUserSubjects(subjectIdsArray);
        setSelectedsubjects(subjectIdsArray);
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
        const fetchedData = await getFetchedData(CORE.CLASSROOM);
        setClassrooms(fetchedData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchClassroomData();
  }, []);

  useEffect(() => {
    const fetchSubjectsData = async (classroomId) => {
      try {
        // Set loading state to true when subjects are being fetched
        setLoadingSubjects(true);

        const fetchedData = await getFetchedData(
          CORE.GET_FILTERED_SUBJECT(classroomId)
        );
        setSubjects(fetchedData);

        // Log the updated subjects immediately
        console.log("Updated Subjects:", fetchedData);
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

      console.log("Selected Classroom:", classroomId);
    }
  }, [selectedClassrooms]);

  if (!Object.keys(teacherData).length) {
    return <div>Loading...</div>;
  }

  const handleClassroomToggle = (classroomId) => {
    // If the selected classroom is already selected, deselect it
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

  if (selectedSubjects) {
    console.log("selected Subject: ", selectedSubjects);
  }
  console.log("User Subject: ", userSubjects);
  // console.log(user);
  const handleUpdateProfile = async () => {
    // setLoading(true);
  };

  if (!teacherData) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box>
        <Typography variant="h6" sx={{ my: 3 }}>
          {`${teacherData.username
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}'s Profile Information`}
        </Typography>
        <Divider />
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">Profile image</Typography>
          {/* <Avatar src={teacherData.img} /> */}
          <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
            <TextField
              label="First Name"
              variant="outlined"
              rows={4}
              fullWidth
              defaultValue={teacherData.first_name}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              rows={4}
              fullWidth
              defaultValue={teacherData.last_name}
            />
          </Box>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
            <TextField
              label="Username"
              variant="outlined"
              rows={4}
              fullWidth
              defaultValue={teacherData.username}
            />
            <TextField
              label="Role"
              variant="outlined"
              rows={4}
              fullWidth
              defaultValue={teacherData.role}
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
              defaultValue={teacherData.email}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              defaultValue={teacherData.address}
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
          {console.log("Subjects passed to Options: ", subjects)}
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
