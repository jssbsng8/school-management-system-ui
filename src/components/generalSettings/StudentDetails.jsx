import {
  Box,
  Grid,
  Paper,
  Avatar,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { successToast, errorToast } from "../utils/toastUtils";
import { CORE } from "../../apiCalls/endpoints";
import {
  getFetchedData,
  postData,
  patchData,
  deleteData,
} from "../../apiCalls/authApi";
import { warningToast } from "../utils/toastUtils";
import { updateUserProfile } from "../../apiCalls/authApi";
import { USER_ENDPOINTS } from "../../apiCalls/endpoints";
import SubjectsSelectionComponent from "./SubjectSelection";

const TeachersDetails = () => {
  const { id } = useParams();
  const [teacherData, setTeacherData] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [selectedClassrooms, setSelectedClassrooms] = useState([]);
  const [selectedSubjects, setSelectedsubjects] = useState([]);
  const [userSubjects, setUserSubjects] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [firstName, setFirstName] = useState(teacherData.first_name || "");
  const [lastName, setLastName] = useState(teacherData.last_name || "");
  const [username, setUsername] = useState(teacherData.username || "");
  const [email, setEmail] = useState(teacherData.email || "");
  const [address, setAddress] = useState(teacherData.address || "");
  const [loading, setLoading] = useState(false);
  const [loadingSubjects, setLoadingSubjects] = useState(false);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const fetchedData = await getFetchedData(CORE.GET_STUDENT(id));
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

  // useEffect(() => {
  //   const fetchSubjectsData = async (classroomId) => {
  //     try {
  //       const fetchedData = await getFetchedData(
  //         CORE.GET_FILTERED_SUBJECT(classroomId)
  //       );
  //       setSubjects(fetchedData);
  //       // setSelectedsubjects(fetchedData)
  //     } catch (error) {
  //       console.error("Error:", error.message);
  //     }
  //   };

  //   if (selectedClassrooms.length !== 0) {
  //     const classroomId = parseInt(selectedClassrooms.join(""));
  //     fetchSubjectsData(classroomId);
  //     console.log("Selected Classroom:", classroomId);
  //   }
  // }, [selectedClassrooms]);
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
  // console.log(subjects);
  // const handleClassroomToggle = (classroomId) => {
  //   setSelectedClassrooms((prevSelected) => {
  //     if (prevSelected.includes(classroomId)) {
  //       // If subjectId is already in the array, remove it
  //       return prevSelected.filter((id) => id !== classroomId);
  //     } else {
  //       // If subjectId is not in the array, add it
  //       return [...prevSelected, classroomId];
  //     }
  //   });
  // };
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

    const updatedFields = Object.entries({
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      address,
    }).reduce((acc, [key, value]) => {
      if (
        value !== teacherData[key] &&
        typeof value !== "undefined" &&
        value !== ""
      ) {
        acc[key] = value;
      }
      return acc;
    }, {});
    console.log(updatedFields);

    // function to update the user profile
    // if (Object.keys(updatedFields).length !== 0) {
    //   try {
    //     // Assuming updateUserProfile returns the updated user profile
    //     const updatedUserProfile = await updateUserProfile(
    //       USER_ENDPOINTS.GET_OR_UPDATE_USER(teacherData.id),
    //       updatedFields
    //     );

    //     // Check if the response is successful
    //     if (updatedUserProfile) {
    //       await new Promise((resolve) => setTimeout(resolve, 3000));
    //       Object.keys(updatedFields).forEach((key) => {
    //         switch (key) {
    //           case "first_name":
    //             setFirstName(updatedUserProfile.first_name);
    //             break;
    //           case "last_name":
    //             setLastName(updatedUserProfile.last_name);
    //             break;
    //           case "username":
    //             setUsername(updatedUserProfile.username);
    //             break;
    //           case "email":
    //             setEmail(updatedUserProfile.email);
    //             break;
    //           case "address":
    //             setAddress(updatedUserProfile.address);
    //             break;
    //           default:
    //             break;
    //         }
    //       });

    //       successToast("Profile updated successfully");
    //     } else {
    //       errorToast("Failed to update profile");
    //     }
    //   } catch (error) {
    //     console.error("Error updating profile:", error);
    //     errorToast("An error occurred while updating profile");
    //   } finally {
    //     setLoading(false);
    //   }
    // } else {
    //   warningToast("No changes to update");
    //   setLoading(false);
    // }
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
              onChange={(e) => setFirstName(e.target.value)}
              defaultValue={teacherData.first_name}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              rows={4}
              fullWidth
              onChange={(e) => setLastName(e.target.value)}
              defaultValue={teacherData.last_name}
            />
          </Box>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
            <TextField
              label="Username"
              variant="outlined"
              rows={4}
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={teacherData.email}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              onChange={(e) => setAddress(e.target.value)}
              defaultValue={teacherData.address}
            />
          </Box>
          <Typography variant="h6" sx={{ my: 3 }}>
            Assigned/Assign ClassRoom
          </Typography>

          {/* <Box sx={{ display: "flex" }}>
            <Grid container spacing={2}>
              {[classrooms.slice(0, 3), classrooms.slice(3, 6)].map(
                (classroomSlice, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {classroomSlice.map((classroom) => (
                        <FormControlLabel
                          key={classroom.id}
                          control={
                            <Checkbox
                              checked={selectedClassrooms.includes(
                                classroom.id
                              )}
                              onChange={() =>
                                handleClassroomToggle(classroom.id)
                              }
                            />
                          }
                          label={classroom.title}
                        />
                      ))}
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box> */}
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
