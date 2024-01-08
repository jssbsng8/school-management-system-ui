// import React, { useState } from 'react';
// import {
//   Table,
//   Box,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Switch,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Toolbar,
//   Typography,
// } from '@mui/material';

// const AllUsers = () => {
//   const initialUsers = [
//     { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', isActive: true },
//     { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', isActive: true },
//     { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', isActive: true },
//   ];

//   const [users, setUsers] = useState(initialUsers);
//   const [confirmationDialog, setConfirmationDialog] = useState({
//     open: false,
//     action: null,
//     userIndex: null,
//   });

//   const handleSwitchChange = (index) => {
//     setConfirmationDialog({
//       open: true,
//       action: users[index].isActive ? 'deactivate' : 'activate',
//       userIndex: index,
//     });
//   };

//   const confirmUserAction = (confirmed) => {
//     if (confirmed) {
//       const updatedUsers = [...users];
//       const userIndex = confirmationDialog.userIndex;
//       updatedUsers[userIndex].isActive = !updatedUsers[userIndex].isActive;
//       setUsers(updatedUsers);
//     }
//     setConfirmationDialog({
//       open: false,
//       action: null,
//       userIndex: null,
//     });
//   };

//   return (
//     <Box
//       component="main"
//       sx={{ flexGrow: 1, bgcolor: "background.default", pb: "20px", mt: "80px"}}
//     >
//       <Paper sx={{ mb: 1 }}>
//         <Toolbar>
//           <Typography variant="h7" noWrap component="div">
//             Deactivate/Activate Users
//           </Typography>
//         </Toolbar>
//       </Paper>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Registration Date</TableCell>
//               <TableCell>E-mail address</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>
//                   <Switch
//                     checked={row.isActive}
//                     onChange={() => handleSwitchChange(index)}
//                   />
//                 </TableCell>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell>{row.registrationDate}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Dialog open={confirmationDialog.open}>
//         <DialogTitle>
//           {`Confirm user ${confirmationDialog.action === 'activate' ? 'Activation' : 'Deactivation'}`}
//         </DialogTitle>
//         <DialogContent>
//           {`Are you sure you want to ${confirmationDialog.action === 'activate' ? 'activate' : 'deactivate'} this user?`}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => confirmUserAction(false)} sx={{ color: 'red' }}>
//             Cancel
//           </Button>
//           <Button onClick={() => confirmUserAction(true)} sx={{ color: 'green' }}>
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default AllUsers;

// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Switch,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TablePagination,
// } from '@mui/material';

// const AllUsers = () => {
//   const initialUsers = [
//     { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', isActive: true },
//     { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', isActive: true },
//     { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', isActive: true },
//     { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', isActive: true },
//     { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', isActive: true },
//     { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', isActive: true },
//     // ... add more users as needed
//   ];

//   const [users, setUsers] = useState(initialUsers);
//   const [confirmationDialog, setConfirmationDialog] = useState({
//     open: false,
//     action: null,
//     userIndex: null,
//   });
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleSwitchChange = (index) => {
//     setConfirmationDialog({
//       open: true,
//       action: users[index].isActive ? 'deactivate' : 'activate',
//       userIndex: index,
//     });
//   };

//   const confirmUserAction = (confirmed) => {
//     if (confirmed) {
//       const updatedUsers = [...users];
//       const userIndex = confirmationDialog.userIndex;
//       updatedUsers[userIndex].isActive = !updatedUsers[userIndex].isActive;
//       setUsers(updatedUsers);
//     }
//     setConfirmationDialog({
//       open: false,
//       action: null,
//       userIndex: null,
//     });
//   };

//   return (
//     <>
//       <TableContainer component={Paper} sx={{ mt: "80px" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Registration Date</TableCell>
//               <TableCell>E-mail address</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {(rowsPerPage > 0
//               ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               : users
//             ).map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>
//                   <Switch
//                     checked={row.isActive}
//                     onChange={() => handleSwitchChange(index)}
//                   />
//                 </TableCell>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell>{row.registrationDate}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//         component="div"
//         count={users.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />

//       <Dialog open={confirmationDialog.open}>
//         <DialogTitle>
//           {`Confirm user ${confirmationDialog.action === 'activate' ? 'Activation' : 'Deactivation'}`}
//         </DialogTitle>
//         <DialogContent>
//           {`Are you sure you want to ${confirmationDialog.action === 'activate' ? 'activate' : 'deactivate'} this user?`}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => confirmUserAction(false)} sx={{ color: 'red' }}>
//             Cancel
//           </Button>
//           <Button onClick={() => confirmUserAction(true)} sx={{ color: 'green' }}>
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default AllUsers;

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
import {column} from "../../data/allUsers"
import { USER_ENDPOINTS } from "../../apiCalls/endpoints";
import { getFetchedData } from "../../apiCalls/authApi";

const DataTable = () => {
  const [rows, setRows] = React.useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const fetchedData = await getFetchedData(USER_ENDPOINTS.USER);
        if(fetchedData){
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

  const handleSwitchChange = (index) => {
    setConfirmationDialog({
      open: true,
      action: rows[index].isActive ? "deactivate" : "activate",
      rowIndex: index,
    });
  };

  const confirmUserAction = (confirmed) => {
    if (confirmed) {
      const updatedRows = [...rows];
      const rowIndex = confirmationDialog.rowIndex;
      updatedRows[rowIndex].isActive = !updatedRows[rowIndex].isActive;
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
          onChange={() => handleSwitchChange(params.row.id - 1)}
        />
      ),
    },
  ]

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
