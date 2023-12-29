export const subjectColumns = [
  {
    accessorKey: "id",
    header: "Id",
    size: 50,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "class_room",
    header: "Class Room",
  },
];

export const subjects = [
  {
    id: 1,
    title: "English Language",
    code: "GNS",
    last_score: "72%",
  },
  {
    id: 8,
    title: "Mathematics",
    code: "MTH",
    last_score: "78%",
  },
  {
    id: 3,
    title: "Geography",
    code: "GEO",
    last_score: "50%",
  },
  {
    id: 7,
    title: "Civic Education",
    code: "CVE",
    last_score: "49%",
  },
  {
    id: 5,
    title: "History",
    code: "HST",
    last_score: "40%",
  },
  {
    id: 4,
    title: "Social Studies",
    code: "SOS",
    last_score: "40%",
  },
  {
    id: 7,
    title: "Computer Science",
    code: "CSC",
    last_score: "40%",
  },
  {
    id: 8,
    title: "Agricultural Science",
    code: "AGE",
    last_score: "40%",
  },
  {
    id: 9,
    title: "Further Mathematics",
    code: "FMTH",
    last_score: "40%",
  },
  {
    id: 10,
    title: "Geography",
    code: "GEO",
    last_score: "40%",
  },
];

export const addSubjects = [
  {
    id: 1,
    title: "ENGLISH LANGUAGE",
    code: "GNS",
    last_score: "72%",
    classroom: "JUNIOR SECONDARY SCHOOL 1"
  },
];

export const editSubjectColumn = [
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
      "ENGLISH LANGUAGE",
      "MATHEMATICS",
      "AGRICULTURAL SCIENCE",
      "BIOLOGY",
      "ECONOMICS",
      "CIVIC EDUCATION",
      "FRENCH LANGUAGE",
      "FURTHER MATHEMATICS",
      "CHEMISTRY",
    ],
  },
  {
    field: "code",
    headerName: "Code",
    width: 200,
    editable: true,
    type: "singleSelect",
    valueOptions: [
      "ENG",
      "MTH",
      "AGS",
      "BIO",
      "ECON",
      "CVE",
      "FRN",
      "FMATH",
      "CHM",
    ],
  },
  {
    field: "classroom",
    headerName: "ClassRoom",
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
];
