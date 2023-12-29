import { randomTraderName, randomId } from "@mui/x-data-grid-generator";

export const viewAttendanceColumn = [
  {
    accessorKey: "id",
    header: "Id",
    size: 50,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "registration_number",
    header: "Reg No.",
  },
  {
    accessorKey: "attendance",
    header: "Status",
    Cell: ({ cell, row }) => (
      <div>
        {row.original.attendance === "PRESENT" && (
          <span
            className="status"
            style={{ color: "#388b84", backgroundColor: "#388b8433" }}
          >
            {cell.getValue()}
          </span>
        )}
        {row.original.attendance === "ABSENT" && (
          <span
            className="status"
            style={{ color: "#fd4332", backgroundColor: "#fd433233" }}
          >
            {cell.getValue()}
          </span>
        )}
        {row.original.attendance === "LATE" && (
          <span
            className="status"
            style={{ color: "#ff9966", backgroundColor: "#ff996633" }}
          >
            {cell.getValue()}
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "time",
    header: "Time",
  },
];

export const viewAttendanceData = [
  {
    id: 1,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 2,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 3,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 4,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 5,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 6,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 7,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 8,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 9,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
  {
    id: 10,
    name: randomTraderName(),
    registration_number: randomId().slice(0, 8),
    attendance: "ABSENT",
    time: new Date().toLocaleTimeString(),
  },
];
