import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
} from '@mui/material';

const AllUsers = () => {
  // Sample data to be used in the table
  const rows = [
    { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', premiumPlan: 'No' },
    { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', premiumPlan: 'Yes' },
    { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', premiumPlan: 'Yes' },
  ];

  return (
    <TableContainer component={Paper} sx={{mt:"80px"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Registration Date</TableCell>
            <TableCell>E-mail address</TableCell>
            <TableCell>Premium Plan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Switch />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.registrationDate}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.premiumPlan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsers;