import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const SubjectsSelectionComponent = ({
  options,
  label,
  placeholder,
  onSelectionChange,
  assigned_subjects,
}) => {
  const [subjects, setSubjects] = useState(assigned_subjects);
  const handleChange = (event, newValue) => {
    const selectedIds = newValue.map((item) => item.id);
    onSelectionChange(selectedIds);
    setSubjects(selectedIds);
  };

  
  return (
    <Box>
      {subjects && subjects.length > 0 ? (
        <Box sx={{ mb: 1, color: "red" }}>
          <Tooltip
            title="Selected subjects will be assigned to the teacher"
            placement="top"
          >
            <Typography variant="subtitle1">
              {label}
              <IconButton size="small">
                <InfoIcon />
              </IconButton>
            </Typography>
          </Tooltip>
          <ul style={{ color: "green" }}>
            {subjects.map((subjectId) => {
              const subject = options.find((subj) => subj.id === subjectId);

              if (!subject) {
                return (
                  // <li key={subjectId}>
                  //   This subject is not registered for the selected classroom
                  // </li>
                  null
                );
              }

              return (
                <li key={subjectId}>
                  {subject.title}
                  <div style={{ display: "inline", paddingLeft: "10px" }}>
                    {`(${subject.code})`}
                  </div>
                </li>
              );
            })}
          </ul>
        </Box>
      ) : (
        <Typography variant="body1">No subjects available.</Typography>
      )}
      {options && options.length > 0 ? (
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={options}
          disableCloseOnSelect
          getOptionLabel={(option) => `${option.title} (${option.code})`}
          onChange={handleChange}
          value={subjects.map((subjectId) =>
            options.find((subject) => subject.id === subjectId)
          )}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option?.title} ({option?.year})
            </li>
          )}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={placeholder || ""}
              placeholder={placeholder || ""}
            />
          )}
        />
      ) : (
        <Typography variant="body1">
          No subjects assigned to this class yet!
        </Typography>
      )}
    </Box>
  );
};

export default SubjectsSelectionComponent;
