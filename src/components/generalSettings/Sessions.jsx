import React from "react";
import { Box, Typography, Paper, Toolbar } from "@mui/material";
import TableEditable from "../TableEditable";
import { session, sessionColumn } from "../../data/session";

const Sessions = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", pb: "20px" }}
    >
      <Paper sx={{mb:1}}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Add/Edit Session
          </Typography>
        </Toolbar>
      </Paper>
      {session ? (
        <TableEditable
          myData={session}
          myColumns={sessionColumn}
          enableSubmitButton={true}
          enableAddNewRow={true}
          Decision={"John Cena"}
        />
      ) : (
        <Typography variant="h6">No Available Session(s)</Typography>
      )}
    </Box>
  );
};

export default Sessions;
