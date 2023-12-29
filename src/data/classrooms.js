export const classroomColumns = [
  {
    accessorKey: "id", //access nested data with dot notation
    header: "Id",
    size: 50,
  },
  {
    accessorKey: "title", //access nested data with dot notation
    header: "Title",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "stream",
    header: "Stream",
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
  },
];

export const editClassroomColumn = [
  {
    field: "id",
    headerName: "Id",
    width: 100,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 350,
    align: "left",
    editable: true,
    type: "singleSelect",
    valueOptions: [
      "JUNIOR SECONDARY SCHOOL 1",
      "JUNIOR SECONDARY SCHOOL 2",
      "JUNIOR SECONDARY SCHOOL 3",
      "SENIOR SECONDARY SCHOOL 1",
      "SENIOR SECONDARY SCHOOL 2",
      "SENIOR SECONDARY SCHOOL 3",
    ],
  },
  {
    field: "code",
    headerName: "Code",
    width: 130,
    editable: true,
    type: "singleSelect",
    valueOptions: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
  },
  {
    field: "capacity",
    headerName: "Capacity",
    width: 130,
    editable: true,
    align: "left",
    type: "number",
  },
  {
    field: "stream",
    headerName: "Stream",
    width: 180,
    editable: true,
  },
];

export const classrooms = [
  {
    id: 1,
    title: "JUNIOR SECONDARY SCHOOL 1",
    code: "JSS 1",
    capacity: 100,
    stream: "B",
  },
  {
    id: 8,
    title: "JUNIOR SECONDARY SCHOOL 3",
    code: "JSS 3",
    capacity: 150,
    stream: "A",
  },
];
