// MyColumns.js
export const myColumns = [
    { 
      field: 'name', 
      headerName: 'Student Name', 
      width: 200,
      editable: false,
    },
    {
      field: 'apply_date',
      headerName: 'Apply Date',
      width: 140,
      align: 'left',
      editable: false,
    },
    {
      field: 'from',
      headerName: 'From',
      width: 140,
      editable: false,
    },
    {
      field: 'to',
      headerName: 'To',
      width: 140,
      editable: false,
    },
    {
        field: 'reason',
        headerName: 'Reason',
        width: 180,
        editable: false,
      },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Approved', 'Pending', 'Rejected'],
      align: 'left',
      headerAlign: 'left',
      renderCell: (params) => {
        const cellValue = params.value;
        let cellColor = '';
    
        if (cellValue === 'Rejected') {
          cellColor = 'red';
        }
        else if (cellValue === 'Approved'){
            cellColor = 'green'
        }
        else if (cellValue === 'Pending'){
            cellColor = '#ff9966'
        }
    
        return <div style={{ color: cellColor }}>{cellValue}</div>;
    },
    },
  ];
  
  // MyData.js
  export const myData = [
    {
      id: 1,
      name: "John Smith",
      apply_date: "2023-04-22",
      from: "2023-04-15",
      to: "2023-04-22",
      reason: "Financial Breakdown",
      status: "Approved",
    },
    {
      id: 2,
      name: "Emily Davis",
      apply_date: "2023-05-10",
      from: "2023-05-01",
      to: "2023-05-10",
      reason: "Personal Leave",
      status: "Approved",
    },
    {
      id: 3,
      name: "Michael Johnson",
      apply_date: "2023-06-05",
      from: "2023-06-01",
      to: "2023-06-05",
      reason: "Vacation",
      status: "Pending",
    },
    {
      id: 4,
      name: "Sophia Martinez",
      apply_date: "2023-07-15",
      from: "2023-07-10",
      to: "2023-07-15",
      reason: "Family Event",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Daniel Brown",
      apply_date: "2023-08-20",
      from: "2023-08-15",
      to: "2023-08-20",
      reason: "Medical Appointment",
      status: "Approved",
    },
    {
      id: 6,
      name: "Olivia Wilson",
      apply_date: "2023-09-12",
      from: "2023-09-05",
      to: "2023-09-12",
      reason: "Conference",
      status: "Pending",
    },
    {
      id: 7,
      name: "Matthew Taylor",
      apply_date: "2023-10-18",
      from: "2023-10-15",
      to: "2023-10-18",
      reason: "Training Program",
      status: "Approved",
    },
    {
      id: 8,
      name: "Ava Anderson",
      apply_date: "2023-11-25",
      from: "2023-11-20",
      to: "2023-11-25",
      reason: "Business Trip",
      status: "Rejected",
    },
    {
      id: 9,
      name: "Liam Garcia",
      apply_date: "2023-12-10",
      from: "2023-12-05",
      to: "2023-12-10",
      reason: "Holiday",
      status: "Pending",
    },
    {
      id: 10,
      name: "Emma Moore",
      apply_date: "2024-01-15",
      from: "2024-01-10",
      to: "2024-01-15",
      reason: "Project Deadline",
      status: "Approved",
    },
    {
      id: 11,
      name: "Noah Clark",
      apply_date: "2024-02-22",
      from: "2024-02-15",
      to: "2024-02-22",
      reason: "Emergency",
      status: "Pending",
    },
    {
      id: 12,
      name: "Isabella Baker",
      apply_date: "2024-03-28",
      from: "2024-03-25",
      to: "2024-03-28",
      reason: "Training Workshop",
      status: "Approved",
    },
    {
      id: 13,
      name: "James Reed",
      apply_date: "2024-04-10",
      from: "2024-04-05",
      to: "2024-04-10",
      reason: "Personal Development",
      status: "Rejected",
    },
    {
      id: 14,
      name: "Aria Phillips",
      apply_date: "2024-05-15",
      from: "2024-05-10",
      to: "2024-05-15",
      reason: "Sick Leave",
      status: "Approved",
    },
    {
      id: 15,
      name: "Ethan Turner",
      apply_date: "2024-06-22",
      from: "2024-06-15",
      to: "2024-06-22",
      reason: "Family Vacation",
      status: "Pending",
    },
];
  