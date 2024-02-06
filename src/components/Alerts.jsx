import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const Alerts = ({ type, title, subtitle, cancelButton }) => {
  return (
    <React.Fragment>
      <Alert
        severity={type}
        variant="outlined"
        sx={{ mt: "80px", mb: "-65px" }}
      >
        <AlertTitle>{title}</AlertTitle>
        {subtitle}
      </Alert>
    </React.Fragment>
  );
};

export default Alerts;
