import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { teachersReviewData, teachersReviewColumn } from "../data/teachersReviewsData";

const TeachersReviews = () => {
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
        <Typography variant="h6">Products</Typography>
        <Link to="/review_teacher" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FiPlus />}
            sx={{ borderRadius: "20px" }}
          >
            Add Review
          </Button>
        </Link>
      </Box>
      <Table
        data={teachersReviewData}
        fields={teachersReviewColumn}
        numberOfRows={teachersReviewData.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={false}
        enableColumnFilters={true}
        enableEditing={true}
        enableColumnDragging={true}
        showPreview={false}
        routeLink=""
      />
    </Box>
  );
};

export default TeachersReviews;
