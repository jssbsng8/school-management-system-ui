import {
    randomTraderName,
    randomId
  } from '@mui/x-data-grid-generator';

export const columns = [
    { 
        field: 'name', 
        headerName: 'Name', 
        width: 300, 
        editable: false 
    },
    {
        field: 'registration_number',
        headerName: 'Registration Number',
        editable: false,
        width: 250,
        align: 'left',
        headerAlign: 'left',
    },
    {
        field: 'attendance',
        headerName: 'Attendance',
        type: 'singleSelect',
        width: 200,
        align: 'left',
        valueOptions: ['PRESENT', 'ABSENT', 'LATE', 'HOLIDAY', 'LEAVE'],
        editable: true,
    },
    {
        field: 'time',
        headerName: 'Time',
        editable: false,
        width: 200,
        align: 'left',
        headerAlign: 'left',
    },
  ];
  
  export const rows = [
    {
        id: 1,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 2,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 3,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 4,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 5,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 6,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 7,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 8,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 9,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
    {
        id: 10,
        name: randomTraderName(),
        registration_number: randomId().slice(0,8),
        attendance: "ABSENT",
        time: new Date().toLocaleTimeString(), 
    },
];