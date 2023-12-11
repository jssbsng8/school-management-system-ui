import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandshake, FaShare } from "react-icons/fa";
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

export const studentLinks = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "/",
  },
  {
    name: "Activities",
    icon: <FiShoppingBag />,
    subLinks: [
      {
        name: "Teachers",
        url: "/teachers",
      },
      {
        name: "Registered Subjects",
        url: "/subjects",
      },
      {
        name: "Class Mates",
        url: "/classmates",
      },
    ],
  },
  {
    name: "Class Timetable",
    icon: <FiUsers />,
    url: "/timetable",
  },
  {
    name: "Examination",
    icon: <BsCurrencyDollar />,
    subLinks: [
      {
        name: "Exam Schedules",
        url: "/sales/analysis",
      },
      {
        name: "Exam Results",
        url: "/sales",
      },
    ],
  },
  {
    name: "Attendance",
    icon: <FaShare />,
    url: "/suppliers",
  },
  {
    name: "Results",
    icon: <FaHandshake />,
    url: "/transactions",
  },
  {
    name: "Notifications",
    icon: <FiLayers />,
    url: "/brands",
  },
  {
    name: "Reviews",
    icon: <FiMessageCircle />,
    subLinks: [
      {
        name: "Teachers Review",
        url: "/reviews",
      },
      {
        name: "Student Review",
        url: "/products",
      },
    ],
  },
  {
    name: "Documentation",
    icon: <FiShoppingCart />,
    subLinks: [
      {
        name: "Registration Information",
        url: "/orders",
      },
      {
        name: "Fees Breakdown",
        url: "/orders/template",
      },
    ],
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    url: "/settings",
  },
  {
    name: "Inbox",
    icon: <FiMail />,
    url: "/inbox",
  },
];

export const teacherLinks = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "/",
  },
  {
    name: "Activities",
    icon: <FiShoppingBag />,
    subLinks: [
      {
        name: "Students",
        url: "/products",
      },
      {
        name: "Subjects Taken",
        url: "/products/add",
      },
      {
        name: "Class Rooms",
        url: "/products/categories",
      },
    ],
  },
  {
    name: "Class Timetable",
    icon: <FiUsers />,
    url: "/customers",
  },
  {
    name: "Examination",
    icon: <BsCurrencyDollar />,
    subLinks: [
      {
        name: "Exam Schedules",
        url: "/sales/analysis",
      },
      {
        name: "Exam Results",
        url: "/sales",
      },
    ],
  },
  {
    name: "Attendance",
    icon: <FaShare />,
    url: "/suppliers",
    subLinks: [
      {
        name: "Take Attendance",
        url: "/products",
      },
      {
        name: "Attendance Record",
        url: "/products",
      },
    ],
  },
  {
    name: "Results",
    icon: <FaHandshake />,
    url: "/transactions",
  },
  {
    name: "Notifications",
    icon: <FiLayers />,
    url: "/brands",
  },
  {
    name: "Reviews",
    icon: <FiMessageCircle />,
    subLinks: [
      {
        name: "Teachers Review",
        url: "/reviews",
      },
      {
        name: "Student Review",
        url: "/reviews",
      },
    ],
  },
  {
    name: "Documentation",
    icon: <FiShoppingCart />,
    subLinks: [
      {
        name: "Registration Information",
        url: "/orders",
      },
      {
        name: "Fees Breakdown",
        url: "/orders/template",
      },
    ],
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    url: "/settings",
  },
  {
    name: "Inbox",
    icon: <FiMail />,
    url: "/inbox",
  },
];
