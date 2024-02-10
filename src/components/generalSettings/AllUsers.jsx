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
import requestHandler from "../../apiCalls/requestHandler";
import { successToast } from "../utils/toastUtils";
import LoadingButton from "@mui/lab/LoadingButton";
import { ActionsDropdown } from "../utils/actionDropDownAllUsers";
import { useUser } from "../utils/userContext";

const DataTable = () => {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { userStatus } = useUser();
  const [confirmationDialog, setConfirmationDialog] = React.useState({
    open: false,
    action: null,
    rowIndex: null,
  });
  const [actions, setActions] = React.useState({
    approved: false,
    madeSuperAdmin: false,
    activate: false,
    deactivate: false,
    suspend: false,
    delete: false,
    resendActivation: false,
  });


  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const fetchedData = await requestHandler("get", USER_ENDPOINTS.USER);
        if (fetchedData[0] !== null) {
          setRows(fetchedData[0]);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchStudentData();
  }, [actions]);

  const handleSwitchChange = (id) => {
    const index = rows.findIndex((row) => row.id === id);

    if (index !== -1) {
      setConfirmationDialog({
        open: true,
        action: rows[index].is_active ? "deactivate" : "activate",
        rowIndex: index,
        confirmationMessage: `Are you sure you want to ${
          rows[index].is_active ? "deactivate" : "activate"
        } this user?`,
      });
    }
  };

  const handleActionSelect = (action, id) => {
    let confirmationMessage = "";

    switch (action) {
      case "resendActivation":
        confirmationMessage =
          "Are you sure you want to resend activation link?";
        break;
      case "deleteUser":
        confirmationMessage =
          "Are you sure you want to delete this user permanently?";
        break;
      case "makeSuperAdmin":
        confirmationMessage =
          "Are you sure you want to make this user a Super Admin?";
        break;
      case "suspension":
        confirmationMessage =
          "Are you sure you want to suspend this user's Account?";
        break;
      default:
        break;
    }

    setConfirmationDialog({
      open: true,
      action,
      rowIndex: rows.findIndex((row) => row.id === id),
      confirmationMessage,
    });
  };

  const confirmUserAction = async (confirmed) => {
    if (confirmed) {
      const updatedRows = [...rows];
      const rowIndex = confirmationDialog.rowIndex;
      // Handle the logic based on the selected action
      if (confirmationDialog.action === "resendActivation") {
        setLoading(true);
        const userEmail = rows[rowIndex].email;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Implement the logic to resend activation link
        successToast(`Activation Link Sent to ${userEmail}`);
        console.log(
          `Resend activation link for user with ID ${rows[rowIndex].id}`
        );
        setActions(prevState => ({
          ...prevState,
          resendActivation: true,
        }))
        setLoading(false);
      } else if (confirmationDialog.action === "deleteUser") {
        setLoading(true);
        const username = rows[rowIndex].username;
        await new Promise((resolve) => setTimeout(resolve, 3000));

        successToast(`Deleted user permanently with username ${username}`);
        // Implement the logic to delete user permanently
        console.log(`Delete user permanently with ID ${rows[rowIndex].id}`);
        setLoading(false);
      } else if (confirmationDialog.action === "makeSuperAdmin") {
        setLoading(true);
        const username = rows[rowIndex].username;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Implement the logic to make super admin
        successToast(`Made user with username ${username} a Super Admin`);

        console.log(`Make user with ID ${rows[rowIndex].id} a Super Admin`);
        setLoading(false);
      } else if (confirmationDialog.action === "approveUser") {
        setLoading(true);
        const username = rows[rowIndex].username;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Implement the logic to approve user
        successToast(`${username} account has been approved`);

        console.log(`Approved user with ID ${rows[rowIndex].id}`);
        setActions(prevState => ({
          ...prevState,
           approved: true,
        }))
        setLoading(false);
      } else if (confirmationDialog.action === "suspension") {
        setLoading(true);
        const username = rows[rowIndex].username;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // Implement the logic to resend activation link
        successToast(`${username} account has been suspended`);
        // Implement the logic to make the user a super admin
        console.log(`Suspended user with ID ${rows[rowIndex].id}`);
        setActions(prevState => ({
          ...prevState,
          suspension: true,
        }))
        setLoading(false);
      } else if (
        confirmationDialog.action === "activate" ||
        confirmationDialog.action === "deactivate"
      ) {
        updatedRows[rowIndex].is_active = !updatedRows[rowIndex].is_active;
        setRows(updatedRows);
      }
    }
    setConfirmationDialog({
      open: false,
      action: null,
      rowIndex: null,
      confirmationMessage: "",
    });
    setActions({
      approved: false,
      madeSuperAdmin: false,
      activate: false,
      deactivate: false,
      suspend: false,
      delete: false,
      resendActivation: false,
    })
  };

  const columns = [
    ...column,
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <ActionsDropdown
          id={params.row.id}
          onActionSelect={handleActionSelect}
          rows={rows}
        />
      ),
    },
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
          {(() => {
            switch (confirmationDialog.action) {
              case "activate":
                return "Confirm User Activation";
              case "deactivate":
                return "Confirm User Deactivation";
              case "resendActivation":
                return "Confirm Resending Activation Link";
              case "deleteUser":
                return "Confirm Permanently Deleting User";
              case "makeSuperAdmin":
                return "Confirm Making User SuperAdmin";
              case "approveUser":
                return "Confirm Approving User";
              case "suspension":
                return "Confirm User Account Suspension";
              default:
                return "Confirm User Action";
            }
          })()}
        </DialogTitle>
        <DialogContent>
          {(() => {
            switch (confirmationDialog.action) {
              case "activate":
                return "Are you sure you want to activate this user?";
              case "deactivate":
                return "Are you sure you want to deactivate this user?";
              case "resendActivation":
                return "Are you sure you want to resend the activation link?";
              case "deleteUser":
                return "Are you sure you want to delete this user permanently?";
              case "makeSuperAdmin":
                return "Are you sure you want to make this User SuperAdmin";
              case "approveUser":
                return "Are you sure you want to approve this user profile";
              case "suspension":
                return "Are you sure you want to Suspend this User's Account";
              default:
                return "Are you sure you want to perform this action?";
            }
          })()}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => confirmUserAction(false)}
            sx={{ color: "red" }}
          >
            Cancel
          </Button>
          <LoadingButton
            loading={loading}
            onClick={() => confirmUserAction(true)}
            sx={{ color: "green" }}
            disabled={!userStatus.isApproved}
          >
            {loading ? "Please Wait..." : "Confirm"}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataTable;
