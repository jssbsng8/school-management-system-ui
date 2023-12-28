import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import TakeAttendanceForm from "../components/forms/TakeAttandanceForm";
import { errorToast, successToast } from "../components/utils/toastUtils";
import { columns, rows } from "../data/takeAttendance";
import TableEditable from "../components/TableEditable";

const TakeAttendance = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchResult = async (selectedClassroom, selectedStream) => {
    setData(null);
    setLoading(true);
    // Handle logic for checking exam results based on selectedSession and selectedClassroom
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const fetchedData = rows;

    if (fetchedData) {
      setData(fetchedData);
      console.log(
        "Checking results for stream:",
        selectedStream,
        "Classroom:",
        selectedClassroom
      );
      setLoading(false);

      successToast("Success"); //logs 3 times
    } else {
      errorToast("No results found for the selected session.");
      setLoading(false);
    }
  };

  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <ToastContainer />
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Results
      </Typography>
      <ComponentWrapper>{/* <Stats /> */}</ComponentWrapper>

      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <TakeAttendanceForm
              onSubmit={handleSearchResult}
              loading={loading}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}></Grid>
        </Grid>
      </ComponentWrapper>

      <ComponentWrapper>
        <Typography variant="h5" sx={{ my: 3 }}>
          Student Attendance Record
        </Typography>
        {data ? (
          <TableEditable myData={data} myColumns={columns} />
        ) : (
          <Typography variant="body1">
            {loading ? "Searching for data..." : "No Result Found!"}
          </Typography>
        )}
      </ComponentWrapper>
    </Box>
  );
};

export default TakeAttendance;
