import { Avatar } from "@mui/material";
import { Rating } from "@mui/material";

export const teachersColumns = [
  {
    accessorKey: "id",
    header: "Id",
    size: 50,
  },
  {
    accessorKey: "img", //access nested data with dot notation
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    accessorKey: "name", //access nested data with dot notation
    header: "Teacher Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address", //normal accessorKey
    header: "Address",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    Cell: ({ cell, row }) => (
      <Rating
        name="half-rating"
        defaultValue={cell.getValue()}
        precision={0.5}
        readOnly
      />
    ),
  },
];

export const studentColumns = [
  {
    accessorKey: "id",
    header: "Id",
    size: 50,
  },
  {
    accessorKey: "img", //access nested data with dot notation
    header: "Image",
    size: 100,
    Cell: ({ cell }) => (
      <div>
        <Avatar src={cell.getValue()} sx={{ width: 30, height: 30 }} />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Student Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "class",
    header: "Class",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    Cell: ({ cell, row }) => (
      <Rating
        name="half-rating"
        defaultValue={cell.getValue()}
        precision={0.5}
        readOnly
      />
    ),
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
      { title: 'Mathematics', classroom: 'Junior Secondary School 1' },
      { title: 'English Language', classroom: 'Junior Secondary School 3' },
    ],
    rating: 3.3,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
    address: "456 Park Avenue, New York, NY 10022",
    subject: "Mathematics",
    img: "/images/avatars/avatar2.png",
    assigned_subjects: [
      { title: 'Mathematics', classroom: 'Junior Secondary School 1' },
      { title: 'English Language', classroom: 'Junior Secondary School 3' },
    ],
    rating: 4.0,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    address: "789 Broadway, New York, NY 10011",
    subject: "Geography",
    img: "/images/avatars/avatar3.png",
    assigned_subjects: [
      { title: 'Mathematics', classroom: 'Junior Secondary School 1' },
      { title: 'English Language', classroom: 'Junior Secondary School 3' },
    ],
    rating: 4.8,
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alicewilliams@example.com",
    address: "321 5th Avenue, New York, NY 10016",
    subject: "Economics",
    img: "/images/avatars/avatar4.png",
    assigned_subjects: [
      { title: 'Mathematics', classroom: 'Junior Secondary School 1' },
      { title: 'English Language', classroom: 'Junior Secondary School 3' },
    ],
    rating: 3.8,
  },
];

export const students = [
  {
    id: 1,
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    address: "567 Oak Street, New York, NY 10005",
    class: "JSS 3",
    img: "/images/avatars/avatar5.png",
    rating: 3.6,
  },
  {
    id: 2,
    name: "Emily Davis",
    email: "emilydavis@example.com",
    address: "890 Elm Avenue, New York, NY 10018",
    class: "JSS 1",
    img: "/images/avatars/avatar6.png",
    rating: 3.6,
  },
  {
    id: 3,
    name: "Chris Miller",
    email: "chrismiller@example.com",
    address: "234 Birch Lane, New York, NY 10009",
    class: "JSS 1",
    img: "/images/avatars/avatar7.png",
    rating: 3.6,
  },
  {
    id: 4,
    name: "Sophia Robinson",
    email: "sophiarobinson@example.com",
    address: "876 Pine Road, New York, NY 10014",
    class: "JSS 2",
    img: "/images/avatars/avatar8.png",
    rating: 3.6,
  },
];

export const users = [
  {
    id: 1,
    name: "John Doe",
    profileImage: "/images/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    profileImage: "/images/avatars/avatar2.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    profileImage: "/images/avatars/avatar3.png",
  },
  {
    id: 4,
    name: "Bob Williams",
    profileImage: "/images/avatars/avatar4.png",
  },
  {
    id: 5,
    name: "Eva Davis",
    profileImage: "/images/avatars/avatar5.png",
  },
  {
    id: 6,
    name: "Michael Brown",
    profileImage: "/images/avatars/avatar6.png",
  },
];
