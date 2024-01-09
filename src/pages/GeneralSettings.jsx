
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Classrooms from "../components/generalSettings/Classrooms";
import Sessions from "../components/generalSettings/Sessions";
import Subjects from "../components/generalSettings/Subjects";
import Teachers from "../components/generalSettings/Teachers";
import Students from "../components/generalSettings/Students";
import SubjectsSelectionComponent from "../components/generalSettings/SubjectSelection";

const GeneralSettings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTabPanel = (index, component) => (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box sx={{ pt: 1 }}>{component}</Box>}
    </Typography>
  );

  return (
    <Box sx={{ display: "flex", pt: "80px", gap: 1, pb: "20px" }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: 0,
        }}
      >
        <Paper sx={{ display: "flex" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Classrooms" />
            <Tab label="Subjects" />
            <Tab label="Teachers" />
            <Tab label="Students" />
            <Tab label="Parents" />
            <Tab label="Sessions" />
            <Tab label="Exam Type" />
          </Tabs>
        </Paper>

        {renderTabPanel(0, <Classrooms />)}
        {renderTabPanel(1, <Subjects />)}
        {renderTabPanel(2, <Teachers />)}
        {renderTabPanel(3, <Students />)}
        {/* {renderTabPanel(4, <Parent />)} */}
        {/* {renderTabPanel(4, <SubjectsSelectionComponent />)} */}
        {renderTabPanel(5, <Sessions />)}
      </Box>
    </Box>
  );
};

export default GeneralSettings;
