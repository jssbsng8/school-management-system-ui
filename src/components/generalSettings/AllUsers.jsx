import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Switch,
  Dialog,
  Box,
  Paper,
  Toolbar,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { column } from "../../data/allUsers";
import { USER_ENDPOINTS } from "../../apiCalls/endpoints";
import { getFetchedData } from "../../apiCalls/authApi";

const DataTable = () => {
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const fetchedData = await getFetchedData(USER_ENDPOINTS.USER);
        if (fetchedData) {
          setRows(fetchedData);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchStudentData();
    // eslint-disable-next-line
  }, []);

  const [confirmationDialog, setConfirmationDialog] = React.useState({
    open: false,
    action: null,
    rowIndex: null,
  });

  const handleSwitchChange = (id) => {
    const index = rows.findIndex((row) => row.id === id);

    if (index !== -1) {
      setConfirmationDialog({
        open: true,
        action: rows[index].is_active ? "deactivate" : "activate",
        rowIndex: index,
      });
    }
  };

  const confirmUserAction = (confirmed) => {
    if (confirmed) {
      const updatedRows = [...rows];
      const rowIndex = confirmationDialog.rowIndex;
      updatedRows[rowIndex].is_active = !updatedRows[rowIndex].is_active;
      setRows(updatedRows);
    }
    setConfirmationDialog({
      open: false,
      action: null,
      rowIndex: null,
    });
  };

  const columns = [
    ...column,
    {
      field: "is_active",
      headerName: "Active",
      width: 90,
      renderCell: (params) => (
        <Switch
          checked={params.row.is_active}
          onChange={() => handleSwitchChange(params.row.id)}
        />
      ),
    },
  ];
  
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        pb: "20px",
        mt: "80px",
      }}
    >
      <Paper sx={{ mb: 1 }}>
        <Toolbar>
          <Typography variant="h7" noWrap component="div">
            Deactivate/Activate Users
          </Typography>
        </Toolbar>
      </Paper>
      <div style={{ height: 480, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>

      <Dialog open={confirmationDialog.open}>
        <DialogTitle>
          {`Confirm user ${
            confirmationDialog.action === "activate"
              ? "Activation"
              : "Deactivation"
          }`}
        </DialogTitle>
        <DialogContent>
          {`Are you sure you want to ${
            confirmationDialog.action === "activate" ? "activate" : "deactivate"
          } this user?`}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => confirmUserAction(false)}
            sx={{ color: "red" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => confirmUserAction(true)}
            sx={{ color: "green" }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataTable;
