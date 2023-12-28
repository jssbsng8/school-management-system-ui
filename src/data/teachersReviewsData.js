import { Rating } from "@mui/material";
import { Avatar } from "@mui/material";
export const teachersReviewColumn = [
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
    header: "Name",
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "rating", //normal accessorKey
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

export const teachersReviewData = [
  {
    id: 1,
    name: "John Smith",
    subject: "English Language",
    email: "johnsmith@example.com",
    rating: 4.5,
    img: "/images/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    subject: "Mathematics",
    email: "janedoe@example.com",
    rating: 3.6,
    img: "/images/avatars/avatar2.png",
  },
  {
    id: 3,
    name: "Bob Johnson",
    subject: "Geography",
    email: "bobjohnson@example.com",
    rating: 2.8,
    img: "/images/avatars/avatar3.png",
  },
  {
    id: 4,
    name: "Alice Williams",
    subject: "Economics",
    email: "alicewilliams@example.com",
    rating: 4.0,
    img: "/images/avatars/avatar4.png",
  },
];
