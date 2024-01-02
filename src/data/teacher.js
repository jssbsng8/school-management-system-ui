import { Avatar } from "@mui/material";

export const editTeacherColumn = [
  {
    field: "id",
    headerName: "Id",
    width: 100,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    align: "left",
    editable: true,
    type: "singleSelect",
    valueOptions: ["John Smith", "Jane Doe", "Alice Williams", "Emily Davis"],
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "address",
    headerName: "Address",
    width: 350,
    editable: true,
  },
];

export const column = [
  {
    accessorKey: "img",
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
//   {
//     accessorKey: "id",
//     header: "Id",
//     size: 50,
//   },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
];

export const teachers = [
  {
    id: 1,
    name: "John Smith",
    email: "johnsmith@example.com",
    address: "123 Main Street, New York, NY 10001",
    subject: "English Language",
    img: "/images/avatars/avatar1.png",
    assigned_subjects: [
      { title: "Mathematics", classroom: "Junior Secondary School 1" },
      { title: "English Language", classroom: "Junior Secondary School 3" },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
    address: "456 Park Avenue, New York, NY 10022",
    subject: "Mathematics",
    img: "/images/avatars/avatar2.png",
    assigned_subjects: [
      { title: "Mathematics", classroom: "Junior Secondary School 1" },
      { title: "English Language", classroom: "Junior Secondary School 3" },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Broadway, New York, NY 10011",
    subject: "Geography",
    img: "/images/avatars/avatar3.png",
    assigned_subjects: [
      { title: "Mathematics", classroom: "Junior Secondary School 1" },
      { title: "English Language", classroom: "Junior Secondary School 3" },
    ],
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alicewilliams@example.com",
    address: "321 5th Avenue, New York, NY 10016",
    subject: "Economics",
    img: "/images/avatars/avatar4.png",
    assigned_subjects: [
      { title: "Mathematics", classroom: "Junior Secondary School 1" },
      { title: "English Language", classroom: "Junior Secondary School 3" },
    ],
  },
];
