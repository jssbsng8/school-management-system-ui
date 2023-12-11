import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "../components/Table";

import { classmates, classmateColumns } from "../data/classmates";

const Classmates = () => {
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
        <Typography variant="h6">Class Mates</Typography>
      </Box>
      <Table
        data={classmates}
        fields={classmateColumns}
        numberOfRows={classmates.length}
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
    </Box>
  );
};

export default Classmates;
