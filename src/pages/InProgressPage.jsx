// ComingSoonPage.js
import React from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";

const InProgressPage = ({ pageName }) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {pageName} Coming Soon!
        </Typography>
        <CircularProgress color="secondary" size={50} />
        <Typography variant="body1" mt={2}>
          We are working on something awesome. Stay tuned!
        </Typography>
      </Box>
    </Container>
  );
};

export default InProgressPage;
