// eslint-disable-next-line
import { randomCreatedDate } from "@mui/x-data-grid-generator";

export const leaveColumn = [
  {
    field: "name",
    headerName: "Name",
    width: 180,
    editable: true,
  },
  {
    field: "apply_date",
    headerName: "Apply Date",
    // type: "date",
    width: 130,
    align: "left",
    editable: false,
  },
  {
    field: "from",
    headerName: "From",
    width: 130,
    editable: true,
    type: "date",
  },
  {
    field: "to",
    headerName: "To",
    width: 130,
    editable: true,
    type: "date",
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 180,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    editable: false,
    type: "singleSelect",
    valueOptions: ["Approved", "Pending", "Rejected"],
    align: "left",
    headerAlign: "left",
    renderCell: (params) => {
      const cellValue = params.value;
      let cellColor = "";

      if (cellValue === "Rejected") {
        cellColor = "red";
      } else if (cellValue === "Approved") {
        cellColor = "green";
      } else if (cellValue === "Pending") {
        cellColor = "#ff9966";
      }

      return <div style={{ color: cellColor }}>{cellValue}</div>;
    },
  },
  {
    field: "approved_by",
    headerName: "Approved By",
    width: 160,
    editable: false,
  },
];

// MyData.js
export const leaveData = [
  // {
  //   id: 1,
  //   name: "John Smith",
  //   apply_date: "2023-04-22",
  //   from: randomCreatedDate(),
  //   to: randomCreatedDate(),
  //   reason: "Financial Breakdown",
  //   status: "Pending",
  //   approved_by: "",
  // },
];
